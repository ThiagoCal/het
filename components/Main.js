import Image from "next/image"
import weddingpic from "../public/hannaethiago.jpg"
import pipos from "../public/pipos.jpg"
import Middle from '../components/Middle'
import middle from "../public/bannerwed.jpg"
import Middlemobile from '../components/Middlemobile'

function Main(){
  return(
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-lg-4 mt-3">
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
            <div className="col-lg-4 offset-lg-2">
              <div className="card-block">
                <span className="amor">Amor</span><br/>
                <span className="song">É uma palavra linda,<br/>
                É uma reza linda,<br/>
                É uma linguagem
                </span>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="card-block">
                <span className="amor">אהבה</span><br/>
                  <span className="song">,היא מילה יפה<br/>
                ,היא תפילה יפה<br/>
                היא שפה</span>
              </div>
            </div>
          </div>
          <div className="row offset-lg-1 pb-3">
            <div className="col-lg-11 bgtext pl-3 mt-1 txt">
              <div className=" p-3 first-text">

                <div className=" text1">
                É com imensa alegria que vamos comemorar nosso casamento com aqueles que mais amamos.
                Contamos com a presença de todos para curtirmos muito esse dia! <br/><br/>
                Somos muito felizes em termos vocês como amigos, pessoas que acompanham nossa história de perto
                 e deixam nossos dias mais top. Não queremos nos gabar, mas temos os melhores amigos do mundo
                  e isso é incontestável! Queremos ver geral na pista, de Hava Naguila até o DJ sair!<br/><br/>
                É importante para nós que você <strong>confirme a sua presença</strong>. Preencha o RSVP ao final da página,
                 com seu nome completo. Lá, você também pode nos deixar uma mensagem – vamos adorar!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-12">
          <Middlemobile />
        {/* <div className="banner" style={{ backgroundImage: `url(${middle})`, position:'absolute',width:"100%",height:"100%",zIndex:0,borderTopRightRadius:"20%",overflow:"hidden", resizeMode:"cover"}} /> */}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-12">
          <Middle/>
        {/* <div className="banner" style={{ backgroundImage: `url(${middle})`, position:'absolute',width:"100%",height:"100%",zIndex:0,borderTopRightRadius:"20%",overflow:"hidden", resizeMode:"cover"}} /> */}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-7 pl-3 txt">
          <div className="second-text p-3">
            <div className="text2">
              Nunca podíamos imaginar que aquela noite num bar em Botafogo
              iria mudar completamente nossas vidas. O que começou como uma amizade despretensiosa,
              foi se transformando numa linda história de amor. <br/><br/>
              Sempre buscando encontrar o equilíbrio entre festas na Matriz e idas à sinagoga, vivemos muitos momentos incríveis e desafiadores juntos, sempre com a certeza de que teríamos o apoio
              um do outro.<br/><br/>
              A cerimônia do nosso casamento será <strong>judaica</strong>. Com Hanninha dando voltas no Thi, 7 brachot, quebra do copo, levantamento dos noivos nas cadeiras e muito mais! <br/><br/>
              Venha gritar Mazal Tov e bebemorar bastante com a gente!
            </div>
          </div>
        </div>
        <div className="col-lg-5  mt-4 second-image">
          <div className="container">
            <div className="imgpos">
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
    </div>
  )
}

export default Main
