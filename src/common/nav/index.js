import React from 'react';
import { Link } from 'react-router-dom';
import { homeChild } from '../../router';
import {
  NavWrapper,
  NavItem
} from './style';
const Nav = (props)=>{
  return (
    <NavWrapper>
      {
        homeChild.map(item=>{
          return(
            <NavItem className="active" key={item.id}>
              <Link to={item.path}>{item.text}</Link>
            </NavItem>
          )
        })
      }
    </NavWrapper>
  )
}

export default Nav;