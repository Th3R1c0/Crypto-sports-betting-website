import { createServer, Model} from "miragejs"
import {useState, useEffect} from 'react';
createServer({
  models: {
    bet: Model,
  },

  routes() {
    this.namespace = "api"

    this.get("/bets/latest", (schema, request) => {
      return schema.bets.all()
    })
  },

  seeds(server) {
    server.create("bet", 
        {"game": "blackjack",
        "user": "user1",
        "time": 12,
        "bet_ammount": 1999,
        "multiplier": 4,
        "payout": 1000044
    })
    server.create("bet", 
        {"game": "blackjack",
        "user": "user1",
        "time": 12,
        "bet_ammount": 1999,
        "multiplier": 4,
        "payout": 1000044
    })    
    server.create("bet", 
        {"game": "blackjack",
        "user": "user1",
        "time": 12,
        "bet_ammount": 1999,
        "multiplier": 4,
        "payout": 1000044
    })
  },
})

interface livebet {
    game: string;
    user: string;
    time: number;
    bet_ammount: number;
    multiplier: number;
    payout: number;
}

const Render_bets = (data) => {
    console.log(data)
    return (
        <>
            {data.bets.map(bet => (
                <div className="w-full h-max text-white flex justify-between p-2">
                    <p>{bet.game}</p>
                    <p>{bet.user}</p>
                    <p>{bet.time}</p>
                    <p>{bet.bet_ammount}</p>
                    <p>{bet.multiplier}</p>
                    <p>{bet.payout}</p>
                </div>
            ))}
        </>
    )
}

const LiveBets = () => {
    const [data, setData] = useState<livebet>(undefined)
    useEffect(() => {
        fetch('api/bets/latest').then(res => res.json()).then(data => {setData(data); console.log(data.bets[0].bet_ammount)})
    }, [])
    if (data === undefined){
        console.log('dfsadsafdsa')
        return <h1> loading </h1>
    }
    return (
        <>
            <div className="w-full h-max text-3xl text-white flex justify-between p-2">
                <p> game </p>
                <p>user</p>
                <p>time</p>
                <p>bet ammount</p>
                <p>multiplier</p>
                <p>payout</p>
            </div>
            
            <div className="space-y-4">
            {data.bets.map(bet => (
                <div key={bet.id} className="w-full h-max text-2xl text-white flex justify-between p-2">
                    <p>{bet.game}</p>
                    <p>{bet.user}</p>
                    <p>{bet.time}</p>
                    <p>{bet.bet_ammount}</p>
                    <p>{bet.multiplier}</p>
                    <p>{bet.payout}</p>
                </div>
            ))}
            </div>
            
            
            
            

        </>
    )
}

export default LiveBets;