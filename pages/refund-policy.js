import React from 'react';
import Head from 'next/head';
import LayoutHome from '../components/Common/Layout';

function RefundPolicy(props) {
  return (
    <>
      <Head>
        <title>Refund Policy | AltCampus</title>
      </Head>
      <LayoutHome>
        <main class="max-w-3xl mx-auto px-6 space-y-4 text-gray-600 py-8 pb-16 space-y-3 font-normal antialiased">
          <article className="text-center md:py-16 py-12">
            <h1 className="text-5xl text-dark-blue-500 font-semibold">
              Refund Policy
            </h1>
          </article>
          <p>
            The information provided below will help a User to understand our
            refund deadlines and policies.
          </p>
          <p>
            A User, who has not in the past 7 days availed the Free Trial, shall
            be entitled to a refund of 90% (ninety percent) of the course fee
            paid upon a valid refund request raised within 7(seven) days from
            the date of payment.
          </p>
          <p>
            A User who has availed a Free Trial as specified in the
            <a href="/pricing-policy">Pricing Policy</a>, any time during the
            preceding 7 days, shall not be entitled to any refund. It is
            clarified that if any User makes payment during the subsistence of
            the Free Trial Window, such User shall not be entitled to any
            refund. AltCampus reserves the right to reject a refund request if
            in its view the User has not furnished any reason for seeking a
            refund or has not furnished any valid refund request.
          </p>

          <p>
            The refund request shall be raised in the form and manner specified
            in this refund policy (‘Specified Manner’). Any refund request not
            raised in the Specified Manner shall be treated as null and void and
            AltCampus shall at its sole discretion be entitled to proceed or not
            proceed with such refund.
          </p>
          <p>
            In respect of this refund policy, the Specified Manner shall mean
            the refund request raised by the User by sending an email with
            subject matter “Refund Request” to hello@altcampus.io, specifying
            the User Name, the course details, the date of payment and the
            reason for seeking refund. AltCampus shall refund the money to the
            original payment method, at its discretion, depending on the
            policies of AltCampus’s payment processing partners, the platform
            through which the course was purchased (Website), and other factors.
          </p>
          <p>
            Except as specified in this Refund Policy, AltCampus shall not be
            obligated to provide refund to the Users.
          </p>
          <p>
            Notwithstanding the foregoing and unless explicitly stated
            otherwise, if a purchase is made by a User through third party
            marketplace (e.g. purchase made through alternative payment services
            or through Google play store or Apple App store or any third party
            educational course marketplace) (‘Third Party Marketplace’), the
            terms and conditions and the refund policy applicable to such Third
            Party Marketplace shall apply. The refund process shall be governed
            by the refund policies of such Third Party Marketplace and such
            Third Party Marketplace shall be solely responsible for making such
            refunds. AltCampus hereby disclaims all responsibilities or
            liabilities arising out of such Third Party Marketplace’s refund
            policy or the third party’s compliance or non-compliance with its
            refund policy.
          </p>
          <p>
            Please note that AltCampus views and treats violations of its Terms
            of Use very seriously and shall have no obligation to offer refunds
            to Users who violate such terms, even if the refund request is made
            within the designated refund period as specified above.
          </p>
        </main>
      </LayoutHome>
    </>
  );
}

export default RefundPolicy;
