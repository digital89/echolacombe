import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import { PAGES } from '../constants';

const NavLink = ({
  children,
  item, // className="navbar-item"
  link, // className="navbar-link"
  to,
}) => {
  return (
    <Link
      activeClassName="navbar-item-active"
      className={classNames({
        'navbar-item': item,
        'navbar-link': link,
      })}
      to={`/${to}`}
    >
      {children}
    </Link>
  )
}

export default ({ children }) => {
  const handleClickNavbarItem = () => {
    const burger = window.document.querySelector('.navbar-burger');
    const menu = window.document.querySelector('.navbar-menu');
    if (burger && menu) {
      burger.classList.remove('is-active');
      menu.classList.remove('is-active');
    }
  }

  const handleBurgerClick = () => {
    const burger = window.document.querySelector('.navbar-burger');
    const menu = window.document.querySelector('.navbar-menu');
    if (burger && menu) {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    }
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">

        <div className="container">

          <div className="navbar-brand">
            <a className="navbar-item">
              {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
              <img src="/images/logo.svg" alt="Logo" />
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              onClick={handleBurgerClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <NavLink to="" item>
                Home
              </NavLink>

              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink to={PAGES.business.businessInitiativeFund.slug} link>
                  Business
                </NavLink>

                <div className="navbar-dropdown">
                  <NavLink to={PAGES.business.businessInitiativeFund.slug} item>
                    {PAGES.business.businessInitiativeFund.title}
                  </NavLink>
                  <a className="navbar-item">
                    Small Business Emergency Fund
                  </a>
                  <a className="navbar-item">
                    Downtown Storefront Enhancement Program
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">
                    Radio Co-Op Advertising
                  </a>
                  <a className="navbar-item">
                    Social Media Breakfast Lacombe
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">
                    Lacombe Business Toolkit
                  </a>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Community
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    Community Grants
                  </a>
                  <a className="navbar-item">
                    Community Wellness Application
                  </a>
                  {/* <hr className="navbar-divider" /> */}
                  <a className="navbar-item">
                    Merch Your Way Program
                  </a>
                  <a className="navbar-item">
                    Food Rescue
                  </a>
                </div>
              </div>

              <a class="navbar-item" href="https://www.echoenergy.ca" target="_blank">
                Echo Energy &#x279A;
              </a>

              <a class="navbar-item">
                Media
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink to={PAGES.aboutUs.default.slug} link>
                  {PAGES.aboutUs.default.title}
                </NavLink>

                <div className="navbar-dropdown">
                  <NavLink to={PAGES.aboutUs.communityEconomicDevelopmentStrategy.slug} item>
                    {PAGES.aboutUs.communityEconomicDevelopmentStrategy.title}
                  </NavLink>
                  <NavLink to={PAGES.aboutUs.boardMembers.slug} item>
                    {PAGES.aboutUs.boardMembers.title}
                  </NavLink>
                  <NavLink to={PAGES.aboutUs.termsOfReference.slug} item>
                    {PAGES.aboutUs.termsOfReference.title}
                  </NavLink>
                  <hr className="navbar-divider" />
                  <NavLink to={PAGES.aboutUs.contactUs.slug} item>
                    {PAGES.aboutUs.contactUs.title}
                  </NavLink>
                </div>
              </div>

            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <a
                  href="https://twitter.com/echoenergy14"
                  target="_blank"
                  style={{ marginRight: '10px' }}
                >
                  <img src="/images/icon-twitter.svg" height="40px" width="40px" />
                </a>
                <a
                  href="https://www.facebook.com/echolacombe/"
                  target="_blank"
                >
                  <img src="/images/icon-facebook.svg" height="40px" width="40px" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </nav>
    </>
  );
};
