import React from 'react';

function Footer(props) {
  return (
    <footer class='footer'>
      <div class='container footer-flex'>
        <div class='footer-col1-2'>
          <a class='footer-logo' href='/'>
            <img src='/assets/media/logo.svg' alt='AltCampus Logo' />
          </a>
          <p class='footer-text'>
            Everything you need to become a software developer
          </p>
        </div>
        <div class='footer-col1-2 footer-links'>
          <div class='footer-col2 flex-between'>
            <div class='links'>
              <h4>Quick links</h4>
              <div class='flex-between item-start'>
                <ul class='quick-links'>
                  <li>
                    <a href=''>Home</a>
                  </li>
                  <li>
                    <a href='/#course-details'>Course Details</a>
                  </li>
                  <li>
                    <a href='/how-it-works'>How it works</a>
                  </li>
                  <li>
                    <a href='/#testimonials'>Testimonials</a>
                  </li>
                  <li>
                    <a href='/pricing'>Pricing</a>
                  </li>
                  <li>
                    <a href='/#faqs'>FAQs</a>
                  </li>
                </ul>
                <ul class='quick-links'>
                  <li>
                    <a href='/contact' target='_blank'>
                      Contact
                    </a>
                  </li>

                  <li>
                    <a href='/privacy'>Privacy</a>
                  </li>
                  <li>
                    <a href='/refund-policy'>Refund Policy</a>
                  </li>
                  <li>
                    <a href='/pricing-policy/'>Pricing Policy</a>
                  </li>
                  <li>
                    <a href='/terms/'>Terms</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='social'>
              <h4>Follow Us</h4>
              <ul class='social-flex'>
                <li>
                  <a target='_blank' href='https://facebook.com/AltCampusIO'>
                    <img
                      src='/assets/media/facebook-icon.svg'
                      alt='facebook-icon'
                    />
                  </a>
                </li>
                <li>
                  <a target='_blank' href='https://twitter.com/altcampus'>
                    <img
                      src='/assets/media/twitter-icon.svg'
                      alt='twitter-icon'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class='footer-copyright'>
        <small>&copy; AltCampus Services Pvt. Ltd, 2018-present.</small>
      </div>
    </footer>
  );
}

export default Footer;
