import React, { useState } from 'react';
import Image from 'next/image';

let data = [
  {
    topImage: '/images/learning-pace.webp',
    question: 'Who is it for?',
    answer:
      'AltCampus offers web development courses for recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, wannabe indiehackers or just anyone interested in learning web development. No prior programming knowledge required.',
    quote: {
      text: 'AltCampus breaks the myth that you need a professional qualification to be a software developer. I was a CA dropout with no programming experience and currently I am working in a reputed company. This says all.',
      author: {
        name: 'Shreyansh',
        company: 'BigBinary',
        avatar: '/images/students/shreyansh.webp'
      }
    }
  },
  /*
  {
    topImage: '/images/happy-child.svg',
    question: 'Can I get a demo before I signup?',
    answer:
      'Yes, you can try the free version of the program here. https://try.altcampus.com/',
    quote: {
      text: 'The perfect place for someone looking to enter the world of tech with a strong support community, and great mentors, guided by a real drive to help each student realise his/her potential.',
      author: {
        name: 'Akshat',
        company: 'Mclaren College',
        avatar: '/images/students/akshat.jpeg'
      }
    }
  },*/
  {
    topImage: '/images/learn-by-doing.webp',
    question: 'Is this course self-paced or cohort based?',
    answer: `It's a self-paced course. The entire course content is pre-recorded and you can go at your own and can learn part-time or full-time, in day or night.`,
    quote: {
      text: `The full stack web development program at AltCampus, had the rigorousness in its curriculum to equip me fairly for interviewing and getting a job.`,
      author: {
        name: 'Shasank',
        company: 'BigBinary',
        avatar: '/images/students/shashank.webp'
      }
    }
  },
  {
    topImage: '/images/learn-by-doing.webp',
    question: 'How does AltCampus help me get a job?',
    answer:
      'AltCampus has modules dedicated on how to go about building resume and portfolio, how to prepare for interviews, and how to do job hunting. It makes finding jobs easier.',
    quote: {
      text: 'Altcampus made me job-ready in just 7 months. If genuinely you want to be a MERN Stack Developer consider joining AltCampus.',
      author: {
        name: 'Onkar',
        company: 'Emtec inc.',
        avatar: '/images/students/onkar.webp'
      }
    }
  },
  {
    topImage: '/images/get-help.webp',
    question: 'Do I have to take the entire full-stack course?',
    answer: `No, you can take individual specific skill based courses like HTML & CSS, Core JavaScript, React.js or Node.js. You can also take tracks like Frontend Development, Backend Development or Fullstack MERN Web Development.`,
    quote: {
      text: 'AltCampus was the best decision of my life. AltCampus helped me learn both technical and non-technical skills and most important of all <strong>I got my first job because of AltCampus</strong>. Thank you AltCampus ❤️',
      author: {
        name: 'Ayushman',
        company: 'BigBinary',
        avatar: '/images/students/ayushman.webp'
      }
    }
  },
  // {
  //   topImage: '/images/happy-child3.svg',
  //   question: `Can I buy now and pay later?`,
  //   answer:
  //     'Yes. AltCampus has partnered with Mihuru to provide you EMI based loan to enroll in the course. Please apply here to avail it.',
  //   quote: {
  //     text: 'AltCampus is an experience and life-changing journey for me. It shaped my thought and I learned to focus on process. Mentors helped me to learn coding from zero to professional level. Thank you AltCampus for opening doors to new horizons.',
  //     author: {
  //       name: 'Ashik',
  //       company: 'Out of Box',
  //       avatar: '/images/students/ashik.svg'
  //     }
  //   }
  // },
  {
    topImage: '/images/happy-child2.svg',
    question: 'Is the course offline or online?',
    answer: `The course is completely online. You can take the course from anywhere in the world.`,
    quote: {
      text: `AltCampus's online course is extremely well designed. Everything is broken down - concepts, assignments and projects sequentially. You can finish the course on your own. `,
      author: {
        name: 'Ayush',
        company: 'Stackera',
        avatar: 'https://pbs.twimg.com/profile_images/1328286297492840451/TO-YmsZR_400x400.jpg'
      }
    }
  },
  {
    topImage: '/images/get-help.webp',
    question: 'Are there any live sessions?',
    answer: `No, there are no live sessions. Everything is pre-recorded. If you have queries you can ask in forum where community will answer your questions.`,
    quote: {
      text: 'I have had a life-changing experience with Altcampus. Coming from a non-software background, the path was tough but the course and the community made it possible for me to become a Software Engineer.',
      author: {
        name: 'Sourav',
        company: 'BigBinary',
        avatar: '/images/students/sourav.webp'
      }
    }
  }
];

function FAQ(props) {
  let [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  return (
    <section className="py-10 mt-6 answer-column">
      <div className="container px-8 sm:px-3 mx-auto break-words">
        <header className="text-center mb-20">
          <h2 className="text-4xl sm:text-5.5xl text-gray-500 font-bold leading-tight">
            In case you still have questions…
          </h2>
        </header>
        <div className="lg:grid grid-cols-2">
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
            className="hover-btn inline-block mt-16 py-5 px-10 border-2 border-solid border-royal-blue-800 rounded text-royal-blue-800 font-bold text-center"
          >
            <strong className="relative z-10">
              Read their success stories
            </strong>
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
      className={`cursor-pointer border-solid border-b border-royal-blue-200 py-4 ${
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
    <article className="mt-12 lg:mt-0 lg:pl-14">
      <div className="text-center sm:text-left">
        <img
          className="w-32"
          src={topImage}
          alt="Happy Child Graphic"
          width="120"
          height="109"
        />
      </div>
      <p className="font-Karla text-royal-blue-800 tracking-tight text-lg mt-4">
        {answer}
      </p>
      <article className="flex items-center bg-white py-4 pr-6 pl-14 shadow-lg-custom rounded-2xl relative z-10 ml-6 mt-10">
        <div className="font-Karla text-base text-gray-500 leading-relaxed mr-6">
          <p dangerouslySetInnerHTML={{ __html: quote.text }}></p>
          <span className="absolute -left-8 -top-3 transform">
            <span className="text-center rounded-full text-8xl text-green-theme-900 block w-16 h-16 transform -scale-y-1 font-Sora font-semibold text-opacity-50">
              “
            </span>
          </span>
        </div>
        <aside className="text-center">
          <figure>
            <Image
              className="w-14 h-14 rounded-full inline-block min-w-max object-cover"
              height="60"
              width="60"
              src={quote.author.avatar}
              alt={quote.author.name}
            />
            <figcaption className="">
              <cite className="text-base not-italic text-royal-blue-800 font-semibold">
                {quote.author.name}
              </cite>
              <br />
              <cite className="text-xxs not-italic text-gray-500 tracking-normal uppercase">
                {quote.author.company}
              </cite>
            </figcaption>
          </figure>
        </aside>
      </article>
    </article>
  );
}
export default FAQ;
