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
            <h3 className="title">🎃 1st Annual Downtown Spooktacular! 🎃</h3>
            <p className="subtitle">October 27, 5:00 - 8:00 pm</p>
            <p>Trick or Treating, Movies, Pumpkin Carving, Games, Colouring Contest, Hot Dogs, Family Fun and More!</p>
            <p>
              <h4>
                <span>Map </span>
                <a
                  href="/files/spooktacular-map.pdf"
                  target="_blank"
                >(download / view full)</a>
                <span>:</span>
              </h4>
              <img src="/images/spooktacular-map.jpg" alt="Spooktacular Map" style={{ maxWidth: '600px', width: '100%' }}/>
            </p>
            <h4>Details:</h4>
            <p>
              <ul>
                <li><b>5024 General Store:</b> Candy, popcorn and Classic Halloween Specials showing on the projector.</li>
                <li><b>Oodles of Chocolates:</b> Free hot chocolate, treats and Take Home Oreo Kits for the first 75 kids.</li>
                <li><b>Blindman Brewery:</b> Photo Booth and S’mores around the fire.</li>
                <li><b>Wags Holistic Pet & Passionate Paws:</b> Pet photos for a $10 donation for charity</li>
                <li><b>Anna Maria’s Cafe:</b> Photo Opportunity and Treats (open in LMC during farmers market)</li>
                <li><b>Dutchess Flower Shop:</b> 20% off all plants and wall art</li>
                <li><b>Milly Oak Cafe and Catering:</b> Pumpkin Decorating</li>
                <li><b>Broom Tree Foundation:</b> Ghost Painting Activity + Carmel Apples for purchase</li>
                <li><b>Elite Bridal:</b> Trick-or-treating Treats</li>
                <li><b>The Grooming Shop:</b> Trick-or-treating Treats (**open until 7PM)</li>
                <li><b>Breathe Massage and Wellness:</b> Treats and Apple Cider (**open until 7PM)</li>
                <li><b>Downton & Co.:</b> 10% off candles & Fragrances  as well as a scavenger hunt for the kids. ( We will have mini pumpkins hidden around the store and kids that find them will get a free winnies ice cream, goodie bags will be available for any kids with allergies)</li>
                <li><b>ONA’s:</b> Free Chai Lattes & Trick-or-treating</li>
                <li><b>Winnie’s Ice Cream:</b> 15% off Ice Cream</li>
                <li><b>Ugly’s Pub:</b> Trick-or-treating and Wing Night</li>
                <li><b>GiftSmack:</b> Trick-or-treating</li>
                <li><b>Nowco Home Hardware:</b> Trick-or-treating and “Pick the Lock” game</li>
                <li><b>Fire Department:</b> BBQ</li>
                <li><b>Lacombe Museum:</b> Michener House (Flat Iron closed) shortened version of a Downtown Tour at 5:30 and 7:30. Our vegetable garden will also be set up as a selfie station/photo booth.</li>
                <li><b>Hometown Market:</b> Halloween coloring contest, will announce on our social the week leading up, coloring sheet options available in store all that day/night.  We'll also have a coloring station set up for kids to color while the adults shop.</li>
                <li><b>Rae’ven Co. and Wolf & Raven:</b> Trick-or-treating and Balloons</li>
                <li><b>HeadHunters:</b> Trick-or-treating and offer 15% off in store.</li>
                <li><b>Red’s Source for Sports:</b>Trick-or-treating and offering an extra 5% discount on purchases made between 6pm and 8pm for customers dressed up in a costume.</li>
                <li><b>Big Brothers Big Sisters:</b> Trick-or-treating</li>
                <li><b>Jo(e) Social Media:</b> Movie Scene Filming</li>
                <li><b>Tollers Bistro:</b> Costume Contest. Winners of group costumes receive a dozen donuts, solo costume will receive ½ dozen donuts.</li>
                <li><b>Mackenzie @ Cin City:</b> Face painting</li>
                <li><b>Leto’s:</b> “Happiest Hours” to 9pm - $2 off appetizers/ $5 highballs / $1 off 6oz. Red/White Wine / Pints $7.5</li>
                <li><b>Collective Mayhem:</b> Trick-or-treating</li>
              </ul>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default C;
