import React from 'react';

function LetsTalk(props) {
  return (
    <section className='padding cta'>
      <div className='container'>
        <div className='cta-wrapper'>
          <div>
            <h3>Still have doubts? Talk to us!</h3>
            <h5>Get on a call with our co-founder.</h5>
          </div>

          <a
            className='btn'
            href='https://calendly.com/prank7/altcampus-one-on-one'
            target='_blank'
          >
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
}

export default LetsTalk;
