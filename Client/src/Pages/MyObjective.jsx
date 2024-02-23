import Nav from '../sections/Nav'
import { objectives } from '../data/Data'
import ObjectiveCard from '../components/ObjectiveCard'
import Popup from '../components/Popup'
import { useState } from 'react'

const MyObjective = () => {
  const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <div>
      <Nav />
      <div className=" p-20 flex flex-col gap-10">
        <div className=" flex justify-between">
          <h1 className=" font-bold text-3xl">My Objective</h1>
          <button
            onClick={() => setButtonPopup(true)}
            className=" bg-myblue text-white p-3 rounded-full  w-36 "
          >
            Add
          </button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
        </div>
        <div className=" flex gap-10">
          {objectives.map((card) => (
            <ObjectiveCard key={card.title} {...card} />
          ))}
        </div>
        <div>
          <h2>Recommendation</h2>

          <ol>
            <li>
              Allocate the majority of the budget for food and beverages,
              prioritizing cost-effective options like bulk purchasing snacks
              and drinks.
            </li>
            <li>
              Seek out free or low-cost venues such as community centers or
              coworking spaces.
            </li>
            <li>
              Allocate a portion of the budget for prizes, considering sponsored
              or donated items.
            </li>
            <li>
              Utilize free marketing channels and seek sponsorships to minimize
              promotional costs.
            </li>
            <li>
              Utilize volunteers and keep track of expenses to stay within
              budget.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default MyObjective
