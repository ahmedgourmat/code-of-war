import Nav from '../sections/Nav'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <Nav />
      <div className=" flex justify-center items-center relative top-20 gap-32">
        <img src="/assets/images/img-2.png" alt="img-1" />
        <div className=" flex flex-col gap-10 w-[500px] ">
          <h1 className=" text-6xl relative bottom-14">
            <b>Register</b>
          </h1>
          <div className=" flex flex-col  justify-start gap-6 ">
            <div className=" flex flex-col gap-5">
              <label for="uname">
                <b>Username *</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className=" w-full p-3 inline-block border rounded-full"
                name="uname"
                required
              ></input>
            </div>
            <div className=" flex flex-col gap-5">
              <label for="email">
                <b>Email *</b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className=" w-full p-3 inline-block border rounded-full"
                name="uname"
                required
              ></input>
            </div>
            <div className=" flex flex-col gap-5">
              <label for="psw">
                <b>Password *</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                className=" w-full p-3 inline-block border rounded-full"
                required
              ></input>
            </div>
            <div className=" relative top-16">
              <button
                type="submit"
                className=" bg-myblue text-white rounded-full h-10 p-1 w-full "
              >
                Login
              </button>
              <h1 className=" text-center">
                Already have an account?{' '}
                <span className=" text-lightBlue underline cursor-pointer">
                  <Link to="/Login">Log in</Link>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
