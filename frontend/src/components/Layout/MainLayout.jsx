import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FooterPage from "../Footer/FooterPage"

import { IoSearch } from "react-icons/io5";
import { BiLogIn, BiShoppingBag, BiUser } from "react-icons/bi";
import logokshop from "../../assets/logokshop.png";
import Button from "react-bootstrap/Button";
import { MdNavigateNext } from "react-icons/md";
import "../../Styles/StylePage/MainLayout.scss";
import { isLogin, logout } from "../../config/helper";
import { Space,Badge,Avatar } from "antd";
import CartPage from "../../pages/CartPage";
import { useCart } from "../../Context/CartContext";
import { TokenRequest, request } from "../../config/request";

import { FaCartArrowDown } from "react-icons/fa";





function CollapsibleExample() {
  const navigate = useNavigate();
 const [list,setList] = useState([])



  useEffect(() => {
    if (!isLogin()) {
      navigate("/login");
    }

  }, []);

  const ClickLogin = () => {
    navigate("login");
  };
  const ClickLogout = () => {
    logout();
  };
  // const ClickSignUp = () => {
  //   navigate("register")
  // }
  const onAllCategory = () => {
    navigate("allcategory");
  };
const ClickRegister = () => {
  navigate("/register")
}

const { cartCount ,setCartCount } = useCart();

useEffect(()=>{
  const getList = async () => {
    const res = await request('category/getlist', 'get',{});
  
    if (res) {
      setList(res.list);
    }
  };
 
  getList()
},[])


  return (
    <div>
      <Navbar className="header" style={{ position: "fixed", zIndex: 100}}>
        <div className="header-top">
          <div className="logo">
            <img src={logokshop} alt="some example image" />
          </div>
          {/* input serch start here */}

          <div className="search-box">
            {/* <input type='text' placeholder='Search here...'/>  */}
            <table className="container-input">
              <tr>
                <td>
                  <input
                    type="text"
                    style={{ color: "blue" }}
                    placeholder="Serch here..."
                   
                  />
                </td>
                <td className="search-icons">
                  <IoSearch className="btn-icons"  />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <Nav className="header-right" style={{marginLeft:'960px'}}>
            {/* <Nav.Link>
                <select style={{border:'none',background:'#fff'}}>
                  <option>Khmer</option>
                  <option>Enghis</option>
                  <option>VietNam</option>
                </select>
                </Nav.Link> */}
            <Nav.Link href="/cart" style={{ color: "black" }}> <BiShoppingBag  style={{width:'20',height:20}}/></Nav.Link>
              <Space size="middle"  >
                <Badge count={cartCount} showZero >
                  <BiShoppingBag className="icons-top" shape="square" size="large"  />

                </Badge>
              </Space>
            <button
              style={{ border: "none", marginLeft: 20, background: "none" }}
              onClick={ClickLogin}
            >
              LOGIN
            </button>
            {/* <button style={{borderRadius:'25px',border:'3px solid #fd7e14'}} onClick={ClickSignUp}>Register</button> */}
            <button
              style={{
                borderRadius: "25px",
                backgroundColor: "#fd7e14",
                border: "3px solid #fd7e14",
                marginLeft: 20,
                color: "white",
              }}
              onClick={ClickRegister}
            >
              Register
            </button>
          </Nav>
        </div>
      </Navbar>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        style={{
          backgroundColor: "white",
          position: "fixed",
          zIndex: 100,
          marginTop: "90px",
          width: "78%",
          marginLeft: "190px",
        }}
      >
        <Container className="header-container" style={{ boxShadow: "3px 3px 8px -3px #ddd", zIndex: 1 }}>
          <Navbar.Brand href="#home">
            <Button
              style={{
                background: "#fd7e14",
                color: "#fff",
                border: "#fd7e14",
              }}
              onClick={onAllCategory}
            >
              All Categories <MdNavigateNext />
            </Button>{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: "#fd7e14" }}>
                Home
              </Nav.Link>
              <Nav.Link href="/about" style={{ color: "black" }}>
                About Us
              </Nav.Link>
              {/* <Nav.Link href="/product" style={{ color: "black" }}>
                Products
              </Nav.Link> */}
              <NavDropdown title="Products" id="collapsible-nav-dropdown">
              {list.map((item) => (
    <NavDropdown.Item href={`/product/${item.Id}`}>
        {item.Name}
    </NavDropdown.Item>
))}

               
              
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FooterPage />
    </div>
  );
}

export default CollapsibleExample;

