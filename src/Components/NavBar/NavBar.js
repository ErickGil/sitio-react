import React from 'react'
import "materialize-css/dist/css/materialize.min.css";
import { MenuResponsive } from './utilsNav/menuResponsive';
import logo from "../../assets/img/logo.jpeg";
import {Dropdown} from "./utilsNav/dropdown";
import CartWidget from "../Cartwidget/CartWidget";
import { Link } from 'react-router-dom';




const  NavBar = () => {

    return (
        <>
{/* ---formato del nav-- */}
            <div className="navbar-fixed ">
              <nav  style={style.estilosNav}>
                <div className="nav-wrapper" style={style.alinecion}>
                  <Link to="/" style={style.estilosImagen}>
                    <img style={style.estilosImagen} src={logo} alt="logo" className="brand-logo center" /> 
                  </Link>
                  <Link data-target="mobile-demo" className="sidenav-trigger "  ><MenuResponsive/></Link> 
                  <ul className="right hide-on-med-and-down">
                    <li><Link to="/" style={style.esitlosLetras} >Inicio</Link></li>
                    <li><Link to="/Sobre_Nosotros" style={style.esitlosLetras}  >Sobre Nosotros</Link></li>
                    <li style={style.esitlosLetras}><Dropdown/></li>
                    <li style={style.esitlosLetras}><Link to={"/carrito"}> <CartWidget /></Link></li>
                  </ul>
                </div>
              </nav>
            </div>
        </>
    );
}

const style = {
  estilosNav:{
    height: "135px",
    backgroundColor: "#00416a",
  },
  estilosImagen:{
    height: "inherit",
    borderRadius: "30px",
  },
  esitlosLetras:{
    fontSize: "1.3rem",
    paddingLeft:"10px",
  },
  alinecion:{
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
  },
  
};




export default  NavBar