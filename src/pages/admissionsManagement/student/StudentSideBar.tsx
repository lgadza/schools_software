import { faCircleInfo,faFile, faGear, faLocation, faPaperPlane, faPenToSquare, faPeopleGroup, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StudentSideBar=({source,activeComponent,handleNavigationClick}:{activeComponent:string;source:string;handleNavigationClick:(component:string)=>void}):JSX.Element=>{
    
    return(
        <div>
<ul className="d-flex flex-column align-items-start student_account">
<h5 className="d-flex">Chapters</h5>
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
        <li className={`p-2 w-100 d-flex nav-item border-radius-round ${activeComponent === "Application" ? "active" : ""}`}
          onClick={() => handleNavigationClick("Application")}>
        <FontAwesomeIcon icon={faPaperPlane}/>
        <span className="mx-2 ">Application</span>
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
    )
}
export default StudentSideBar