import { Row ,Container, Col} from "react-bootstrap"
import AccountTopNavigationBar from "../../components/AccountTopNavigationBar"
import { useEffect } from "react"
import MakronexusAI from "../../components/MakronexusAI"
import { useSelector,useDispatch } from "react-redux"
import { RootState } from "../../redux/store"
import { Dispatch } from "redux"
import { getUserData } from "../../redux/actions"
import "./MobileNav.css"
import CalaSideNavbar from "./CalaSideNavbar"
import { useParams } from "react-router-dom"
  
const Makronexa=():JSX.Element=>{
  const dispatch:Dispatch<any> =useDispatch()
  const user=useSelector((state:RootState)=>state.userData.data)
  const accessToken=useSelector((state:RootState)=>state.accessToken.accessToken)
   const {user_id}=useParams()
      useEffect(()=>{
        dispatch(getUserData(accessToken.accessToken))
      },[])
    return(
        <Container fluid className="ps-0 ms-0 pages scrollbar">
            <Row className="ai-container">
          <Col md={2} className={"pe-0 d-none d-md-block hide-menu"}>
        <CalaSideNavbar user_id={user?.id || user_id} user_role={user?.role}/>
          </Col>
                <Col className="px-0 makronexa-container" md={10}>
        <div className="py-0" style={{ height: "100vh", overflowY: "scroll" }}>
                   <AccountTopNavigationBar user={user}/>
                   <MakronexusAI/> 
                </div>
                </Col>
            </Row>   
        </Container>
    )
}

export default Makronexa