import Image from "next/image"
import middle from "../public/bannerwed.jpg"

function Middle() {
  return (
    // <div className="image-wrap">
    <div className="container mt-4 mb-4">
      <div className="middle container" style={{
        backgroundImage: `url(${middle.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
          {/* <img
            className="middle-img"
            src={middle.src}
            alt="Wedding Picture"

            // width="100%"
            // height="100%"
          >
          </img> */}
      </div>
    </div>
  )
}

export default Middle
