import React from 'react';

import Layout from '../components/Layout';
import { PAGES } from '../constants';

const C = () => {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>{PAGES.business.downtownBusinessEvents.title}</h1>
            <h3 className="title">🌛 Moonlight Madness 🌛</h3>
            <p className="subtitle">November 24th, 2022</p>
            {/* <p>More details...</p> */}
            <p>
              <h4>
                <span>Map </span>
                <a
                  href="/files/moonlight-madness-map.pdf"
                  target="_blank"
                >(download / view full)</a>
                <span>:</span>
              </h4>
              <img src="/images/moonlight-madness-map.jpg" alt="Moonlight Madness Map" style={{ maxWidth: '600px', width: '100%' }}/>
            </p>
            <h4>Details:</h4>
            <p>
              <ul>
                <li><b>5024 General Store:</b> Candy, popcorn and Classic Halloween Specials showing on the projector.</li>

                <li><b>Elite Bridal:</b> We will be open late (usually until 10 pm). We will have moonlight madness sales and Black Friday sales that night.</li>

                <li><b>Downton & Co. and ONA Café:</b> will be open and celebrating Moonlight Madness.</li>

                <li><b>Letos:</b> We will be open, offering buy one get one 1/2 off appetizers from 5-9 pm with the purchase of a beverage. We will match the discounted amount and donate to FCSS Lacombe - Santa's anonymous. In addition, we will be offering a GIFT CARD sale. For every $100 GC purchase, an additional $20 GC will
                be included.</li>

                <li><b>Oodles of Chocolates:</b> will be open to the public. Our shop will be filled with all your favourite Christmas Treats. We will also be offering our delicious Hot Chocolate for purchase.</li>

                <li><b>5024 General Store:</b> will be participating with a shopping discount of 10%, and every purchase will be an entry to win one of our Christmas Boxes that includes a bag of 5024 coffee, a gift card, a mug, and other goodies.</li>

                <li><b>The Grooming Shop:</b> will be open and celebrating Moonlight Madness.</li>

                <li><b>Anna Maria's Café:</b> will be open and celebrating Moonlight Madness.</li>

                <li><b>Headhunters:</b> will be open and extending the sale for that week.</li>

                <li><b>Nowco Home Hardware:</b> will be open and celebrating Moonlight Madness.</li>

                <li><b>The Broom Tree Café:</b> will be open and celebrating Moonlight Madness.</li>

                <li><b>Health fitters:</b> will be open and celebrating Moonlight Madness.</li>

                <li><b>Reds Source for Sports:</b> will be open until 10 pm and celebrating Moonlight Madness.</li>

                <li><b>The Studio by Elysian & Luxe:</b> will be open and celebrating Moonlight Madness. We are offering retail sales, a giveaway basket or two, and a gift with purchase.</li>

                <li><b>Chamber of Commerce:</b> It's double stamp day, with the Passport to Christmas too!</li>

                <li><b>Uglys:</b> will be doing our wing night and drink specials from 4-11 pm; we will also do 10% off of all of our merchandise... hoodies, crewneck sweaters, short sleeves, long sleeves, tank tops, toques, ball caps, and lanyards.</li>

                <li><b>Copper Lane:</b> will be hosting a curated pop-up from 6-9 pm (but will stay open later if needed) with
                wine tasting by LA liquor and snacks by honey b charcuterie. 20% off all items in store and we hope to have propane fire pits out front for smores.</li>

                <li><b>Dutchess Flower Company:</b> will be open, celebrating Moonlight Madness and we will have a 20% off
                sale on houseplants and wall art.</li>

                <li><b>Wags Holistic Pet Nutrition:</b> will be open until 8 pm and celebrating Moonlight Madness.</li>

                <li><b>RAE'VeN Co. Apothecary:</b> will stay open until 8:30 and we will be doing a craft of making Yuletide
                intention pinecones from 6-8.</li>
              </ul>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
