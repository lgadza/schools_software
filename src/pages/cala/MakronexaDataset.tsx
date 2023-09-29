import { Row ,Container, Col} from "react-bootstrap"
import AccountTopNavigationBar from "../../components/AccountTopNavigationBar"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { RootState } from "../../redux/store"
import { Dispatch } from "redux"
import { getUserData } from "../../redux/actions"
import "./MobileNav.css"
import CalaSideNavbar from "./CalaSideNavbar"
import AskDataset from "../../components/AskDataset"
  
const MakronexaDataset=():JSX.Element=>{
  const dispatch:Dispatch<any> =useDispatch()
  const user=useSelector((state:RootState)=>state.userData.data)
  const accessToken=useSelector((state:RootState)=>state.accessToken.accessToken)
   
      useEffect(()=>{
        dispatch(getUserData(accessToken.accessToken))
      },[])
    return(
        <Container fluid className="ps-0 ms-0 pages scrollbar">
            <Row className="ai-container">
          <Col md={2} className={"pe-0 d-none d-md-block hide-menu border-round"}>
        <CalaSideNavbar user={user}/>
          </Col>
                <Col className="px-0 makronexa-container" md={10}>
        <div className="py-0" style={{ height: "100vh", overflowY: "scroll" }}>
                   <AccountTopNavigationBar user={user}/>
                   <AskDataset/>
                </div>
                </Col>
            </Row>   
        </Container>
    )
}

export default MakronexaDataset