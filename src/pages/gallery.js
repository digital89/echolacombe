import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import Masonry from 'react-masonry-css';

import { items as galleryItems } from '../../cms/gallery';
import Layout from '../components/Layout';
import { PAGES } from '../constants';
import { imagePathToSmallImagePath } from '../utilities';

const C = () => {
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    window.document.addEventListener('keydown', handleKeydown, false);
  }, []);

  const handleClickImage = (imageObject) => {
    setSelectedImage(imageObject);
  };

  const handleClickModalClose = () => {
    setSelectedImage(null);
  };

  const handleKeydown = (event) => {
    if (event.keyCode === 27) {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.media.gallery.title}</h1>

            <div>
              <Masonry
                breakpointCols={{
                  default: 4,
                  800: 2,
                  400: 1,
                }}
                className="masonry-grid"
                columnClassName="masonry-grid-column"
              >
                {galleryItems.map(({ image, title }) => (
                  <div
                    onClick={() => {
                      handleClickImage({
                        src: image,
                        title,
                      });
                    }}
                  >
                    <LazyLoad offset={100}>
                      <img alt={title} src={imagePathToSmallImagePath(image)} />
                    </LazyLoad>
                  </div>
                ))}
              </Masonry>
            </div>

            {selectedImage && (
              <div className={classNames('modal', selectedImage ? 'is-active' : null)}>
                <div className="modal-background" onClick={handleClickModalClose} />
                <div className="modal-content">
                  <div className="modal-title">{selectedImage.title}</div>
                  <p className="image">
                    <img src={selectedImage.src} alt={selectedImage.title} />
                  </p>
                </div>
                <button
                  className="modal-close is-large"
                  onClick={handleClickModalClose}
                  aria-label="close"
                  type="button"
                />
              </div>
            )}
          </div>
        </section>
      </Layout>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .masonry-grid {
              display: -webkit-box; /* Not needed if autoprefixing */
              display: -ms-flexbox; /* Not needed if autoprefixing */
              display: flex;
              margin-left: -20px; /* gutter size offset */
              width: auto;
            }
            .masonry-grid-column {
              padding-left: 20px; /* gutter size */
              background-clip: padding-box;
            }

            .masonry-grid-column > div {
              cursor: pointer;
              margin-bottom: 20px;
            }

            .masonry-grid-column > div > img {
              display: block;
            }

            .modal-title {
              color: white;
              padding: 1rem;
              text-align: center;
            }
          `,
        }}
      />
    </>
  );
};

export default C;
