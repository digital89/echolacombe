import React from 'react';

import { contactEmail, contactPhone, contactPhoneRaw } from '../../cms/data';
import ExternalArrow from './ExternalArrow';

const C = () => {
  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered">
          <div>
            <div className="columns">
              <div className="column">
                <h4>Helpful links:</h4>
                <div>
                  <a href="https://www.lacombe.ca" rel="noreferrer" target="_blank">
                    City of Lacombe <ExternalArrow />
                  </a>
                </div>
                <div>
                  <a href="https://www.lacombechamber.ca" rel="noreferrer" target="_blank">
                    Lacombe Chamber of Commerce <ExternalArrow />
                  </a>
                </div>
                <div>
                  <a href="https://www.burmanu.ca" rel="noreferrer" target="_blank">
                    Burman University <ExternalArrow />
                  </a>
                </div>
                <div>
                  <a href="https://lacombe.ecdev.org" rel="noreferrer" target="_blank">
                    Lacombe Economic Development <ExternalArrow />
                  </a>
                </div>
                <div>
                  <a href="https://www.lacombetourism.com" rel="noreferrer" target="_blank">
                    Lacombe Tourism <ExternalArrow />
                  </a>
                </div>
              </div>

              <div className="column">
                <h4>Contact us:</h4>
                <div>
                  <span>Echo Lacombe Association</span>
                  <br />
                  <span>5214 50 Avenue</span>
                  <br />
                  <span>Lacombe, AB T4L 0B6</span>
                  <br />
                  <br />
                  <a href={`tel:${contactPhoneRaw}`}>{contactPhone}</a>
                  <br />
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: '50px' }} />

          <div>
            <img
              src="/images/logo-app.svg"
              alt="Echo Lacombe Association Logo"
              style={{ height: '80px' }}
            />
          </div>

          <div>
            <span>© Echo Lacombe Association</span>
            <span> - </span>
            <a
              href="https://digital89.com"
              title="Website by Digital89"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website by <strong>Digital89</strong>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default C;
