import { Nav} from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom"
import md_logo_small from "../../assets/md_logo_small.png"
import { CompanyName } from '../../assets/data/company';
// import { UserRegistration } from "../../Types";
interface CalaSideNavbarProps {
  user_id: string;
}
const CalaSideNavbar: React.FC<CalaSideNavbarProps> = ({ user_id }) => {
  
    const [activeComponent,setActiveComponent]=useState<string>("MakronexusAI")

    const handleNavigationClick=(component:string)=>{
        setActiveComponent(component)
    }
    return( 
         <div className="px-4 w-100 pt-3 cala-sidebar" style={{ height: "100vh", overflowY: "scroll"}}>
            <div className="d-flex px-2">
              <img
                src={md_logo_small}
                alt={CompanyName}
                style={{ width: `${50}px`, height: `${50}px`, borderRadius: "5%",objectFit:"contain" }}
                className="img_component logo"
              />
            </div>
            <Nav className="flex-column mt-4 w-100">
                <Nav.Item>
                <Link to={`/ask/${user_id}`} 
                          className={`d-flex nowrap text-white align-items-center px-2 py-2 `}>
                        <small className={`textMediumSize ${activeComponent === "MakronexusAI" ? "text-dark" : ""}`}>Makronexa</small>
                </Link>
                </Nav.Item>
                <Nav.Item>
                <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><small className="text-nowrap text-white textMediumSize">My Projects</small></Link>
                </Nav.Item>
                <Nav.Item>
                   <Link to={`/${user_id}/datasets`} onClick={()=>handleNavigationClick("DataSets")} className={`d-flex w-100 nowrap align-items-center px-2 py-2 `}> 
                   <small className={`textMediumSize text-nowrap ${activeComponent === "DataSets" ? "text-dark" : "text-white"}`}>DataSets</small>
                   </Link> 
                   </Nav.Item> 
                   <Nav.Item>
                   <Link to={`/ask/${user_id}/detect_text`} className={`d-flex nowrap align-items-center px-2 py-2 `} onClick={() => handleNavigationClick("DataSetSettings")} >
                    <small className={`textMediumSize text-nowrap  ${activeComponent === "Settings" ? "text-dark" : "text-white"}`}>AI detector</small>
                       </Link>
                </Nav.Item>
            </Nav>
        </div>
          
    )
}

export default CalaSideNavbar