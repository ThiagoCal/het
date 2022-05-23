import { useState } from "react"
import Local from '../components/Local'
import Pix from '../components/Pix'

function Rsvp() {
  const [value, setState] = useState({})

  const handleSubmit = e => {
    e.preventDefault()

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxxDMA_JrdQPsyitbZondoIb8vj0mBz9ggkKCTfIw3ijLn6kuVZS9bQBz9DKCvIHdve/exec'

    const form = document.forms.rsvp
    const formData = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: formData })
      .then(() => setState({ success: true }))
      .catch(() => setState({ error: true }))
  }
  return (
    <div className="container mt-4 justify-content-center">
      <div className="row">
        <div className="col-lg-5 rsvp">
          <form onSubmit={handleSubmit}>
            <h1 className="rsvp-title">RSVP</h1>
            <div className="form-outline mb-4">
              <label type="text" className="form-label">Nome e Sobrenome</label>
              <input type="text" name="nome" className="form-control" placeholder="Nome completo do convidado" />
            </div>
            <div className="form-outline mb-4">
              <label type="text" className="form-label">Mensagem</label>
              <textarea className="form-control" name="mensagem" placeholder="Deixe aqui sua mensagem para o casal (não ficará pública)" rows="4" />
            </div>
            <div className="form-check d-flex justify-content-center mb-4">
              <label className="form-check-label" htmlFor="going">
                <input className="form-check-input me-2" id="going" type="radio" name="vai" value="sim" defaultChecked />
                Vou
              </label>
            </div>
            <div className="form-check d-flex justify-content-center mb-4">
              <label className="form-check-label" htmlFor="notgoing">
                <input className="form-check-input" id="notgoing "type="radio" name="vai" value="false" />
                Não vou
              </label>
            </div>
            <div className="col text-center">
              <button type="submit" className="btn btn-primary send">Enviar</button>
              {value.success &&
                <div className="alert alert-success">
                  Enviado!
                </div>
              }

              {value.error &&
                <div className="alert alert-danger">
                  Opa! Ocorreu um erro! Liga para o Thiago!
                </div>
              }
            </div>
          </form>
        </div>
        <div className="col-lg-5 offset-lg-1">
            <Pix />
        </div>
        {/* <div className="col-sm-1"></div>
        <div className="local col-sm-5 localdiv"> */}

        {/* </div> */}
      </div>
      <br/>
    </div>
  )
}

export default Rsvp
