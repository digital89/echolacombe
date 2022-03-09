import React from 'react';

import Layout from '../components/Layout';
import ListItems from '../components/ListItems';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.aboutUs.default.title}</h1>
            <p>
              Our is to improve the quality of life within Lacombe by fostering a collaborative
              environment focused on cultivating innovation, nurturing a business-friendly culture,
              promoting sustainable growth and creating a safe, inclusive, vibrant and healthy
              community.
            </p>

            <h3>The objectives of the society are:</h3>
            <ListItems
              items={[
                'To encourage a spirit of collaboration and active participation within the community.',
                'To support, promote and lead innovative practices and ventures within the community of Lacombe.',
              ]}
            />

            <h3>The desired outcomes of the society are:</h3>
            <ListItems
              ol
              items={[
                'A growing and sustainable economy',
                'An engaging cultural scene',
                'A place of emotional, physical, and environmental wellness',
                'A connected community',
                'Strong leadership',
                'Social enterprise',
                'Community pride',
              ]}
            />

            <h3>Anchor Members:</h3>
            <ListItems
              items={[
                'City of Lacombe',
                'Burman University',
                'Lacombe and District Chamber of Commerce',
              ]}
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
