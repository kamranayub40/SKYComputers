import '../src/Home.css';
import { AiFillPhone,AiFillMessage,} from "react-icons/ai";
import { BsFillStopwatchFill,BsFillPeopleFill} from "react-icons/bs";
import { Button,Navbar,Container,Nav,NavDropdown,Carousel,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home2 =()=>{
    return(
        <>
        <div className="header">
            
            <h3 className="HeaderText">  <AiFillPhone/></h3>
            &nbsp;
            
            <h6 className="HeaderText">0333-3851527</h6>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="header">
                
            <h3 className="HeaderText">  <BsFillStopwatchFill/></h3>

                <h6 className="HeaderText">Mon-Sat 9:00 AM - 9:00 PM</h6>
            </div>
        </div>
        <div className="HeaderName">
            <h1 >SKY </h1>
            <h2 >Computers </h2>
            <Navbar collapseOnSelect expand='sm'
             bg='dark' variant='dark' fixed='top'>
            {/* <NavBrand text={brand.text} /> */}
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link as={Link} to='/assiettes' href='/assiettes'>
                        ASSIETTES
                    </Nav.Link>
                    <Nav.Link as={Link} to='/pizzas'>
                        PIZZAS
                    </Nav.Link>

                    <Nav.Link as={Link} to='/sandwichs' href='/sandwichs'>
                        SANDWICHS
                    </Nav.Link>

                    <Nav.Link as={Link} to='/tacos' href='/tacos'>
                        TACOS
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

            

        </div>
        </>
     
    )

}
export default Home2