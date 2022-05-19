import Link from 'next/link'


function Nav (){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/"><a className="navbar-brand logo">H&T</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/contato"><a className="nav-link active" aria-current="page">Contato</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
