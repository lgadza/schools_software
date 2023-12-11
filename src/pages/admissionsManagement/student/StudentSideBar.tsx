import { faCircleInfo,faFile, faGear, faLocation, faPaperPlane, faPenToSquare, faPeopleGroup, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StudentSideBar=({source,activeComponent,handleNavigationClick}:{activeComponent:string;source:string;handleNavigationClick:(component:string)=>void}):JSX.Element=>{
    
    return(
        <div>
<ul className="d-flex align-items-center flex-column align-items-start student_account">
{/* <h5 className="d-flex align-items-center">Chapters</h5> */}
    <li className={`p-2 w-100 d-flex align-items-center nav-item border-radius-round ${activeComponent === "PersonalData" ? "text-dark" : "header"}`}
          onClick={() => handleNavigationClick("PersonalData")}>
        <FontAwesomeIcon icon={faUser} className="textSmallSize"/>
        <span className="mx-2 textMediumSize">Personal data</span>
    </li>
    
    <li className={`p-2 w-100 d-flex align-items-center nav-item border-radius-round ${activeComponent === "Address" ? "text-dark" : "header"}`}
          onClick={() => handleNavigationClick("Address")}>
        <FontAwesomeIcon icon={faLocation} className="textSmallSize"/>
        <span className="mx-2 textMediumSize">Address</span>
    </li>
    <li className={`p-2 w-100 d-flex align-items-center nav-item border-radius-round ${activeComponent === "Documents" ? "text-dark" : "header"}`}
          onClick={() => handleNavigationClick("Documents")}>
        <FontAwesomeIcon icon={faFile} className="textSmallSize"/>
        <span className="mx-2 textMediumSize">Documents</span>
    </li>
    <li className={`p-2 w-100 d-flex align-items-center nav-item border-radius-round ${activeComponent === "Guardian" ? "text-dark" : "header"}`}
          onClick={() => handleNavigationClick("Guardian")}>
        <FontAwesomeIcon icon={faPeopleGroup} className="textSmallSize"/>
        <span className="mx-2 textMediumSize">Guardian/Parents</span>
    </li>
    {source==="student" &&(
      <>
        <li className={`p-2 w-100 d-flex align-items-center nav-item border-radius-round ${activeComponent === "Application" ? "text-dark" : "header"}`}
          onClick={() => handleNavigationClick("Application")}>
        <FontAwesomeIcon icon={faPaperPlane} className="textSmallSize"/>
        <span className="mx-2 textMediumSize">Application</span>
    </li>
    <li className={`p-2 w-100 d-flex align-items-center nav-item border-radius-round ${activeComponent === "Interview" ? "text-dark" : "header"}`}
          onClick={() => handleNavigationClick("Interview")}>
        <FontAwesomeIcon icon={faPenToSquare} className="textSmallSize"/>
        <span className="mx-2 textMediumSize">Interview/Exam</span>
    </li>
    <li className={`p-2 w-100 d-flex align-items-center nav-item border-radius-round ${activeComponent === "ProgramInformation" ? "text-dark" : "header"}`}
          onClick={() => handleNavigationClick("ProgramInformation")}>
        <FontAwesomeIcon icon={faCircleInfo} className="textSmallSize"/>
        <span className="mx-2 textMediumSize">Program information</span>
    </li>
    <li className={`p-2 w-100 d-flex align-items-center nav-item border-radius-round ${activeComponent === "Settings" ? "text-dark" : "header"}`}
          onClick={() => handleNavigationClick("Settings")}>
        <FontAwesomeIcon icon={faGear} className="textSmallSize"/>
        <span className="mx-2 textMediumSize">Settings</span>
    </li>
      </>
    )}
  
    
</ul>
    
        </div>
    )
}
export default StudentSideBar