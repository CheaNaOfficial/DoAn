

import React from 'react'
import '../../Styles/StylePage/FooterPage.scss'
import { CgMail } from "react-icons/cg";
import { BsTelephonePlus } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

const FooterPage = () => {
  const navigate = useNavigate();


  return (
    <div>
      <div className="Footer" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>K-</span>SHOP</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"><a href='https://www.facebook.com/profile.php?id=61550118221646'><BsFacebook /></a></i>
                                <i class="fa-brands fa-twitter"><a href='https://web.telegram.org/k/'><FaTelegramPlane /></a></i>
                                <i class="fa-brands fa-instagram"><a href='https://www.linkedin.com/in/na-chea-0849452b4/'><BsInstagram /></a></i>
                                <i class="fa-brands fa-linkedin-in"><a href='https://www.linkedin.com/in/na-chea-0849452b4/'><ImLinkedin2 /></a></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                            <li className="nav-item">
                                    <a className="" href="/">Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/product">Laptop MSI</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/monitors">Monitors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/mouse">Mouse</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/mouse">HP</a>
                                </li><li className="nav-item">
                                    <a className="" href="/mouse">Acer</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/mouse">Dell</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/mouse">Asus Rog Strix</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/mouse">MackBook</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Liên Hệ</h5>
                            <p><CgMail />  +84 347089842</p>
                            <p><BsTelephonePlus />  na.c190152@sis.hust.edu.vn</p>
                            <p><IoLocationOutline /><a href="https://maps.app.goo.gl/1Zt1Z75BUDTMys6Y9" style={{textDecoration:'none',color:'#fff'}}>23 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội  </a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p style={{color:'#fff'}}>Design By Chea Na © 2024</p>
            </div>
    </div>
  )
}

export default FooterPage
