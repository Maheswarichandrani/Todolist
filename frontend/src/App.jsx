import {Routes,Route,Navigate} from 'react-router-dom';
import Home from "./Pages/Home";
import Authpage from './Pages/Authpage';
import Login from './Pages/Login';
import SignIn from './Pages/SignIn'
import AllTasks from './Pages/AllTasks';
import PersonalTasks from './Pages/PersonalTasks';
import WishlistTasks from './Pages/WishlistTasks';
import WorkTasks from './Pages/WorkTasks';
import BirthdayTasks from './Pages/BirthdayTasks';
import Starttasks from './Pages/Starttasks';
import Profile from './Pages/Profile';
import Themes from './Pages/Themes';
import themeStore from './store/themeStore';
import { useEffect } from 'react';
import axios from 'axios';


function App() {

   const {theme,userInfos,setUserInfo} = themeStore();

   const PrivateRoutes = ({ children }) => {
      const {userInfos} = themeStore();
      return !!userInfos ? children : <Navigate to='/auth/login'/>
   }

   const AuthRoutes = ({ children }) => {
      const { userInfos } = themeStore();
      return !!userInfos ? <Navigate to='/' /> : children;
   }

   useEffect(() => {

      ( async() => {
         try {
            const response = await axios.get('http://localhost:5000/api/user/check-auth',{withCredentials: true})
            if(response.status === 200){
               if(!userInfos){
                  setUserInfo(response.data.user)
               }
            }
         } catch (error) {
            console.log(error.message)
         }
      })() 
     },[userInfos,setUserInfo])

   useEffect(() => {
      document.documentElement.className = `theme-${theme}`;
  }, [theme]);


  return (
   <>
      <Routes>
         <Route path = '/' element={<PrivateRoutes><Home/></PrivateRoutes>}/>
         <Route path='/auth' element = {<Authpage/>}>
            <Route path='login' element = {<AuthRoutes><Login/></AuthRoutes>}/>
            <Route path='register' element = {<AuthRoutes><SignIn/></AuthRoutes>}/>
            <Route index element={<AuthRoutes><Login/></AuthRoutes>}/>
         </Route>
         <Route path='/all' element={<PrivateRoutes><AllTasks/></PrivateRoutes>}/>
         <Route path='/personal' element={<PrivateRoutes><PersonalTasks/></PrivateRoutes>}/>
         <Route path='/wishlist' element={<PrivateRoutes><WishlistTasks/></PrivateRoutes>}/>
         <Route path='/work-tasks' element={<PrivateRoutes><WorkTasks/></PrivateRoutes>}/>
         <Route path='/birthday' element = {<PrivateRoutes><BirthdayTasks/></PrivateRoutes>}/>
         <Route path='/star' element={<PrivateRoutes><Starttasks/></PrivateRoutes>}/>
         <Route path='/profile' element={<PrivateRoutes><Profile/></PrivateRoutes>}/>
         <Route path='/theme' element={<PrivateRoutes><Themes/></PrivateRoutes>}/>
      </Routes>
   </>
  );
}
export default App