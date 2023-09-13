import { Col, Container,Dropdown,Row } from "react-bootstrap"
import StudentSideBar from "../StudentSideBar"
import PersonalData from "./PersonalData"
import Image from "../../../../components/Image"
import Address from "./Adress"
import Guardian from "./Guardian"
import Documents from "./Documents"
import Settings from "./Settings"
import Interview from "./Interview"
import ApplicationStatus from "./Status"
import ProgramInformation from "../ProgramInformation"
import { useEffect, useState } from "react"
import StudentNavbar from "../StudentNavbar"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { getUserData, logoutUser } from "../../../../redux/actions"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import * as Icon from "react-bootstrap-icons"
import AlertBox from "../../../../components/Alerts"
import { useNavigate } from "react-router-dom"
const URL = import.meta.env.VITE_BE_PROD_URL;
// import { Button } from "react-bootstrap"


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
                <StudentNavbar personalInfo={personalInfo} />
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
                <Col sm={3} className="student_account_border py-3 ">
                    <StudentSideBar
                    source="student"
                    activeComponent={activeComponent}
                    handleNavigationClick={handleNavigationClick}
                    />
                </Col>
                <Col sm={9} >
                    <div className="student_account_border content_bg py-3 px-3 ">
                    {activeComponent === "PersonalData" && <PersonalData />}
                    {activeComponent === "Address" && <Address />}
                    {activeComponent === "Guardian" && <Guardian />}
                    {activeComponent === "Documents" && <Documents />}
                    {activeComponent === "Settings" && <Settings />}
                    {activeComponent === "Interview" && <Interview />}
                    {activeComponent === "Status" && <ApplicationStatus />}
                    {activeComponent === "ProgramInformation" && <ProgramInformation />}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default StudentAccountPage