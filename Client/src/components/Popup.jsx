import { Link } from 'react-router-dom'

const Popup = (props) => {
  return props.trigger ? (
    <div className=" popup">
      <div className="popup-inner">
        <button className=" close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        <div className=" flex flex-col gap-4">
          <h1 className=" text-xl">
            <b>Add your objective</b>
          </h1>
          <h1>write your financial goals to get recommendations .</h1>
          <form className=" flex flex-col gap-5">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className=" border rounded-full p-2"
            />
            <textarea
              name="objective"
              id="objective"
              cols="50"
              rows="5"
              className=" border rounded-lg p-2"
              placeholder="Objective 
ex : i want to do a hackathon with 13 teams for three days and insure thier food "
            ></textarea>

            <input
              type="text"
              name="budget"
              id="budget"
              placeholder=" budget"
              className=" border rounded-full p-2"
            />
          </form>
          <Link to="/MyObjective">
            <button className=" bg-myblue text-white p-3 rounded-full w-full">
              Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Popup
