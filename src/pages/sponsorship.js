import React from 'react';

import { contactEmail, contactPhone, contactPhoneRaw } from '../../cms/data';
import ExternalArrow from '../components/ExternalArrow';
import Layout from '../components/Layout';
import { PAGES, FORM_LINKS } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.business.sponsorship.titleNav}</h1>
            <p>
              <span>
                Echo Lacombe looks to support local events, groups and facilities that align with
                our vision and principles.
              </span>{' '}
              <span>
                If you have an opportunity you'd like to make us aware of, please fill out the form below.
              </span>
            </p>
            <p>
              <a
                href={FORM_LINKS.sponsorship}
                target="_blank"
                rel="noreferrer"
              >
                <button className="button is-info is-large">
                  Apply Here! <ExternalArrow />
                </button>
              </a>
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
