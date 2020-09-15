import React from 'react';
import './App.css';
import {ReactNavbar} from "react-responsive-animate-navbar";
import '../node_modules/react-responsive-animate-navbar/dist/index';

class App extends React.Component{
  render(){
    return(
    <div id="contendor-nav">
      <ReactNavbar
        color="#10266b"
        logo="https://manzana.jumex.com.mx/qao_tienda_jumex/Content/Assets/Images/logo.png"
        social={[
          
        ]}
        menu={[
          { name: "Inicio", to: "/" },
          { name: "Productos", to: "/articles" },
          { name: "Nosotros", to: "/about" },
          { name: "Inciar Sesión", to: "/contact" },
        ]}
        
      />
    </div>
    );
  }
}

export default App;
