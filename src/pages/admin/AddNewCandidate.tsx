import { Row , Col} from "react-bootstrap"
import { useState } from "react"
import StudentSideBar from "../admissionsManagement/student/StudentSideBar"
import PersonalData from "../admissionsManagement/student/account/PersonalData"
import Address from "../admissionsManagement/student/account/Adress"
import Guardian from "../admissionsManagement/student/account/Guardian"
import Documents from "../admissionsManagement/student/account/Documents"
import Settings from "../admissionsManagement/student/account/Settings"
import Interview from "../admissionsManagement/student/account/Interview"
import ApplicationStatus from "../admissionsManagement/student/account/Application"
import ProgramInformation from "../admissionsManagement/student/ProgramInformation"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { UserRegistration } from "../../Types"


const AllNewCandidate=():JSX.Element=>{
  const user:UserRegistration=useSelector((state:RootState)=>state.userData.data)
    // const [showMenu, setShowMenu] = useState(true);

    // const toggleMenu = () => {
    //   setShowMenu(!showMenu);
    // };
    // const [activePage,setActivePage]=useState<string>("PersonalData")
  
    // const handlePageNavigationClick=(page:string)=>{
    //     setActivePage(page)
    // }
    const [activeComponent,setActiveComponent]=useState<string>("PersonalData")

    const handleNavigationClick=(component:string)=>{
        setActiveComponent(component)
    }
    return(
        <div className="component-margin-top">
             <h5 className="d-flex">Add new candidate</h5>
                <Row className="student_account_all_border py-3 mt-4 ">
                      <Col sm={3} className="student_account_border  py-3 ">
                      <StudentSideBar
                      source="admin"
                      activeComponent={activeComponent}
                      handleNavigationClick={handleNavigationClick}
                      />
                      </Col>
                      <Col sm={9} >
                            <div className="student_account_border content_bg py-3 px-3 ">
                            {activeComponent === "PersonalData" && <PersonalData />}
                              {activeComponent === "Address" && <Address />}
                              {activeComponent === "Guardian" && <Guardian />}
                              {activeComponent === "Documents" && <Documents user_id={user.id!}/>}
                              {activeComponent === "Settings" && <Settings />}
                              {activeComponent === "Interview" && <Interview />}
                              {activeComponent === "Status" && <ApplicationStatus />}
                              {activeComponent === "ProgramInformation" && <ProgramInformation />}
                            </div>
                      </Col>
                    </Row>
        </div>
    )
}

export default AllNewCandidate