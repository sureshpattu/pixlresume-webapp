import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Header - all page simple header
 */
class Header extends React.Component {
  /**
   * constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * returns JSX
   * @return {html}
   */
  render() {
    const iconBars = [1, 2, 3];
    const {isLoggedIn} = this.props;
    return (
      <header className="header_pg">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                {iconBars.map((icon, index) => (<span className="icon-bar" key={index}/>))}
              </button>
              <Link href='/'>
                <a className="navbar-brand" title="PixlResume Home Page">
                  <img src="/img/logo-normal.svg" alt="PixlResume Logo"/>
                </a>
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li className={isLoggedIn ? 'hide' : null}>
                  <Link href="/login">
                    <a title="Login into PixlResume" className="btn">Login</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Header;
