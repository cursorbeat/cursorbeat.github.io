import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from '../../styles/layout/HeaderStyles';
import '../../styles/layout/hamburgers.css';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";
import CursorBeat from '../../../static/content/images/CursorBeat.svg';

const Header = () => {
  // set boolean state and listen for scroll events
  // isScrolled value sent to <HeaderWrapper> styled component
  let [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', e => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        setIsScrolled((isScrolled = true));
      } else {
        setIsScrolled((isScrolled = false));
      }
    });
  }, []);

/*   const data = useStaticQuery(graphql`
    query {      
      styledImg: file(relativePath: { regex: "/.*(CursorBeat.png)$/" })
        {
          childImageSharp {            
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }    
  `); */
            {/* <Img
              fluid={data.styledImg.childImageSharp.fluid}
              alt="CursorBeat.dev Blog"
            /> */}

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
                About Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
