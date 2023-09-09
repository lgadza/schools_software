import { Link } from "react-router-dom"
import Image from "./Image"
import SearchBar from "./SearchBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faCalendar, faCheck, faChevronDown, faEnvelope, faGear, faListCheck, faMessage, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons"
import { Dropdown } from "react-bootstrap"
import { ApplicantRegistration } from "../Types"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logoutUser } from "../redux/actions"
const AccountTopNavigationBar=({user}:{user:ApplicantRegistration}):JSX.Element=>{
  const navigate=useNavigate()
  const dispatch = useDispatch();
  
    const handleLogout = () => {
      dispatch(logoutUser());
      localStorage.removeItem('accessToken');
      navigate('/login') ; 
    
  }
    return(
      <div className=" d-none d-lg-block">
          {user && (
        <div className="search-bar py-2 px-3 mb-4 d-flex align-items-center sidebar-head justify-content-between">
        <SearchBar placeholder="Find Something . . ."/>
        <ul className="d-flex align-items-center">
            <li className="navbar-item d-flex align-items-center">         
            <Dropdown>
<Dropdown.Toggle className="navbar-item d-flex align-items-center">
<div className="pt-2">
                <span className="px-2 py-0">{user.first_name} {user.last_name}</span>
                <FontAwesomeIcon style={{fontSize:"0.8rem"}} icon={faChevronDown}/>
               
            <span className="d-flex px-4">{user.role} </span>
            </div>
            <Image src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais" height={40} width={40} alt="avatar"/>
</Dropdown.Toggle>

<Dropdown.Menu className="py-0"  style={{width:"20rem"}}>
  <div className="d-flex px-4  content_bg-2 text-white py-3">
     <strong className="d-flex color-header">{user.first_name} {user.last_name}</strong>
  </div>
  <Dropdown.Item className="py-2" onClick={()=>navigate(`/account/${user.id}`)}>
    <Link to='' className="textColor px-2">
    <FontAwesomeIcon icon={faUser}/>
      <span className="px-2">My profile</span>
    </Link>
  </Dropdown.Item>
  <Dropdown.Item className="py-2">
    <Link to="" className="textColor px-2">
    <FontAwesomeIcon icon={faListCheck}/>
      <span className="px-2">Task</span>
    </Link>
  </Dropdown.Item>
  <Dropdown.Item className="py-2">
    <Link to="" className="textColor px-2">
    <FontAwesomeIcon icon={faMessage}/>
      <span className="px-2">Message</span>
    </Link>
  </Dropdown.Item>
  <Dropdown.Item className="py-2">
    <Link to="" className="textColor px-2">
    <FontAwesomeIcon icon={faGear}/>
      <span className="px-2">Account settings</span>
    </Link>
  </Dropdown.Item>
  <hr className="my-0 py-0" />
  <Dropdown.Item className="py-2">
    <div
      onClick={handleLogout}
      className="textColor px-2"
    >
    <FontAwesomeIcon icon={faPowerOff}/>
<span className="px-2">
      Log out
</span>
    </div>
  </Dropdown.Item>
 
</Dropdown.Menu>
</Dropdown>
</li>
<li className="navbar-item header-message px-0">              
<Dropdown>
<Dropdown.Toggle className="navbar-item d-flex align-items-center">
<FontAwesomeIcon icon={faEnvelope}/>
<div className="message-count">6</div>
</Dropdown.Toggle>

<Dropdown.Menu className="py-0" style={{width:"20rem"}}>
  <div className="d-flex px-4  content_bg-2 text-white py-3">
     <strong className="d-flex color-header">Messages</strong>
  </div>
  <Dropdown.Item className="py-2">
    <Link to="" className="textColor px-2 d-flex">
    
    <Image src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais" height={40} width={40} alt="avatar"/>
    <div className="ps-2">
        <div className="d-flex justify-content-between">
            <span>
                Gadza
            </span>
            <span className="d-flex ">
                10:30
            </span>
        </div>
            <div className="notification_message">
                What is the reason of buying this item. Is it useful for me...
            </div>
    </div>
    </Link>
  </Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</li>
<li className="navbar-item header-message pe-3">              
<Dropdown>
<Dropdown.Toggle className="navbar-item d-flex align-items-center">
<FontAwesomeIcon icon={faBell}/>
<div className="notification-count">5</div>
</Dropdown.Toggle>

<Dropdown.Menu className="py-0"  style={{width:"20rem"}}>
  <div className="d-flex px-4  content_bg-2 text-white py-3">
     <strong className="d-flex color-header">Notifications</strong>
  </div>
  <Dropdown.Item className="py-2">
    <Link to="" className="textColor px-2 d-flex align-items-center">
    
    <div className="icon-bg">
    <FontAwesomeIcon icon={faCalendar}/>
    </div>
    <div className="ps-2">
        <div className="d-flex justify-content-between">
           Director Metting
        </div>
            <div className="text-muted">
                    0 mins ago  
            </div>
    </div>
    </Link>
  </Dropdown.Item>
  <Dropdown.Item className="py-2">
    <Link to="" className="textColor px-2 py-0 d-flex align-items-center">
    
    <div className="icon-bg">
    <FontAwesomeIcon icon={faGear}/>
    </div>
    <div className="ps-2">
        <div className="d-flex justify-content-between">
           Updated password
        </div>
            <div className="text-muted">
                    20 mins ago  
            </div>
    </div>
    </Link>
  </Dropdown.Item>
  <Dropdown.Item className="py-2">
    <Link to="" className="textColor px-2 d-flex align-items-center">
    
    <div className="icon-bg">
    <FontAwesomeIcon icon={faCheck}/>
    </div>
    <div className="ps-2">
        <div className="d-flex justify-content-between">
           Completed today task
        </div>
            <div className="text-muted">
                    50 mins ago  
            </div>
    </div>
    </Link>
  </Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</li>
        </ul>
    </div>
        )}
    </div>
    )
}

export default AccountTopNavigationBar