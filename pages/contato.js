import { useState, useEffect } from 'react';
import Nav from '../components/Nav';

function Contato(){
//   const [value, setValue] = useState()

//   useEffect(() => {
//     setTimeout(function () {
//       fetch('/api/hello')
//         .then((response) => {
//           return response.json()
//         }).then((data) => {
//           setValue(data)
//         })
//     }, 3000)
//   }, [])

  return (
    <>
      <Nav></Nav>
      <div className='container'>
        <div className='row'>
          <div className="card col-lg-4 mt-5">
            <div className="card-head">
              Contato
            </div>
            <div className='card-block'>
              Email: thiagorossiter88@gmail.com
            </div>
            {/* {value
              ? <pre>{JSON.stringify(value, null, 2)}</pre>
              : <div>Carregando...</div>
            } */}

          </div>
        </div>
      </div>
    </>
  )
}

export default Contato
