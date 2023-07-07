import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';


function Checklist(props) {

  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailBeingSent, setIsEmailBeingSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!isEmail(email)) {
      alert('Please enter a valid email');
      return;
    }
    if(isEmailBeingSent) {
      return;
    }

    setIsEmailBeingSent(true);

    setEmailSent(true);

    const res = await fetch('/api/email-checklist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    
    if (res.status === 200) {
      setEmailSent(true);
      setIsEmailBeingSent(false);
    }
  };

  return (
    <section className="py-16 bg-royal-blue-800 bg-curve text-center md:text-left text-white">
      <article className="container mx-auto px-8 sm:px-3 lg:flex items-end font-bold justify-between">
        <div className="lg:w-6/12">
          <h3 className="text-xl font-normal">
            Want to be a developer but don’t know how and where to start?
          </h3>
          <h2 className="text-4xl font-bold mt-4 leading-normal">
            Get the developer's ultimate competency checklist delivered
          </h2>
        </div>

        {
          emailSent ?
            <div className="lg:w-6/12 lg:pl-24 mt-8 lg:mt-0">
              <p className="text-3xl font-bold">Thank you for subscribing!</p>
              <p className="text-lg mt-4">We have sent you the checklist on your email.</p>
            </div>
          :
          <form action="" className="lg:w-6/12 lg:pl-24 mt-8 lg:mt-0">
            <fieldset className="flex">
              <input
                className="border border-solid border-royal-blue-200 text-base placeholder-gray-500 py-5 px-7 rounded-full inline-block w-4/5 shadow-lg-custom outline-none focus:border-royal-blue-800 text-royal-blue-800"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your E-Mail ID"
              />
              <button 
                onClick={(e) => sendEmail(e)}
                className="bg-white ml-8 py-4 px-8 rounded-full shadow-lg-custom animate-arrow">
                {
                  isEmailBeingSent ?
                    <span className='text-blue-800 text-xs'>Sending</span>
                    :
                    <img
                      className="arrow-slide"
                      src="/images/icons/arrow-right-green.svg"
                      alt="Arrow Right Icon"
                      width="30"
                      height="18"
                    />
                }
              </button>
            </fieldset>
          </form>
        }
      </article>
    </section>
  );
}

export default Checklist;
