'use strict';

import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Link to='/' className='navbar-brand'>
            <i className="fa fa-paper-plane"> </i> react-redux-base
          </Link>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/linkA'>
              <NavItem eventKey={1}>Link A</NavItem>
            </LinkContainer>
            <LinkContainer to='/linkB'>
              <NavItem eventKey={2}>Link B</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
