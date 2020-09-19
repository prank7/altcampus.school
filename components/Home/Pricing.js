import React from 'react';

function Pricing(props) {
  return (
    <section className='pricing padding'>
      <div className='container'>
        <article className='pricing-head'>
          <img src='/assets/media/price-tag.svg' alt='pricetag' />
          <h2>Invest in yourself</h2>
        </article>
        <div className='pricing-cards'>
          <div className='premium'>
            <article className='pro-pricing'>
              <div className='pro-pricing-intro'>
                <img src='/assets/media/pro-medal.svg' alt='rocket launching' />
                <div className='pro-pricing-value pro'>
                  <div className='price-tag'>
                    <h2>Premium</h2>
                    <div className='price-matrix'>
                      <p className='offer'>28% Off (Early Birds offer)</p>
                      <div className='price'>
                        <h4>
                          <pre> ₹93,749 </pre>
                        </h4>
                        <pre>
                          <p> $1249 </p>
                        </pre>
                      </div>
                      <div className='offer-price'>
                        <h4>₹67,499</h4>
                        <p>$899</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Step by Step course content</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Assignments</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Projects</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Github student developer pack</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Developer community</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Personalised feedback & Code review</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Mentorship</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Access to office hours (Doubt clearing session)</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Coach follow up</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Portfolio preparation</p>
                </li>
              </ul>
            </article>
            <a className='btn' href='https://launchpad.altcampus.school/signup'>
              <div className='premium-btn'>
                <img
                  className='premium-btn-img'
                  src='/assets/media/pro-medal.svg'
                  alt='medal-in-button'
                />
                <p>BUY NOW</p>
              </div>
            </a>
          </div>
          <div className='standard'>
            <article className='pro-pricing'>
              <div className='pro-pricing-intro'>
                <img
                  src='/assets/media/basic-medal.svg'
                  alt='balloon launching'
                />
                <div className='pro-pricing-value basic'>
                  <div className='price-tag'>
                    <h2>Standard</h2>
                    <div className='price-matrix'>
                      <p className='offer'>28% Off (Early Birds offer)</p>
                      <div className='price'>
                        <h4>
                          <pre> ₹56,249 </pre>
                        </h4>
                        <pre>
                          <p> $749 </p>
                        </pre>
                      </div>
                      <div className='offer-price'>
                        <h4>₹40,499</h4>
                        <p>$539</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Step by Step course content</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Assignments</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Projects</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Github student developer pack</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img src='/assets/media/check-pricing.svg' alt='checked' />
                  <p>Developer community</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img
                    src='/assets/media/check-cross-pricing.svg'
                    alt='checked'
                  />
                  <p className='general-feature'>
                    Personalised feedback & Code review
                  </p>
                </li>
                <li className='pro-pricing-feature'>
                  <img
                    src='/assets/media/check-cross-pricing.svg'
                    alt='checked'
                  />
                  <p className='general-feature'>Mentorship</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img
                    src='/assets/media/check-cross-pricing.svg'
                    alt='checked'
                  />
                  <p className='general-feature'>
                    Access to office hours (Doubt clearing session)
                  </p>
                </li>
                <li className='pro-pricing-feature'>
                  <img
                    src='/assets/media/check-cross-pricing.svg'
                    alt='checked'
                  />
                  <p className='general-feature'>Coach follow up</p>
                </li>
                <li className='pro-pricing-feature'>
                  <img
                    src='/assets/media/check-cross-pricing.svg'
                    alt='checked'
                  />
                  <p className='general-feature'>Portfolio preparation</p>
                </li>
              </ul>
            </article>
            <a
              className='btn'
              href='https://launchpad.altcampus.school/signup?plan=standard'
            >
              <div className='premium-btn'>
                <img
                  className='premium-btn-img'
                  src='/assets/media/basic-medal.svg'
                  alt='medal-in-button'
                />
                <p>BUY NOW</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
