import Nav from '../sections/Nav'
import Popup from '../components/Popup'
import { useState } from 'react'

const Recommendation = () => {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <div>
      <Nav />
      <div className=" flex flex-col p-[10%] gap-6">
        <h1 className=" text-center text-3xl relative bottom-8">
          You don't have any plans
        </h1>
        <h1 className=" text-center text-3xl ">
          <b className=" ">Put an objective and get recommendations using</b>
        </h1>
        <br />
        <span className=" text-myblue text-4xl text-center ">
          <b>AI</b>
        </span>

        <button
          onClick={() => setButtonPopup(true)}
          className=" bg-myblue text-white p-3 rounded-full relative top-6 w-40 left-[600px]"
        >
          Add objective
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      </div>
    </div>
  )
}

export default Recommendation
