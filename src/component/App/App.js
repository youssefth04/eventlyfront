import React,{ Component} from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import LandigPage from "../../pages/LandingPage"
import DashboardPage from "../../pages/DashboardPage"
import LoginPage from "../../pages/LoginPage"
import SignUpPage from "../../pages/SignUpPage";
import ProtectedRoutes from "../utils/ProtectedRoutes";

import './App.css';
import OrgaPage from "../../pages/OrgaPage";


class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <Routes >
                <Route index element={<LandigPage/>} />
                <Route path='/home'  element={<LandigPage/>}/>
                <Route path="/authentification" element={<LoginPage/>}/>
                <Route path="/inscription" element={<SignUpPage/>}/>
                <Route element={<ProtectedRoutes/>}>
                <Route path='/dashboard'  element={<DashboardPage/>}/>
                <Route path="/organizer" element={<OrgaPage/>}/>
                </Route>


                </Routes>
            </BrowserRouter>
        );
    }
}
export default App;