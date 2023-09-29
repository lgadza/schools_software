import { Row ,Container, Col} from "react-bootstrap"
import MainSidebar from "../components/MainSidebar"
import AccountTopNavigationBar from "../components/AccountTopNavigationBar"
import { useEffect, useState } from "react"
import AllCandidates from "./admin/AllCandidates"
import AllNewCandidate from "./admin/AddNewCandidate"
import ResourceUploadForm from "./cala/ResourceUploadForm"
import CALAOverView from "./cala/Dashboard"
// import MakronexusAI from "../components/MakronexusAI"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { getUserData } from "../redux/actions"
import AdminDashboard from "./admin/AdminDashboard"
// import Settings from "./cala/DataSetSettings"
interface Resource {
    id: number;
    title: string;
    thumbnail: string;
    description:string;
    reviews:[];
    rating:number
  }
  const resources:Resource[] = [
    { id: 1, title: 'Resource 1', thumbnail: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',description:"",reviews:[],rating:3},
    { id: 2, title: 'Resource 2', thumbnail: 'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg',description:"",reviews:[],rating:3},
    
  ];

const Pages=():JSX.Element=>{
  const dispatch:Dispatch<any> =useDispatch()
  const user=useSelector((state:RootState)=>state.userData.data)
  const accessToken=useSelector((state:RootState)=>state.accessToken.accessToken)
    const [showMenu, setShowMenu] = useState(true);
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    const [activeComponent,setActiveComponent]=useState<string>("MakronexusAI")

    const handleNavigationClick=(component:string)=>{
        setActiveComponent(component)
    }
const [addResources, setAddResources] = useState<Resource[]>([]);

    const handleResourceUpload = (title: string, description:string, file: File,) => {
        const newResource: Resource = {
          id: addResources.length + 1,
          title,
          thumbnail: URL.createObjectURL(file),
          description,
          rating: 0,
          reviews: [],
        };
        setAddResources([...resources, newResource]);
      };
      useEffect(()=>{
        dispatch(getUserData(accessToken.accessToken))
      },[])
    return(
        <Container fluid className="ps-0 ms-0 pages scrollbar">
            <Row>
                 {/* <Col md={2} className={showMenu?"":" hide-menu md-1"} >
                <MainSidebar 
                toggleMenu={toggleMenu} 
                showMenu={showMenu}
                 source="studentSchoolAccount"
                    activeComponent={activeComponent}
                    handleNavigationClick={handleNavigationClick}
                 />    
                </Col> */}
          <Col md={2} className={showMenu ? "pe-0":"pe-0 hide-menu md-1"}>
                   <div className="px-0" style={{ height: "100vh", overflowY: "scroll" }}>
            <MainSidebar
              toggleMenu={toggleMenu}
              showMenu={showMenu}
              source="studentSchoolAccount"
              activeComponent={activeComponent}
              handleNavigationClick={handleNavigationClick}
            />
        </div>
          </Col>
                <Col className="ps-0 all-pages pe-3">
        <div className="py-0" style={{ height: "100vh", overflowY: "scroll" }}>
                   <AccountTopNavigationBar user={user}/>
                   <div className="px-5">
                  { activeComponent ==="dashboard" && <CALAOverView/>}
                  { activeComponent ==="AllStudents" && <AllCandidates/>  }
                  { activeComponent ==="StudentAdmissions" && <AllCandidates/>  }
                  { activeComponent ==="NewCandidate" && <AllNewCandidate/> }
                
                  { activeComponent ==="ResourceUploadForm" && <ResourceUploadForm onResourceUpload={handleResourceUpload}/> }
                  {/* { activeComponent ==="MakronexusAI" && <MakronexusAI/> } */}
                  { activeComponent ==="adminDashboard" && <AdminDashboard/>}
                </div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Pages