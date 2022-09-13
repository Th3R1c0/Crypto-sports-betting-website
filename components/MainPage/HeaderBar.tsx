const HeaderBar = () => {
  return (
    <div className=" bg-[#1A2C38] flex p-2 justify-between items-center">
      <div className="text-white font-bold text-5xl w-full text-center">
        <h1>DAXbett</h1>
      </div>
      <div className="flex space-x-2">
        <button
          type="button"
          className="rounded-lg bg-blue-700 w-max px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <button
          type="button"
          className="rounded-lg bg-blue-700 w-max px-4 py-2 text-sm font-medium text-white hover:bg-blue-800  focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default HeaderBar;
