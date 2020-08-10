import React, { useState } from 'react';
import { IoIosContact, IoMdHome, IoMdMail, IoIosPaper, IoIosEasel, IoIosFlask } from "react-icons/io";
import { Link } from 'react-router-dom';

import './styles.css';

function PageHeader() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  function handleExpandNav() {
    let nav = document.getElementById('navbar') as HTMLElement;
    let container = document.getElementsByClassName('container') as HTMLCollectionOf<HTMLElement>;

    const screenSize = window.screen.width;

    if (screenSize >= 700) {
      nav.style.width = '200px';
      container[0].style.width = 'calc(100vw - 200px)';
      container[0].style.marginLeft = 'calc(200px - 6rem)';
      setIsNavExpanded(true);
    }
  }

  function handleNormalNav() {
    let nav = document.getElementById('navbar') as HTMLElement;
    let container = document.getElementsByClassName('container') as HTMLCollectionOf<HTMLElement>;

    const screenSize = window.screen.width;

    if (screenSize >= 700) {
      nav.style.width = '6rem';
      container[0].style.width = 'calc(100vw - 6rem)';
      container[0].style.marginLeft = '0';
      setIsNavExpanded(false);
    }
  }

  function handleResizeScreen() {
    let size = window.screen.width;
    let nav = document.getElementById('navbar') as HTMLElement;

    if (size < 700) {
      nav.style.width = `${size}`;
    }
  }

  document.addEventListener('resize', handleResizeScreen);

  return (
    <header>
      <nav id="navbar" className="navbar" onMouseOver={handleExpandNav} onMouseOut={handleNormalNav}>
        <img src="https://avatars1.githubusercontent.com/u/13500056?s=460&u=e73f08c55c50debdb8a27c038d3b68af30e01fdd&v=4" alt="Walisson Silva"/>
        {isNavExpanded && 'Walisson Silva'}
        <div className="nav-items">
          <Link to="/">
            <button type="button">
              <IoMdHome />
              {isNavExpanded && 'Home'}
            </button>
          </Link>
          
          <Link to="/sobre">
            <button type="button">
              <IoIosContact />
              {isNavExpanded && 'Sobre'}
            </button>
          </Link>
          
          <Link to="/papers">
            <button type="button">
              <IoIosPaper />
            </button>
          </Link>
          
          <Link to="/cursos">
            <button type="button">
              <IoIosEasel />
            </button>
          </Link>
          
          <Link to="/blog">
            <button type="button">
              <IoIosFlask />
            </button>
          </Link>
          
          <Link to="/contato">
            <button type="button">
              <IoMdMail />
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;