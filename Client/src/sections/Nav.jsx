import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=" grid grid-cols-3 justify-center items-center border-b">
      <img
        src="/assets/images/FinWise.png"
        alt="logo"
        width={150}
        height={100}
        className=" relative top-2 left-20"
      />
      <div className=" flex gap-20">
        <Link to="/Counseling">
          <h1 className=" text-xl cursor-pointer">Counseling</h1>
        </Link>
        <Link to="/Recommendation">
          <h1 className=" text-xl">Recommendation</h1>
        </Link>

        <h1 className=" text-xl">Learning</h1>
      </div>
      <div className=" flex gap-4 ml-24 ">
        <Link to="/Login">
          <Button label="Sign in" textColor="text-black" />
        </Link>
        <Link to="/Register">
          <Button
            label="Get Started"
            background=" bg-myblue"
            textColor="text-white"
          />
        </Link>
      </div>
    </div>
  )
}

export default Nav
