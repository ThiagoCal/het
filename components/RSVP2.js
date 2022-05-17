import { useState } from "react"

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
    <form className="form" id="rsvp" style={{ padding: '0 20px', textAlign: 'center' }} onSubmit={handleSubmit}>
      <h2>RSVP</h2>

      <label>
        Nome e sobrenome <br />
        <input type="text" name="nome" />
      </label>

      <label>
        Mensagem para os noivos <br />
        <textarea name="mensagem" />
      </label>

      <div style={{ textAlign: 'left' }}>
        <label className="radio">
          <input type="radio" name="vai" value="sim" defaultChecked />
          Vou
        </label>
        <label className="radio">
          <input type="radio" name="vai" value="false" />
          Não vou
        </label>
      </div>

      <button type="submit" className="btn btn-primary">Enviar</button>

      {value.success &&
        <div className="alert alert-success">
          Enviado!
        </div>
      }

      {value.error &&
        <div className="alert alert-danger">
          Opa! Ocorreu um erro! Avisa pro Breno!
        </div>
      }

      <div>
        <br />
        {/* <img src="/gifs/mchammer.gif" />
        <img src="/gifs/mchammer.gif" />
        <img src="/gifs/mchammer.gif" /> */}
      </div>
    </form>
  )
}

export default Rsvp
