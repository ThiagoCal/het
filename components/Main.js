import Image from "next/image"
import weddingpic from "../public/hannaethiago.jpg"

function Main(){
  return(
    <div className="container">
      <div className="row">
        <div class="col-sm-4">
          <div class="wedding">
              <Image
                src={weddingpic}
                alt="Wedding Picture"
                width="300px"
                height="400px"
              >
              </Image>
          </div>
        </div>
        <div class="col-sm-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <br/>
      <div className="row">
        <div class="col-sm-6 ">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="col-sm-4 offset-sm-2">
          <div class="wedding">
              <Image
                src={weddingpic}
                alt="Wedding Picture"
                width="300px"
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
