import Image from "next/image"
import weddingpic from "../public/hannaethiago.jpg"
import pipos from "../public/pipos.jpg"

function Main(){
  return(
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-4">
          <div className="wedding">
              <Image
                src={weddingpic}
                alt="Wedding Picture"
                width="300px"
                height="400px"
              >
              </Image>
          </div>
        </div>
        <div className="col-sm-6">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-sm-6">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
        <div className="col-sm-4 offset-sm-2">
          <div className="wedding">
              <Image
                src={pipos}
                alt="H&T"
                width="385px"
                height="400px"
              >
              </Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
