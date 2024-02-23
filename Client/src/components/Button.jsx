const Button = ({ label, iconURL, background, textColor }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        background
          ? ` ${background} ${textColor} `
          : ' border-y-myblue rounded-full text-black border-myblue'
      } rounded-full`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5 "
        />
      )}
    </button>
  )
}

export default Button
