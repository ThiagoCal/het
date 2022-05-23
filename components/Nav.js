import Link from 'next/link'
import Image from "next/image"
import koala from "../public/koala.png"
import th from "../public/thlogo.png"

function Nav (){
  return(
    <nav className="navbar navbar-expand-lg navbar-light nav-color">
      <div className="container-fluid nav-height">
        <Link href="/"><a className="navbar-brand text-center"><Image
                src={th}
                alt="H&T"
                width="80%"
                height="80%"
                padding-top="0"
                margin-top="0"
            >
            </Image></a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/contato"><a className="nav-link active contato" aria-current="page">Contato</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
