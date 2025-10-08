import { getDatabase, ref, set, push } from "firebase/database";
import { useState } from 'react'
import './App.css'
import titu from '/src/assets/difule.png'
import img1 from '/src/assets/1.png'
import img3 from '/src/assets/3.png'
import img4 from '/src/assets/4.png'
import img5 from '/src/assets/5.png'
import img6 from '/src/assets/6.png'
import img7 from '/src/assets/7.png'
import img8 from '/src/assets/8.png'
import img9 from '/src/assets/9.png'
import img10 from '/src/assets/10.png'

function App() {
  const images=[img1, img3, img4, img5, img6, img7, img8, img9, img10]
  const [inputText, setInputText] = useState('');
  const [imageSource, setImageSource] = useState(titu);
  const [error, setError]= useState('') 
const [textError, setTextError]= useState('')


  const handleLoveClick = () => {
  setTextError('');
  setError('');

  if (inputText.trim() === '') {
    setTextError('Enter your text');
    return;
  }

  const inputPattern = /^[\w\s]+\s*\+\s*[\w\s]+$/; 
  if (!inputPattern.test(inputText.trim())) {
    setError('Enter A Name + Name');
    return;
  }

  let selectedImage; 
  const normalizedInput = inputText.trim().toLowerCase().replace(/\s/g, '');

  if (normalizedInput === 'titu+disha' || normalizedInput === 'disha+titu') {
    selectedImage = img7; 
  } else {
    const randomNumber = Math.floor(Math.random() * images.length);
    selectedImage = images[randomNumber];
  }

  setImageSource(selectedImage);

  // ডেটা সেভ (সব ক্ষেত্রে)
  const db = getDatabase();
  const newEntryRef = push(ref(db, 'benom420'));
  set(newEntryRef, {
    inputName: inputText,
    image: selectedImage.src || selectedImage 
  }).then(() => {
    console.log('Data saved successfully!');
  }).catch((error) => {
    console.error('Error saving data:', error);
  });

  setInputText(''); 
};

  return (
    <>
      <div className="max-w-[600px] lg-w-full bg-black px-2 py-10">
      <div className="header">
        <h1 className=' text-2xl text-green-500 font-black italic text-center py-5'>Love Circle</h1>
      </div>
      <div className="loveImg">
        <picture>
          <img className='w-full' src={imageSource} alt="lucky number" id="ludo" />
        </picture>
      </div>
      <div className="text-center py-5">
        <input className='text-sm text-white bg-stone-700 p-2 w-[200px] rounded outline-0' type="text" placeholder="Enter a Name" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button className='bg-green-500 py-2 px-5 rounded ml-5 text-sm text-white ' onClick={handleLoveClick}>Submit</button>
        <p className='text-red-500 text-sm font-medium py-1'>{error}</p>
        <p className='text-red-500 text-sm font-medium py-1'>{textError}</p>
      </div>
    </div>
    </>
  )
}

export default App
