import Image from "next/image"
import middle from "../public/bannerwed.jpg"

function Middlemobile() {
  return (
    // <div className="image-wrap">
    <div className="container mt-4 mb-4">
      <div className="middle-mobile ">
          <img
            className="middle-img"
            src={middle.src}
            alt="Wedding Picture"
            width= "null"
            height= "null"

          >
          </img>
      </div>
    </div>
  )
}

export default Middlemobile
