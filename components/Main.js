import Image from "next/image"
import weddingpic from "../public/hannaethiago.jpg"
import pipos from "../public/pipos.jpg"

function Main(){
  return(
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-4">
          <div>
              <Image
                src={weddingpic}
                alt="Wedding Picture"
                // width="300px"
                // height="400px"

                className="wedding"
              >
              </Image>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row mb-4">
            <div className="col-lg-4 offset-lg-2 p-3">
              <span className="amor">Amor</span><br/>
              <span className="song">É uma palavra linda,<br/>
              É uma reza linda,<br/>
              É uma linguagem
              </span>
            </div>
            <div className="col-lg-4 offset-lg-2 pr-1">
              <span className="amor">אהבה</span><br/>
                <span className="song">,היא מילה יפה<br/>
              היא תפילה יפה,<br/>
              היא שפה</span>
            </div>
          </div>
          <div className="row offset-lg-2 pb-3">
            <div className="col-lg-10 bgtext pl-3 mt-3 txt">
              <span className="text1">
              O casal
              <br/>
              Koalinhas, arvrinhas, Pipos, pacotinhos... são tantos apelidos, porque as palavras convencionais
              não nos satisfazem.
              <br/><br/>
              Aliás, sempre gostamos de fazer tudo do nosso jeito. Foi num bar em Botafogo que nos conhecemos,
               e não fazíamos ideia de que, ali no Shooters, conheceríamos o amor de nossas vidas.

              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-7 pl-3 txt">
          <span className="text2">
          Nunca podíamos imaginar que aquela noite no bar Shooters, em Botafogo,
           iria mudar completamente nossas vidas. O que começou com uma amizade despretensiosa,
           foi se transformando numa grande parceria. <br/><br/>
           Nossos amigos adoram dizer que parecemos personagens saídos de um filme. E talvez sejamos mesmo.
            Thiago não poderia deixar de se apaixonar pelo jeito alegre, brincalhão e espontâneo de Hanna.
            Já ela, percebeu rapidamente que estava lidando com um verdadeiro gentleman. <br/><br/>

          Vivemos muitos momentos incríveis e desafiadores juntos, sempre com a certeza de que teríamos o apoio
           um do outro. <br/><br/>

          Se você está acessando esse site e lendo esse texto, é porque é uma pessoa extremamente especial para nós!<br/><br/>

          Estamos honrados em compartilhar esse momento com quem mais amamos e, adivinha só, você é uma dessas pessoas! Yaaay
          </span>
        </div>
        <div className="col-lg-4 mt-4 offset-lg-1">
          <div>
              <Image
                src={pipos}
                alt="H&T"
                width="385px"
                height="400px"
                className="wedding2"
              >
              </Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
