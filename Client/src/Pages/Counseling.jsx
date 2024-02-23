import AllCards from '../components/AllCards'
import Cards from '../components/BestCards'
import { avatar } from '../data/Data'
import { premium } from '../data/Data'
import Nav from '../sections/Nav'

const Counseling = () => {
  return (
    <div>
      <Nav />
      <div className=" flex justify-center items-center pt-20">
        <form className="  border rounded-full  w-[400px] flex justify-center items-center justify-between p-3">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            className="transparent-border focus:outline-none"
          />
          <button type="submit" className="">
            <img src="/assets/icons/search.png" alt="search" width={30} />
          </button>
        </form>
      </div>
      <div>
        <h1 className=" text-4xl p-20">
          <b>Best Ratings</b>
        </h1>
        <div className=" grid grid-cols-7 overflow-x-auto  gap-96 justify-center items-center">
          {avatar.map((person) => (
            <Cards key={person.name} {...person} />
          ))}
        </div>
        <div className=" pt-6">
          <h1 className=' className=" text-4xl p-20 "'>
            <b>All</b>
          </h1>
          <div className=" grid grid-cols-5 bg-blue-100  w-full p-10">
            {premium.map((prem) => (
              <AllCards key={prem.name} {...prem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counseling
