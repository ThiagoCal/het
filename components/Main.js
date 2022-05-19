import Image from "next/image"
import weddingpic from "../public/hannaethiago.jpg"
import pipos from "../public/pipos.jpg"

function Main(){
  return(
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-4">
          <div className="wedding">
              <Image
                src={weddingpic}
                alt="Wedding Picture"
                // width="300px"
                // height="400px"
                resizemode='cover'
              >
              </Image>
          </div>
        </div>
        <div className="col-sm-3 offset-sm-1">
          <span className="amor">Amor</span><br/>
          <span className="song">É uma palavra linda,<br/>
          É uma reza linda,<br/>
          É uma linguagem
          </span>
        </div>
        <div className="col-sm-3">
          <span className="amor">אהבה</span><br/>
            <span className="song">,היא מילה יפה<br/>
          היא תפילה יפה,<br/>
           היא שפה</span>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-sm-6">
          <span>אהבה, היא מילה יפה
          היא תפילה יפה, היא שפה
            </span>
        </div>
        <div className="col-sm-4 offset-sm-2">
          <div className="wedding">
              <Image
                src={pipos}
                alt="H&T"
                width="385px"
                height="400px"
              >
              </Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
