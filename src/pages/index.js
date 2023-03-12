import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import ExternalArrow from '../components/ExternalArrow';
import { PAGES } from '../constants';
import styles from '../styles';

const C = () => {
  return (
    <>
      <Layout>
        <section className="hero is-link">
          <div className="hero-body">
            <div className="container">
              {/* <p>
                <img
                  className="hero-image"
                  src="/images/logo-app.svg"
                  alt="Echo Lacombe Association Logo"
                />
              </p> */}
              <h1 className="title">Welcome to the <u>Echo Lacombe Association</u> website!</h1>
              <h2 className="subtitle">Our vision is to improve the quality of life within Lacombe by fostering a collaborative environment focused on cultivating innovation, nurturing a business-friendly culture, promoting sustainable growth and creating a safe, inclusive, vibrant and healthy community.</h2>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container content">
            <h3>What is the Echo Lacombe Association?</h3>
            <p>
              The Echo Lacombe Association is a group of local volunteers who facilitate the function
              of Echo Energy and Echo Internet, and in turn organize and execute local projects.
            </p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h4>
                        Looking for information about the <u>Echo Food Rescue</u>?
                      </h4>
                      <p>
                        <Link to={`/${PAGES.community.foodRescue.slug}`}>
                          <button className="button is-info">Go to the Echo Food Rescue page  <ExternalArrow /></button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h4>
                        Get your project rolling with a <u>Community Grant!</u>
                      </h4>
                      <p>
                        Looking to get you community project or program off the ground? We can help!
                      </p>
                      <p>
                        <Link to={`/${PAGES.community.communityGrants.slug}`}>
                          <button className="button is-primary">Apply for a Community Grant  <ExternalArrow /></button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h4>
                        Looking for <u>sponsorship?</u>
                      </h4>
                      <p>
                        Echo Lacombe looks to support local events, groups and facilities that align with our vision and principles.
                      </p>
                      <p>
                        <Link to={`/${PAGES.business.sponsorship.slug}`}>
                          <button className="button is-success">Inquire about Sponsorship  <ExternalArrow /></button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <h3>New Initiatives:</h3>
            <h4>LEAP (Lacombe Economic Action Partnership)</h4>
            <p>
              A grass-roots coalition that includes small business owners, community members, and
              representatives from Burman University School of Business, the City of Lacombe, Echo
              Lacombe Association, and the Lacombe and District Chamber of Commerce) is seeking to
              help Lacombe businesses deal with the COVID-19 crisis, with a specific eye toward
              continuity and recovery.
            </p>
            <p>
              Opportunities to participate in meetings will be provided to all businesses and
              community groups, initially through virtual meetings.
            </p>
            <p>
              <b>
                Applications for this are no longer being accepted, contact us for more information.
              </b>
            </p>
            <h4>Burman Internship</h4>
            <p>
              The Burman Internship allows the students of Burman University and Lacombe's local
              businesses to come together to gain experience, while benefiting some of Lacombe's top
              youthful minds. To find out more information or to participate, please fill out the
              form below.
            </p>
          </div>
        </section>
      </Layout>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hero-image {
              height: 200px;
              margin-bottom: 10px;
            }

            @media screen and (max-width: ${styles.sizes.tablet}px) {
              .hero-image {
                height: 150px;
              }
            }

            @media screen and (max-width: ${styles.sizes.phone}px) {
              .hero-image {
                height: 100px;
              }
            }
          `,
        }}
      />
    </>
  );
};

export default C;
