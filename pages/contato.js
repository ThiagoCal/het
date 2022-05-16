import { useState, useEffect } from 'react';
import Nav from '../components/Nav';

function Contato(){
  const [value, setValue] = useState()

  useEffect(() => {
    setTimeout(function () {
      fetch('/api/hello')
        .then((response) => {
          return response.json()
        }).then((data) => {
          setValue(data)
        })
    }, 3000)
  }, [])

  return (
    <div>
      <Nav></Nav>
      <div>
        {value
          ? <pre>{JSON.stringify(value, null, 2)}</pre>
          : <div>Carregando...</div>
        }
      </div>
    </div>
  )
}

export default Contato
