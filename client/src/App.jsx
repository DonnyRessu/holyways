import { useContext, useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Profile from './pages/profile'
import DetailDonate from './pages/detailDonate'
import RaiseFund from './pages/raiseFund.Jsx'
import ViewFund from './pages/viewFund'
import FormFund from './pages/formFund'
import Register from './components/modal/register'
import Login from './components/modal/login'
import Donate from './components/modal/donation'
import Approve from './components/modal/approve'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/userContext'
import { API, setAuthToken } from './config/api'
import { PrivateRouteLogin } from './private-route/privateRoutes'


function App() {
  const [count, setCount] = useState(0)
  let navigate = useNavigate();
  const [userState, userDispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      if (userState.isLogin === false) {
        navigate('/');
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');
      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;
      // Send data to useContext
      userDispatch({
        type: 'USER_SUCCESS',
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      console.log('check user failed : ', error);
      userDispatch({
        type: 'AUTH_ERROR',
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail-donate/:id' element={<DetailDonate/>} />
            <Route element={<PrivateRouteLogin/>}>
              <Route path='/profile' element={<Profile/>} />
              <Route path='/raise-fund' element={<RaiseFund/>} />
              <Route path='/view-fund' element={<ViewFund/>} />
              <Route path='/form-fund' element={<FormFund/>} />
              <Route path='/donate' element={<Donate/>} />
              <Route path='/approve' element={<Approve/>} />
            </Route>
        </Routes>
    </>
  )
}

export default App