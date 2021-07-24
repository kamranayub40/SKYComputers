import React,{useState} from 'react'
import '../src/Home.css';
import Image from 'react-bootstrap/Image'
import { AiFillPhone,AiFillMessage, AiFillTwitterCircle,AiFillFacebook,} from "react-icons/ai";
import { FaInstagramSquare,FaGooglePlus,FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillStopwatchFill,BsFillPeopleFill, } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { Button,Navbar,Container,Nav,NavDropdown,Carousel,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import image from '../src/images/aboutimage.png'
import men2 from '../src/images/men2.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import trade from '../src/images/trade.jpg';
import bbshydp from '../src/images/bbshydp.jfif';
import stev from '../src/images/stev.png';
import profille from '../src/images/profille.jpg'
import NAEEM from '../src/images/NAEEM.jpeg'
import wazir from '../src/images/wazir.jpg'





const Scholer=()=>{
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
               <Nav.Link as={Link} to='/Scholer'>
                 Scholer
               </Nav.Link>

   <NavDropdown title="COURSES" 
   id="basic-nav-dropdown"
   show={show}
     onMouseEnter={showDropdown} 
      onMouseLeave={hideDropdown}
   
   >
     <NavDropdown.Item href="/Dit">Diploma in IT</NavDropdown.Item>
          <NavDropdown.Divider />

          <NavDropdown.Item href="/CIt">MS Office </NavDropdown.Item>
          <NavDropdown.Divider />

          <NavDropdown.Item href="/Swing">Swing & Stitching</NavDropdown.Item>
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
       <div className="AbouHeader">
           <h3 className="AbouHeaderText">SCHOLERS</h3>
       </div>
       <div className="ScholerTitle">
           <h4 >Most Shinning Scholars of SKY</h4>
            
       </div>
      
        <div>
        <div className="galleryHeader">
  </div> 
 
        </div>
        <div className="affiliation" style={{marginLeft:"10%"}}>
       </div>
       <div style={{marginLeft:"10%"}}>
           <h4 >OUR SKILLED INSTRUCTOR</h4>
           <Container>
  <Row className="justify-content-md-center">
    <Col xs={12} sm={8} md={4}>
      <Image src={wazir} thumbnail />
      <h6 style={{color:'orange'}}>WAZIR ALI RAJAR</h6>
      <p>Senior Ms Office Expert & Trainer  </p>
    </Col>
    <Col xs={12} sm={8} md={4}>
      <Image src={NAEEM} thumbnail />
      <h6 style={{color:'orange'}} >NAEEM CHOPAN</h6>
           <p>MS Office & Graphic Design Expert</p>
    </Col>
    <Col xs={12} sm={4} md={4}>
      <Image src={profille } thumbnail />
      <h6 style={{color:'orange'}}>KAMRAN AYOUB</h6>
           <p>Android & Web devloper</p>
    </Col>
  </Row>
</Container>


        </div>
{/* footer */}
        <div style={{height:"100%",backgroundColor:"blue"}}>
<Container>
<Row>
  <Col xs={6} sm={4} md={3}>
  <h5 style={{color:'whitesmoke'}}>Scholer US</h5>
  <div ><p style={{color:'whitesmoke'}} >sky computer center work since from 2016 with highly qualified Education uder the supervision of expriancesd person this center give you more and more eduacation Scholer your Carear</p></div>
  </Col>
  <Col xs={6} sm={4} md={3}>
   <h5 style={{color:'whitesmoke'}}> CONNECT WITH US</h5>
   <div >
     <a href="#"> <AiFillTwitterCircle size={30} color="white"/></a>
     <a href="#"> <AiFillFacebook size={30} color="white"/></a>
     <a href="#"><FaInstagramSquare size={30} color="red"/></a>
     <a href="#"><FaGooglePlus size={30} color="white"/></a>


     
   </div>
  </Col>
  <Col xs={6} sm={4} md={3}>
  <h5 style={{color:'whitesmoke'}}>CONTECTS</h5>
  <div style={{display:'flex'}}>
  <BiPhone size={20} style={{color:'whitesmoke'}} /> <h6 style={{color:'whitesmoke'}}>+92333851527</h6>

  </div>
  <div style={{display:'flex'}}>
  <FaWhatsapp size={20} style={{color:'whitesmoke'}} /> <h6 style={{color:'whitesmoke'}}>+92333851527</h6>

  </div>
  <div style={{display:'flex'}}>
  <MdEmail size={20} style={{color:'whitesmoke'}} /> <h6 style={{color:'whitesmoke'}}>info@skycomputers.com</h6>

  </div>
  </Col>
  <Col xs={6} sm={4} md={3}>
  <h5 style={{color:'whitesmoke'}}>WORKING HOURS</h5>
  <div style={{display:'flex'}}>
    <p style={{color:"white"}}>MON-FRI</p>
    <p style={{color:"white",marginLeft:50}}>9:00Am-5:00pm</p>
    </div>
    <div style={{display:'flex'}}>
    <p style={{color:"white",}}>Saturday</p>
    <p style={{color:"white",marginLeft:50}}>11:00 Am-4:00Pm</p>
    </div>
    <div style={{display:'flex'}}>
    <p style={{color:"white"}}>Sunday</p>
    <p style={{color:"white",marginLeft:50}}>Closed</p>
    </div>
  </Col>
</Row>

</Container>


</div>
   
   </>

    
          
    )
}
export default Scholer