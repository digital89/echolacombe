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
                <span>
                  Iwalani Post (Facilitator – City of Lacombe - Director of Community Services)
                </span>
                <span> - </span>
                <a href="mailto:iwalani@echolacombe.ca">iwalani@echolacombe.ca</a>
              </li>
              <li>
                <span>Jared Reich (President – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:jared@echolacombe.ca">jared@echolacombe.ca</a>
              </li>
              <li>
                <span>Barb Walker (Vice-President – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:barb@echolacombe.ca">barb@echolacombe.ca</a>
              </li>
              <li>
                <span>Thalia Hibbs (Director – City of Lacombe Council representative)</span>
                <span> - </span>
                <a href="mailto:thalia@echolacombe.ca">thalia@echolacombe.ca</a>
              </li>
              <li>
                <span>David Jeffrey (Director – Burman University representative)</span>
                <span> - </span>
                <a href="mailto:david@echolacombe.ca">david@echolacombe.ca</a>
              </li>
              <li>
                <span>Kim Kay (Director – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:kim@echolaocmbe.ca">kim@echolaocmbe.ca</a>
              </li>
              <li>
                <span>Nadine Waterfield (Director – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:nadine@echolacombe.ca">nadine@echolacombe.ca</a>
              </li>
              <li>
                <span>Jonathan Luscombe (Director – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:jonathan@echolacombe.ca">jonathan@echolacombe.ca</a>
              </li>
              <li>
                <span>Mazen Aljarrah (Director – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:mazen@echolacombe.ca">mazen@echolacombe.ca</a>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
