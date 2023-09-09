import { Container, Dropdown } from "react-bootstrap"
import Image from "../../../components/Image"
import md_logo from "../../../assets/md_logo_small.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBell, faChevronDown, faMessage } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { ApplicantRegistration } from "../../../Types"
import { CompanyName } from "../../../assets/data/company"

interface StudentNavbarProps{
  personalInfo:ApplicantRegistration | null
}
const StudentNavbar:React.FC<StudentNavbarProps> =({personalInfo})=>{

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
                    <li >
                        <FontAwesomeIcon icon={faMessage}/>
                    </li>
                    <li className="px-3">
                        <FontAwesomeIcon icon={faBell}/>
                    </li>
                    <li>
            <Dropdown>
            <Dropdown.Toggle>
            <Image src={"https://visafoto.com/img/docs/za_passport.jpg"} height={30} width={30} alt={CompanyName}/>
          <span className="px-2">{personalInfo?.first_name} {personalInfo?.last_name} </span>
          <FontAwesomeIcon icon={faChevronDown}/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="" className="textColor px-2">
                  Change password
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" className="textColor px-2">
                  Change photo
                </Link>
              </Dropdown.Item>
              <hr className="my-0 py-0" />
              <Dropdown.Item>
                <Link
                  to=""
                //   onClick={handleLogout}
                  className="textColor px-2"
                >
                  Log out
                </Link>
              </Dropdown.Item>
             
            </Dropdown.Menu>
          </Dropdown>
                    </li>
                </ul>
           
        </Container>
    )
}
export default StudentNavbar