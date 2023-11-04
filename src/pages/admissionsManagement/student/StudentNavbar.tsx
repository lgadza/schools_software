import { Button, Container, Dropdown } from "react-bootstrap"
import Image from "../../../components/Image"
import md_logo from "../../../assets/md_logo_small.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { UserRegistration } from "../../../Types"
import { CompanyName } from "../../../assets/data/company"
import { useDispatch } from "react-redux"
import { deleteUser, logoutUser } from "../../../redux/actions"
import { useNavigate } from "react-router-dom"
import { Dispatch } from "redux"



interface StudentNavbarProps{
  personalInfo:UserRegistration,
  token:string 
}
const StudentNavbar:React.FC<StudentNavbarProps> =({personalInfo,token})=>{
  const navigate=useNavigate()
  const dispatch:Dispatch<any> = useDispatch();
  const handleLogout = () => {
    console.log("Logging out...");
    dispatch(logoutUser());
    localStorage.removeItem('accessToken');
    navigate('/login') ; 
  
}
const handleDeleteAccount=()=>{
  dispatch(deleteUser(token))
}

    return(
        <Container className="content_bg main_bg d-flex align-items-center justify-content-between student_navbar py-2">
            <div>
            <img
                    src={md_logo}
                    alt={CompanyName}
                    className="img_component d-flex"
                    style={{height:"30px"}}
                />
            </div>
            
                <ul className="d-flex align-items-center my-0">
                    {/* <li >
                        <FontAwesomeIcon icon={faMessage}/>
                    </li>
                    <li className="px-3">
                        <FontAwesomeIcon icon={faBell}/>
                    </li> */}
                    <li>
            <Dropdown>
            <Dropdown.Toggle>
             
{personalInfo.avatar && personalInfo.avatar !== '' && (
  <Image src={personalInfo.avatar} height={30} width={30} alt={personalInfo.first_name} />
) }

          <span className="px-2 text-dark">{personalInfo?.first_name} {personalInfo?.last_name} </span>
          <FontAwesomeIcon className="text-dark" icon={faChevronDown}/>
            </Dropdown.Toggle>

            <Dropdown.Menu className="px-2">
              
                <div className="d-flex px-3 my-2  textColor justify-content-between">
          <span className="text-dark">{personalInfo?.first_name} {personalInfo?.last_name} </span>
          {personalInfo.avatar && personalInfo.avatar !== '' && (
          <Image src={personalInfo.avatar} height={30} width={30} alt={personalInfo.first_name} />
        ) }
            </div>
            <hr className="my-0 py-0" />
              
              <Dropdown.Item>
                <Link to="" className="header">
                  Change photo
                </Link>
              </Dropdown.Item>
              <hr className="my-0 py-0" />
              <Dropdown.Item className="mb-3" onClick={handleLogout}>
                <Link
                  to=""
                  className="header"
                >
                  Log out
                </Link>
              </Dropdown.Item>
              <hr className="my-0 py-0" />

                <div
                  onClick={handleDeleteAccount}
                  className="textColor w-100"
                >
                  <Button className="bg-danger w-100">Delete account</Button>
                </div>
             
            </Dropdown.Menu>
          </Dropdown>
                    </li>
                </ul>
           
        </Container>
    )
}
export default StudentNavbar