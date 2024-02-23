import Nav from '../sections/Nav'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=" w-screen">
      <Nav />
      <div className=" flex justify-center items-center relative top-20 gap-32">
        <div className=" flex flex-col gap-10 w-[500px] ">
          <h1 className=" text-6xl relative bottom-14">
            <b>Login</b>
          </h1>
          <div className=" flex flex-col  justify-start  gap-10">
            <div className=" flex flex-col gap-5">
              <label for="uname">
                <b>Username or email *</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username/Email"
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
              <h1 className=" text-lightBlue relative bottom-4 left-[340px] underline">
                forgot your password?
              </h1>
            </div>
            <div>
              <button
                type="submit"
                className=" bg-myblue text-white rounded-full h-10 p-1 w-full "
              >
                Login
              </button>
              <h1 className=" text-center">
                Don't have an account?{' '}
                <span className=" text-lightBlue underline">
                  {' '}
                  <Link to="/Register">Register</Link>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <img src="public/assets/images/img1.png" alt="img-1" />
      </div>
    </div>
  )
}

export default Login
