import Link from 'next/link'
import Image from "next/image"
import koala from "../public/koala.png"
import th from "../public/thlogo.png"

function Nav (){
  return(
    <nav className="navbar navbar-expand-lg navbar-light nav-height nav-color">
      <div className="container-fluid nav-color ">
        <Link href="/"><a className="navbar-brand text-center"><Image
                src={th}
                alt="H&T"
                width="80%"
                height="80%"

            >
            </Image></a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-color " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mt-0 dropdown active">
              <Link href="/contato"><a className="nav-link active contato" aria-current="page">Contato</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
