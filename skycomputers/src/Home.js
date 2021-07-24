import React,{useState} from 'react'
import '../src/Home.css';
import { AiFillPhone,AiFillMessage, AiFillTwitterCircle,AiFillFacebook,} from "react-icons/ai";
import { FaInstagramSquare,FaGooglePlus,FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillStopwatchFill,BsFillPeopleFill, } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { Button,Navbar,Container,Nav,NavDropdown,Carousel,Card } from 'react-bootstrap';
import bbsydp from '../src/images/bbsydp.jpg'
import ms1 from '../src/images/ms1.png'
import msoffice from '../src/images/msoffice.jpg'
import bbsydp1 from '../src/images/bbsydp1.jpg'
import mscourse from '../src/images/mscourse.png'
import DIT1 from '../src/images/DIT1.jpg'
import swingstiching from '../src/images/swingstiching.jpg'
import english from '../src/images/english.jpg'
import graphic from '../src/images/graphic.jpg'
import { Link } from 'react-router-dom';
import logo from '../src/images/logo.jpeg'
import stev from '../src/images/stev.png'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gallery from '../src/images/gallery.jfif'
import gallery1 from '../src/images/gallery1.jfif'

const Home=()=>{
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
            
            {/* <h3 className="HeaderText">  <AiFillPhone/></h3>
            &nbsp;
            
            <h6 className="HeaderText">0333-3851527</h6>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="header">
                
            <h3 className="HeaderText">  <BsFillStopwatchFill/></h3>

                <h6 className="HeaderText">Mon-Sat 9:00 AM - 9:00 PM</h6>
            </div> */}
        </div>
     
 
        {/* <div >
          <div style={{display:'flex'}} >
      
          <div style={{paddingLeft:"10%"}}>
                <img src={stev}  alt="logo" style={{width:"30%",}} /> 
            </div>
            <div style={{paddingRight:"10%"}}>
                <img src={logo}  alt="logo" style={{width:"20%",}} /> 
            </div>
          </div>
           
              
            
            
           
           

          
        </div> */}
        <div className="headernav">
            <Navbar collapseOnSelect expand='lg' 
             bg="success"  variant="light" 
             fixed='center'
            >
            {/* <NavBrand text={brand.text} /> */}
            <Navbar.Toggle aria-controls='responsive-navbar-nav'  />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'  className="bg-light justify-content-center" style={{ flex: 1}}>
                    <Nav.Link as={Link} to='/' href=''>
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
                    <Nav.Link as={Link} to='/Scholer' href='/Scholer'>
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
            
        {/* <div> */}
        <Carousel fade expend="lg">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bbsydp}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ms1}
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bbsydp1}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
<div className="NewsFeed">

    <marquee width="100%" direction="left" height="30px" onMouseOver="this.stop();" onMouseOut="this.start();" scrolldelay="0" scrollamount="4">
      Online Addmition is Now Open please Visit Our Office Sky Computer Dhoronaro <a href="#">more detail</a>
    </marquee>
</div>
<div className="courses">
  <h1 className="coursesText">OUR COURSES</h1>
</div>
<div className="course">
<div class="card" style={{width: '18rem'}}>
  <img src={mscourse} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">MS OFFICE</h5>
    <p class="card-text"> 6 Months Course</p>
    <a href="#" class="btn btn-primary">View More</a>
  </div>
</div>
<div class="card" style={{width: '18rem'}}>
  <img src={DIT1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Diploma In IT</h5>
    <p class="card-text">1 Year(2 Semsester)</p>
    <a href="#" class="btn btn-primary">View More</a>
  </div>
</div>

</div>
<div className="course">
<div class="card" style={{width: '18rem'}}>
  <img src={mscourse} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">MS OFFICE</h5>
    <p class="card-text"> 6 Months Course</p>
    <a href="/CIt" class="btn btn-primary">View More</a>
  </div>
</div>
<div class="card" style={{width: '18rem'}}>
  <img src={DIT1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Diploma In IT</h5>
    <p class="card-text">1 Year(2 Semsester)</p>
    <a href="#" class="btn btn-primary">View More</a>
  </div>
</div>

</div>
{/* GALLERY */}
<div className="galleryHeader">
    <h1>GALLERY</h1>
  </div> 
  <Container>
  <Row className="justify-content-md-center">
    <Col xs={12} sm={8} md={4}>
      <Image src={gallery } thumbnail />
    </Col>
    <Col xs={12} sm={4} md={4}>
      <Image src={gallery } thumbnail />
    </Col>
    
    <Col xs={12} sm={4} md={4}>
      <Image src={gallery } thumbnail />
    </Col>
  </Row>
</Container>
<div style={{justifyContent:'center',textAlign:'center'}}>
<Button variant="danger">View More</Button>
</div>

<div style={{height:"100%",backgroundColor:"blue"}}>
<Container>
<Row>
  <Col xs={6} sm={4} md={3}>
  <h5 style={{color:'whitesmoke'}}>ABOUT US</h5>
  <div ><p style={{color:'whitesmoke'}} >sky computer center work since from 2016 with highly qualified Education uder the supervision of expriancesd person this center give you more and more eduacation about your Carear</p></div>
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
{/* <div  className="coursesImg">
<div class="card" style={{width: "18rem"}} expend="bg">
  <img src={msoffice} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style={{width: "18rem"}} expend="bg">
  <img src={msoffice} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div> */}

{/* <div className="coursesImg">
<Card style={{ width: '10rem' ,marginBottom:20 }} className="box" expend="lg">
  <Card.Img variant="top" src={mscourse} />
  <Card.Body>
    <Card.Title>MICROSOFT OFFICE</Card.Title>
    <Card.Text>
      <div className="courseduration">

        <p className="HeaderText">  <BsFillStopwatchFill/></p> <p>6 Months</p>
      </div>

    </Card.Text>
    <Button variant="primary">View More</Button>
  </Card.Body>
</Card>
<Card style={{ width: '10rem',marginBottom:20 ,marginLeft:120   }}>
  <Card.Img variant="top" style={{width:'10rem',height:'10rem'}} src={swingstiching} />
  <Card.Body>
    <Card.Title>SWING & STICHING</Card.Title>
    <Card.Text>
      <div className="courseduration">

        <p className="HeaderText">  <BsFillStopwatchFill/></p> <p>6 Months</p>
      </div>

    </Card.Text>
    <Button variant="primary">View More</Button>
  </Card.Body>
</Card>
<Card style={{ width: '10rem' ,marginBottom:20,marginLeft:120 }} expend="lg" >
  <Card.Img variant="top" style={{width:'10rem',height:'10rem'}} src={DIT1} />
  <Card.Body>
    <Card.Title>DIPLOMA IN IT</Card.Title>
    <Card.Text>
      <div className="courseduration">

        <p className="HeaderText">  <BsFillStopwatchFill/></p> <p>12 Months</p>
      </div>

    </Card.Text>
    <Button variant="primary" style={{top:40}}>View More</Button>
  </Card.Body>
</Card>

  </div >
  <div className="coursesImg">
<Card style={{ width: '10rem' ,marginBottom:20 }} expend="lg">
  <Card.Img variant="top" src={english} />
  <Card.Body>
    <Card.Title>ENGLISH</Card.Title>
    <Card.Text>
      <div className="courseduration">

        <p className="HeaderText">  <BsFillStopwatchFill/></p> <p>6 Months</p>
      </div>

    </Card.Text>
    <Button variant="primary">View More</Button>
  </Card.Body>
</Card>
<Card style={{ width: '10rem',marginBottom:20 ,marginLeft:120   }} expend="lg">
  <Card.Img variant="top" style={{width:'10rem',height:'10rem'}} src={graphic}  expend="lg"/>
  <Card.Body>
    <Card.Title>GRAPHIC DESIGN</Card.Title>
    <Card.Text>
      <div className="courseduration">

        <p className="HeaderText">  <BsFillStopwatchFill/></p> <p>6 Months</p>
      </div>

    </Card.Text>
    <Button variant="primary">View More</Button>
  </Card.Body>
</Card>
<Card style={{ width: '10rem' ,marginBottom:20,marginLeft:120 }} expend="lg" >
  <Card.Img variant="top" style={{width:'10rem',height:'10rem'}} src={DIT1} />
  <Card.Body>
    <Card.Title>DIPLOMA IN IT</Card.Title>
    <Card.Text>
      <div className="courseduration">

        <p className="HeaderText">  <BsFillStopwatchFill/></p> <p>12 Months</p>
      </div>

    </Card.Text>
    <Button variant="primary" style={{top:40}}>View More</Button>
  </Card.Body>
</Card>


  </div >
  <div className="Achievment">
    <div >
      <h1 className="coursesText">OUR ACHIVEMENTS</h1>
      <h3>Here you can review some statistics about SKY Computers Center</h3>
 
    </div>
    <div >
        <div style={{marginLeft:430}} className="courseduration">
          <AiFillMessage size={50} />
        <div style={{marginLeft:150}}>
          <BsFillPeopleFill size={50}/>
        </div>
        <div style={{marginLeft:200}}>
          <BsFillPeopleFill size={50}/>
        </div>


      </div>
   
    </div>
    <div >
        <div style={{marginLeft:420}} className="courseduration">
         
           <h3>ENQUIRY</h3>
          

        <div style={{marginLeft:80}} className="courseduration">
         
        <h3>STUDENTS</h3>

        </div>
        <div style={{marginLeft:100}} className="courseduration">
        <h3>TEACHERS</h3>

        </div>


      </div>
   
    </div>
    <div >
        <div style={{marginLeft:420}} className="courseduration">
         
           <h3 className="coursedurationText">2000</h3>
          

        <div style={{marginLeft:170}} className="courseduration">
         
        <h3 className="coursedurationText">35,70</h3>

        </div>
        <div style={{marginLeft:170}} className="courseduration">
        <h3 className="coursedurationText">10</h3>

        </div>


      </div>
   
    </div>

     

   
    
    

  </div>
  <div className="galleryHeader">
    <h1>GALLERY</h1>
  </div> */}
  

        {/* </div> */}
        
        {/* <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
        </div> */}
        </>
    )
}
export default Home