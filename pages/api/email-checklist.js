import axios from "axios"
import validator from 'validator';

function checklistCopy() {
  return `
    <div>
      <p>Hello there,</p>
      <p>
        Thank you for expressing interest in AltCampus.
      </p>
      <p>
        We're thrilled to share our comprehensive "The Ultimate Full Stack Web Developer Competency Checklist" with you. 
        Your dedication to self-improvement and growth is commendable.
      </p>
      <p>
        Please check out the AltCampus' "The Ultimate Full Stack Web Developer Competency Checklist" you requested from <a href="https://altcampus.notion.site/The-Ultimate-Full-Stack-Web-Developer-Competency-Checklist-99c92bd98f0e43a9abce6687d733eb29?pvs=4">this Notion Page</a> or here - https://altcampus.notion.site/The-Ultimate-Full-Stack-Web-Developer-Competency-Checklist-99c92bd98f0e43a9abce6687d733eb29?pvs=4
      </p>
      <p>It's packed with detailed and step-by-step micro learning checkpoints that will help you assist in figuring out which course to take or skill to sharpen next.</p>
      <p>
        Feel free to take your time going through the checklist at your own pace.
      </p>
      <p>
        If you find value in the checklist, we believe you'll gain even more by joining our comprehensive course.
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
        "subject":"Access AltCampus - The Ultimate Full Stack Web Developer Competency Checklist Here!",
        "htmlContent":`<html><head></head><body>${checklistCopy()}</body></html>`
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