import Link from 'next/link';
import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

function CourseStack(props) {
  
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

    const res = await fetch('/api/email-curriculum', {
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
    <section className="pt-24 pb-8">
      <div className="container mx-auto px-8 sm:px-3">
        <div className="max-w-5xl mx-auto">
          <header className="mb-7">
            <h3 className="text-xl text-gray-500 ">
              What you are going to learn
            </h3>
          </header>
          <div className="md:grid md:grid-cols-2 gap-x-16 gap-y-9">
            <article className="">
              <h2 className="font-bold text-4xl text-royal-blue-800 leading-snug">
                Most in-demand <br /> skills to be a <br />
                <strong className="text-green-theme-900">
                  Software Developer
                </strong>{' '}
              </h2>
              <p className="font-Karla text-xl tracking-tight text-gray-500 leading-relaxed mt-8">
                Are you ready to become a full-stack web developer? Our courses
                cover the most in-demand programming skills of today. With our
                comprehensive curriculum, you'll learn{' '}
                <Link href="/courses/react.js-mastery-from-basic-to-advanced" className="underline">
                  React
                </Link>
                ,{' '}
                <Link href="/courses/back-end-web-development" className="underline">
                  Express JS, Node JS, and Mongo DB
                </Link>{' '}
                – the trifecta of web development known as the MERN stack.
              </p>
            </article>
            <div className="relative my-12 md:my-0">
              <figure className="absolute inline-block left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-72 h-72 bg-royal-blue-600 bg-opacity-5 rounded-full blur-xl filter"></div>
              </figure>
              <figure className="relative z-10">
                <img
                  className=""
                  src="/images/icons/course-logo.webp"
                  alt="MERN Course Stack"
                  width="480"
                  height="235"
                />
              </figure>
            </div>
            <article className="">
              <p className="font-Karla text-xl tracking-tight text-gray-500 leading-relaxed mt-8">
                By mastering these powerful tools, you'll be equipped to tackle
                any project and impress potential employers. Join us and take
                your skills to the next level!
              </p>
            </article>
            <article className="flex items-center bg-white py-6 px-7 shadow-lg-custom rounded-2xl relative z-10">
              <p className="font-Karla text-base text-gray-500 leading-relaxed mr-6 relative">
                A life changing investment! From zero to deployment, AltCampus
                full stack MERN course teaches you everything.
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <span className="text-center rounded-full text-8xl text-green-theme-900 block w-16 h-16 transform -scale-y-1 font-Sora text-opacity-10 font-semibold">
                    “
                  </span>
                </span>
              </p>
              <aside className="min-w-max text-center">
                <figure>
                  <img
                    className="w-16 h-16 rounded-full object-cover inline-block"
                    src="/images/students/shastri.webp"
                    alt="Abhishek"
                    width="64"
                    height="64"
                  />
                  <figcaption className="mt-4">
                    <cite className="text-base not-italic text-royal-blue-800 font-semibold">
                      Abhishek
                    </cite>
                    <br />
                    <cite className="text-xxs not-italic text-gray-500 tracking-normal uppercase">
                      VeGrow
                    </cite>
                  </figcaption>
                </figure>
              </aside>
            </article>
          </div>
        </div>
      </div>
      <div className="blur-before blur-after relative z-10 mt-16">
        <div className="bg-white relative z-10">
          <div className="container mx-auto px-8 sm:px-3">
            <article className="max-w-5xl mx-auto py-12">
              {
                emailSent ?
                  <div className="text-center">
                    <h3 className="text-2xl text-royal-blue-800 font-semibold">
                      Thank you for your interest in our curriculum. We have sent
                      the curriculum outline to your inbox. ✅
                    </h3>
                  </div>
              :
                <form action="" className="bg-white md:flex gap-x-14">
                  <legend className=" text-2xl text-royal-blue-800 font-semibold max-w-md">
                    Would you like us to send our curriculum outline to your inbox
                    ?
                  </legend>
                  <fieldset className="flex space-x-6 w-full mt-6 md:mt-0">
                    <input
                      className="border border-solid border-royal-blue-200 text-base placeholder-gray-500 py-5 px-7 rounded-full inline-block w-4/5 shadow-lg-custom outline-none focus:border-royal-blue-800 text-royal-blue-800"
                      type="email"
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email id"
                    />
                    <button onClick={(e) => sendEmail(e)} className="bg-royal-blue-800 py-4 px-8 rounded-full shadow-lg-custom animate-arrow">
                      {
                        isEmailBeingSent ?
                          <span className='text-white text-xs'>Sending</span>
                        :
                          <img
                            className="arrow-slide"
                            src="/images/icons/arrow-right-white.svg"
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseStack;
