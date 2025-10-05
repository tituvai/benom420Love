
import './App.css'
import Image from './components/Image'
import titu from '/src/assets/difule.png'

function App() {
  

  return (
    <>
    <div className="w-[600px] m-auto">
    <div className="mockup-phone">
    <div className="mockup-phone-camera"></div>
    <div className="mockup-phone-display text-white grid place-content-center bg-neutral-900">
      <div className="">
        <Image imgSrc={titu}/>
      </div>
      <div className="pt-10 m-auto">
        <input className='bg-stone-500 w-[200px] p-2 placeholder:text-white placeholder:italic placeholder:text-sm rounded ' type="text" placeholder='Enter A Name'/>
        <button className='px-5 py-2 ml-3 rounded bg-green-500'>Submit</button>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
