import { Row ,Container, Col} from "react-bootstrap"
import AccountTopNavigationBar from "../../components/AccountTopNavigationBar"
import md_logo_small from "../../assets/md_logo_small.png"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { RootState } from "../../redux/store"
import { Dispatch } from "redux"
import { getUserData } from "../../redux/actions"
import "./MobileNav.css"
import CalaSideNavbar from "./CalaSideNavbar"
import DataSets from "./DataSets"
import Loader from "../../components/Loader"

  
const DataSetsPage=():JSX.Element=>{
  const dispatch:Dispatch<any> =useDispatch()
  const accessToken=useSelector((state:RootState)=>state.accessToken.accessToken)
  const user=useSelector((state:RootState)=>state.userData.data)
  
  const token=accessToken.accessToken
   
      useEffect(()=>{
        dispatch(getUserData(token))
      },[])
     
    return(
        <Container fluid className="ps-0 ms-0 pages scrollbar">
          {user && user.id ?(
            <Row className="ai-container">

          <Col md={2} className={"pe-0 d-none d-md-block hide-menu"}>
        <CalaSideNavbar user={user}/>
          </Col>
          
                <Col className="px-0 makronexa-container" md={10}>
        <div className="py-0" style={{ height: "100vh", overflowY: "scroll" }}>
                   <AccountTopNavigationBar user={user}/>
                   <div className="d-flex me-4 mb-3 mt-2 justify-content-end">
                   <img
              src={md_logo_small}
              alt="makronexa"
              style={{ width: `${50}px`, height: `${50}px`, borderRadius: "5%",objectFit:"contain" }}
              className="img_component logo"
            />
                   </div>
                   <DataSets token={token} user_id={user.id}/> 
                </div>
                </Col>
            </Row>  
            ):(
              <Loader/>
            )} 
        </Container>
    )
}

export default DataSetsPage