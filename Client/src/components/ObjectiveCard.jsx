const ObjectiveCard = ({ title, description, time }) => {
  return (
    <div className=" flex flex-col gap-3 border rounded-lg w-[300px] p-5 bg-blue-50">
      <div className=" flex gap-10 justify-center items-center">
        <h1 className=" font-bold text-xl">{title}</h1>
        <h1>{time}</h1>
      </div>

      <h1>{description}</h1>
      <div className=" flex gap-2">
        <img
          src="/assets/icons/pen-clip-svgrepo-com.svg"
          alt="pen"
          width={30}
        />
        <h1>
          <b>edit</b>
        </h1>
      </div>
    </div>
  )
}

export default ObjectiveCard
