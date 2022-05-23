import Image from "next/image"
import banner from "../public/bannerwed.jpg"

function Banner() {
  return (
    <div className="container">
      <div className="banner" >
        <div className="text-center">
          <h1>Casamento <br className="mobile-break"></br> Hanna e Thiago</h1>
          <p>Dia 09 de julho de 2022</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
