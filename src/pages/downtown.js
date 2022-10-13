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
            <h3>1st Annual Downtown Spooktacular!</h3>
            <p>October 27, 5:00 - 8:00 pm</p>
            <p>Trick or Treating, Movies, Pumpkin Carving, Games, Colouring Contest, Hot Dogs, Family Fun and More!</p>
            <p>More details and map coming soon!</p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
