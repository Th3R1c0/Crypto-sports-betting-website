

const CallToAction = () => {
  return (
    <>
      <div className="flex w-full bg-gradient-to-bl from-cyan-200 to-cyan-400 h-[300px] justify-center items-center">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-dbold">
              Smarter crypto betting in 2022
            </h1>
            <button
              type="button"
              className=" flex justify-center items-center space-x-2 text-xl rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
            >
              <p>Register today</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        </div>
    </>
  )
}

export default CallToAction;