import React, { useState } from 'react';
import Image from 'next/image';

let data = [
  {
    topImage: '/images/happy-child.svg',
    question: 'Who is it for?',
    answer:
      'AltCampus is an online programming bootcamp for recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required.',
    quote: {
      text: 'This is the most detailed, to the point and practical curriculum that I have come across during my search of a bootcamp.',
      author: {
        name: 'Sachin',
        company: 'Cleartax',
        avatar: '/images/students/sachin.svg'
      }
    }
  },

  {
    topImage: '/images/happy-child.svg',
    question: 'Can I get a demo before I signup?',
    answer: 'Yes, you can try the free version of the program here.',
    quote: {
      text: 'I feel proud to be a student of first batch. AltCampus provided me a platform to realize my potential. All mentors were outstanding and gave me the best guidance possible.',
      author: {
        name: 'Komal',
        company: 'KheloMore',
        avatar:
          'https://altcampus.school/_next/image?url=%2Fassets%2Fmedia%2Fkomal.jpeg&w=1920&q=75'
      }
    }
  },
  {
    topImage: '/images/happy-child2.svg',
    question: 'Is this course self-paced or cohort based?',
    answer: `We provide both the options. You can join a cohort or you can opt to do it at your own pace. The mentorship in either case will be available for 9 months.

      It's easier to stay motivated and learn with a group of students, so if you want accountability, can put in 6-8 hours/day and really want to finish the course then we recommend that you join a cohort.`,
    quote: {
      text: `AltCampus's scheduled program, weekly demo sessions, hackathons, code reviews, etc. provided the necessary milieu to set the ball rolling. The full stack web development program at AltCampus, had the rigorousness in its curriculum to equip fairly for interviewing and getting a job.`,
      author: {
        name: 'Shasank',
        company: 'BigBinary',
        avatar:
          'https://altcampus.school/_next/image?url=%2Fassets%2Fmedia%2Fstudents%2Fshashank.jpeg&w=1920&q=75'
      }
    }
  },
  {
    topImage: '/images/happy-child2.svg',
    question: 'Does AltCampus help me get a job?',
    answer:
      'Yes. AltCampus does help in job placements. We help you at every stage. We help you build strong portfolio, prepare for interviews, and put you in touch with companies for interview.',
    quote: {
      text: 'This is the most detailed, to the point and practical curriculum that I have come across during my search of a bootcamp.',
      author: {
        name: 'Sachin',
        company: 'Cleartax',
        avatar: '/images/students/sachin.svg'
      }
    }
  },
  {
    topImage: '/images/happy-child3.svg',
    question: `Can I buy now and pay later?`,
    answer:
      'Yes. AltCampus has partnered with Mihuru to provide you EMI based loan to enroll in the course. Please apply here to avail it.',
    quote: {
      text: 'This is the most detailed, to the point and practical curriculum that I have come across during my search of a bootcamp.',
      author: {
        name: 'Sachin',
        company: 'Cleartax',
        avatar: '/images/students/sachin.svg'
      }
    }
  },
  {
    topImage: '/images/happy-child2.svg',
    question: 'How long is the course?',
    answer: `In a cohort, it takes about 6-7 months to finish the AltCampus course. In self paced, it depends on the time and dedication of the learner. Students usually finish the course in anywhere between 5 to 9 months. Mentorship in either options is available till 9 months.`,
    quote: {
      text: 'AltCampus has made my career. I am very grateful to the mentors of AltCampus who believed in me and were there with me at each step in my learning journey. I will always remember their contribution.',
      author: {
        name: 'Ashwini',
        company: 'ClearTax',
        avatar:
          'https://altcampus.school/_next/image?url=%2Fassets%2Fmedia%2Fstudents%2Fashwani.jpeg&w=1920&q=75'
      }
    }
  },
  {
    topImage: '/images/happy-child3.svg',
    question: 'Can I interact with mentors live?',
    answer: `Yes, every working day mentors in all modules hold live, office hour sessions where you can ask your doubts and work on problems you are facing.`,
    quote: {
      text: 'AltCampus breaks the myth that you need a professional qualification to be a software developer. I was a CA dropout with no programming experience and currently I am working in a reputed company. This says all.',
      author: {
        name: 'Shreyans',
        company: 'BigBinary',
        avatar:
          'https://altcampus.school/_next/image?url=%2Fassets%2Fmedia%2Fsreyansh.jpg&w=1920&q=75'
      }
    }
  }
];

function FAQ(props) {
  let [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  return (
    <section className="py-10 answer-column">
      <div className="container px-8 sm:px-3 mx-auto break-words">
        <header className="text-center mb-20">
          <h2 className="text-4xl sm:text-5.5xl text-gray-500 font-bold leading-tight">
            In case you still have questions…
          </h2>
        </header>
        <div className="sm:grid grid-cols-2">
          <article>
            <ul className="border-solid border-r border-royal-blue-200">
              {data.map((q, index) => (
                <Question
                  {...q}
                  key={q.question}
                  index={index}
                  activeQuestionIndex={activeQuestionIndex}
                  setActiveQuestionIndex={setActiveQuestionIndex}
                />
              ))}
            </ul>
          </article>
          <Answer activeQuestionIndex={activeQuestionIndex} />
        </div>
        <footer className="text-center">
          <a
            href="/stories"
            className="inline-block mt-16 py-5 px-10 border-2 border-solid border-royal-blue-800 rounded text-royal-blue-800 font-bold text-center capitalize"
          >
            Read their success stories
          </a>
        </footer>
      </div>
    </section>
  );
}

function Question({
  question,
  answer,
  activeQuestionIndex,
  index,
  setActiveQuestionIndex
}) {
  return (
    <li
      className={`cursor-pointer border-solid border-b border-royal-blue-200 pb-3 ${
        activeQuestionIndex === index && ' active-ques'
      }`}
      onClick={() => setActiveQuestionIndex(index)}
    >
      <h3 className="text-2xl text-royal-blue-800 font-bold">{question}</h3>
      <p className="font-Karla text-gray-500 mt-2 truncate">{answer}</p>
    </li>
  );
}

function Answer({ activeQuestionIndex }) {
  let { answer, quote, topImage } = data[activeQuestionIndex];
  return (
    <article className="mt-12 sm:mt-0 sm:pl-14">
      <div className="text-center sm:text-left">
        <img src={topImage} alt="Happy Child Graphic" />
      </div>
      <p className="font-Karla text-royal-blue-800 tracking-tight text-lg mt-8">
        {answer}
      </p>
      <article className="flex items-center bg-white py-4 pr-6 pl-14 shadow-lg-custom rounded-2xl relative z-10 ml-6 mt-10">
        <p className="font-Karla text-base text-gray-500 leading-relaxed mr-6">
          {quote.text}
          <div className="absolute -left-8 -top-3 transform">
            <span className="text-center rounded-full text-8xl text-green-theme-900 block w-16 h-16 transform -scale-y-1 font-Sora font-semibold text-opacity-50">
              “
            </span>
          </div>
        </p>
        <aside>
          <Image
            className="rounded-full"
            height="56"
            width="56"
            src={quote.author.avatar}
            alt="Sachin"
          />
          <div className="mt-4">
            <h4 className="text-royal-blue-800 font-semibold text-base">
              {quote.author.name}
            </h4>
            <h6 className="text-xxs text-gray-500 uppercase font-normal mt-1">
              {quote.author.company}
            </h6>
          </div>
        </aside>
      </article>
    </article>
  );
}
export default FAQ;
