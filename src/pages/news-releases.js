import React from 'react';

import { items as newsItems } from '../../cms/news';
import ExternalArrow from '../components/ExternalArrow';
import Layout from '../components/Layout';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.media.news.title}</h1>
            <p>
              {newsItems &&
                newsItems.map(({ title, file, url }) => (
                  <div>
                    <a href={file || url} rel="noreferrer" target="_blank">
                      {title} <ExternalArrow />
                    </a>
                  </div>
                ))}
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
