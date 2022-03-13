import React from 'react';

import { contactEmail, contactName } from '../../cms/data';
import ExternalArrow from '../components/ExternalArrow';
import Layout from '../components/Layout';
import ListItems from '../components/ListItems';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.community.merchYourWayProgram.title}</h1>

            <h3>What are Merch Your Way Grants?</h3>
            <p>
              The Merch Your Way Program is available to assist the Lacombe community’s promotion
              via community branded items.
            </p>

            <p>
              <a
                href="https://docs.google.com/forms/d/1XJUGuz7sIkJtQdnZW7pOFqmSM6lW-efpcxEZu1XlTPs"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button is-danger is-large">
                  Apply Here! <ExternalArrow />
                </button>
              </a>
            </p>

            <h3>Who is eligible?</h3>
            <p>
              Any Lacombe business, non-profit or community group is eligible to apply for funding.
              Special consideration may be given to other community members (i.e. high school
              students) on a case-by-case basis.
            </p>

            <h3>What are the criteria for funding?</h3>
            <ListItems
              ol
              items={[
                'Items may include City branded materials (current and retro), as well as other community representations on a case-by-case basis',
                'If it is a City of Lacombe branded piece, the marketing department works with you on final approval of the item.  Any other submissions will be reviewed directly by the Echo board',
                'Echo logo addition may be requested',
                'Maximum two applications per business annually',
                'The store manages order fulfillment and generates profits',
              ]}
            />

            <h3>Funding Guidelines:</h3>
            <p>
              Upon approval, Echo provides a matching grant of 50% of your costs to a maximum of
              $250 for your initial purchase.
            </p>

            <h3>Submission Guidelines:</h3>
            <p>
              You are invited to submit your proposals{' '}
              <a
                href="https://docs.google.com/forms/d/1XJUGuz7sIkJtQdnZW7pOFqmSM6lW-efpcxEZu1XlTPs"
                target="_blank"
                rel="noreferrer"
              >
                via the application form <ExternalArrow />
              </a>
              , in person, or by email to:
            </p>
            <p>
              {contactName}
              <br />
              5432-56th Ave
              <br />
              Lacombe AB, T4L 1E9
              <br />
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
            <p>
              There is a rolling deadline. Once the available funding amounts have been exhausted
              for each calendar year, no further grants will be awarded for that period.
            </p>
            <p>A team lead must be identified in the submitted proposal.</p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
