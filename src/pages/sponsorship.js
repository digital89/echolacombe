import React from 'react';

import { contactEmail, contactPhone, contactPhoneRaw } from '../../cms/data';
import Layout from '../components/Layout';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.sponsorship.default.title}</h1>
            <p>
              <span>
                Echo Lacombe looks to support local events, groups and facilities that align with
                our vision and principles.
              </span>{' '}
              <span>
                If you have an opportunity you'd like to make us aware of, please contact us at
              </span>{' '}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              <span> or </span>
              <a href={`tel:${contactPhoneRaw}`}>{contactPhone}</a>.
            </p>
            <p>
              <img src="/images/arena-ice-sponsor.jpg" alt="Arena Ice Sponsor" />
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
