import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { email } from '../../cms/data';
import { items as galleryItems } from '../../cms/gallery';
import Layout from '../components/Layout';
import styles from '../styles';
import { imagePathToSmallImagePath } from '../utilities';

export default () => {
  return (
    <>
      <Layout>
        <section className="hero is-link">
          <div className="hero-body">
            <div className="container">
              <p>
                <img src="/images/logo-app.svg" style={{ height: '200px' }} />
              </p>
              <p className="title">We are the Echo Lacombe Association!</p>
              <p className="subtitle">
                Our vision is to improve the quality of life within Lacombe by
                fostering a collaborative environment focused on cultivating
                innovation, nurturing a business-friendly culture, promoting
                sustainable growth and creating a safe, inclusive, vibrant and
                healthy community.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h1 className="title">What are we?</h1>
            <h2 className="subtitle">
              Echo Lacombe Association is a group of local volunteers who
              facilitate to function of Echo Energy and Echo Internet, and in
              turn organize and execute local projects.
            </h2>

            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h3>Looking for sponsorship?</h3>
                      <p>
                        Echo Lacombe looks to support local events, groups and
                        facilities that align with our vision and principles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h3>Get your project rolling!</h3>
                      <p>
                        Looking to get you community project or program off the
                        ground? We can help!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
