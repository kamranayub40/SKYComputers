import '../src/Home.css';
import React,{useState} from 'react'
import Image from 'react-bootstrap/Image'
import { AiFillPhone,AiFillMessage, AiFillTwitterCircle,AiFillFacebook,} from "react-icons/ai";
import { FaInstagramSquare,FaGooglePlus,FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillStopwatchFill,BsFillPeopleFill, } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { Button,Navbar,Container,Nav,NavDropdown,Carousel,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aboutimage from '../src/images/aboutimage.png'
import men2 from '../src/images/men2.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import trade from '../src/images/trade.jpg';
import bbshydp from '../src/images/bbshydp.jfif';
import stev from '../src/images/stev.png';
import profille from '../src/images/profille.jpg'
import NAEEM from '../src/images/NAEEM.jpeg'
import wazir from '../src/images/wazir.jpg'

const OnlineAddmition=()=>{
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
        
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return(
        <>
        
        <div className="header">
        <h3 style={{color:'white'}}>SKY COMPUTERS DHORONARO</h3>
          
        
      </div>
       <div className="headernav">
       <Navbar collapseOnSelect expand='lg' 
        bg="success"  variant="light" 
        fixed='center'
       >
       {/* <NavBrand text={brand.text} /> */}
       <Navbar.Toggle aria-controls='responsive-navbar-nav'  />
       <Navbar.Collapse id='responsive-navbar-nav'>
           <Nav className='mr-auto'  className="bg-light justify-content-center" style={{ flex: 1}}>
               <Nav.Link as={Link} to='/' href='/'>
                   HOME
               </Nav.Link>
               <Nav.Link as={Link} to='/about'>
                 ABOUT
               </Nav.Link>

   <NavDropdown title="COURSES" 
   id="basic-nav-dropdown"
   show={show}
     onMouseEnter={showDropdown} 
      onMouseLeave={hideDropdown}
   
   >
     <NavDropdown.Item href="/Dit">DIT </NavDropdown.Item>
     <NavDropdown.Divider />

     <NavDropdown.Item href="#action/3.2">CIT </NavDropdown.Item>
     <NavDropdown.Divider />

     <NavDropdown.Item href="#action/3.3">SWING & STITCHING</NavDropdown.Item>
     <NavDropdown.Divider />
     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
   </NavDropdown>

               <Nav.Link as={Link} to='/OnlineAddmition' href='/OnlineAddmition'>
                   ONLINE ADDMITIONS
               </Nav.Link>
               <Nav.Link as={Link} to='/tacos' href='/tacos'>
                   SCHOLERS
               </Nav.Link>
               <Nav.Link as={Link} to='/tacos' href='/tacos'>
                   CONTECT US
               </Nav.Link>
           </Nav>
       </Navbar.Collapse>
   </Navbar>
       <br />


       </div>
       <div className="diHeader" style={{display:'flex',alignItem:'baseline'}}>
           <h4 className="diHeaderText">ONLINE ADDMITION</h4>
           <h6 className="diHeadersubText"> <BsFillStopwatchFill/> Duration: 1year Total Price : 24,000 </h6>
       </div>
       <div className="aboutTitle">
           <h4>Fill Your Detail Below</h4>
           
            
       </div>
       <div style={{display:'flex',marginLeft:'10%'}}>

            <div>
                <p style={{margin:0,display:'flex'}}>Full Name<p style={{color:'red',margin:0}}>*</p></p>
                <p><input placeholder="Enter Your Name"/></p>
            </div>
            <div style={{marginLeft:'10%'}}>
                <p style={{margin:0,display:'flex'}}>Father Name<p style={{color:'red',margin:0}}>*</p></p>
                <p><input placeholder="Enter Father Name"/></p>
            </div>
       </div>
       <div style={{display:'flex',marginLeft:'10%'}}>

            <div>
                <p style={{margin:0,display:'flex'}}>Email<p style={{color:'red',margin:0}}>*</p></p>
                <p><input placeholder="Enter your Email "/></p>
            </div>
            <div style={{marginLeft:'10%'}}>
                <p style={{margin:0,display:'flex'}}>Phone<p style={{color:'red',margin:0}}>*</p></p>
                <p><input placeholder="Enter Your Phone Number"/></p>
            </div>
        </div>
        <div style={{marginLeft:'10%'}}>
        <p style={{margin:0,display:'flex'}}>Address<p style={{color:'red',margin:0}}>*</p></p>
            <textarea placeholder="Your Full Address"/>
        </div>
        <div style={{display:'flex',marginLeft:'10%'}}>

        <div>
            <p style={{margin:0,display:'flex'}}>Education<p style={{color:'red',margin:0}}>*</p></p>
            <p><input placeholder="Enter your Email "/></p>
        </div>
        <div style={{marginLeft:'10%'}}>
            <p style={{margin:0,display:'flex'}}>Course Interested<p style={{color:'red',margin:0}}>*</p></p>
            <p><form>
                <select id="country" name="country">
                <option value="DIT">DIT</option>
                <option value="CIT">CIT</option>
                <option value="SWING & STICHING">SWING & STICHING</option>
                </select>
            </form></p>
        </div>
        </div>
        <div style={{marginLeft:'10%'}}>
        <p style={{margin:0,display:'flex'}}>Referance<p style={{color:'red',margin:0}}>*</p></p>
            <input  placeholder="Referance"/>
        </div>
        <div style={{marginLeft:'10%'}}>
        <p style={{margin:0,display:'flex'}}>Pay<p style={{color:'red',margin:0}}>*</p></p>
        <p><form>
                <select id="pay" name="Pay">
                <option value="Later">Pay Later via  Easy Paisa Mobile</option>
                <option value="Online">Pay Online using EasyPay</option>
                </select>
            </form></p>
        </div>
        <div style={{marginLeft:'10%'}}>

            <p style={{color:'red',margin:0}}>Our Easy Paisa Account:03420683798</p>
        </div>
        <p style={{marginLeft:'10%',color:'grey'}}>After payment send a confirmation message or ( Screenshot) on whatsapp: 0333851527 </p>

        <div style={{marginLeft:'10%'}}>
        <p style={{margin:0,display:'flex'}}>Amount<p style={{color:'red',margin:0}}>*</p></p>
            <input  placeholder="Amount"/>
        </div>
        <div style={{marginLeft:'25%',paddingTop:'3%'}}>
        <Button variant="danger">SUBMIT</Button>
        </div>

       
        
        {/* <div className="inputContainer">
        </div>
        <div className="inputContainer">
        </div>
        <div className="inputContainer">
        </div> */}
        </>
    )
}
export default OnlineAddmition