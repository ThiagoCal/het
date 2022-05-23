import Image from "next/image";
import banner from "../public/bannerwed.jpg";
import { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import qrcode from '../public/qrcodecasamento.jpeg';
import { CopyToClipboard } from "react-copy-to-clipboard";

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
    <div className="container pix-block">
      <div className="container text-center">
        <div className="text1" >
          <h1>Presente</h1>
          <p>Estamos saindo do país!<br/>
            Por isso, preferimos presentes em forma de PIX.</p>
        </div>
        <div>
          <Image
            src={qrcode}
            alt="Pix"
            width="200px"
            height = "200px"
            >
          </Image>
        </div>
        <div>
            {/* <div>
              <button className="btn btn-success" onClick={copyToClipboard}>Copy</button>
              {copySuccess}
            </div> */}
          <form>
            <div className="mt-3">
            <CopyToClipboard
              text="00020126650014br.gov.bcb.pix0130thiagotorrescalazans@gmail.com0209Casamento5204000053039865802BR5925THIAGO ROSSITER GUIMARAES6014RIO DE JANEIRO62250521Casamentohannaethiago6304C020"
              onCopy={() => alert("Copiada")}>
                <button className="btn btn-success">Copie a chave Pix</button>
            </CopyToClipboard>
              {/* <textarea
                ref={textAreaRef}
                // disabled={true}
                defaultValue='00020126650014br.gov.bcb.pix0130thiagotorrescalazans@gmail.com0209Casamento5204000053039865802BR5925THIAGO ROSSITER GUIMARAES6014RIO DE JANEIRO62250521Casamentohannaethiago6304C020'
              /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Pix
