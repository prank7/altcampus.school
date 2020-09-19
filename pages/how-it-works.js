import React from 'react';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';

function HowItWorks(props) {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

function Content(props) {
  return (
    <main className='pricing-policycontainer pricing-policy padding-top-0 how-it-works '>
      <h1>How it works</h1>
      <h5>Student Journey</h5>
      <h6>Onboarding</h6>
      <p>
        As a student, once you signup you will be onboarded on our learning
        platform. Onboarding will involve connecting other platforms and tools
        and watching an orientation video on how to approach the course. You
        will be given access to all the tools we will use like Slack for
        communication, Github organization for collaboration, etc. Our learning
        platform hosts all the content, assignments, and projects. After being
        onboarded, You will be assigned a particular module and a mentor for the
        corresponding module. You can immediately start learning with our
        pre-recorded videos, step-by-step exercises, and assignments available
        there.
      </p>

      <h6>Content, Assignments, Projects & Feedback</h6>
      <p>
        Each module has concepts delivered using videos and it's followed up by
        quizzes and extensive exercises, small to big. We have made sure that
        there is enough practice material for you to master each concept.
        Projects are relatively bigger and end up on our portfolio. There are
        multiple projects in each module. As you keep moving in the course, your
        projects will start getting more meaningful and technically complex. The
        idea is to use these projects to showcase your prowess in software
        development. At each step, mentors will provide you with extra resources
        and tips to help you learn better.
      </p>
      <p>
        Once you have completed an exercise or project, there are two levels of
        feedback provided. One is automated feedback, which is a pre-recorded
        video of a mentor explaining the approach of solving the problem. This
        way you not only learn to do a certain thing but also learn the best
        practices of doing it. Then the other one is manual, one-to-one feedback
        where the mentor will review your code or text submission and provided
        written or if needed personalized video feedback. Again if there is
        still any doubt, this feedback can be discussed in the next live video
        call (office hour). We make sure that you master a concept before moving
        forward.
      </p>

      <h6>Mentor Office hours and Getting help</h6>
      <p>
        Every working day, the corresponding mentor will hold an office hour
        through a live video call. Mentor will provide feedback and help you
        resolve your doubts in the session. That's one way of getting help,
        another way is through Slack. For each module, there are dedicated
        channels where you can ask your questions and your peers and mentors
        will answer them as soon as possible. We understand that learning to
        code is challenging and there comes a time when you need more than
        technical support. Which is why throughout the course, the
        mentor-student relationship is very friendly and you can always share
        anything be it technical or psychological. Mentors will help, advise,
        and keep you focused on the learning path. We are here to help.
      </p>

      <h6>Tracking progress and accountability</h6>
      <p>
        We have laid a strong focus on consistency. The platform measures and
        encourages you to be consistent. Your mentors will closely follow your
        progress and if need be follow up with you and set up a separate
        one-to-one call to motivate, counsel, and help you move forward. We
        deeply care that anyone who starts the course actually finishes it.
      </p>
      <p>
        Everyone is encouraged to tweet their progress,{' '}
        <a target='_blank' href='https://twitter.com/search?q=altcampus'>
          examples of which you can see here
        </a>
        .
      </p>

      <h6>Peer group, Collaboration and Community</h6>
      <p>
        The learning platform will match you with people moving at your pace.
        You can personally connect to them via Slack. In general, you can share
        and help each other out through common module based topics. We conduct
        hackathons and workshop which you will have access to. People are
        encouraged to participate in the discussions and also share there
        learnings. Later in the course, you will collaborate with other peers to
        build real-life projects. You will also have access to our broader
        AltCampus alumni and offline student community.
      </p>

      <h6>Job support</h6>
      <p className='margin-bottom-4'>
        Throughout the course, we make sure that whatever you do is geared
        towards making a solid portfolio. Once you have finished all the
        modules, you will be given a rigorous 'Job Readiness Challenge', which
        involves assessing all the parts of the course put together. Upon
        completing the challenge, we help you with interview preparation. Then
        we start putting you in touch with the companies that are hiring.
        Employers will independently assess your skillsets. Once you clear an
        interview, you can either take it up or continue to look for other jobs.
      </p>

      <div className='flex-center margin-bottom-4'>
        <a
          className='btn btn-success'
          href='https://launchpad.altcampus.school/signup'
        >
          START LEARNING NOW
        </a>
      </div>
    </main>
  );
}

export default HowItWorks;
