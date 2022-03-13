import React from 'react';

import Layout from '../components/Layout';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.business.radioCoopAdvertising.title}</h1>
            <p>
              <img src="/images/radio-coop-advertising.jpg" alt="Radio Co-Op Advertising" />
            </p>
            <p>
              Want to let people know about your fabulous business while stretching your advertising
              dollars?
            </p>
            <p>Let Echo Energy give your business a piggyback!</p>
            <p>
              Echo Energy and Sunny 94 love Lacombe and we want to tell the rest of Central Alberta!
            </p>
            <p>
              With the Lacombe Shop Local campaign, our goal is to get your message out to our many
              listeners in a cost-effective way and promote Lacombe as a great place to shop.
            </p>
            <p>
              The 'Shop Local' feature will include a maximum of three industry exclusive Lacombe
              merchants as part of a 60 second commercial.
            </p>
            <p>
              Your message will air 15 times per week, building top of mind awareness and
              encouraging residents to shop local.
            </p>
            <p>
              <b>
                <span>Contact Cayla at Sunny 94 for more information</span>
                <br />
                <span>
                  <a href="mailto:cayla.gabruck@goldenwest.ca">cayla.babruck@goldenwest.ca</a>
                </span>
                <br />
                <span>
                  <a href="tel:+14036645015">(403) 664-5015</a>
                </span>
              </b>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
