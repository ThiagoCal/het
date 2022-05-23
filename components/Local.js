import Image from "next/image"
import pipos from "../public/pipos.jpg"
import clarice from "../public/chaletclarice.jpeg"
import Link from 'next/link'

function Local() {
  return (
    <div className="container mt-3 mb-4">
      <div className="row mt-3">
        <div className="col-lg-5 localimg ">
          <div className="localimg">
            <Image
                src={clarice}
                alt="H&T"
                width="1510"
                height="945"
                className="localimg"
            >
            </Image>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1 local">
          <Info>Local:</Info>
          Les Palais - Chalet Clarice <Link href="https://goo.gl/maps/ddVXeDyxy6a8wvNH6"><a target="_blank" rel="noopener noreferrer" className="chalet" >(mapa)</a></Link><br/>
          Rua Assunção, n. 2<br/>
          Botafogo, Rio de Janeiro - RJ, 22251-030
          <Info>Dia e hora:</Info>
          Sábado - 09/julho/2022 às 18h45min
          <Info>Traje:</Info>
          Passeio Completo <br />
        </div>
      </div>
    </div>
  )
}

function Info( {children} ){
  return <div className="fs-5 pt-3">{ children }</div>
}

export default Local
