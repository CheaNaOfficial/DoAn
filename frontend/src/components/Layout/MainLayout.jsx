

// import { useEffect } from "react";
// import {Outlet,useNavigate} from "react-router-dom"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// import { IoSearch } from "react-icons/io5";
// import {BiShoppingBag,BiUser} from "react-icons/bi";
// import logokshop from '../../assets/logokshop.png';
// import Button from 'react-bootstrap/Button';
// import { MdNavigateNext } from "react-icons/md";
// import '../../Styles/StylePage/MainLayout.scss';
// import { isLogin, logout } from "../../config/helper";






// function CollapsibleExample() {

//   const navigate = useNavigate();

//   useEffect(()=>{
//     if(!isLogin()){
//       navigate("/login")
//     }
//   },[])

 

//   const ClickLogin = () =>{
//     navigate("login")
//   }
//   const ClickLogout = () =>{
//     logout();

//   }
//   // const ClickSignUp = () => {
//   //   navigate("register")
//   // }
//   const onAllCategory = () =>{
//     navigate("allcategory")
//   }

//   return (
//     <>
//      <Navbar className='header' >
//         <div className='header-top'>
//           <div className='logo'>
//             <img src={logokshop} alt="some example image" />
//           </div>
//           {/* input serch start here */}

//           <div className='search-box' >
//             {/* <input type='text' placeholder='Search here...'/>  */}
//             <table className='container-input'>
//               <tr>
//                 <td>
//                   <input type='text' style={{color:'blue'}} placeholder='Serch here...' />
//                 </td>
//                 <td className='search-icons'><IoSearch /></td>
//               </tr>
//             </table>
//           </div>  
//         </div>
//         <div> 
//             <Nav className='header-right'>
//               {/* <Nav.Link>
//                 <select style={{border:'none',background:'#fff'}}>
//                   <option>Khmer</option>
//                   <option>Enghis</option>
//                   <option>VietNam</option>
//                 </select>
//                 </Nav.Link> */}
//               <Nav.Link href="#deets" style={{color:'black'}}><BiShoppingBag /></Nav.Link>
//               <button style={{borderRadius:'25px',border:'3px solid #fd7e14'}} onClick={ClickLogin}>LOGIN</button>
//               {/* <button style={{borderRadius:'25px',border:'3px solid #fd7e14'}} onClick={ClickSignUp}>Register</button> */}
//               <button style={{borderRadius:'25px',border:'3px solid #fd7e14'}} onClick={ClickLogout}>Register</button>

//             </Nav>
//           </div>
//       </Navbar>
//     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{backgroundColor:'white'}}>
//       <Container style={{position:'sticky',boxShadow:'3px 3px 8px -3px #ddd',zIndex:1}}>
//       <Navbar.Brand href="#home"><Button style={{background:'#fd7e14',color:'#fff',border:'#fd7e14'}} onClick={onAllCategory}>All Categories <MdNavigateNext /></Button>{' '}</Navbar.Brand>

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav" >
//           <Nav className="me-auto">
//             <Nav.Link href="/" style={{color:'#fd7e14'}}>Home</Nav.Link>
//             <Nav.Link href="/about" style={{color:'black'}}>About Us</Nav.Link>
//             <Nav.Link href="/product" style={{color:'black'}}>Products</Nav.Link>
//             <NavDropdown title="Categories" id="collapsible-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Latop Mới</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">PC-Máy tính để bản</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Màn hình máy tính</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Linh kiện PC-Máy tính</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Phụ kiệ máy tính </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     <Outlet />
//     <br/>
//     <br/>
//     <br/> 
//     <br/>
//     <br/>
//     <br/>
//     {/* <FooterPage /> */}
//     </>
    
//   );
// }

// export default CollapsibleExample;




// import React from 'react'
// import {Outlet} from 'react-router-dom'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import '../../Styles/StylePage/MainLayout.scss';
// import { BsList } from "react-icons/bs";

// const MainLayout = () => {
//   return (
//     <div className='main-body'>
//       <Navbar className='main-header'>
//         <Nav className='logo'>LOGO</Nav>
//         <Nav className='navbar'>
//           <Nav.Link href="/" style={{color:'#fff',fontSize:'1.1rem',fontWeight:500,transition:'all .50s ease'}} className='top-menu'>Home</Nav.Link>
//           <Nav.Link href="/about" style={{color:'#fff',fontSize:'1.1rem',fontWeight:500,transition:'all .50s ease'}}>About us</Nav.Link>
//           <Nav.Link href="/product" style={{color:'#fff',fontSize:'1.1rem',fontWeight:500,transition:'all .50s ease'}}>Products</Nav.Link>
//         </Nav>
//         <Nav className='header-right'>
//           <Nav.Link href="/product" style={{color:'#fff',fontSize:'1.1rem',fontWeight:500,transition:'all .50s ease'}}>Cart</Nav.Link>
//           <Nav.Link href="/product" style={{color:'#fff',fontSize:'1.1rem',fontWeight:500,transition:'all .50s ease'}}>Sign In</Nav.Link>
//           <Nav.Link href="/product" style={{color:'#fff',fontSize:'1.1rem',fontWeight:500,transition:'all .50s ease'}}>Register</Nav.Link>
//         </Nav>
//         <BsList />
//       </Navbar>
      
//       <Outlet />
//     </div>
//   )
// }

// export default MainLayout;





import React, { useState } from 'react'
import '../../Styles/StylePage/MainLayout.scss';
import {Outlet,useNavigate} from 'react-router-dom'
import logokshop from '../../assets/logokshop.png';
import Button from 'react-bootstrap/Button';



import { isLogin, logout } from "../../config/helper";

const MainLayout = () => {
  const navigate = useNavigate();
  const [navbar,setNavbar] = useState(false) 
  const changeBg = () =>{
    if(window.scrollY>=100){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener("scroll",changeBg);
  const ClickLogin = () =>{
    navigate("login")
  }
  // const ClickLogout = () =>{
  //   logout();

  // }
  return (
    <div className='container'>

      <header className={
        navbar 
        ? "navbar scroll navbar-expand-sm fixed-top"
        : "navbar navbar-expand-sm fixed-top "
      
      }>
        <div className='logo'><img src={logokshop} alt="some example image" /></div>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/product'>Shop</a></li>
            <li><a href='/about'>Blog</a></li>
            <li><a href='/about'>Contact</a></li>
          </ul>   
        </nav>
        <div className='top-right'>
          <button onClick={ClickLogin}>Sign In</button>
          {/* <button onClick={ClickLogout}>Register</button> */}

        </div>
      </header>
      
      <div>
        <div style={{backgroundColor:'red',width:'100%',height:70,marginTop:'-16px',position:'fixed',zIndex:'100'}}> kkk</div>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout;
