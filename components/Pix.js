import Image from "next/image";
import banner from "../public/bannerwed.jpg";
import { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import qrcode from '../public/qrcodecasamento.jpeg';

function Pix() {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };
  return (
    <div className="container">
      <div className="container text-center">
        <div className="pix" >
          <h1>Presente</h1>
          <p>Estamos saindo do país!
            Por isso, preferimos presentes em forma de PIX.</p>
        </div>
        <div>
          <Image
            src={qrcode}
            alt="Pix">
          </Image>
        </div>
        <div>
            <div>
              <button className="btn btn-success" onClick={copyToClipboard}>Copy</button>
              {copySuccess}
            </div>
          <form>
            <div>
              <textarea
                ref={textAreaRef}
                value='00020126650014br.gov.bcb.pix0130thiagotorrescalazans@gmail.com0209Casamento5204000053039865802BR5925THIAGO ROSSITER GUIMARAES6014RIO DE JANEIRO62250521Casamentohannaethiago6304C020'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Pix
