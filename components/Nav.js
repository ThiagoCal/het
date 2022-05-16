import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

function Nav (){
  return(
    <nav>
      <ul className={ styles.main }>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/contato">Contato</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
