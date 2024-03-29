import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import { PAGES } from '../constants';
import ExternalArrow from './ExternalArrow';

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
  );
};

const C = ({ children }) => {
  const handleClickNavbarItem = () => {
    const burger = window.document.querySelector('.navbar-burger');
    const menu = window.document.querySelector('.navbar-menu');
    if (burger && menu) {
      burger.classList.remove('is-active');
      menu.classList.remove('is-active');
    }
  };

  const handleBurgerClick = (event) => {
    event.preventDefault();
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
            <div className="navbar-brand-div">
              <NavLink item to="">
                <img src="/images/logo.svg" alt="Logo" />
              </NavLink>
            </div>

            <a
              aria-expanded="false"
              aria-label="menu"
              className="navbar-burger"
              href="/"
              onClick={handleBurgerClick}
              role="button"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              {/* <NavLink item to="">
                Home
              </NavLink> */}

              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink link to={PAGES.business.businessInitiativeFund.slug}>
                  {PAGES.business.default.title}
                </NavLink>

                <div className="navbar-dropdown">
                  <NavLink item to={PAGES.business.businessInitiativeFund.slug}>
                    {PAGES.business.businessInitiativeFund.title}
                  </NavLink>
                  <NavLink item to={PAGES.business.smallBusinessEmergencyFund.slug}>
                    {PAGES.business.smallBusinessEmergencyFund.title}
                  </NavLink>
                  <NavLink item to={PAGES.business.downtownBusinessEvents.slug}>
                    {PAGES.business.downtownBusinessEvents.title}
                  </NavLink>
                  <NavLink item to={PAGES.business.downtownStorefrontEnhancementProgram.slug}>
                    {PAGES.business.downtownStorefrontEnhancementProgram.title}
                  </NavLink>
                  <NavLink item to={PAGES.business.sponsorship.slug}>
                    {PAGES.business.sponsorship.titleNav}
                  </NavLink>
                  <NavLink item to={PAGES.business.radioCoopAdvertising.slug}>
                    {PAGES.business.radioCoopAdvertising.title}
                  </NavLink>
                  <hr className="navbar-divider" />
                  <a
                    className="navbar-item"
                    href="https://smblacombe.ca"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Social Media Breakfast Lacombe <ExternalArrow />
                  </a>
                  <a
                    className="navbar-item"
                    href="https://lacombe.ecdev.org"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Lacombe Business Toolkit <ExternalArrow />
                  </a>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink link to={PAGES.community.communityGrants.slug}>
                  {PAGES.community.default.title}
                </NavLink>

                <div className="navbar-dropdown">
                  <NavLink item to={PAGES.community.communityGrants.slug}>
                    {PAGES.community.communityGrants.title}
                  </NavLink>
                  <NavLink item to={PAGES.community.communityWellnessApplication.slug}>
                    {PAGES.community.communityWellnessApplication.title}
                  </NavLink>
                  <hr className="navbar-divider" />
                  <NavLink item to={PAGES.community.foodRescue.slug}>
                    {PAGES.community.foodRescue.title}
                  </NavLink>
                  <NavLink item to={PAGES.community.merchYourWayProgram.slug}>
                    {PAGES.community.merchYourWayProgram.title}
                  </NavLink>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink link to={PAGES.media.news.slug}>
                  {PAGES.media.default.title}
                </NavLink>

                <div className="navbar-dropdown">
                  <NavLink item to={PAGES.media.news.slug}>
                    {PAGES.media.news.title}
                  </NavLink>
                  <NavLink item to={PAGES.media.gallery.slug}>
                    {PAGES.media.gallery.title}
                  </NavLink>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink link to={PAGES.aboutUs.default.slug}>
                  {PAGES.aboutUs.default.title}
                </NavLink>

                <div className="navbar-dropdown">
                  <NavLink item to={PAGES.aboutUs.communityEconomicDevelopmentStrategy.slug}>
                    {PAGES.aboutUs.communityEconomicDevelopmentStrategy.title}
                  </NavLink>
                  <NavLink item to={PAGES.aboutUs.boardMembers.slug}>
                    {PAGES.aboutUs.boardMembers.titleNav}
                  </NavLink>
                  <NavLink item to={PAGES.aboutUs.termsOfReference.slug}>
                    {PAGES.aboutUs.termsOfReference.titleNav}
                  </NavLink>
                </div>
              </div>

              <a
                className="navbar-item"
                href="https://www.echoenergy.ca"
                rel="noreferrer"
                target="_blank"
              >
                <b>
                  Echo Energy <ExternalArrow />
                </b>
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <a
                  href="https://twitter.com/echoenergy14"
                  rel="noreferrer"
                  target="_blank"
                  style={{ marginRight: '10px' }}
                >
                  <img
                    src="/images/icon-twitter.svg"
                    alt="Twitter Icon"
                    height="40px"
                    width="40px"
                  />
                </a>
                <a href="https://www.facebook.com/echolacombe/" rel="noreferrer" target="_blank">
                  <img
                    src="/images/icon-facebook.svg"
                    alt="Facebook Icon"
                    height="40px"
                    width="40px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .navbar-brand-div:hover {
              background-color: #FAFAFA;
            }
          `,
        }}
      />
    </>
  );
};

export default C;
