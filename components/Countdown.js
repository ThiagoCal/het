import { useEffect, useState } from "react"

function Countdown(){
  const [partyTime, setPartyTime] = useState(false)
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(()=>{
    const target = new Date("07/09/2022 18:44:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d)

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / (1000));
      setSeconds(s)

      if(d <= 0 && h <= 0 && m <= 0 && s <= m ) {
        setPartyTime(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return(
    <div className="container countdown">
      <div className="row">
        {partyTime ? (
          <h1>Party Time!!</h1>
        ) : (
        <div className="col-sm-4 offset-sm-4">
          <p className="text-center title">Countdown</p>
          <div className="time-wrapper d-flex justify-content-center">
            <div className="timer-inner">
              <div className="timer-segment">
                <span className="time days">{days}</span>
                <span className="label">Dias</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{hours}</span>
                <span className="label">Horas</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{minutes}</span>
                <span className="label">Minutos</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{seconds}</span>
                <span className="label">Segundos</span>
              </div>
            </div>
          </div>
        </div>)
        }
      </div>

    </div>
  )
}

export default Countdown
