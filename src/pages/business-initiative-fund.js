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
            <h1>{PAGES.business.businessInitiativeFund.title}</h1>

            <p>
              The purpose of this program is to promote collaborative activities and/or increase the
              capacity of the businesses participating in the proposed initiative.
            </p>

            <h3>These activities may include:</h3>
            <ListItems
              items={[
                'Capacity Building (i.e. Winterizing patios, small performance platforms to attract performers/visitors).',
                'Promotions (i.e. Grand opening, sidewalk sale, or customer appreciation)',
                'Events (i.e. Light Up the Night, Lacombe Days)',
                'Beautification efforts (i.e. planters, Christmas lights)',
              ]}
            />

            <h3>Program Goals:</h3>
            <ListItems
              items={[
                'Promote the viability of retail and commercial businesses',
                'Contribute to the quality of life of residents, workers, and visitors to the City of Lacombe',
                'Make the city shopping streets more inviting and interesting places to work and shop',
              ]}
            />

            <h3>Procedure:</h3>
            <p>
              Applicants will be required to submit a completed Application Form online, via email
              to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>, or in person at Lacombe City
              Hall, 5432-56th Ave Lacombe AB, T4L 1E9.
            </p>

            <h3>Guidelines:</h3>
            <ul>
              <li>
                An amount of $2,500.00 will be allotted to the Business Initiative Fund on an annual
                basis.
              </li>
              <li>
                The Grant will provide a matching amount of up to $1,000.00 for eligible businesses
                to support an initiative that meets the criteria of this Grant.
              </li>
              <li>
                A matching contribution by the applying businesses must be financial in nature.
              </li>
              <li>
                Applications will be based on a first-come-first-served basis. In the event that the
                Echo Lacombe receives a number of applications at the same time, the Evaluation
                Criteria shall be used to determine funding distribution.
              </li>
              <li>
                Business collaboration is encouraged. Greater business participation aligns with the
                program goals and therefore advances the opportunity for application approval.
              </li>
              <li>
                I understand my submission of an application does not constitute a guarantee for
                funding under the Business Initiative Fund Program.
              </li>
            </ul>

            <h3>Approval Process:</h3>
            <p>To be considered eligible an Applicant must:</p>
            <ol>
              <li>Contain a list of participating businesses with valid business licenses;</li>
              <li>Include commitments to matching financial contribution from the Applicant;</li>
              <li>
                Include provisions for the completion of the project within three (3) months of the
                date of grant approval;
              </li>
              <li>The project must be for one of the following:</li>
            </ol>
            <ul>
              <li>A promotional activity</li>
              <li>An event (could be stand-alone or part of a larger community-wide festival)</li>
              <li>A beautification project that emphasizes curb appeal</li>
              <li>Have all the required application information completed.</li>
            </ul>
            <p>
              When reviewing an Application Echo Lacombe will give due regard to the Evaluation
              Criteria.
            </p>

            <h3>Rejected Applications:</h3>
            <p>An Applicant, who has submitted an application that has been rejected may:</p>
            <p>Submit an application at any time:</p>
            <ul>
              <li>For a new project; or</li>
              <li>
                If the eligibility status of the Applicant has changed to make them eligible for the
                grant.
              </li>
            </ul>
            <p>Submit an application for the same project:</p>
            <ul>
              <li>After the lapse of six (6) months from the first submission; or</li>
              <li>
                If the project was rejected because of a lack of funding, as soon as new funding is
                made available.
              </li>
            </ul>

            <h3>Distribution of Grant:</h3>
            <p>
              Grant funds will be forwarded to the successful applicant thirty (30) days from the
              receipt of documentation verifying:
            </p>
            <ul>
              <li>That the expenditures have been made for the approved project;</li>
              <li>
                That the approved project has been completed in accordance with the approved
                application form;
              </li>
              <li>All conditions of the Grant as outlined in the Grant Agreement have been met.</li>
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
