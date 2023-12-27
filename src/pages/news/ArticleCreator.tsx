import { Row ,Container, Col} from "react-bootstrap"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { useParams } from "react-router-dom"
import { getUserData } from "../../redux/actions"
import { RootState } from "../../redux/store"
import CalaSideNavbar from "../cala/CalaSideNavbar"
import AccountTopNavigationBar from "../../components/AccountTopNavigationBar"
import ArticleInput from "./components/ArticleInput"
import MobileNav from "../../components/MobileNav"
  
const ArticleCreator=():JSX.Element=>{
  const dispatch:Dispatch<any> =useDispatch()
  const user=useSelector((state:RootState)=>state.userData.data)
  const accessToken=useSelector((state:RootState)=>state.accessToken.accessToken)
   const {user_id}=useParams()
      useEffect(()=>{
        dispatch(getUserData(accessToken.accessToken))
      },[])
    return(
        <Container fluid className="ps-0  ms-0 pages scrollbar">
            <Row className="ai-container">
                <MobileNav/>
          <Col md={2} className={"pe-0 d-none d-md-block hide-menu"}>
        <CalaSideNavbar user_id={user?.id || user_id} user_role={user?.role}/>
          </Col>
                <Col className="px-0 makronexa-container" md={10}>
        <div className="py-0" style={{ height: "100vh", overflowY: "scroll" }}>
                   <AccountTopNavigationBar user={user}/>
                   <div className="pt-5">
                <ArticleInput/>
                   </div>
                </div>
                </Col>
            </Row>   
        </Container>
    )
}

export default ArticleCreator