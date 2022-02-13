import React from 'react';

import Layout from '../components/Layout';
import { PAGES } from '../constants';

export default () => {
  return (
    <>
      <Layout>
        <section class="section">
          <div className="container">
            <h1 class="title">{PAGES.business.businessInitiativeFund.title}</h1>
            <h2 class="subtitle">
              A simple container to divide your page into{' '}
              <strong>sections</strong>, like the one you're currently reading.
            </h2>
          </div>
        </section>
      </Layout>
    </>
  );
};
