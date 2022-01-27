import React ,{ useState, useEffect} from "react";
import "./App.scss"


 function Mycollection() {

let link = "https://cdn.wallpapersafari.com/72/99/oRxvNl.jpeg"

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
         <div className="homegrids">
      <div data-aos = "fade-down" className="homeboxes">
 
        <h1 className="Parallax__content__heading__text">NBA COLLECTION</h1>
        <h2 className="Parallax__content__heading__caption">
       Your Cards:
        </h2>
      </div>
      <div data-aos = "fade-up" className="homeboxes">
      <div className="text-center mt-2">
        <p>
          <b>LEGENDARY PICKS:</b> GOATED STATUS
        </p>
        <p>
          <b> RARE PICKS:</b> ALL STAR OF FAME
        </p>
        <p>
          <b>COMMON PICKS:</b> CASUAL ROLE PLAYERS
        </p>
      </div>
      </div>
      </div>

    </>
  );

  return(
<section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      />
      <div className="Parallax__content">{renderContent()}</div>
    </section>



  )
}
export default Mycollection