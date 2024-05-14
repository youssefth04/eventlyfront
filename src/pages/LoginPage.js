import React,{Component} from "react";
import Footer from "../component/Footer/Footer";
import Login from "../component/Login/Login";

class LoginPage extends Component{

    render(){
        return(
            <>
         <Login/>
      <Footer/>
      </>

        );
    }
}
export default LoginPage;