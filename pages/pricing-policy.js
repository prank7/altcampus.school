import React from 'react';
import Head from "next/head";
import LayoutHome from '../components/Home/Layout';

function PricingPolicy(props) {
  return (
    <>
    <Head>
      <title>Pricing Policy | AltCampus School</title>
    </Head>
    <LayoutHome>
      <main class='max-w-3xl mx-auto px-6 space-y-4 text-gray-700 py-8 pb-16 space-y-3 font-normal'>
        <article className='text-center md:py-16 py-12'>
          <h1 className='text-5xl text-dark-blue-500 font-semibold'>
            Pricing Policy
          </h1>
        </article>
        <p>
          The price of courses on AltCampus is based on a number of factors.
          Thus, AltCampus reserves the right to change the price of the courses
          depending on variation in such factors at its sole discretion. In
          certain instances, the price of a course displayed on AltCampus’s
          website may be different from what is displayed on AltCampus’s
          marketing material, due to changes in pricing systems and policies
          implementing sales and promotions of the courses. In case of such
          conflict, the prices mentioned in the website should be considered
          final.
        </p>

        <p>
          A user registering with AltCampus (‘User’) may have the option to opt
          for a Free Trial (as defined below) or pay the course fee at the time
          of registration. AltCampus may offer a free trial period of 7 (seven)
          days (‘Free Trial Window’) for the specified courses (‘Free Trial’).
          If free trial is available, the Free Trial Window shall commence from
          the date from which the access to the course is granted to the User
          and shall expire after the expiration of 7 (seven) days from the date
          of such access. Upon the expiration of the Free Trial Window, the
          access to the course will be terminated by AltCampus unless the User
          shall have made full payment associated with the courses (‘Course
          Fee’) to AltCampus. The Course Fee is as follows:
        </p>

        <h5 className='text-green-theme-500 text-2xl'>
          Full Stack Web Development Course
        </h5>

        <p>
          i. Study Material Access - at USD 749 (exclusive of additional
          charges) <br />
          <ul>
            <li>
              • The User shall be able to access the course content including
              reading material in PDF format, video recordings, sample exercises
              and projects.
            </li>
          </ul>
        </p>

        <p>
          ii. Full Access - at USD 1249 (exclusive of additional charges) <br />
          <ul>
            <li>
              • The User will be able to access the course content including
              reading material in PDF format, video recordings, sample
              exercises, projects and guidance from AltCampus for doubt clearing
              via live video calls and Slack.
            </li>
            <li>
              • Live mentorship and scheduled personal coaching from AltCampus
              mentor for six-months from the day of subscription payment.
            </li>
          </ul>
        </p>

        <p>
          The Users is required to make full payment of the Course Fee in lump
          sum at the time of purchasing the course/ enrolling for the course.
        </p>

        <p>
          The prices may also differ due to one or a combination of the
          following factors: <br />
          <ul>
            <li>
              i. The price of the course may include the applicable taxes or
              such taxes may be added to the price upon checkout based on the
              laws of the country in which the User is located. The payment has
              to be made in the official currency of the country where the User
              is located at the applicable currency exchange rates at the time
              of payment.
            </li>
            <li>
              ii. Special discount or offer available to Users of one country.
            </li>
            <li>
              iii. Users who enroll within 28 days from the launch of the
              course, at the discretion of AltCampus may be provided with a
              special discount.
            </li>
          </ul>
        </p>
        <p>
          The User agrees to pay the fee for the course, at the time of purchase
          and authorize AltCampus to charge its debit card or credit card or
          process other means of payments (including mobile wallets and UPIs).
          The User agrees not to make use of an unauthorized or invalid payment
          method to make a purchase with AltCampus. In the event of failure of a
          payment method, if the User still gets access to the course, the User
          agrees to pay the equivalent fee within 3 days from receipt of a
          notice from AltCampus. AltCampus reserves the right to disable the
          User’s access to the course for which complete payment is not received
          by AltCampus. AltCampus collaborates with third party payment
          processing partners to offer the most convenient methods to a User
          depending on the country where such User is located. User is requested
          to check out{' '}
          <a href='/privacy' target='_blank'>
            AltCampus’s Privacy Policy
          </a>{' '}
          for more information.
        </p>
        <p>
          As stated above, the price may change depending on the policies of
          AltCampus. The price offered for the course may be different when a
          User logs in to account from the price available to Users who haven’t
          logged in or do not have an account with AltCampus, because some of
          AltCampus’s promotions may be available to only new Users.
        </p>
      </main>
    </LayoutHome>
    </>
  );
}

export default PricingPolicy;
