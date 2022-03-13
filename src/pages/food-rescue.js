import React from 'react';

import Layout from '../components/Layout';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.community.foodRescue.title}</h1>
            <p>
              Food security is a significant social issue faced by communities across Canada.
              Increased focus on greenhouse gas emissions has highlighted the harmful impact food
              waste has on the environment. Producers and retailers dispose of large amounts of
              consumable food due to minor flaws and defects in appearance before shipping to
              retailers. Additionally, grocery stores remove food from shelves and discard it when
              it is past its “best before” date; most items have not spoiled or expired and are
              consumable well beyond the date listed. Restaurants also dispose of unused food
              supplies at the end of the business day, as industry standards are to use fresh
              ingredients daily.
            </p>
            <p>
              The Echo Food Rescue collects these food items and redistributes to our community that
              would otherwise go to waste.
            </p>

            <p>
              <img src="/images/logo-food-rescue.svg" width="200" alt="Echo Food Rescue Logo" />
            </p>

            <h3>Links & Resources</h3>
            <ul>
              <li>
                <a
                  href="https://secondharvest.ca/foodrescue/givefood/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Donate – Give Food
                </a>
              </li>
              <li>Supporters (Information Coming Soon!)</li>
              <li>
                <a href="https://forms.gle/sbs6HPU8yAqrYvJu6" rel="noreferrer" target="_blank">
                  Volunteers
                </a>
              </li>
            </ul>

            <h3>Contact</h3>
            <p>For additional information on the Food Rescue Program please contact:</p>
            <p>
              <span>David Jeffrey</span>
              <br />
              <span>
                <a href="tel:+14035986287">(403) 598-6287</a>
              </span>
              <br />
              <a href="mailto:david@echolacombe.ca">david@echolacombe.ca</a>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
