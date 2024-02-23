import { BasicPlan, PremiumPlan } from '../data/Data'
import BasicCard from './BasicCard'
import PremiumCard from './PremiumCard'

const Profile = () => {
  return (
    <div>
      <div className=" flex  p-20 gap-10 bg-blue-50">
        <img
          src="/assets/images/avatar.png"
          alt="avatar"
          width={200}
          height={100}
        />
        <div className=" w-screen flex flex-col gap-5">
          <h1 className=" text-xl">
            <b>Orianna</b>
          </h1>
          <h1>masters in finance</h1>
          <div className=" grid grid-cols-4 justify-center items-center">
            <dir className=" flex pl-0 gap-2 items-center">
              <img src="/assets/icons/star.svg" alt="star" />
              <h1>
                <b>(4.5)</b>
              </h1>
            </dir>

            <div className=" flex gap-2 items-center">
              <img
                src="/assets/icons/location-pin-svgrepo-com.svg"
                alt="location"
                width={30}
                height={30}
              />
              <h1>Canada</h1>
            </div>
            <div className=" flex gap-2  items-center">
              <img
                src="/assets/icons/message-square-dots-svgrepo-com.svg"
                alt="conversation"
                width={30}
                height={30}
              />
              <h1>English,French</h1>
            </div>
            <div className=" flex gap-20   items-center">
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
        </div>
      </div>
      <div className=" p-20 flex flex-col gap-10 bg-blue-50">
        <div className=" flex flex-col gap-2">
          <h1 className=" text-3xl">
            <b>About me</b>
          </h1>
          <h1 className=" text-xl">
            Hi y’all my names is orianna im a financial councelor,i graduated
            from toronto university 5 years ago.i have 4 years of experience.
          </h1>
        </div>
        <div className=" flex flex-col gap-2">
          <h1 className=" text-3xl">
            <b>Services</b>
          </h1>
          <h1 className=" text-xl">
            Unlock your financial potential with personalized finance counseling
            services tailored to your unique goals and circumstances. From
            budgeting and debt management to investment and retirement planning,
            our expert guidance empowers you to take control of your financial
            future with confidence and peace of mind. Contact me today to embark
            on the path to financial freedom and security.
          </h1>
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className=" text-3xl">
            <b>Plans</b>
          </h1>
          <div className=" flex justify-center items-center gap-16 ">
            {BasicPlan.map((basic) => (
              <BasicCard key={basic.title} {...basic} />
            ))}
            {PremiumPlan.map((premium) => (
              <PremiumCard key={premium.title} {...premium} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
