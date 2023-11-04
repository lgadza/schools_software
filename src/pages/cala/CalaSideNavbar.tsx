import { Nav} from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom"
import md_logo_small from "../../assets/md_logo_small.png"
import { CompanyName } from '../../assets/data/company';
import { UserRegistration } from "../../Types";

const CalaSideNavbar=({user}:{user:UserRegistration}):JSX.Element=>{
  
    const [activeComponent,setActiveComponent]=useState<string>("MakronexusAI")

    const handleNavigationClick=(component:string)=>{
        setActiveComponent(component)
    }
    return( 
         <div className="px-4 w-100" style={{ height: "100vh", overflowY: "scroll"}}>
            <div className="d-flex px-2">
              <img
                src={md_logo_small}
                alt={CompanyName}
                style={{ width: `${50}px`, height: `${50}px`, borderRadius: "0%",objectFit:"contain" }}
                className="img_component"
              />
            </div>
            <Nav className="flex-column mt-4 w-100">
                <Nav.Item>
                <Link to={`/ask/${user.id}`} 
                          className={`d-flex nowrap header align-items-center px-2 py-2 ${activeComponent === "MakronexusAI" ? "active" : ""}`}>
                        <small>Makronexa</small>
                </Link>
                </Nav.Item>
                <Nav.Item>
                <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><small className="text-nowrap header">My Projects</small></Link>
                </Nav.Item>
                <Nav.Item>
                   <Link to={`/${user.id}/datasets`} onClick={()=>handleNavigationClick("DataSets")} className={`d-flex w-100 nowrap align-items-center px-2 py-2 ${activeComponent === "DataSets" ? "active" : ""}`}> 
                   <small className="text-nowrap header">DataSets</small>
                   </Link> 
                   </Nav.Item> 
                   <Nav.Item>
                   <Link to="" className={`d-flex nowrap align-items-center px-2 py-2 ${activeComponent === "Settings" ? "active" : ""}`} onClick={() => handleNavigationClick("DataSetSettings")} >
                    <small className="text-nowrap header">Settings</small>
                       </Link>
                </Nav.Item>
            </Nav>
        </div>
          
    )
}

export default CalaSideNavbar