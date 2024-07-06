import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/landingpage';
import Login from './pages/login';
import Signup from './pages/signup';
import Otp from './pages/otp';
import UserHome from './pages/userhome';
import ClientHome from './pages/client/Home';
import ClientProfile from './pages/employee/Profile';
import Navbar from './components/Employee/profileSidebar';
import EmployeeOutlet from './components/Employee/accountLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landingpage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/otp/:id' element={<Otp />} />
        <Route exact path='/userhome' element={<UserHome />} />
        <Route exact path='/clienthome' element={<ClientHome />} />
        <Route path='/employee/account' element={<EmployeeOutlet />}>
          <Route index element={<ClientProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
