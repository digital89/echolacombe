import React from 'react';

import Layout from '../components/Layout';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.aboutUs.termsOfReference.title}</h1>

            <h3>Vision:</h3>
            <p>
              To improve the quality of life within Lacombe by fostering a collaborative environment
              focused on cultivating innovation, nurturing a business friendly culture, promoting
              sustainable growth and creating a safe, inclusive, vibrant and healthy community.
            </p>

            <h3>Objectives:</h3>
            <ul>
              <li>
                To encourage a spirit of collaboration and active participation within the
                community.
              </li>
              <li>
                To support, promote and lead innovative practices and ventures within the community
                of Lacombe.
              </li>
            </ul>

            <h3>Desired Outcomes:</h3>
            <ul>
              <li>A growing and sustainable economy</li>
              <li>An engaging cultural scene</li>
              <li>A place of emotional, physical and environmental wellness</li>
              <li>A connected community</li>
              <li>Strong leadership</li>
              <li>Social Enterprise</li>
              <li>Community pride</li>
            </ul>

            <h3>Scope of Work:</h3>
            <p>
              To achieve these objectives, the ECHO Lacombe Association board will undertake the
              following activities:
            </p>
            <ul>
              <li>Create and adhere to an annual operating budget.</li>
              <li>Solicit and adjudicate proposals for the ECHO Lacombe fund.</li>
              <li>Establish, oversee and approve work of subcommittees.</li>
              <li>Build a strategic plan which will be reviewed and updated yearly.</li>
              <li>Promote ECHO Lacombe vision within the community.</li>
            </ul>

            <h3>Goals:</h3>
            <p>
              Goals will be reviewed and determined on an annual basis and will be supported by a
              plan of action that includes measurable goals.
            </p>

            <h3>Classification of Members:</h3>
            <ul>
              <li>
                Anchor Members of which:
                <ul>
                  <li>Three total members</li>
                  <li>Full members with voting privileges</li>
                  <li>Must pay an annual fee beginning in 2016</li>
                </ul>
              </li>
              <li>
                Community members of which::
                <ul>
                  <li>Five to seven total members</li>
                  <li>Two must be from the business community</li>
                  <li>One must be from a non-profit society</li>
                  <li>One must be from the public at large</li>
                </ul>
              </li>
              <li>
                Anchor Members are appointed by the three Institutions that formed the Association.
              </li>
              <li>
                The terms of the public Board members shall be staggered so that a minimum of 25% of
                the members are appointed or elected each year.
              </li>
              <li>
                Board members may serve on the Board for a maximum of two consecutive three-year
                terms.
              </li>
            </ul>

            <h3>Procedures:</h3>
            <ul>
              <li>Board will meet monthly and/or on an as needed basis.</li>
              <li>The majority of the committee shall represent quorum.</li>
              <li>
                The order of business is to be set out in an agenda package to be provided to the
                Committee members in advance of the meeting date.
              </li>
              <li>Everyone has a vote, including the chair.</li>
              <li>If the votes are equal for and against, the motion is defeated.</li>
            </ul>

            <h3>Member Profile:</h3>
            <ul>
              <li>Commitment to volunteerism</li>
              <li>Sincere desire to grow a well-rounded community</li>
              <li>Good networking skills</li>
              <li>Inspired by innovation</li>
              <li>
                Must be one of the following:
                <ul>
                  <li>Resident</li>
                  <li>Business Owner</li>
                  <li>Employee working for a business within the City of Lacombe</li>
                </ul>
              </li>
            </ul>

            <h3>Annual Funding:</h3>
            <p>
              The board is to receive the following minimum funding amounts from its anchor members
              on an annual basis:
            </p>
            <ul>
              <li>City of Lacombe – $12,000.00</li>
              <li>Burman University – $2,500.00</li>
              <li>Lacombe & District Chamber of Commerce – $2,500.00</li>
            </ul>
            <p>
              An annual budget shall be prepared and any new funding requested from funding partners
              by October 1 for the following calendar year.
            </p>

            <h3>Reporting to City Council:</h3>
            <p>The board will provide a status report to City Council annually.</p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
