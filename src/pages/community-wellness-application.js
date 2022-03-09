import React from 'react';

import { contactEmail } from '../../cms/data';
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
            <h1>{PAGES.community.communityWellnessApplication.title}</h1>
            <h3>What are Community Wellness Grants?</h3>
            <p>
              The Wellness Program is about creating a culture of wellness within the City of
              Lacombe. Foremost, it is a community-owned, city-wide initiative that supports citizen
              wellness through grassroots engagement. These grants serve to encourage our community
              to come forward as leaders and take an active role to promote health and wellness.
            </p>
            <p>
              <a
                href="https://docs.google.com/forms/d/1xrqhqJDHUbv_mchy0DMzbeB7jrMlgr7tauNlMneYKRU"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button is-info is-large">
                  Apply Here! <ExternalArrow />
                </button>
              </a>
            </p>

            <h3>Who is Eligible to Apply for Wellness Grants?</h3>
            <p>Initiatives supporting wellness will be eligible for funding.</p>
            <ListItems
              items={[
                'Any Lacombe or Lacombe County non-profit, community group, school or business is eligible to apply for funding. Special consideration may be given to other community members (i.e. high school students) on a case-by-case basis.',
              ]}
            />

            <h3>What are the criteria for funding?</h3>
            <p>Funding will be available for projects that meet the following criteria:</p>
            <ListItems
              ol
              items={[
                'Makes an important contribution to support community wellness',
                'Builds partnerships and collaborations',
                'Addresses a gap or strengthens an existing asset within the community',
                'Creates opportunities for citizen engagement',
                'Demonstrates potential for a meaningful impact to the community',
              ]}
            />

            <h3>Funding Guidelines</h3>
            <p>
              Matching grants up to $500 dollars will be awarded per project, based on demonstrated
              need.
            </p>

            <h3>Submission Guidelines (how do I apply?)</h3>
            <p>
              You are invited to submit your proposals{' '}
              <a
                href="https://docs.google.com/forms/d/1xrqhqJDHUbv_mchy0DMzbeB7jrMlgr7tauNlMneYKRU"
                target="_blank"
                rel="noreferrer"
              >
                via the application form <ExternalArrow />
              </a>
              , in person, or by email to:
            </p>
            <p>
              Guy Lapointe
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

            <h3>Review Process</h3>
            <p>
              After reviewing proposals independently each month, the Echo Lacombe Wellness
              committee will discuss project submissions and assign funding.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
