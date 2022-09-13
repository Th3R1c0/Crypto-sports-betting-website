

const NavigationBar = () => {
  return (
    <>
      <div className="h-screen space-y-4 p-2 hidden sm:inline bg-[#0F212E] rounded-br-xl">
        <div className="flex h-max w-full justify-between font-bold">
          <p className="text-white">Casino</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            color="white"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex h-maxfull justify-between font-bold">
          <p className="text-white">Sports</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            color="white"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex h-max w-full justify-between space-x-8 font-bold">
          <p className="text-white">Promotions</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            color="white"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex h-max w-full justify-between space-x-8 font-bold">
          <p className="text-white">Sponsorships</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            color="white"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-white">Blog</p>
        <p className="text-white">Language</p>
      </div>
    </>
  )
}

export default NavigationBar;