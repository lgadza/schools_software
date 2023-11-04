import { Button, Col, Container,Dropdown,Row } from "react-bootstrap"
import StudentSideBar from "../StudentSideBar"
import PersonalData from "./PersonalData"
import Image from "../../../../components/Image"
import Address from "./Adress"
import Guardian from "./Guardian"
import Documents from "./Documents"
import Settings from "./Settings"
import Interview from "./Interview"
import Application from "./Application"
import ProgramInformation from "../ProgramInformation"
import { useEffect, useState } from "react"
import StudentNavbar from "../StudentNavbar"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { deleteUser, getUserData, logoutUser } from "../../../../redux/actions"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import * as Icon from "react-bootstrap-icons"
import AlertBox from "../../../../components/Alerts"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faCircleInfo, faCircleNotch, faFile, faGear, faImage, faLocation, faPenToSquare, faPeopleGroup, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons"
import md_logo_small from "../../../../assets/md_logo_small.png"
import { CompanyName } from "../../../../assets/data/company"
import { UserRegistration } from "../../../../Types"
import { Link } from "react-router-dom"
const URL = import.meta.env.VITE_BE_PROD_URL;
// import { Button } from "react-bootstrap"

const MobileNav= ({source,activeComponent,handleNavigationClick,user,token}:{activeComponent:string;source:string;handleNavigationClick:(component:string)=>void,user:UserRegistration,token:string}):JSX.Element => {
  const [navActive, setNavActive] = useState(false);
  const navigate=useNavigate()
  const dispatch:Dispatch<any> = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('accessToken');
    navigate('/login') ; 
  
}
  const toggleNav = () => {
    setNavActive(!navActive);
  };
  const handleDeleteAccount=async()=>{
    const response= await deleteUser(token)
    if(response && response.ok){
      navigate("user/account/delete/confirmation")
    }
    console.log(response)
  }
  

  return (
    <nav className="mobile-nav d-md-none border-round mb-5  px-2">
      <div className="logo">
      <div className="d-flex px-2">
            <img
              src={md_logo_small}
              alt={CompanyName}
              style={{ width: `${50}px`, height: `${50}px`, borderRadius: "0%",objectFit:"contain" }}
              className="img_component"
            />
          </div>
      </div>
      
      <div className={`nav-links content_bg d-flex main_bg  flex-column justify-content-between ms-3 ${navActive ? 'nav-active pt-3' : ''}`}>
        <div>
          <ul className="d-flex flex-column ">  
          <li className={`p-2 w-100 d-flex nav-item border-radius-round ${activeComponent === "PersonalData" ? "active" : ""}`}
          onClick={() => handleNavigationClick("PersonalData")}>
        <FontAwesomeIcon icon={faUser}/>
        <span className="mx-2 ">Personal data</span>
    </li>
    
    <li className={`p-2 w-100 d-flex nav-item border-radius-round ${activeComponent === "Address" ? "active" : ""}`}
          onClick={() => handleNavigationClick("Address")}>
        <FontAwesomeIcon icon={faLocation}/>
        <span className="mx-2 ">Address</span>
    </li>
    <li className={`p-2 w-100 d-flex nav-item border-radius-round ${activeComponent === "Documents" ? "active" : ""}`}
          onClick={() => handleNavigationClick("Documents")}>
        <FontAwesomeIcon icon={faFile}/>
        <span className="mx-2 ">Documents</span>
    </li>
    <li className={`p-2 w-100 d-flex nav-item border-radius-round ${activeComponent === "Guardian" ? "active" : ""}`}
          onClick={() => handleNavigationClick("Guardian")}>
        <FontAwesomeIcon icon={faPeopleGroup}/>
        <span className="mx-2 ">Guardian/Parents</span>
    </li>
    {source==="student" &&(
      <>
        <li className={`p-2 w-100 d-flex nav-item border-radius-round ${activeComponent === "Status" ? "active" : ""}`}
          onClick={() => handleNavigationClick("Status")}>
        <FontAwesomeIcon icon={faCircleNotch}/>
        <span className="mx-2 ">Status</span>
    </li>
    <li className={`p-2 w-100 d-flex nav-item border-radius-round ${activeComponent === "Interview" ? "active" : ""}`}
          onClick={() => handleNavigationClick("Interview")}>
        <FontAwesomeIcon icon={faPenToSquare}/>
        <span className="mx-2 ">Interview/Exam</span>
    </li>
    <li className={`p-2 w-100 d-flex nav-item border-radius-round ${activeComponent === "ProgramInformation" ? "active" : ""}`}
          onClick={() => handleNavigationClick("ProgramInformation")}>
        <FontAwesomeIcon icon={faCircleInfo}/>
        <span className="mx-2 ">Program information</span>
    </li>
    <li className={`p-2 w-100 d-flex nav-item border-radius-round ${activeComponent === "Settings" ? "active" : ""}`}
          onClick={() => handleNavigationClick("Settings")}>
        <FontAwesomeIcon icon={faGear}/>
        <span className="mx-2 ">Settings</span>
    </li>
      </>
    )}
            </ul>
            </div>
            <div className="user-logout w-100 content_bg pb-2">
            <Dropdown>
<Dropdown.Toggle className="navbar-item w-100 d-flex justify-content-between align-items-center">
      <div className="pt-2">
            <Image src={user.avatar ||`https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais`} height={30} width={30} alt="avatar"/>
                <span className="px-2 py-0">{user.first_name} {user.last_name}</span>
            </div>
             <FontAwesomeIcon style={{fontSize:"0.8rem"}} icon={faChevronUp}/>         
</Dropdown.Toggle>

<Dropdown.Menu className="py-0 w-75"  style={{width:"20rem"}}>
  <Dropdown.Item className="py-2">
    <Link to={`/users/account/${user.id}`} className="textColor px-2">
    {/* <FontAwesomeIcon icon={faGear}/> */}
    <Image src={user.avatar ||`https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais`} height={30} width={30} alt="avatar"/>
      <span className="px-2">{user.email}</span>
    </Link>
  </Dropdown.Item>
  <hr className="my-0 py-0" />
  <Dropdown.Item className="py-2">
    <Link to={`/${user.id}/datasets`} className="textColor px-2">
    <FontAwesomeIcon style={{fontSize:"14px"}} icon={faImage}/>
      <small className="px-2">Change photo</small>
    </Link>
  </Dropdown.Item>
  <hr className="my-0 py-0" />
  <Dropdown.Item className="py-2">
    <div
      onClick={handleLogout}
      className="textColor px-2"
    >
    <FontAwesomeIcon style={{fontSize:"14px"}} icon={faPowerOff}/>
<small className="px-2">
      Log out
</small>
    </div>
  </Dropdown.Item>
                <div
                  onClick={handleDeleteAccount}
                  className="textColor"
                >
                  <Button className="bg-danger w-100">Delete account</Button>
                </div>
 
</Dropdown.Menu>
</Dropdown>
            </div>
      </div>
      <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
const StudentAccountPage=():JSX.Element=>{
  const [avatar, setAvatar] = useState<File|null >(null);
  const [isFileBig,setIsFileBig]=useState(false)
const navigate=useNavigate()
const personalInfo=useSelector((state:RootState)=>state.userData.data)
const accessToken=useSelector((state:RootState)=>state.accessToken.accessToken)
const isTokenExpired=useSelector((state:RootState)=>state.userData.isTokenExpired)
// const isError=useSelector((state:RootState)=>state.userData.isError)
    const [activeComponent,setActiveComponent]=useState<string>("PersonalData")
    const handleNavigationClick=(component:string)=>{
        setActiveComponent(component)
    }
    const handleAvatar = (e:any) => {
        setAvatar(e.target.files[0]);
      };
      useEffect(()=>{
        if(!accessToken){
          navigate("/login")
        }
        if(isTokenExpired){
          const handleLogout = () => {
            dispatch(logoutUser());
            localStorage.removeItem('accessToken');
            navigate('/login') ; 
          
        }
          handleLogout()
        }
      },[isTokenExpired])
      const handleAvatarUpload = async () => {
        if (avatar && avatar.size <= 1024 * 1024 * 2) {
          const formData = new FormData();
          formData.append("avatar", avatar);
      
          try {
            const response = await fetch(`${URL}/users/files/${personalInfo.id}/avatar`, {
              method: 'POST',
              body: formData,
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${accessToken.accessToken}`,
              },
            });
      
            if (response.ok) {
              const responseData = await response.json();
              console.log(responseData);
              dispatch(getUserData(accessToken.accessToken));
            } else {
              console.error('Error:', response.status, response.statusText);
            }
          } catch (error) {
            console.error(error);
          }
        } else {
          console.error('File size exceeds the limit.');
          setIsFileBig(true)
          setTimeout(() => {
            setIsFileBig(false);
          }, 3000); 
        }
      };
      
      useEffect(() => {
        console.log("Ruuning")
        if (avatar) {
            handleAvatarUpload();
        }
        console.log("after")
      }, [avatar]);
      const removeProfilePicture = async() => {
        
        try {
            const response = await fetch(`${URL}/users/${personalInfo.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${accessToken.accessToken}`,
              },
              body:JSON.stringify({avatar:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}),
            });
          
            if (response.ok) {
              const responseData = await response.json();
              console.log(responseData);
              dispatch(getUserData(accessToken.accessToken));
            } else {
              console.error('Error:', response.status, response.statusText);
            }
          } catch (error) {
            console.error(error);
          }
          
  };
    const dispatch:Dispatch<any> =useDispatch()
    useEffect(()=>{
dispatch(getUserData(accessToken.accessToken))
    },[])
    
    return(
        <Container >
            
      {isFileBig && (
      <div className='register-alert'>
        <AlertBox type="warning" message='The image size exceeds the limit'/>
      </div>
      )}
                <StudentNavbar personalInfo={personalInfo} token={accessToken.accessToken} />
            <Row className="py-3 ">
                {personalInfo && (

                <Col className="d-flex py-3 content_bg  my-5 student_account_all_border align-items-center student-profile-bar mx-2">
                    <Dropdown>
            <Dropdown.Toggle>
              <div className="profile-picture">
                <Image
                  src={personalInfo.avatar}
                  alt="Profile Avatar"
                  width={130}
                  height={130}
                />
                <div className="d-flex flex-column justify-content-center align-items-center change-profile">
                  <Icon.CameraFill size={25} />
                  <small>Change</small>
                  <small>profile picture</small>
                </div>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-50">
              <Dropdown.Item as="div" className="py-1">
                <label htmlFor="profile" style={{color:"white"}}>
                  Upload Photo
                </label>
                <input
                  id="profile"
                  type="file"
                  style={{ visibility: "hidden" }}
                  onChange={handleAvatar}
                />
              </Dropdown.Item>
              <Dropdown.Item onClick={removeProfilePicture} className="py-2">
                Remove Photo
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
                    <div className="d-flex flex-column align-items-start px-3">
                        <h5>{personalInfo.first_name} {personalInfo.last_name}</h5>
                    <small className="text-muted">{personalInfo.phone_number}</small>
                    <small className="text-muted">{personalInfo.email}</small>
                    </div>
                </Col>
                )}
            </Row>
            <Row className="student_account_all_border py-3 mt-4 ">
                <Col sm={3} className="student_account_border d-none d-md-block py-3 ">
                    <StudentSideBar
                    source="student"
                    activeComponent={activeComponent}
                    handleNavigationClick={handleNavigationClick}
                    />
                </Col>
                <MobileNav source="student"
                    activeComponent={activeComponent}
                    handleNavigationClick={handleNavigationClick} user={personalInfo} token={accessToken.accessToken} />
                <Col ml={9} >
                    <div className="student_account_border card content_bg py-3 px-3 student_account_content ">
                    {activeComponent === "PersonalData" && <PersonalData />}
                    {activeComponent === "Address" && <Address />}
                    {activeComponent === "Guardian" && <Guardian />}
                    {activeComponent === "Documents" && <Documents user_id={personalInfo.id} />}
                    {activeComponent === "Settings" && <Settings />}
                    {activeComponent === "Interview" && <Interview />}
                    {activeComponent === "Application" && <Application/>}
                    {activeComponent === "ProgramInformation" && <ProgramInformation />}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default StudentAccountPage