import React from 'react';

import Layout from '../components/Layout';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.business.downtownBusinessEvents.title}</h1>
            <h3 className="title">🎃 1st Annual Downtown Spooktacular! 🎃</h3>
            <p className="subtitle">October 27, 5:00 - 8:00 pm</p>
            <p>Trick or Treating, Movies, Pumpkin Carving, Games, Colouring Contest, Hot Dogs, Family Fun and More!</p>
            <p>
              <span>Map </span>
              <a
                href="/files/spooktacular-map.pdf"
                target="_blank"
              >(download)</a>
              <span>:</span>
              <img src="/images/spooktacular-map.jpg" alt="Spooktacular Map" />
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
