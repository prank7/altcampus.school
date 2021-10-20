---
title: 'Why SEO Is Important For A Web Developer'
description: 'Is React bad for SEO? Read on to know important SEO tips for making React webistes SEO friendly.'
date: '2021-10-21'
blurb: Make your React websites SEO friendly with must know SEO tips.
photo: '/images/posts/seo-tips-react-developer.png'
cta: true
ctaText: Learn full stack development at AltCampus and become job ready 🚀
author: 'ivinoop'
---

## What is SEO?

In simple words, SEO (Search Engine Optimization) is the process of improving your website's visibility in a search engine by optimizing keywords that have good ranking and volume (by search traffic). Keywords are those specific search terms that people use to search on the web. These terms are globally ranked according to the content (blogs, websites, etc) quality and UX (user experience). 

Google is the most popular search engine that provides a globally connected way for marketers and bloggers to analyse keywords and their rankings, and prepare content accordingly for their websites. 

However, keywords are slowly becoming less relevant, since search engine algorithms are now capable of filtering quality content from bad content. This is why your website's code matters a lot.

Algorithms today rank websites (more relevant) along with keywords (comparitively a little less relevant), based on content quality and search intent as well. Search intent is the process of optimising relevant content for search terms based on location and content/website popularity.

## Why is SEO Important For A Web Developer?

As the basic building block of any web page on the internet, HTML is a great way to ensure great SEO by writing [semantically correct and clean code](https://altcampus.school/posts/writing-semantically-correct-and-clean-html). 

The `title`, `meta`, `header(h1 - h6)`, `alt` tags, canonical tags like `link` and `a`, and responsive meta tag attributes like `name`, `viewport`, `content`, and `scale`, are all highly important SEO focused tags in HTML that will set up a foundational site optimized for search engines. This is called on-page SEO and is very important to establish website visibility. 

But using a frontend technology like React Library is proven to be bad for SEO. 

## Why React Is Bad for SEO

React as a library is not in itself a bad factor. Rather, since the library is based on JavaScript, it has a few shortcomings. 

It is important to understand how search engines work here. Search engines have crawlers that continuously crawl the web and index websites and their pages based on content quality, semantically proper HTML, and website usability. 

Since traditional websites have their entire content in the HTML page, it is very easy for crawlers to index this landing page and its content, check for SEO focused tags, and then they start ranking the site and its pages for visibility.

But since JavaScript constructs DOM during runtime, there is a lot of request and response time wherein the crawler waits for JS to be loaded into the browser, for the code to be executed, and for other pending asynchronous tasks to be run as well. This is too much time for a crawler to be spent. 

SPAs or Single Page Applications have been on the rise over the last few years (which is also the reason for popularity of libraries and frameworks like React, Angular, Vue etc). But majority of the websites in existence are still traditionally architectured. 

This means that React based frontends that use JavaScript primarily for rendering pages are not indexed on priority basis by search engine algorithms. In theory, Google claims to have fixed this since 2015, but in practice, it is a work in progress. Other search engines like Bing, DuckDuckGo, etc cannot even parse JavaScript based pages. These delays are bad for SEO since there is limited window for website visibility and search results. 

### In short, this is how crawlers generally work - 

🤖 A crawler bot has a queue of website URLs that it needs to crawl and index.

🤖 At idle times, the crawler hits up each URL in the queue, makes a request to its server, and fetches the HTML (to read the content).

🤖 Once this HTML content is parsed, the crawler also finds out it an additional request needs to be made to fetch and execute JavaScript in order to render the UI.

- If needed, then this URL is moved to a "render" queue. 
- This queue is visited much later on. 

🤖 Once all the canonical link tags are extracted and indexed, the content is finally added to the search engine's index.

## Problems faced with React for SEO 

<br>

### 1. Empty Content

Given the above process, if the crawler sees an empty or meaningless HTML, which is always the case when using React (since content is rendered once JavaScript is executed), then there is no content for the crawler to index.

### 2. Load Time & UX

Fetching and loading hundreds of JavaScript files for a decent sized web application takes a lot of time. If there are additional network calls to be made, this only adds more waiting time. Google uses something called [Web Vitals](https://support.google.com/webmasters/answer/9205520), which is a ranking criteria for websites. If the user experience is affected due to loading times and other UX issues, then your site will be ranked lower. 

### 3. Lack of Metadata 

`<meta>` tags for individual pages are highly important for visibility and content indexing. Since React renders all the content including meta tags on the client-side in a single app shell, adapting these meta content for individual pages is very difficult. 

### 4. No Built-In Sitemap

Sitemap files contain all the information of the website structure, the pages, media, and their interlinked relationships. This helps crawlers to intelligently index your site and hence improve ranking. 

However React does not have a default way to generate sitemaps. React Router is a necessary tool to handle routing in a React app, so you would have to use a tool to generate sitemap, but that takes a lot of effort again. 


## The Solution

So should you stop using React? Absolutely not. React is one of the high performant, in-demand technologies that is a great tool for developers to create rich UI/UX in websites and web applications. 

The solution here is to make React more SEO friendly such that search engine crawlers do not have to use JavaScript to render content. This is possible through **Server Side Rendering (SSR)**. 

SSR means to run JavaScript in the server itself before rendering it on the client side. This ensures that the user gets to directly see the content on their browser without waiting for React to run first. 

There are two primary advantages to this -

1. Page load times are a lot faster
2. JavaScript on the browser (client-side) is not at all needed to parse and display content

Achieving SSR from scratch can be challenging. This is why SSR frameworks like GatsbyJS and NextJS that are built on React have made lives easier. 

While Gatsby is great for static content rendering (no real-time content changes), NextJS goes one step ahead to give a hybrid solution for both static and dynamic sites. 

NextJS follows a lean development practice with stricter file name conventions. But these are small adaptive measures that developers can take to achieve great SEO and user experience. It also uses dynamic routing and custom server routing to segment a website into easily readable and structured paths. 

The best part is that all the great things about React like components, component properties, and component states, are not traded off. 

The company behind NextJS, Vercel, offers free hosting with `HTTPS` integrated as well. This means another bonus point for SEO since SSL certificate is now mandatory for sites to be ranked well. 

---

## Final Words

While traditional web development methodologies have trade-offs between either SEO or UI/UX or performance or even Developer Experience (DX), React and NextJS solves all these issues without having to trade-off on anything. 

Stay tuned for more such [articles on web development](https://altcampus.school/posts) ⏳

Meanwhile, sign up for our [full stack web development course](https://launchpad.altcampus.school/signup) and become a web developer today 🚀