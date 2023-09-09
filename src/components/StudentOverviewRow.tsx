import Image from "./Image"

const StudentOverviewRow=():JSX.Element=>{
    return(
        <div>
  <ul className="d-flex nav-item border-radius-round justify-content-around bd-highlight py-1 align-items-center">
    <li className="bd-highlight flex-grow-2 ">
  <input type="checkbox" name="enroll" />
    </li>
    <li className="bd-highlight flex-grow-1">#004</li>
    
    
<li className="bd-highlight flex-grow-1">
  <Image src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais" height={40} width={40} alt="avatar"/>
  <span className="ps-2">Louis Gadza</span>

</li>
<li className="bd-highlight flex-grow-1">Male</li>
<li className="bd-highlight flex-grow-1">20 years</li>
<li className="bd-highlight flex-grow-1">Form 6</li>
<li className="bd-highlight flex-grow-1">Florence Manuel</li>
<li className="bd-highlight flex-grow-1">15135 Pumula South, Bulawayo</li>
  </ul>
</div>
    )
}
export default StudentOverviewRow