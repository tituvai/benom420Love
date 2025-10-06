
import { useState } from 'react'
import './App.css'
import titu from '/src/assets/difule.png'
import img1 from '/src/assets/1.png'
import img2 from '/src/assets/2.png'
import img3 from '/src/assets/3.png'
import img4 from '/src/assets/4.png'

function App() {
  const images=[img1, img2, img3, img4]
  const [inputText, setInputText] = useState('');
  const [imageSource, setImageSource] = useState(titu); // ডিফল্ট ইমেজ

  const handleLoveClick = () => {
    if (inputText.trim() === '') {
      alert('দয়া করে আপনার নাম লিখুন');
      return;
    }


     const inputPattern = /^[\w\s]+\s*\+\s*[\w\s]+$/; // নাম + নাম ফরম্যাট (যেমন, Titu + Disha)
    if (!inputPattern.test(inputText.trim())) {
      alert('ইনপুট ফরম্যাট ভুল! দয়া করে "নাম + নাম" ফরম্যাটে লিখুন (যেমন, Titu + Disha)');
      return;
    }

     const normalizedInput = inputText.trim().toLowerCase();
    if (normalizedInput === 'titu + disha' || normalizedInput === 'disha + titu' || normalizedInput === 'disha+titu' || normalizedInput === 'titu+disha') {
      setImageSource(img2);
    } else{
      const randomNumber = Math.floor(Math.random() * images.length);
    setImageSource(images [randomNumber]);
    setInputText(''); // ইনপুট ফিল্ড খালি করা
    }

    
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
      </div>
    </div>
    </>
  )
}

export default App
