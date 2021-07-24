import React from "react";
// import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import '../src/Dashbord.css'
import '../src/Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button,Navbar,Container,Nav,NavDropdown,Carousel,Card } from 'react-bootstrap';
// import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
// import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Visibility
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import USER from '../src/images/USER.jpg'
import book from '../src/images/book.jpg'


// import '../src/Home.css';


const Sidebar = props => {
   

    return (
        <>
        <div style={{display:'flex'}}>
            <div style={{marginLeft:50}}>
            <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">lOGO</h3>
          <ul className="sidebarList">
            {/* <Link to="/" className="link"> */}
            <li className="sidebarListItem active">
              {/* <LineStyle className="sidebarIcon" /> */}
             USERS
            </li>
            {/* </Link> */}
            <li className="sidebarListItem">
              {/* <Timeline className="sidebarIcon" /> */}
              BOOKS
            </li>
            <li className="sidebarListItem">
              {/* <TrendingUp className="sidebarIcon" /> */}
              AUTHER
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              BLOCKED
            </li>
          </ul>
        </div>
        <div style={{height:'100%'}}>
        <li className="sidebarListItem">
              {/* <TrendingUp className="sidebarIcon" /> */}
              CHANGE PASSWORD
            </li>
        </div>
        <div style={{height:'100%'}}>
        <li className="sidebarListItem">
              {/* <TrendingUp className="sidebarIcon" /> */}
              LOGOUT
            </li>
        </div>
                
        
      </div>
    </div>


 
            {/* <Nav className="col-md-100 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Logo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">User </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Book</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Auther</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Bloack</Nav.Link>
            </Nav.Item>
            </Nav> */}
            </div>


    
            <div style={{marginLeft:50}}>
                <h3>Dashboard</h3>
                <div  style={{display:'flex'}}>

                <div className="widgetSm">
                    {/* <span className="widgetSmTitle">New Join Members</span> */}
                    <ul className="widgetSmList">
                        <li className="widgetSmListItem">
                        <img
                        src={USER}

                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                          <span className="widgetSmUsername">Muhammad Ismail</span>
                            {/* <span className="widgetSmUserTitle">100</span> */}
                            <p>100</p>
                        </div>
          
                        </li>
        
                    </ul>
                </div>
                
                <div className="widgetSm">
                    {/* <span className="widgetSmTitle">New Join Members</span> */}
                    <ul className="widgetSmList">
                        <li className="widgetSmListItem">
                        <img
                        src={book}

                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                          <span className="widgetSmUsername">BOOKS</span>
                            {/* <span className="widgetSmUserTitle">100</span> */}
                            <p>90</p>
                        </div>
          
                        </li>
        
                    </ul>
                </div>
                
                <div className="widgetSm">
                    {/* <span className="widgetSmTitle">New Join Members</span> */}
                    <ul className="widgetSmList">
                        <li className="widgetSmListItem">
                        <img
                        src={USER}

                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                          <span className="widgetSmUsername">AUTHER</span>
                            {/* <span className="widgetSmUserTitle">100</span> */}
                            <p>89</p>
                        </div>
          
                        </li>
        
                    </ul>
                </div>
                
                <div className="widgetSm">
                    {/* <span className="widgetSmTitle">New Join Members</span> */}
                    <ul className="widgetSmList">
                        <li className="widgetSmListItem">
                        <img
                        src={USER}

                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                          <span className="widgetSmUsername">BLOCKED</span>
                            {/* <span className="widgetSmUserTitle">100</span> */}
                            <p>10</p>
                        </div>
          
                        </li>
        
                    </ul>
                </div>
                
                    
            </div>
            </div>
           

          
                </div>
        </>
        );
  };
//   const Sidebar = withRouter(Side);
  export default Sidebar