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
                <span>Jared Reich (Jared Reich – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:jared@echolacombe.ca">jared@echolacombe.ca</a>
              </li>
              <li>
                <span>Jana Fafard (Vice-President – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:jana@echolacombe.ca">jana@echolacombe.ca</a>
              </li>
              <li>
                <span>Thalia Hibbs (Director – City of Lacombe Council representative)</span>
                <span> - </span>
                <a href="mailto:thalia@echolacombe.ca">thalia@echolacombe.ca</a>
              </li>
              <li>
                <span>
                  David Jeffrey (Director - David Jeffrey – Burman University representative)
                </span>
                <span> - </span>
                <a href="mailto:david@echolacombe.ca">david@echolacombe.ca</a>
              </li>
              <li>
                <span>Thor (Director Burnham – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:thor@echolacombe.ca">thor@echolacombe.ca</a>
              </li>
              <li>
                <span>Kim Kay (Director – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:kim@echolaocmbe.ca">kim@echolaocmbe.ca</a>
              </li>
              <li>
                <span>Barb Walker (Director – Member at Large representative)</span>
                <span> - </span>
                <a href="mailto:barb@echolacombe.ca">barb@echolacombe.ca</a>
              </li>
              <li>
                <span>
                  Guy Lapointe (Facilitator – City of Lacombe - Director of Community Services)
                </span>
                <span> - </span>
                <a href="mailto:guy@echolacombe.ca">guy@echolacombe.ca</a>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
