import React from 'react';

import Layout from '../components/Layout';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.aboutUs.boardMembers.title}</h1>
            <ul>
              <li>
                <span>President (Jared Reich – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:jared@echolacombe.ca">jared@echolacombe.ca</a>
              </li>
              <li>
                <span>Vice-President (Jana Fafard – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:jana@echolacombe.ca">jana@echolacombe.ca</a>
              </li>
              <li>
                <span>Director (Thalia Hibbs – City of Lacombe Council representative)</span>
                <span> - </span>
                <a href="mailto:thalia@echolacombe.ca">thalia@echolacombe.ca</a>
              </li>
              <li>
                <span>Director (David Jeffrey – Burman University representative)</span>
                <span> - </span>
                <a href="mailto:david@echolacombe.ca">david@echolacombe.ca</a>
              </li>
              <li>
                <span>Director (Thor Burnham – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:thor@echolacombe.ca">thor@echolacombe.ca</a>
              </li>
              <li>
                <span>Director (Drayton Bussiere – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:drayton@echolacombe.ca">drayton@echolacombe.ca</a>
              </li>
              <li>
                <span>Director (Kim May – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:kim@echolaocmbe.ca">kim@echolaocmbe.ca</a>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
