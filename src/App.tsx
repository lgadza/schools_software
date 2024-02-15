import"./styles/index.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./components/Page404.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import News from '../src/pages/news/News.jsx'
// import Students from '../src/pages/students/Students.jsx'
// import LibraryPage from './pages/library/LibraryPage.js'
// import CheckoutsPage from './pages/library/CheckoutsPage.js'
import Login from './components/Login.js'
import MssRegisterPage from './components/MssRegisterPage.js'
import StudentAccountPage from './pages/admissionsManagement/student/account/StudentAccountPage.js'
// import CalaPage from './pages/cala/CalaPage.js'
import Pages from './pages/Pages.js'
import SchoolAccountLogin from './components/SchoolAccountLogin.js'
import Page404 from './components/Page404.js'
import MakroHomePage from './pages/Home/MakroHomePage.js'
import Features from './pages/Home/Features/Features.js'
import AdmissionManagement from './pages/Home/Features/AdmissionManagement.js'
import CALAFeature from './pages/Home/Features/CALA.js'
import Makronexa from "./pages/cala/Makronexa.js"
import Plans from "./pages/Home/Plans.js"
import DataSetsPage from "./pages/cala/DataSetsPage.js"
import DataSetSettingsPage from "./pages/cala/DataSetSettingsPage.js"
import EmailVerification from "./components/EmailVerification.js"
import Loader from "./components/Loader.js"
import AccountDeletionConfirmation from "./components/AccountDeletionConfirmation.js"
import MakronexaDataset from "./pages/cala/MakronexaDataset.js"
import AboutUs from "./pages/Home/AboutUs.js"
import AIDetector from "./pages/cala/AIDetector.js"
import PartnerShips from "./pages/Home/Features/partership/PartnerShips.js"
import News from "./pages/news/News.js"
import NewsDetailRead from "./pages/news/NewsDetailRead.js"
import ArticleCreator from "./pages/news/ArticleCreator.js"
import CelebrationPage from "./pages/CelebrationPage.js"

// mss makro_school_solution
function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
       <Route path="about" element={<AboutUs/>}/>
       {/* <Route path="cala" element={<CalaPage/>}/> */}
       {/* <Route path="news" element={<News/>}/> */}
       {/* <Route path="students" element={<Students/>}/> */}
       {/* <Route path="library" element={<LibraryPage/>}/> */}
       {/* <Route path="checkouts" element={<CheckoutsPage/>}/> */}
        <Route path="/" element={<MakroHomePage/>}/>
        <Route path="register" element={<MssRegisterPage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="plans" element={<Plans/>}/>
        <Route path="news/:erfer" element={<NewsDetailRead/>}/>
        <Route path="features" element={<Features/>}/>
        <Route path="news" element={<News/>}/>
        <Route path="partnership" element={<PartnerShips/>}/>
        <Route path="features/admission_management" element={<AdmissionManagement/>}/>
        <Route path="features/makronexa" element={<CALAFeature/>}/>
        <Route path=":user_role/account/:user_id" element={<Pages/>}/>
        {/* <Route path=":user_role/account/:user_id" element={<Pages/>}/> */}
       <Route path="school_account/login" element={<SchoolAccountLogin/>}/>
       <Route path="users/account/:id" element={<StudentAccountPage/>}/>
       {/* <Route path="/ask.makronexus.com/:user_id" element={<Makronexa/>}/> */}
       <Route path="ask/:user_id" element={<Makronexa/>}/>
       <Route path="article/:user_id" element={<ArticleCreator/>}/>
       <Route path="ask/:user_id/detect_text" element={<AIDetector/>}/>
       <Route path="/:user_id/datasets" element={<DataSetsPage/>}/>
       <Route path="/:user_id/datasets/:dataset_name/:dataset_id/ask" element={<MakronexaDataset/>}/>
       <Route path="/:user_id/datasets/:dataset_id" element={<DataSetSettingsPage/>}/>
       <Route path="/celebration" element={<CelebrationPage/>}/>
       <Route path="user/account/delete/confirmation" element={<AccountDeletionConfirmation/>}/>
       <Route element={<EmailVerification />}
              path={`user/verifyEmail/:user_id/:user_name`}
            />
       <Route path='loader' element={<Loader/>} />
       <Route path='*' element={<Page404/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
