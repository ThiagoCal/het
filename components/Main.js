import Image from "next/image"
import weddingpic from "../public/hannaethiago.jpg"
import pipos from "../public/pipos.jpg"

function Main(){
  return(
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-4">
          <div>
              <Image
                src={weddingpic}
                alt="Wedding Picture"
                // width="300px"
                // height="400px"
                resizemode='cover'
                className="wedding"
              >
              </Image>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="row mb-4">
            <div className="col-sm-4 offset-sm-2">
              <span className="amor">Amor</span><br/>
              <span className="song">É uma palavra linda,<br/>
              É uma reza linda,<br/>
              É uma linguagem
              </span>
            </div>
            <div className="col-sm-4 offset-sm-2">
              <span className="amor">אהבה</span><br/>
                <span className="song">,היא מילה יפה<br/>
              היא תפילה יפה,<br/>
              היא שפה</span>
            </div>
          </div>
          <div className="row offset-sm-2 pb-3">
            <div className="col-sm-10 bgtext p-5 mt-3 ">
              <span className="text1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
               totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                 sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

              </span>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="row row2">
        <div className="col-sm-7">
          <span className="text2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
           totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
             sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </span>
        </div>
        <div className="col-sm-4 offset-sm-1">
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
      </div>
    </div>
  )
}

export default Main
