import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import useScrollListener from '../../utils/useScrollListener';
import { HeaderWrapper } from '../../styles/layout/HeaderStyles';
import '../../styles/layout/hamburgers.css';
import CursorBeat from '../../../static/content/images/CursorBeat.svg';

const Header = () => {
  // set boolean state and listen for scroll events
  // isScrolled value sent to <HeaderWrapper> styled component
  let isScrolled = useScrollListener();

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <div className="navContainer">
        <div id="logo">
          <Link className="logo" to="/">
            <img src={CursorBeat} title="CursorBeat.dev Blog" alt="CursorBeat.dev Blog" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link activeClassName="activePage" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/tutorials">
                Tutorials
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
