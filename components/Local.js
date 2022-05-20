import Image from "next/image"
import pipos from "../public/pipos.jpg"
import clarice from "../public/chaletclarice.jpeg"
import Link from 'next/link'

function Local() {
  return (
    <div className="container mt-3 mb-4">
      <div className="row mt-3">
        <div className="col-lg-6 localimg ">
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
        <div className="col-lg-5 offset-lg-1 pt-2 local">
          <Info>Local:</Info>
          <p className="chalet">Chalet Clarice <Link target="_blank" href="https://goo.gl/maps/ddVXeDyxy6a8wvNH6"  rel='noopener noreferrer'> (mapa)</Link></p>
          Rua Assunção, n. 2 <br />
          Botafogo, Rio de Janeiro - RJ, 22251-030 <br /><br />
          <Info>Dia e hora:</Info>
          Sábado - 09/07/2022 às 18h45min <br /><br />
          <Info>Traje:</Info>
          Passeio Completo <br />
        </div>
      </div>
    </div>
  )
}

function Info( {children} ){
  return <div className="fs-5">{ children }</div>
}

export default Local
