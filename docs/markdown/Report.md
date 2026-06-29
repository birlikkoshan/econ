**Astana IT University**

**REPORT**

on the completion of the professional practice program

Type of practice: production practice

Practice base: Eurasian Consulting Consortium LLP, Astana

Student: Koshan Birlik Abayuly

Educational program: Software Engineering

Group: SE-2429

Supervisor from AITU \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Aruzhan Ali

Supervisor from the enterprise \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Tapalova Karakoz Tuzelovna, Director

Astana, 2026

**ABSTRACT**

Report: 15 pages, 4 figures, 1 table, 5 sources, 2 appendices.

Keywords: WEB DEVELOPMENT, FRONTEND, REACT, VITE, TAILWIND CSS, CORPORATE WEBSITE, RESPONSIVE DESIGN, INTERNATIONALIZATION, USER INTERFACE, SINGLE PAGE APPLICATION.

The object of the work is the process of frontend web development. The subject of the work is the corporate website of Eurasian Consulting Consortium LLP.

The goal of the practice was to design and build a modern corporate website that presents the company to its clients. During the practice the company profile and requirements were studied, the structure of the site was designed, a suitable technology stack was selected, and the interface was implemented with React, Vite and Tailwind CSS. The site includes a hero section, a services section, a block about the company and a contact form with client-side validation, supports several languages, contains animations and adapts to mobile and desktop screens.

As a result of the practice a working corporate website was developed, tested and deployed. The result meets the requirements set by the company and is ready for use. The report describes the organization, the tools and technologies, the development process, testing, deployment and the results achieved.

**CONTENTS**

INTRODUCTION 4

1 Description of the organization 5

1.1 Field of activity of the company 5

1.2 The task assigned during the practice 5

2 Tools and technologies used 6

2.1 React and Vite 6

2.2 Tailwind CSS 6

2.3 Supporting tools 6

3 Development of the corporate website 8

3.1 Website structure and design 8

3.2 Implementation of the main sections 8

3.3 Contact form and validation 8

3.4 Internationalization 8

3.5 Animations and responsive layout 9

4 Testing, deployment and results 10

4.1 Testing 10

4.2 Deployment 10

4.3 Reflection on the practice 10

CONCLUSION 11

LIST OF REFERENCES 12

APPENDIX A Source code fragments 13

APPENDIX B Website screenshots 15

**INTRODUCTION**

I completed my production practice at Eurasian Consulting Consortium LLP in Astana from 8 June 2026 to 4 July 2026. The company provides professional, scientific and technical services and needed a clear online presence to introduce itself to potential clients. At the start of the practice the company did not have a modern website, so the main task assigned to me was to design and build one.

The goal of the practice was to apply my frontend development skills in a real project by creating a corporate website for the company. To reach this goal I set the following objectives:

а) study the profile of the company and the purpose of the future website;

б) design the structure of the site and the main user scenarios;

в) choose a suitable technology stack for a fast and maintainable interface;

г) implement the main sections, a contact form, multilanguage support, animations and a responsive layout;

д) test the website and deploy it so that the company can use it.

The object of the work is the process of frontend web development. The subject of the work is the corporate website of the company. The expected result of the practice was a finished and deployed website that matches the requirements of the company and looks professional on any device.

**1 Description of the organization**

**1.1 Field of activity of the company**

Eurasian Consulting Consortium LLP is a company that works in the field of other professional, scientific and technical activities. It offers consulting services to its clients and works mainly with organizations rather than with a wide consumer audience. The company is not large, which means that a fast and clear website is more important for it than a complex system with many pages.

Because the company communicates with clients who often look for information online first, a modern website is an important part of its image. The site has to explain in a few seconds what the company does, show its services and give a simple way to get in touch. This understanding shaped the whole design of the project.

**1.2 The task assigned during the practice**

During the practice I worked as a frontend developer. My task was to build a presentational website for the company from the first idea to the deployed result. I discussed the goals with my supervisor, agreed on the structure and content of the pages, and was responsible for the design and the code of the interface. The work was organized around weekly stages, which were fixed in the calendar plan of the practice.

**2 Tools and technologies used**

To build a fast and maintainable website I used a modern frontend stack. The main technologies and their roles in the project are shown in Table 1.

Table 1. Technologies used in the project

| **Technology** | **Role in the project** |
| --- | --- |
| React | Building the user interface from reusable components |
| Vite | Development server and fast production build |
| Tailwind CSS | Utility first styling and a consistent visual style |
| react-i18next | Multilanguage support of the interface |
| Git | Version control of the source code |

**2.1 React and Vite**

React is a JavaScript library for building user interfaces from small, reusable components [1]. This approach fits the project well, because a website is naturally a set of repeated blocks such as cards, buttons and form fields. Each block became a separate component, which made the code easier to read and to change later.

Vite was used as the build tool and development server [2]. It starts very quickly and updates the page almost instantly while editing, which saved a lot of time during development. For the finaxl version Vite builds an optimized bundle that loads fast in the browser.

**2.2 Tailwind CSS**

Tailwind CSS is a utility first framework that lets you style elements directly with small classes such as spacing, color and font size [3]. Instead of writing long separate stylesheets, I built the design from these utilities. This kept the visual style consistent and made it easy to keep the same colors and spacing across the whole site, which was important for a clean corporate look.

**2.3 Supporting tools**

For multilanguage support I used the react-i18next library, which stores all texts in separate translation files and switches them at runtime [5]. Git was used for version control, so I could save the history of changes and return to a working state when needed. The MDN Web Docs were my main reference for standard browser features and form behavior [4].

**3 Development of the corporate website**

**3.1 Website structure and design**

Before writing any code, I designed the structure of the site. I chose a single page layout, where all main blocks are placed on one scrollable page and the navigation menu jumps to the right section. For a small company this format is comfortable for visitors, because they see everything in one place without extra clicks.

The page is divided into a hero section at the top, a services section, a block about the company and a contact section. The visual style is corporate and calm, with a dark base color, a single accent color and a clear font. I first prepared a simple prototype of these screens and only then started the implementation. A view of the finished home page is shown in Appendix B, Figure B.1.

**3.2 Implementation of the main sections**

The header contains the company name and the navigation links and stays available while the visitor scrolls. The hero section shows a short headline that explains what the company does and a button that leads to the contact form. The services section presents the main services as a set of cards, and the block about the company gives a short text about its experience and values. The source code of the hero section is given in Appendix A, Listing A.1.

**3.3 Contact form and validation**

The contact form lets a visitor send a message to the company. It contains fields for the name, the email and the message. Before the message is sent, the form checks that the required fields are filled and that the email has a correct format, and shows a clear error message next to a field if something is wrong. After a successful check the form shows a confirmation message. The form was built so that a request to a backend API can be added later without changing the interface. The code of the form is given in Appendix A, Listing A.2.

**3.4 Internationalization**

Because the company works with different clients, the website supports several languages. All texts are stored in translation files, and a language switcher in the header changes the current language without reloading the page. This was done with the react-i18next library. The configuration of the translations is given in Appendix A, Listing A.3, and the contact section with the switcher is shown in Appendix B, Figure B.3.

**3.5 Animations and responsive layout**

To make the site feel modern I added soft animations. Sections appear smoothly while the visitor scrolls, and buttons and cards react to the cursor. The animations are kept light so that they do not slow down the page. The layout is responsive and was built in a mobile first way with Tailwind breakpoints, so the site looks correct both on a phone and on a wide screen. The mobile view of the site is shown in Appendix B, Figure B.4.

**4 Testing, deployment and results**

**4.1 Testing**

I tested the website manually during the whole development. I checked the layout in several browsers and on different screen sizes, and made sure that the navigation, the language switcher and the contact form worked as expected. The validation of the form was tested with empty fields and with an incorrect email to confirm that the error messages appear correctly. The problems that I found, mostly small layout issues on narrow screens, were fixed during the same week.

**4.2 Deployment**

After the website was ready, I built the production version with Vite and deployed it so that the company could open it by a link. A platform for deployment that was chosen Vercl. The deployed site is available at eccllp.vercel.app (can be changed if company will decide to buy their own domain).

**4.3 Reflection on the practice**

During the practice I improved my practical skills in React, Vite and Tailwind CSS and learned how to turn a real client request into a finished product. The most useful experience for me was working with internationalization and with responsive design, because these parts required careful planning. I also practiced communication with the company, agreeing on the structure and the content of the site. Working on a real project, and not only on a study task, helped me understand how to plan my time and bring a task to a complete result.

**CONCLUSION**

During my production practice at Eurasian Consulting Consortium LLP I reached the goal that was set at the beginning. I designed and built a corporate website that presents the company to its clients. I studied the profile of the company, designed the structure of the site, selected a modern technology stack and implemented the interface with React, Vite and Tailwind CSS.

The finished website includes a hero section, a services section, a block about the company and a contact form with client-side validation. It supports several languages, contains light animations and adapts to mobile and desktop screens. The site was tested, built and deployed, and the result meets the requirements of the company.

The practice gave me valuable experience of full frontend development on a real project. As a direction for further work, the contact form can be connected to a backend service so that messages are stored and answered automatically, and a simple content management system can be added so that the company can update the texts on its own.

**LIST OF REFERENCES**

1 React. A JavaScript library for building user interfaces. URL: https://react.dev (accessed 20 June 2026).

2 Vite. Next generation frontend tooling. URL: <https://vite.dev> (accessed 20 June 2026).

3 Tailwind CSS. A utility first CSS framework. URL: https://tailwindcss.com (accessed 22 June 2026).

4 MDN Web Docs. Resources for developers, by developers. URL: https://developer.mozilla.org (accessed 24 June 2026).

5 react-i18next. Internationalization for React. URL: https://react.i18next.com (accessed 26 June 2026).

**APPENDIX A**

Source code fragments

Listing A.1. Hero section component (React and Tailwind CSS)

import { useTranslation } from "react-i18next";

export default function Hero() {

const { t } = useTranslation();

return (

<section className="bg-slate-900 text-white py-24 text-center">

<h1 className="text-4xl md:text-6xl font-bold mb-4">

{t("hero.title")}

</h1>

<p className="max-w-2xl mx-auto text-slate-300 mb-8">

{t("hero.subtitle")}

</p>

<a href="#contact"

className="bg-amber-500 text-slate-900 px-8 py-3 rounded-lg">

{t("hero.cta")}

</a>

</section>

);

}

Listing A.2. Contact form with client side validation

import { useState } from "react";

export default function ContactForm() {

const [form, setForm] = useState({ name: "", email: "", message: "" });

const [errors, setErrors] = useState({});

const [sent, setSent] = useState(false);

const validate = () => {

const e = {};

if (!form.name.trim()) e.name = "Name is required";

if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))

e.email = "Invalid email";

if (!form.message.trim()) e.message = "Message is required";

return e;

};

const handleSubmit = () => {

const e = validate();

setErrors(e);

if (Object.keys(e).length === 0) {

// a request to the backend API will be added here later

setSent(true);

}

};

return (

<div className="max-w-lg mx-auto">

<input value={form.name}

onChange={(ev) => setForm({ ...form, name: ev.target.value })}

placeholder="Name" className="w-full border rounded p-3 mb-1" />

{errors.name && <span className="text-red-500">{errors.name}</span>}

<button onClick={handleSubmit}

className="w-full bg-amber-500 py-3 rounded font-semibold">

Send

</button>

{sent && <p className="text-green-600 mt-3">Message sent</p>}

</div>

);

}

Listing A.3. Internationalization configuration (react-i18next)

import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";

import ru from "./locales/ru.json";

import kk from "./locales/kk.json";

i18n.use(initReactI18next).init({

resources: {

en: { translation: en },

ru: { translation: ru },

kk: { translation: kk },

},

lng: "ru",

fallbackLng: "en",

interpolation: { escapeValue: false },

});

export default i18n;

**APPENDIX B**

Website screenshots

|  |
| --- |
| [ Insert screenshot: home page with the hero section ] |

Figure B.1. Home page of the website

|  |
| --- |
| [ Insert screenshot: services section ] |

Figure B.2. Services section

|  |
| --- |
| [ Insert screenshot: contact section with the language switcher ] |

Figure B.3. Contact form and language switcher

|  |
| --- |
| [ Insert screenshot: mobile view of the site ] |

Figure B.4. Mobile view of the website