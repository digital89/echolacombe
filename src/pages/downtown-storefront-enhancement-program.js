import React from 'react';

import {contactEmail, contactName, contactPhone, contactPhoneRaw } from '../../cms/data';
import Layout from '../components/Layout';
import ListItems from '../components/ListItems';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.business.downtownStorefrontEnhancementProgram.title}</h1>
            <p>
              The purpose of this program is to encourage and provide businesses located within the
              Downtown Area Redevelopment Area with an opportunity to improve the appearance of
              their businesses, utilizing grant dollars, up to a maximum of $2,000.00.
            </p>
            <p>
              The program provides an incentive for downtown business owners to invest in facade
              renovations and some interior upgrades. The improvements are intended to complement
              initiatives recommended within the Downtown Area Redevelopment Plan (DARP).
            </p>

            <h3>Program Goals</h3>
            <p>The Program works with other revitalization initiatives to:</p>
            <ListItems
              items={[
                'Promote the viability of retail and commercial businesses Help building owners to attract and retain tenants.',
                'Contribute to the quality of life of residents, workers, and visitors to the City Make the city shopping streets more inviting and interesting places to work and shop; and,',
                'Build local community and civic pride among the business community and citizens of Lacombe',
              ]}
            />

            <h3>Criteria</h3>
            <ListItems
              items={[
                'Any business within the Downtown Area Redevelopment Plan Area may apply.',
                'The applicant must be either the property owner or a designated person who has the written authority from the owner to submit the application and/or so administer this project',
                'The buildings must be used primarily for retail and commercial purposes. The selection committee has some discretion to include projects that are institutional, non- profit and/or accommodate non-commercial uses that contribute to the activity on the commercial main street.',
                'The project must conform to the Program Design Standards',
              ]}
            />

            <h3>Design Standards</h3>
            <p>
              Successful projects will strive to make visible improvements to the appearance, design
              and function of a business by following the DARP Architectural Guidelines:
            </p>
            <ListItems
              items={[
                'Exposing unique architectural details that have been hidden by previous attempts to modernize the facade',
                'Striving for direct connection to pedestrians through the use of clear glass, and storefront designs that make use of window display areas',
                'Coordinating facade improvements with neighbouring buildings and the unique character of the Old Town Main Street District',
                'Undertaking general cleaning of the building exterior and repainting faded and peeling paint',
                'Providing buildings that are accessible to pedestrians',
                'Creating sidewalks or alleyways that are lively places filled with people Contributing to the safety on the street',
                'Addressing winter conditions',
                'Exemplifying innovative and artistic design',
              ]}
            />

            <h3>Eligible Improvements</h3>
            <ListItems
              items={[
                'Lighting',
                'Exterior walls',
                'Windows',
                'Doors',
                'Storefronts',
                'Entryways',
                'Awnings/Canopies',
                'Exterior architectural and/or artistic features',
                'Landscaping',
                'Facade cleaning and painting',
                'Signage (provided it is compliance with the Land Use Bylaw)',
                'Limited permanent interior improvements (reconfiguration of interior walls, display spaces and interior window finishes to enhance the function and display of the storefronts)',
              ]}
            />
            <p>
              The above list is not all-encompassing. Other improvements could be eligible if they
              meet the objectives of the program, comply with City development regulations. The
              Planning & Development department will be consulted to ensure proper compliance with
              the City of Lacombe's Land Use Bylaw and Downtown Area Redevelopment Plan.
            </p>

            <h3>To Apply</h3>
            <ListItems
              ol
              items={[
                <>
                  <span>
                    Fill out and submit the{' '}
                    <a
                      href="https://form.jotform.com/240245791153050"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Downtown Storefront Enhancement Program
                    </a>{' '}
                    Application. <b>The deadline for submissions is April 5, 2024.</b>
                  </span>
                </>,
                'Include the land title certificate. If the applicant is not the owner, please ensure the property owner authorization portion of the application form is completed.',
                'Submit "Before" photos of the property.',
                'Provide a project description and cost estimates.',
                'The project description will then be referred to the Downtown Storefront Enhancement Committee (DSEC) for evaluation and final approval. If there is still grant funding available after the review process is completed, subsequent applications will be accepted and evaluated on a first-come, first-serve basis.',
              ]}
            />

            <p>For more information please contact:</p>
            <p>
              <span>{{contactName}}</span>
              <br />
              <span>City of Lacombe</span>
              <br />
              <span>
                <a href={`tel:${contactPhoneRaw}`}>{contactPhone}</a>
              </span>
              <br />
              <span>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </span>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
