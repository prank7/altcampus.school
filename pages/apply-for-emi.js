import React from 'react';
import Head from "next/head";

import LayoutHome from '../components/Home/Layout';

function ApplyForEMI(props) {
  return (
    <>
    <Head>
      <title>Apply For EMI | AltCampus School</title>
    </Head>
    <LayoutHome>
      <Content />
    </LayoutHome>
    </>
  );
}

function Content() {
  return (
    <main className='max-w-3xl mx-auto px-8 py-16'>
      <h1 className='text-center text-dark-blue-500 text-5xl font-semibold mb-8'>
        Apply For EMI
      </h1>
      {/* <h5 className='text-2xl font-bold text-green-theme-500'>
        How to apply
      </h5> */}
      <div className="">
        <h6 className='text-2xl text-royal-blue-500 font-bold mt-8 mb-2'>
          How to apply
        </h6>
        <p className='text-dark-blue-300 text-lg'>
          You can enroll in our programming bootcamp now and pay later using EMI. To make it easier for you to pay later, we have partnered with Mihuru.
          Please fill the form below to start the process, the entire process will take 1-3 working days. The application submission will hardly take 5 minutes of your time.
        </p>

        <h6 className='text-2xl text-royal-blue-500 font-bold mt-8 mb-2'>
          Steps involved
        </h6>
        <p className="text-dark-blue-300 text-lg prose">
          <ul className="text-dark-blue-300">
            <li>Please fill the form below.</li>
            <li>You will receive a mail within next 2-3 minutes from AltCampus, which will contain a link to Mihuru's application form.</li>
            <li>Keep your identity proofs and documents (Aadhar card, PAN card, Last 6 months bank statement) handy. It takes less than 5 minutes to fill up the form.</li>
            <li>Mihuru will review your application and if everything looks good to them, they will approve your application or they will get back to you if they need anything else.</li>
            <li>Once approved, Mihuru will send you the details of the pay later scheme.</li>
            <li>Upon the final agreement, Mihuru will inform AltCampus regarding your successful grant.</li>
            <li>AltCampus will send you a confirmation mail, create your account on AltCampus learning system and welcome you to the AltCampus community.</li>
            <li>Start learning! 😊 </li>
          </ul>
        </p>
      </div>

      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js">
      </script>
      <iframe 
        className="airtable-embed airtable-dynamic-height mt-8"
        src="https://airtable.com/embed/shrSxIehGZ2kabOwW?backgroundColor=green" 
        frameborder="0" 
        onmousewheel="" 
        width="100%"
        style={{"background": "transparent", width:"100%", height:"1165px", "border": "1px solid #ccc"}}>
      </iframe>
      
      {/* <div className='text-center mt-12'>
        <a
          href='https://launchpad.altcampus.school/signup'
          className='text-md text-white bg-green-theme-500 hover:bg-green-theme-600 uppercase py-3 px-20 inline-block mt-6 rounded font-semibold tracking-wider btn-hover font-mukta'
        >
          START LEARNING NOW
        </a>
      </div> */}
    </main>
  );
}

export default ApplyForEMI;
