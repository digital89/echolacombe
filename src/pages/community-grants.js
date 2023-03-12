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
            <h1>{PAGES.community.communityGrants.title}</h1>
            <p>
              Echo Lacombe Association welcomes requests for a wide range of projects and programs
              within the City of Lacombe including, but not limited to:
            </p>
            <ListItems
              items={[
                'Seed Grants: Funding to help launch a new project, program or initiative',
                'Equipment Grants: Funding for equipment, repairs and renovation',
                'Project/Program Grants: Funding for a specific and/or recurring initiative with specific objectives and a predetermined cost*',
              ]}
            />
            <p>
              *Note: If a grant request is for a longer term project, applicants should outline
              their plans for sustainability.
            </p>
            <p>
              <a
                href="https://docs.google.com/forms/d/1BF80BJLJrranDIL3zwd60X--RQH85KxQlXZFLFnDh2Y"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button is-info is-large">
                  Apply Here! <ExternalArrow />
                </button>
              </a>
            </p>

            <h3>We look for initiatives that:</h3>
            <p>Meet a need or fill a gap within the community</p>
            <ListItems
              items={[
                'Show an understanding of our community, its needs, and existing services',
                "Respect our community's diversity",
                'Identify creative, innovative and practical approaches',
                'Strengthen organizational capacity when required',
              ]}
            />
            <p>Enhance community organizations' capacity to deliver services</p>
            <ListItems
              items={[
                'Address organizational stability/sustainability',
                'Leverage financial and in-kind support',
                'Promote collaboration and sharing among community groups to reduce duplication of programs or improve the effectiveness of services',
                'Complement existing initiatives in the community in a positive and useful way',
                'Develop new partnerships or networks',
                'Contribute new understanding about community issues',
              ]}
            />
            <p>If a request falls within one of the categories below, it will not be considered:</p>
            <ListItems
              items={[
                'Deficit funding',
                'Endowments',
                'Annual funding drives/events',
                'Medical equipment and research',
                'Purchase of land and/or buildings',
                'Grants primarily benefiting individuals (such as scholarships)',
                'Personal gain/profit',
                'Staffing/ongoing operational costs',
                'National or provincial initiatives without clear benefit to the City of Lacombe',
                "Any expenses incurred prior to Echo Lacombe Association's decision date",
              ]}
            />

            <h3>How do we make decisions?</h3>
            <p>
              All proposals are reviewed by the Echo Lacombe Association Board of Directors. The
              board considers whether the applicant has demonstrated an appropriate plan, the
              capacity to implement the project, a reasonable budget and timeframe, appropriate
              partners, a plan for sustainability (if applicable), and likelihood of a benefit to
              the City of Lacombe. Because of the wide range of requests we receive, consider, and
              fund, the Board does not use strict criteria. Rather, they assess the proposals
              holistically and decide whether the project, program, or initiative is a good
              investment for Echo Lacombe Association at that time. A successful grant application
              may receive up to 50% funding support towards their approved project/program budget.
              Successful applicants must provide onsite signage indicating that 'this project was
              made possible in part from funding generated by Echo Energy.' All approved projects
              are to be presented to Lacombe City Council and accepted as information.
            </p>
            <p>
              Each year, Echo Lacombe Association will distribute funding between the following four
              pillars:
            </p>
            <ListItems
              ol
              items={[
                'Ecology: the relationship between people and communities and their environments',
                'Culture: enriching our community through language, religion, cuisine, social habits and arts',
                'History: preservation of our local landmarks',
                'Opportunity: opening doors for residents through new building projects, grants and education',
              ]}
            />
            <p>
              Grant seekers are advised within a few days of the Board's decision and, if a grant
              has been awarded, a cheque is forwarded to the organization soon after the decision.
              If the Board declines a proposal, notification is provided promptly.
            </p>

            <h3>How do I apply?</h3>
            <p>
              You are invited to submit your proposals{' '}
              <a
                href="https://docs.google.com/forms/d/1BF80BJLJrranDIL3zwd60X--RQH85KxQlXZFLFnDh2Y"
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
              <b>Applications must include:</b>
            </p>
            <ListItems
              ol
              items={[
                'Project budget and plan',
                'Timeframe',
                'Confirmed partners',
                'Demonstrated benefit to the City of Lacombe',
              ]}
            />
            <p>
              Applications are accepted throughout the year. Successful grant applicants must
              complete their project within a year of receiving funds and provide a one page report
              detailing:
            </p>
            <ListItems
              ol
              items={[
                'The work completed;',
                'Invoices paid and',
                'Photos of the executed program/project.',
              ]}
            />
            <p>
              <b>
                Disclaimer: Completion of an application does not guarantee funding support. The
                ECHO Lacombe Association has the right to refuse any application for any reason.
                Echo Lacombe Association has permission to use my name along with photographs to
                promote this program.
              </b>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
