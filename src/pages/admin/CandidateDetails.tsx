import { Button, Modal} from "react-bootstrap"
import { useState } from "react"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "../../components/Image"
import StudentProfileTable from "../../components/StudentProfileTable"
import StudentParentsTable from "../../components/StudentParentsTable"
import AddressTable from "../../components/AddressTable"
import StudentDocumentsTable from "../../components/StudentDocumentsTable"
import { Link } from "react-router-dom"
const CandidateDetails=({show,hide}:{show:boolean,hide:(hide:boolean)=>void}):JSX.Element=>{
    const [activeComponent,setActiveComponent]=useState<string>("Profile")

    const handleNavigationClick=(component:string)=>{
        setActiveComponent(component)
    }
    
    return(
        
                        <Modal show={show}
                        onHide={() => hide(false)}
                        dialogClassName="modal-90w"
                        size='xl'
                        centered
                     >
                    <div  className="main_bg p-3">
                    <Modal.Header closeButton>
          <Modal.Title>Candidate Detail</Modal.Title>
        </Modal.Header>
                        <div className="d-flex align-items-center">
                            <span>Students</span> 
                            <FontAwesomeIcon className="px-2 header" icon={faChevronRight} style={{fontSize:".8rem"}}/>
                            <Link to="">All Candidates</Link> 
                            <FontAwesomeIcon className="px-2 header" icon={faChevronRight} style={{fontSize:".8rem"}}/>
                            <span className="header">Candidate details</span>
                        </div>
                        <div className="d-flex justify-content-end py-2">
                            <Button className="content_bg-2">Admit Louis Gadza</Button>
                        </div>
                        <div className="d-flex my-5">
                            <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                                <Image src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais" height={200} width={200} alt="avatar"/>
                                <h5 className="mt-2 mb-0">Louis Gadza</h5>
                                <span>Form 5</span>
                            </div>
                            <div className="ms-5 w-100  content_bg ">
                                <ul className="d-flex justify-content-start view-candidate py-2">
                                    <li 
                                    className={`px-3 py-2 border-radius-round nav-item mx-1 ${activeComponent==="Profile"?"active":""}`}
                                    onClick={()=>handleNavigationClick("Profile")}
                                    >
                                    Profile
                                    </li>
                                    <li 
                                    className={`px-3 py-2 border-radius-round nav-item mx-1 ${activeComponent==="Parents"?"active":""}`}
                                    onClick={()=>handleNavigationClick("Parents")}
                                    >
                                    Parents
                                    </li>
                                    <li 
                                    className={`px-3 py-2 border-radius-round nav-item mx-1 ${activeComponent==="Address"?"active":""}`}
                                    onClick={()=>handleNavigationClick("Address")}
                                    >
                                    Address
                                    </li>
                                    <li 
                                    className={`px-3 py-2 border-radius-round nav-item mx-1 ${activeComponent==="Documents"?"active":""}`}
                                    onClick={()=>handleNavigationClick("Documents")}
                                    >
                                    Documents
                                    </li>
                                    <li
                                     className={`px-3 py-2 border-radius-round nav-item mx-1 ${activeComponent==="Status"?"active":""}`}
                                     onClick={()=>handleNavigationClick("Status")}
                                    >
                                    Status
                                    </li>
                                </ul>
                                <div className="px-3">
                                    {activeComponent==="Profile" && (
                                    <StudentProfileTable/>
                                    )}
                                    {activeComponent==="Parents" && (
                                    <StudentParentsTable/>
                                    
                                    )}
                                    {activeComponent==="Address" && (
                                    <AddressTable/>
                                    )}
                                    {activeComponent==="Documents" && (
                                    <StudentDocumentsTable/>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Modal>
    )
}

export default CandidateDetails

