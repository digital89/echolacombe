import React from 'react';

import { contactEmail } from '../../cms/data';
import Layout from '../components/Layout';
import ListItems from '../components/ListItems';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.business.smallBusinessEmergencyFund.title}</h1>

            <h3>Purpose:</h3>
            <p>
              The purpose of this program is to offer assistance to businesses within the City of
              Lacombe who are the victims of vandalism and facing a potential loss of business.
            </p>

            <h3>Who can use this program?</h3>
            <ListItems
              items={[
                'Any active Echo Energy or Placemaker Business',
                'Each business may only apply once in a calendar year',
              ]}
            />

            <h3>How much funding is available to a business?</h3>
            <ListItems
              items={[
                'Fund Maximum of $5000/year',
                '$1000 – $3000 available per claim',
                '$500 gift from Echo and the remainder as an interest-free loan to be repaid within 90 days',
              ]}
            />

            <h3>What type of act qualifies for funding?</h3>
            <ListItems
              items={['Acts of Vandalism', 'Damage to Property', 'Loss of Business Days']}
            />

            <h3>Approval Process</h3>
            <p>To be eligible an applicant must include a:</p>
            <ListItems
              ol
              items={[
                'Police Report File Number',
                'Proof of Valid Insurance',
                'Copy of Invoice / Receipts within 24 business hours (i.e. Business owner opts to fix the issue themselves by purchasing materials from the hardware store)',
              ]}
            />

            <h3>Procedure</h3>
            <p>
              <span>
                Applicants will be required to submit the required information via email to{' '}
              </span>
              <span>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </span>
              <span> or in person at Lacombe City Hall, 5432-56th Ave Lacombe AB, T4L 1E9.</span>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
