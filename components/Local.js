import Image from "next/image"
import pipos from "../public/pipos.jpg"

function Local() {
  return (
    <div className="container mt-3">
      <div className="row mt-3">
        <div className="col-sm-4 ">
          <div>
            <Image
              src={pipos}
              alt="H&T"
              width="385px"
              height="400px"
              className="wedding"
            >
            </Image>
          </div>
        </div>
        <div className="col-sm-5 offset-sm-3 text-end pt-2 local">
          <h3>Local:</h3>
          <a href="https://www.google.com">Chalet Clarice</a> <br />
          Rua Assunção, n. 2 <br />
          Rio de Janeiro - RJ, 22251-030 <br /><br />
          <h3>Dia e hora:</h3>
          Sábado - 09/07/2022 às 18h45min <br /><br />
          <h3>Traje:</h3>
          Passeio Completo <br />
        </div>
      </div>
    </div>
  )
}

export default Local
