import React from 'react';

export default () => {
  return (
    <>

      <footer className="footer">

        <div className="content has-text-centered">

          <div>
            <div class="columns">

              <div class="column">
                <h4>Helpful links:</h4>
                <div>
                  <a href="https://www.lacombe.ca" target="_blank">City of Lacombe</a>
                </div>
                <div>
                  <a href="https://www.lacombechamber.ca" target="_blank">Lacombe Chamber of Commerce</a>
                </div>
                <div>
                  <a href="https://www.burmanu.ca" target="_blank">Burman University</a>
                </div>
                <div>
                  <a href="https://lacombe.ecdev.org" target="_blank">Lacombe Economic Development</a>
                </div>
                <div>
                  <a href="https://www.lacombetourism.com" target="_blank">Lacombe Tourism</a>
                </div>
              </div>

              <div class="column">
                <h4>Contact us:</h4>
                <div>
                  <span>Echo Lacombe Association</span>
                  <br />
                  <span>5214 50 Avenue</span>
                  <br />
                  <span>Lacombe, AB T4L 0B6</span>
                  <br />
                  <br />
                  <span>(403) 782-1263</span>
                  <br/>
                  <span>guy@echolacombe.ca</span>
                </div>
              </div>

            </div>
          </div>

          <div style={{ height: '50px' }} />

          <div>
            <img src="/images/logo-app.svg" style={{ height: '80px' }} />
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
}
