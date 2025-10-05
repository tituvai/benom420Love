
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
      <div className="container">
      <div className="header">
        <h1>আপনার লাকি নম্বর</h1>
      </div>
      <div className="loveImg">
        <picture>
          <img src={imageSource} alt="lucky number" id="ludo" />
        </picture>
      </div>
      <div className="loveBtn">
        <input
          type="text"
          placeholder="আপনার নাম লিখুন"
          id="display"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button id="btn" onClick={handleLoveClick}>
          এখন ক্লিক করুন
        </button>
      </div>
    </div>
    </>
  )
}

export default App
