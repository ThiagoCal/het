import { useState } from "react"
import Local from '../components/Local'

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
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-sm-4">
          <form onSubmit={handleSubmit}>
            <h2 className="">RSVP</h2>
            <div className="form-outline mb-4">
              <label type="text" className="form-label">Nome e Sobrenome</label>
              <input type="text" name="nome" className="form-control" />
            </div>
            <div className="form-outline mb-4">
              <label type="text" className="form-label">Mensagem</label>
              <textarea className="form-control" name="mensagem"  rows="4" />
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
              <button type="submit" className="btn btn-primary">Enviar</button>
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
        <div className="col-sm-1"></div>
        <div className="local col-sm-4">
          <Local />
        </div>
      </div>
      <br/>
    </div>
  )
}

export default Rsvp
