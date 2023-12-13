import "./SunRaise.css"
import logo from "../assets/md_logo_small.png"
const SunRaise:React.FC=()=>{
    const RotatingHeroImg:React.FC = () => {
        return (
          <center className="hero">
            <div id='test' className="container spacing">
              <img className="devcon rotating" src={logo} style={{width:"150px", height:"150px"}} alt="Geomerty" />
            
            </div>
          </center>
        );
      };
    return(
       <div className="landscape">
        <RotatingHeroImg/>
            <h1 className="admissions-header d-none d-md-block">Admission Management </h1>
            <h1 className=" d-none d-md-block admissions-header2">Software</h1>
  <div className="mountain"></div>
  <div className="mountain mountain-2"></div>
  <div className="mountain mountain-3"></div>
  <div className="sun-container sun-container-1">
  </div>
  <div className="sun-container">
    <div className="sun"></div>
  </div>
  <div className="cloud"></div>
  <div className="cloud cloud-1"></div>
  <div className="sun-container sun-container-reflection">
    <div className="sun"></div>
  </div>
  <div className="light"></div>
  <div className="light light-1"></div>
  <div className="light light-2"></div>
  <div className="light light-3"></div>
  <div className="light light-4"></div>
  <div className="light light-5"></div>
  <div className="light light-6"></div>
  <div className="light light-7"></div>
  <div className="water"></div>
  <div className="splash"></div>
  <div className="splash delay-1"></div>
  <div className="splash delay-2"></div>
  <div className="splash splash-4 delay-2"></div>
  <div className="splash splash-4 delay-3"></div>
  <div className="splash splash-4 delay-4"></div>
  <div className="splash splash-stone delay-3"></div>
  <div className="splash splash-stone splash-4"></div>
  <div className="splash splash-stone splash-5"></div>
  <div className="lotus lotus-1"></div>
  <div className="lotus lotus-2"></div>
  <div className="lotus lotus-3"></div>
  <div className="front">
    <div className="stone"></div>
    <div className="grass"></div>
    <div className="grass grass-1"></div>
    <div className="grass grass-2"></div>
    <div className="reed"></div>
    <div className="reed reed-1"></div>
  </div>
</div>
    )
}
export default SunRaise