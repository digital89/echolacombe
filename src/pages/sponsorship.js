import React from 'react';

import Layout from '../components/Layout';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.sponsorship.default.title}</h1>
            <h2>Template subtitle...</h2>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
