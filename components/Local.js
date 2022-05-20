import Image from "next/image"
import pipos from "../public/pipos.jpg"
import clarice from "../public/chaletclarice.jpeg"

function Local() {
  return (
    <div className="container mt-3">
      <div className="row mt-3">
        <div className="col-sm-4 ">
          <div>
            <Image
                src={clarice}
                alt="H&T"
                width="1510"
                height="945"
                className="wedding"
            >
            </Image>
          </div>
        </div>
        <div className="col-sm-5 offset-sm-3 text-end pt-2 local">
          <Info>Local:</Info>
          <a href="https://www.google.com">Chalet Clarice</a> <br />
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
