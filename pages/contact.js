import LayoutHome from '../components/Home/Layout';
import Head from "next/head";
import { NextSeo } from 'next-seo';

function ContactPage(props) {
  var title = "Contact | AltCampus";
  var description = "Contact AltCampus, India's best programming bootcamp to get a job as a software developer.";
  var url = "https://altcampus.school/contact";
  return (
    <>
      <NextSeo 
        title={title}
        description={description}
        openGraph={{
          url,
          site_name: 'AltCampus School',
          title,
          description
        }}
      />
      <LayoutHome>
        <main className='max-w-xl mx-auto px-6'>
          <div>
            <article className='text-center md:py-16 py-12'>
              <h2 className='text-5xl text-dark-blue-500 font-semibold'>
                Contact Us
              </h2>
            </article>
            <section>
              <div>
                <h4 className='text-2xl'>Address</h4>
                <address>
                  <p>Thehr</p>
                  <p>Near Patola Ground</p>
                  <p>Khaniyara Khas, Dharamsala</p>
                  <p>Himachal Pradesh - 176215</p>
                  <p>India</p>
                </address>
                <div className='mt-4'>
                  Email us at -
                  <a
                    href='mailto:hello@altcampus.io'
                    style={{ color: '#30ba67' }}
                  >
                    hello@altcampus.io
                  </a>
                </div>

                <iframe
                  className='w-full py-10 h-64'
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3376.068052471449!2d76.36881743995058!3d32.20239688275869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b530e24726e0d%3A0x71ff0cae0784712d!2sAltCampus!5e0!3m2!1sen!2sin!4v1531142400286'
                  frameborder='0'
                  scrolling='no'
                  marginheight='0'
                  marginwidth='0'
                ></iframe>
              </div>
            </section>
          </div>
        </main>
      </LayoutHome>
    </>
  );
}

export default ContactPage;
