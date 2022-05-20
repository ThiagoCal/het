import Image from "next/image"
import middle from "../public/bannerwed.jpg"

function Middle() {
  return (
    <div className="container">

      <Image
        src={middle}
        alt="Wedding Picture"
        // width="300px"
        // height="400px"

        className="middle"
      >
      </Image>

    </div>
  )
}

export default Middle
