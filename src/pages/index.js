import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames'

import {
  email,
} from '../../cms/data';
import {
  items as galleryItems,
} from '../../cms/gallery'
import Layout from "../components/Layout";
import styles from '../styles';
import { imagePathToSmallImagePath } from '../utilities';

const urlify = (text) => {
  const regex = /(https?:\/\/[^\s]+)/gi
  return text.replace(regex, match => (
    `<a href="${match}" target="_blank" rel="noopener noreferrer">${match}</a>`
  ))
}

const emailify = (text) => {
  // eslint-disable-next-line no-useless-escape
  const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/gi
  return text.replace(regex, match => `<a href="mailto:${match}">${match}</a>`)
}

const IndexPage = () => {
  const gallery = useRef(null);

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
      <Layout>
        <div>hello</div>

        <footer className="footer">
          <div className="content has-text-centered">
            <div>
              <span>© Echo Lacombe Association</span>
              <span> - </span>
              <a
                href="https://digital89.com"
                title="Website by Digital89"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website by <strong>Digital89</strong>
              </a>
            </div>
          </div>
        </footer>
      </Layout>
    </>
  );
};

export default IndexPage;
