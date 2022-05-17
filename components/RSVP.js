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

    <div class="container justify-content-center">
      <div class="row">
        <div class="col-sm-4 offset-sm-2 ">
          <form onSubmit={handleSubmit}>
            <h2 class="">RSVP</h2>
            <div class="form-outline mb-4">
              <label type="text" class="form-label">Nome e Sobrenome</label>
              <input type="text" name="nome" class="form-control" />
            </div>
            <div class="form-outline mb-4">
              <label type="text" class="form-label">Mensagem</label>
              <textarea class="form-control" name="mensagem"  rows="4" />
            </div>
            <div class="form-check d-flex justify-content-center mb-4">
              <label class="form-check-label" for="going">
                <input class="form-check-input me-2" id="going" type="radio" name="vai" value="sim" defaultChecked />
                Vou
              </label>
            </div>
            <div class="form-check d-flex justify-content-center mb-4">
              <label class="form-check-label" for="notgoing">
                <input class="form-check-input" id="notgoing "type="radio" name="vai" value="false" />
                Não vou
              </label>
            </div>
            <div class="col text-center">

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

              <div>
                <br />
                {/* <img src="/gifs/mchammer.gif" />
                <img src="/gifs/mchammer.gif" />
                <img src="/gifs/mchammer.gif" /> */}
              </div>
            </div>
          </form>
        </div>
        <div class="local col-sm-4">
          <Local />
        </div>
      </div>
    </div>
  )
}

export default Rsvp
