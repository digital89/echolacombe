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
            <p>
              Page under construction...
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
