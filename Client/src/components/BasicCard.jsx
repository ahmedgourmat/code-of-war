const BasicCard = ({ title, price, description }) => {
  return (
    <div className="  p-10 w-[350px] border flex flex-col gap-10 rounded-3xl shadow-lg shadow-gray-400">
      <h1 className=" text-3xl">
        <b>{price}</b>
      </h1>
      <div className=" flex flex-col gap-4">
        <h1 className={` text-3xl text-orange-400`}>
          <b>{title}</b>
        </h1>
        <h1>{description}</h1>
      </div>
      <hr className="" />
      <div className=" flex flex-col gap-3">
        <div className=" flex gap-3">
          <img src="/assets/icons/tick (1).svg" alt="right" />
          <h1>Secure customer usage</h1>
        </div>
        <div className=" flex gap-3">
          <img src="/assets/icons/tick (1).svg" alt="right" />
          <h1> Basic analytics</h1>
        </div>
        <div className=" flex gap-3">
          <img src="/assets/icons/X.svg" alt="X" />
          <h1>Up to 350 customer profiles</h1>
        </div>
        <div className=" flex gap-3">
          <img src="/assets/icons/X.svg" alt="X" />
          <h1>Custom network name</h1>
        </div>
      </div>
    </div>
  )
}

export default BasicCard
