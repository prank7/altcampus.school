import axios from "axios"
import validator from 'validator';

function curriculumCopy() {
  return `
    <div>
      <p>Hello there,</p>
      <p>
        Thank you for expressing interest in AltCampus.
      </p>
      <p>
        We're thrilled to share our comprehensive course material with you. 
        Your dedication to self-improvement and growth is commendable.
      </p>
      <p>
        Please download the AltCampus curriculum you requested from <a href="https://altcampus.com/docs/curriculum.pdf">here</a> or here https://altcampus.com/docs/curriculum.pdf if you the link doesn't work.</br>
        It's packed with detailed and step-by-step topics, exercises, projects, and resources that will help you become a full stack software developer.
      </p>
      <p>
        Here's a quick overview of what you'll find in the curriculum:
        <br/>
        <br/>
        1. Module 1: Unix and Git
          - Getting started with the command line, Git and exercises to practice.
        <br/>
        2. Module 2: HTML & CSS
          - Learn the basics of HTML and CSS and build plenty of projects to master frontend UI development.
        <br/>
        3. Module 3: JavaScript
          - Learn the fundamentals of JavaScript and build projects to master interactivity and making rich client side apps.
        <br/>
        .... and so on.
        <br/>
      </p>
      <p>
        Feel free to take your time going through the curriculum at your own pace.
      </p>
      <p>
        If you find value in the curriculum, we believe you'll gain even more by joining our comprehensive course.
      </p>
      <p>
        To learn more about the complete AltCampus's various courses and how it can transform your career, please visit our website https://altcampus.com.
      </p>
      <p>
        Thank you once again for your interest and for joining us on this learning journey. We look forward to witnessing your growth and success.
      </p>
      <br/>
      <p>
        Best regards,<br/>
        Prashant
      </p>
    </div>

  `
}

export default async function handler(req, res) {
  if (req.method === 'POST' && req.body.email && validator.isEmail(req.body.email)) {
    try {
      var { data} = await axios.post('https://api.brevo.com/v3/smtp/email', {  
        "sender":{  
          "name":"Team AltCampus",
          "email":"no-reply@altcampus.com"
        },
        "to":[  
          {  
            "email": req.body.email
          }
        ],
        "subject":"Your AltCampus Curriculum - Download Here!",
        "htmlContent":`<html><head></head><body>${curriculumCopy()}</body></html>`
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY 
        }, 
      })
      return res.status(200).json({ message: 'mail sent'})
    } catch (error) {
      console.log(error)
    }
  } else {
    return res.status(400).json({ error: 'Invalid email address.' })
  }
}