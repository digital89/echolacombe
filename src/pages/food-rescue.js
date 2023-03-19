import React from 'react';
// import { Link } from 'gatsby';

import {
  contactName,
  contactPhone,
  contactPhoneRaw,
  contactEmail,
  sections,
} from '../../cms/food-rescue.json';
import ExternalArrow from '../components/ExternalArrow';
import Layout from '../components/Layout';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section id="food-rescue-wallpaper" className="section" />

        <section className="section">
          <div className="container content">
            <h1><u>{PAGES.community.foodRescue.title}</u></h1>

            <p>
              <a href="https://www.facebook.com/people/Echo-Food-Rescue/100071395141944" target="_blank" rel="noopener noreferrer">Facebook Page <ExternalArrow /></a>
            </p>

            {sections.map(section => {
              return (
                <>
                  <h3>{section.title}</h3>
                  <p className="food-rescue-section-p">{section.content}</p>
                </>
              )
            })}

            <h3>Contact Information</h3>
            <p>
              <span>{contactName}</span>
              <br />
              <span>
                <a href={`tel:${contactPhoneRaw}`}>{contactPhone}</a>
              </span>
              <br />
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>

            <h3>Location</h3>
            <div>
              <iframe
                allowFullScreen
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?q=5404%2056%20Ave,%20Lacombe,%20AB%20T4L%201M1&t=&z=15&ie=UTF8&iwloc=&output=embed"
                style={{
                  border: 'none',
                  height: '300px',
                  width: '100%',
                }}
                title="Google Maps View"
              />
            </div>

          </div>
        </section>
      </Layout>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            #food-rescue-wallpaper {
              height: 200px;
              background-image: url("/images/food-rescue-vegetables.jpg");
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center center;
            }

            .food-rescue-section-p {
              white-space: pre-wrap;
            }
          `,
        }}
      />
    </>
  );
};

export default C;
