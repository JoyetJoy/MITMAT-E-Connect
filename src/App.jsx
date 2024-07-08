import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/landingpage';
import Login from './pages/login';
import Signup from './pages/signup';
import Otp from './pages/otp';
import UserHome from './pages/userhome';
import ClientHome from './pages/client/Home';
import ClientProfile from './pages/employee/Profile';
import ChangePassword from './pages/employee/changePassword';
import AccountLayout from './components/Employee/accountLayout';
import Layout from './components/auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landingpage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/otp/:id' element={<Otp />} />

        {/* Protected Routes */}
        <Route element={<Layout />}>
          <Route exact path='/userhome' element={<UserHome />} />
          <Route exact path='/clienthome' element={<ClientHome />} />

          <Route path='/employee' element={<AccountLayout />}>
            <Route path='account' element={<ClientProfile />} />
            <Route path='changepassword' element={<ChangePassword />} />
          </Route>

          <Route path='/client'>
            {/* Add client-specific protected routes here */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
