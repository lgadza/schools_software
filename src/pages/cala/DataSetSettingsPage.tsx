import { Row ,Container, Col} from "react-bootstrap"
import AccountTopNavigationBar from "../../components/AccountTopNavigationBar"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { RootState } from "../../redux/store"
import { Dispatch } from "redux"
import { getUserData } from "../../redux/actions"
import "./MobileNav.css"
import CalaSideNavbar from "./CalaSideNavbar"
import DataSetSettings from "./DataSetSettings"
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader"


  
const DataSetSettingsPage=():JSX.Element=>{
  const dispatch:Dispatch<any> =useDispatch()
  const user=useSelector((state:RootState)=>state.userData.data)
  const accessToken=useSelector((state:RootState)=>state.accessToken.accessToken)
  const navigate = useNavigate();
  const { user_id } = useParams();
      useEffect(()=>{
        if(!accessToken){
          navigate("/login")
        }else{
          dispatch(getUserData(accessToken.accessToken))
        }
      },[dispatch, accessToken, navigate])
      
    return(
        <Container fluid className="ps-0 ms-0 pages scrollbar">
            <Row className="ai-container">
          <Col md={2} className={"pe-0 d-none d-md-block hide-menu"}>
        <CalaSideNavbar user_id={user?.id || user_id}/>
          </Col>
                <Col className="px-0 makronexa-container" md={10}>
        <div className="py-0" style={{ height: "100vh", overflowY: "scroll" }}>
                   <AccountTopNavigationBar user={user}/>
                   <DataSetSettings user_id={user?.id || user_id} token={accessToken.accessToken}/> 
                   <Loader/>
                </div>
                </Col>
            </Row>   
        </Container>
    )
}

export default DataSetSettingsPage