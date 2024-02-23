import CardButton from './CardButton'
import { Link } from 'react-router-dom'

const Cards = ({ imgURL, name, degree, description }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 border w-[300px] h-auto rounded-lg">
      <div className="flex flex-col justify-center items-center gap-3 bg-purple-300 w-full p-5 rounded-lg">
        <img src={imgURL} alt={name} width={70} height={70} />
        <div className=" flex gap-3 justify-center items-center">
          <img src={'assets/icons/star.svg'} alt="star" />
          <p>(4.5)</p>
        </div>

        <div className=" ">
          <p className=" text-xl font-bold text-center">{name}</p>
          <p className=" text-coral-red text-center">{degree}</p>
        </div>
        <div className=" flex gap-10">
          <img
            src="/assets/icons/facebook.svg"
            alt="facebook"
            width={30}
            height={30}
          />
          <img
            src="/assets/icons/linkedin-svgrepo-com.svg"
            alt="linkedin"
            width={30}
            height={30}
          />
          <img
            src="/assets/icons/twitter.svg"
            alt="twitter"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className=" p-3 flex flex-col gap-2">
        <h1 className=" text-sm w-full  ">{description}</h1>
        <Link to="/ViewProfile">
          <CardButton />
        </Link>
      </div>
    </div>
  )
}

export default Cards
