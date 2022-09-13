
const LiveBets = () => {
  return (
    <>
      <div className="w-full h-max text-white flex justify-between p-2">
          {" "}
          {/* live betting stats */}
          <div className="text-left pr-2 space-y-2">
            <p className="font-bold text-xl">Game</p>
            <p>Game 1 </p>
            <p>Game 2 </p>
            <p>Game 3 </p>
            <p>Game 4 </p>
          </div>
          <div className="hidden sm:inline  space-y-2 text-right">
            <p className=" text-xl font-bold">User</p>
            <p>user1</p>
            <p>user1</p>
            <p>user1</p>
            <p>user1</p>
          </div>
          <div className="hidden sm:inline space-y-2 text-right ">
            <p className="text-xl font-bold">Time</p>
            <p>22:4:35</p>
            <p>22:4:35</p>
            <p>22:4:35</p>
            <p>22:4:35</p>
          </div>
          <div className="text-right space-y-2">
            <p className="text-xl font-bold">Bet Ammount</p>
            <p>435 BTC</p>
            <p>435 BTC</p>
            <p>435 BTC</p>
            <p>435 BTC</p>
          </div>
          <div className="hidden sm:inline space-y-2 text-right">
            <p className="text-xl font-bold">Multiplier</p>
            <p> 10X </p>
            <p> 10X </p>
            <p> 10X </p>
            <p> 10X </p>
          </div>
          <div className="text-right space-y-2">
            <p className="text-xl font-bold">Payout</p>
            <p>22,000 BTC </p>
            <p>22,000 BTC </p>
            <p>22,000 BTC </p>
            <p>22,000 BTC </p>
          </div>
        </div>
    </>
  )
}

export default LiveBets;