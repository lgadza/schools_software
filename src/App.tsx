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

// mss makro_school_solution
function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
       {/* <Route path="cala" element={<CalaPage/>}/> */}
       {/* <Route path="news" element={<News/>}/> */}
       {/* <Route path="students" element={<Students/>}/> */}
       {/* <Route path="library" element={<LibraryPage/>}/> */}
       {/* <Route path="checkouts" element={<CheckoutsPage/>}/> */}
        <Route path="/" element={<MakroHomePage/>}/>
        <Route path="register" element={<MssRegisterPage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="plans" element={<Plans/>}/>
        <Route path="features" element={<Features/>}/>
        <Route path="features/admission_management" element={<AdmissionManagement/>}/>
        <Route path="features/makronexa" element={<CALAFeature/>}/>
        <Route path=":user_role/account/:user_id" element={<Pages/>}/>
       <Route path="school_account/login" element={<SchoolAccountLogin/>}/>
       <Route path="account/:id" element={<StudentAccountPage/>}/>
       <Route path="/ask.makronexus.com/:user_id" element={<Makronexa/>}/>
       <Route path="ask/:user_id" element={<Makronexa/>}/>
       <Route path="/:user_id/datasets" element={<DataSetsPage/>}/>
       <Route path="/:user_id/datasets/:dataset_id" element={<DataSetSettingsPage/>}/>
       <Route
              element={<EmailVerification />}
              path={`user/verifyEmail/:user_id/:user_name`}
            />
       <Route path='*' element={<Page404/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
