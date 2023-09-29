
import { faBars,faLightbulb, faRightFromBracket,faXmark,faGauge,faUsers,  
} from '@fortawesome/free-solid-svg-icons';
// faChalkboardTeacher,  faBook, faBed, faFileAlt,faInfo, faIdCard,faBookOpen,  faPeopleGroup, faBuilding, faReceipt, faPenRuler, faCalendar, faClipboardUser, faClipboardCheck, faBus, faMessage, faUser,  faBell,

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import md_logo_small from "../assets/md_logo_small.png"
// import { useSelector,useDispatch } from 'react-redux';
import { CompanyName } from '../assets/data/company';
const MainSidebar = ({showMenu,toggleMenu,activeComponent,handleNavigationClick}:{showMenu:boolean;toggleMenu:(page:boolean)=>void,activeComponent:string;source:string;handleNavigationClick:(component:string)=>void}):JSX.Element => {

  const handleToggleMenu = () => {
    toggleMenu(showMenu);
  };
  const [studentOpen, setStudentOpen] = useState(false);
  const toggleStudent = () => {
    setStudentOpen(!studentOpen);
  }
  const createStateToggle = (state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>) => () => setState(!state);
  const [showDashboard, setShowDashboard] = useState(true);
  const toggleDashboard = createStateToggle(showDashboard, setShowDashboard);
  const [showAI, setShowAI] = useState(false);
  const toggleAI = createStateToggle(showAI, setShowAI);
  // const [showMessage, setShowMessage] = useState(false);
//   const toggleMessage = createStateToggle(showMessage, setShowMessage);
//   const [showNotice, setShowNotice] = useState(false);
//   const toggleNotice = createStateToggle(showNotice, setShowNotice);
//   const [showAttendance, setShowAttendance] = useState(false);
//   const toggleAttendance = createStateToggle(showAttendance, setShowAttendance);
//   const [showTeachers, setShowTeachers] = useState(false);
//   const toggleTeachers = createStateToggle(showTeachers, setShowTeachers);
//   const [showParents, setShowParents] = useState(false);
//   const toggleParents = createStateToggle(showParents, setShowParents);
//   const [showLibrary, setShowLibrary] = useState(false);
//   const toggleLibrary = createStateToggle(showLibrary, setShowLibrary);
//   const [showInventory, setShowInventory] = useState(false);
//   const toggleInventory = createStateToggle(showInventory, setShowInventory);
//   const [showClass, setShowClass] = useState(false);
//   const toggleClass = createStateToggle(showClass, setShowClass);
//   const [showClassRoutine, setShowClassRoutine] = useState(false);
//   const toggleClassRoutine = createStateToggle(showClassRoutine, setShowClassRoutine);
//   const [showSubjects, setShowSubjects] = useState(false);
//   const toggleSubjects = createStateToggle(showSubjects, setShowSubjects);
//   const [showExam, setShowExam] = useState(false);
//   const toggleExam = createStateToggle(showExam, setShowExam);
//   const [showTransport, setShowTransport] = useState(false);
//   const toggleTransport = createStateToggle(showTransport, setShowTransport);
//   const [showHostel, setShowHostel] = useState(false);
//   const toggleHostel = createStateToggle(showHostel, setShowHostel);
//   const [showUsers, setShowUsers] = useState(false);
//   const toggleUsers = createStateToggle(showUsers, setShowUsers);
// // const activeComponent=useSelector((state:any)=>state.activeNav)
//   const dispatch=useDispatch()

  return (
    
          <div className={showMenu?"main_bg sidebar border-round":"main_bg sidebar hide-menu border-round"}>
            <div className='d-flex sidebar-head justify-content-between ps-2 py-2 align-items-center'>
    {showMenu && (
                <img
                src={md_logo_small}
                alt={CompanyName}
                style={{ width: `${50}px`, height: `${50}px`, borderRadius: "0%" }}
                className="img_component"
              />
    )}
  <Link to=""
  onClick={handleToggleMenu}
  >

              <FontAwesomeIcon icon={showMenu?faBars:faXmark} style={{fontSize:"1.2rem",color:"rgb(11, 94, 215)"}}/>
  </Link>
            </div>
            
            <div className="sidebar-menu pb-5">
            <Nav className="flex-column">
            <Nav.Item className={`${showDashboard?"active":""}`}>
               <Link to=""
                className="nav-link d-flex pe-0 justify-content-between ps-2 align-items-center" 
                onClick={(e)=>{
                  e.stopPropagation()
                  toggleDashboard()
               }}
                >
                 <div>
                  <FontAwesomeIcon icon={faGauge} className={`me-2 ${showDashboard?"active":""}`} />
                  {showMenu && (

                 <small className={`${showDashboard?"active":""}`}>Dashboard</small>
                  )}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon  icon={showDashboard ? faChevronDown : faChevronRight} style={{fontSize:".85rem"}}  className="me-2" />

                 )}
               </Link>
               {showDashboard && (
                 <div className=" d-flex flex-column content_bg overlap">
                     
                 <Link to="" className='d-flex nowrap align-items-center px-2 py-2' onClick={() => handleNavigationClick("adminDashboard")}>
                 <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                     Admin</Link>
              
                 <Link to="" className={`d-flex align-items-center nowrap px-2 py-2`}><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />Students</Link>
            
                 <Link to="" className='d-flex align-items-center nowrap px-2 py-2'> 
                 <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                 Teachers
                 </Link>
                 <Link to="" className='d-flex align-items-center nowrap px-2 py-2'> 
                 <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                 Parents
                 </Link>
               
             </div>
               )}
               </Nav.Item>
            <Nav.Item className={`${studentOpen?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2" 
               
              onClick={(e)=>{
                e.stopPropagation()
                toggleStudent()
             }}>
                 <div>
                  <FontAwesomeIcon icon={faUsers} className={`me-2 ${studentOpen?"active":""}`}/>
                  {showMenu && (

                 <small className={`${studentOpen?"active":""}`}>Students</small>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon  icon={studentOpen ? faChevronDown : faChevronRight} style={{fontSize:".85rem"}}  className="me-2" />

                 )}
               </Link>
               {studentOpen && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link 
                        to=''
                         onClick={() => handleNavigationClick("AllStudents")}  
                         className={`d-flex nowrap align-items-center px-2 py-2 ${activeComponent === "AllStudents" ? "active" : ""}`}>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                            <small>All Students</small></Link>
                        <Link to='' onClick={() => handleNavigationClick("StudentAdmissions")} className={`d-flex align-items-center nowrap px-2 py-2 ${activeComponent==="StudentAdmissions"?"active":""}`}> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                        
                        <small>All Candidates</small>
                        </Link>
                        <Link  to='' onClick={() => handleNavigationClick("NewCandidate")} className={`d-flex align-items-center nowrap px-2 py-2 ${activeComponent==="NewCandidate"?"active":""}`}> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                         <small>Admission Form</small>
                        </Link>
                      
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showAI?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
               onClick={(e)=>{
                e.stopPropagation()
                toggleAI()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faLightbulb} className={`me-2 ${showAI?"active":""}`}/>
                  {showMenu && (

                 <small className={`${showAI?"active":""}`}>Makronexa</small>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={!showAI?faChevronRight:faChevronDown} style={{fontSize:".85rem"}} className="me-2" />

                 )}
               </Link>
               {showAI && (
                    <div className=" d-flex flex-column content_bg overlap">
                        <Link
                          to=''
                          onClick={() => handleNavigationClick("MakronexusAI")}  
                          className={`d-flex nowrap align-items-center px-2 py-2 ${activeComponent === "MakronexusAI" ? "active" : ""}`}>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                        <small>Makronexa</small>
                        </Link>
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" /><small>My Projects</small></Link>
                   
                        <Link to="" onClick={()=>handleNavigationClick("ResourceUploadForm")} className={`d-flex nowrap align-items-center px-2 py-2 ${activeComponent === "ResourceUploadForm" ? "active" : ""}`}> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                        
                        <small>Upload file</small>
                        </Link>                      
                        <Link to="" className={`d-flex nowrap align-items-center px-2 py-2 ${activeComponent === "Settings" ? "active" : ""}`} onClick={() => handleNavigationClick("Settings")} >
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2 d-flex" /> <small>Settings</small>
                            </Link>
                    </div>
                  )}
            </Nav.Item>
            {/*
            <Nav.Item className={`${showTeachers?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
               onClick={(e)=>{
                e.stopPropagation()
                toggleTeachers()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />
                  {showMenu && (

                 <span className={`${showTeachers?"active":""}`}>Teachers</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showTeachers? faChevronDown : faChevronRight} style={{fontSize:".85rem"}} className="me-2" />

                 )}
               </Link>
               {showTeachers && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                            All Teachers</Link>
                     
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />Teachers Details</Link>
                   
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                        Add Teacher
                        </Link>
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                        Payment
                        </Link>
                      
                    </div>
                  )}
                  
            </Nav.Item>
            
            <Nav.Item className={`${showParents?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleParents()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faPeopleGroup} className="me-2" />
                 {showMenu && (
                 <span>Parents</span>

)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showParents? faChevronDown : faChevronRight} style={{fontSize:".85rem"}} className="me-2" />

                 )}
               </Link>
               {showParents && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                            All Parents</Link>
                     
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />Parent Details</Link>
                   
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                       Add Parent
                        </Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showLibrary?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleLibrary()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBuilding} className="me-2" />
                  {showMenu && (

                 <span>Library</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showLibrary? faChevronDown : faChevronRight} style={{fontSize:".85rem"}} className="me-2" />

                 )}
               </Link>
                {showLibrary && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                            All Books</Link>
                     
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />Book Details</Link>
                   
                        <Link to="/student-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                        Add New Book
                        </Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showInventory?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleInventory()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faReceipt} className="me-2" />
                  {showMenu && (

                 <span>Inventory</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showInventory? faChevronDown : faChevronRight} style={{fontSize:".85rem"}} className="me-2" />

                 )}
               </Link>
                {showInventory && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                            All Fees Collection</Link>
                     
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />Expenses</Link>
                   
                        <Link to="/student-info" className='d-flex align-items-center nowrap px-2 py-2'> 
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                        Add Expenses
                        </Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showClass?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleClass()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faPenRuler} className="me-2" />
                  {showMenu && (

                 <span>Class</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showClass? faChevronDown : faChevronRight} style={{fontSize:".85rem"}} className="me-2" />

                 )}
               </Link>
                {showClass && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                            All Class</Link>
                     
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />Add New Class</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showClassRoutine?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleClassRoutine()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faCalendar} className="me-2" />
                  {showMenu && (

                 <span>Class Routine</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showClassRoutine? faChevronDown : faChevronRight} style={{fontSize:".85rem"}} className="me-2" />

                 )}
               </Link>
                {showClassRoutine && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                            All Class Routines</Link>
                     
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />Add Class Routine</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showSubjects?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleSubjects()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                  {showMenu && (

                 <span>Subjects</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showSubjects? faChevronDown : faChevronRight} style={{fontSize:".85rem"}} className="me-2" />

                 )}
               </Link>
                {showSubjects && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                            All Subjects</Link>
                     
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />Add  New Subject</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showAttendance?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleAttendance()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faClipboardUser} className="me-2" />
                  {showMenu && (

                 <span>Attendance</span>
)}
                 </div>
               </Link>
            </Nav.Item>
            <Nav.Item className={`${showExam?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleExam()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faClipboardCheck} className="me-2" />
                  {showMenu && (

                 <span>Exam</span>
)}
                 </div>
               {showMenu && (
                 <FontAwesomeIcon icon={showExam? faChevronDown : faChevronRight} style={{fontSize:".85rem"}} className="me-2" />

               )}
               </Link>
                {showExam && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                            Exam Schedule</Link>
                     
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />Exam Grades</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showTransport?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleTransport()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBus} className="me-2" />
                 {showMenu && (
                 <span>Transport</span>

)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showTransport? faChevronDown : faChevronRight} style={{fontSize:".85rem"}} className="me-2" />

                 )}
               </Link>
                {showTransport && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                            All Transports</Link>
                     
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />Add New Transport</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showHostel?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleHostel()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBed} className="me-2" />
                  {showMenu && (

                 <span>Hostel</span>
)}
                 </div>
                 {showMenu && (
                 <FontAwesomeIcon icon={showHostel? faChevronDown : faChevronRight} style={{fontSize:".85rem"}} className="me-2" />

                 )}
               </Link>
                {showHostel && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                            All Rooms</Link>
                     
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />Add New Hostel</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showMessage?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
              onClick={(e)=>{
                e.stopPropagation()
                toggleMessage()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faMessage} className="me-2" />
                  {showMenu && (

                 <span>Messages</span>
)}
                 </div>
               </Link>
                
            </Nav.Item>
            <Nav.Item className={`${showUsers?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
                onClick={(e)=>{
                e.stopPropagation()
                toggleUsers()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  {showMenu && (

                 <span>Accounts</span>
)}
                 </div>
                  {showMenu && (
                  <FontAwesomeIcon icon={showUsers? faChevronDown : faChevronRight} style={{fontSize:".85rem"}} className="me-2" />

                  )}
               </Link>
                {showUsers && (
                    <div className=" d-flex flex-column content_bg overlap">
                     
                        <Link to="/admit-student" className='d-flex nowrap align-items-center px-2 py-2'>
                        <FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />
                            All Admins</Link>
                     
                        <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><FontAwesomeIcon icon={faChevronRight} style={{fontSize:".7rem"}} className="me-2" />Add New Admin</Link>
                    </div>
                  )}
            </Nav.Item>
            <Nav.Item className={`${showNotice?"active":""}`}>
               <Link to="" className="nav-link d-flex pe-0 justify-content-between align-items-center ps-2"
              onClick={(e)=>{
                e.stopPropagation()
                toggleNotice()
             }}
               >
                 <div>
                  <FontAwesomeIcon icon={faBell} className="me-2" />
                  {showMenu && (

                 <span>Notice</span>
)}
                 </div>
                  
               </Link>
                
            </Nav.Item> */}
               </Nav>             
            </div>
            <div className='sidebar-log-out ps-4 pe-5 py-3 main_bg'>
              {
                showMenu && (
                  <span>
              Log out
              </span>
                )
              }
              <FontAwesomeIcon className={`${!showMenu?"px-2 d-flex":"px-2"}`} icon={faRightFromBracket}/>
            </div>
    </div>  
  );
};

export default MainSidebar;
