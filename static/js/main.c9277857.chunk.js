(this.webpackJsonpvg_website=this.webpackJsonpvg_website||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(9),r=a.n(s),o=(a(17),a(18),a(1)),c=a(2),l=a(5),m=a(3),d=a(4),p=(a(19),function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.social.map((function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,target:"_blank"},i.a.createElement("i",{className:e.className})))}));var a=function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return a.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML="<span>"+this.txt+"</span>";var a=this,n=150-100*Math.random();this.isDeleting&&(n/=4),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout((function(){a.tick()}),n)},window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),t=0;t<e.length;t++){var n=e[t].getAttribute("data-rotate"),i=e[t].getAttribute("data-period");n&&new a(e[t],JSON.parse(n),i)}},i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#hide-nav-wrap",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#experience"},"Experience")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#projects"},"Projects")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},e,"."),i.a.createElement("h3",null,i.a.createElement("span",{className:"txt-rotate","data-period":"2000","data-rotate":'["Developer. Analyst. Entrepreneur.", "Live. Innovate. Enjoy.", "Challenge. Learn. Improve."]'}),"\xa0"),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},t))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),u=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image,t=this.props.data.resumedownload}return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"four columns"},i.a.createElement("p",null,i.a.createElement("img",{className:"profile-pic",src:e,alt:"Vaib Profile Pic"}))),i.a.createElement("div",{className:"eight columns main-col"},i.a.createElement("h2",{className:"headerr"},"About Me"),i.a.createElement("p",{className:"description"},"Hi there, I'm ",i.a.createElement("span",null,"Vaib"),". I\u2019m currently a student majoring in",i.a.createElement("span",null," Computer Science "),"at the ",i.a.createElement("span",null,"University of California, Berkeley"),". I\u2019m an international student from ",i.a.createElement("span",null,"Singapore. "),"After finishing high school, I served two years in the Singapore army as a Section Commander.",i.a.createElement("br",null),i.a.createElement("br",null),"I aim to leverage technology to positively ",i.a.createElement("span",null,"impact")," individual's lives on a large-scale. I am a strong believer that technology acts as a bridge to devise ",i.a.createElement("span",null,"solutions")," in all areas of life. When not working on projects, I try to keep myself busy with my varied interests.",i.a.createElement("br",null),i.a.createElement("br",null),"I have learnt a lot about ",i.a.createElement("span",null,"leadership"),"; but most importantly, it taught me there is always more to learn. I cherish every experience I have, and know that every person I meet can teach me something about myself and about life. I'm someone who is eager to ",i.a.createElement("span",null,"learn")," and am always looking for the next ",i.a.createElement("span",null,"challenge.")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"columns centered download"},i.a.createElement("p",null,i.a.createElement("a",{href:t,className:"button",target:"_blank"},i.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),h=a(6),g=a(10),f=a.n(g),b=[{name:"Education"},{name:"Professional"},{name:"Leadership"},{name:"Skills & Interests"}],v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={activeTab:0,data:b},e.changeTabOnClick=e.changeTabOnClick.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"changeTabOnClick",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"tabs-body"},i.a.createElement(y,{data:this.state.data,click:this.changeTabOnClick,activeId:this.state.activeTab}),i.a.createElement(E,{data:this.state.data,activeId:this.state.activeTab,education:this.props.education,work:this.props.work,skills:this.props.skills,interests:this.props.interests,orgs:this.props.orgs}))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"doClick",value:function(e,t){this.props.click(e)}},{key:"render",value:function(){var e=this,t=this.props.activeId,a=this.props.data.map((function(a,n){return i.a.createElement("li",{className:t===n?"active":""},i.a.createElement("a",{onClick:e.doClick.bind(e,n)},i.a.createElement("h4",null,a.name)))}));return i.a.createElement("ul",{className:"tabs-header"},a)}}]),t}(i.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getSkills",value:function(){return this.props.skills.map((function(e){return i.a.createElement(f.a,{icon:e,style:{width:"10vw",fill:"#707C80"},alt:e})}))}},{key:"render",value:function(){var e=this,t=this.props.activeId,a=this.props.data.map((function(a,n){return 0===n?i.a.createElement("div",{className:"tabs-textItem "+(t===n?"show":"")},e.props.education):1===n?i.a.createElement("div",{className:"tabs-textItem "+(t===n?"show":"")},e.props.work):2===n?i.a.createElement("div",{className:"tabs-textItem "+(t===n?"show":"")},e.props.orgs):3===n?i.a.createElement("div",{className:"tabs-textItem "+(t===n?"show":"")},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("h2",null,"Skills")),i.a.createElement("p",{className:"offset-three nine columns"},e.getSkills())),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("h2",null,"Interests")),i.a.createElement("p",{className:"offset-three nine columns"},e.props.interests))):i.a.createElement("div",{className:"tabs-textItem "+(t===n?"show":"")},i.a.createElement("p",null,a.text))}));return i.a.createElement("div",{className:"tabs-content"},a)}}]),t}(i.a.Component),k=v,w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return i.a.createElement("div",{key:e.school,className:"row"},i.a.createElement("div",{className:"six columns"},i.a.createElement("h3",null,e.school),i.a.createElement("p",{className:"info"},e.degree," ",i.a.createElement("span",null,"\u2022"),i.a.createElement("em",{className:"date"},e.graduated))),i.a.createElement("div",{className:"offset-six six columns"},i.a.createElement("p",null,e.description)))})),t=this.props.data.work.map((function(e){return i.a.createElement("div",{key:e.company,className:"row"},i.a.createElement("div",{className:"six columns"},i.a.createElement("h3",null,e.company),i.a.createElement("p",{className:"info"},e.title,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.years))),i.a.createElement("div",{className:"offset-six six columns"},i.a.createElement("p",null,e.description)))})),a=this.props.data.leadership.map((function(e){return i.a.createElement("div",{key:e.org,className:"row"},i.a.createElement("div",{className:"six columns"},i.a.createElement("h3",null,e.org),i.a.createElement("p",{className:"info"},e.title,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.years))),i.a.createElement("div",{className:"offset-six six columns"},i.a.createElement("p",null,e.description)))})),n=this.props.data.skills,s=this.props.data.interests;return i.a.createElement("section",{id:"experience"},i.a.createElement("h1",{className:"projectTitle"},"Experience"),i.a.createElement(k,{education:e,work:t,skills:n,interests:s,orgs:a}))}}]),t}(n.Component),j=a(7),N=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"loadPictures",value:function(e){return e.pictures.map((function(e){return i.a.createElement("div",{className:"swiper-slide"},i.a.createElement("div",{className:"swiper-slide-bg swiper-lazy","data-background":e.url},i.a.createElement("div",{className:"swiper-lazy-preloader"})),i.a.createElement("div",{className:"caption"},e.caption))}))}},{key:"loadDesc",value:function(e){return e.description.map((function(e){return i.a.createElement("li",null,e.desc)}))}},{key:"render",value:function(){if(this.props.data){j.a.init();var e=this,t=this.props.data.map((function(e,t){return i.a.createElement("a",{className:"cell",href:"javascript:;",onClick:function(){return j.a.show(t)}},i.a.createElement("img",{className:"grid-image",src:e.cover,"data-aload":e.cover,alt:e.name}),i.a.createElement("div",{className:"grid-item-cover"},i.a.createElement("div",{className:"grid-item-cover-bg"}),i.a.createElement("div",{className:"grid-content"},i.a.createElement("h3",{className:"project-name"},e.name),i.a.createElement("br",null),i.a.createElement("h4",{className:"project-desc"},e.topic))))})),a=this.props.data.map((function(t,a){return i.a.createElement("div",{className:"modal micromodal-slide",id:a,"aria-hidden":"true"},i.a.createElement("div",{className:"modal__overlay",tabIndex:"-1","data-micromodal-close":!0},i.a.createElement("div",{className:"modal__container",role:"dialog","aria-modal":"true","aria-labelledby":"modal-1-title"},i.a.createElement("div",{className:"swiper-container"},i.a.createElement("div",{className:"swiper-wrapper"},e.loadPictures(t)),i.a.createElement("div",{className:"swiper-pagination"}),i.a.createElement("div",{className:"swiper-button-next"}),i.a.createElement("div",{className:"swiper-button-prev"})),i.a.createElement("div",{className:"content-container"},i.a.createElement("h2",{className:"project_name"},i.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},t.name)),i.a.createElement("div",null,i.a.createElement("h2",{className:"project-tech"},i.a.createElement("span",null,"Technologies:")," ",t.tech)),i.a.createElement("ul",null,e.loadDesc(t))),i.a.createElement("div",{className:"modal__footer"},i.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"button project-try-button"},"View Project"),i.a.createElement("button",{className:"button project-close-button","data-micromodal-close":!0,"aria-label":"Close this dialog window"},"Close")))))}))}return i.a.createElement("section",{id:"projects"},i.a.createElement("h1",{className:"projectTitle"},"Projects"),i.a.createElement("div",{className:"grid-container"},t,a))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{id:"contact"},i.a.createElement("h2",null,"Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you, drop me an email or connect with me on LinkedIn."))}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}));return i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e),i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"\xa9 Copyright 2019 Vaibhav Gattani"))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={resumeData:{main:{name:"Vaibhav Gattani",image:"profilepic.jpg",website:"http://www.vaibgattani.com",resumedownload:"https://drive.google.com/open?id=1RNchLhjUHYEB_PO1DhF8g2kZZ4WOazmX",social:[{name:"facebook",url:"http://facebook.com/VaibhavGattani",className:"fa fa-facebook"},{name:"linkedin",url:"https://www.linkedin.com/in/vaibhavgattani/",className:"fa fa-linkedin"},{name:"instagram",url:"http://instagram.com/vaibgattani",className:"fa fa-instagram"},{name:"github",url:"http://github.com/VaibG",className:"fa fa-github"}]},experience:{education:[{school:"University of California, Berkeley",degree:"Bachelors in Computer Science",graduated:"Expected May 2022",description:"Relevant Coursework:\nData Structures\nEfficient Algorithms and Intractable Problems\nComputer Architecture\nDiscrete Mathematics and Probability Theory\nStructure and Interpretations of Computer Programs\nPrinciples and Techniques in Data Science\nArtificial Intelligence\nLinear Algebra\nCircuit Design\nMultivariable Calculus"},{school:"United World College of South East Asia - Dover",degree:"International Baccalaureate, IGCSE",graduated:"May 2016",description:"Completed the IB Diploma at UWCSEA - Dover.\nHigher Level: Computer Science, Further Mathematics, Mathematics, Economics.\nStandard Level: Physics, English: Language and Literature, Spanish.\nActivities and Societies: Model United Nations, UWC Debate Team, Mathematics Competition Club, UWC Tennis Team, HS Percussion Ensemble, Symphonic Band, Interscol (Yearbook) Head of Business, Lights for Sri Lanka GC"}],work:[{company:"Goldman Sachs",title:"Engineering Summer Analyst",years:"July 2020 - August 2020",description:"Goldman Sachs is a leading global investment banking, securities and investment management firm that provides a wide range of financial services to its clients. At Goldman Sachs, I worked on the Regulatory Engineering Team to produce a new internal dashboard using React, Redux, SCSS and Express for global trade reporting of OTC derivatives. I aggregated data from 8 different supervisory bodies and implemented decision-table logic to map to a simplified roll-up status. The dashboard was used by the Regulatory Operations team and increased speed to search the latest status of a trade by 50%."},{company:"GroupStar",title:"iOS Developer Intern",years:"June 2019 - August 2019",description:"GroupStar is a video creation B2B company that enables anyone to create professionally edited videos. At GroupStar, I migrated the iOS application to a new Restify API backend and migrated all the platforms from Azure to AWS. I improved user experience by standardizing the application design according to iOS design principles and removing redundant API calls. I worked with a Postgres SQL database to make edits to the API calls, lowering the application loading times by 20% on average"},{company:"Singapore Armed Forces",title:"Second Sergeant, Section Commander",years:"July 2016 - July 2018",description:"Received a Silver Bayonet award as an Honor Graduate (top 8%) in the Sergeant course. As a Section Commander, I managed a section of 20-40 newly enlisted recruits, helping them transition from civilian to army life. Promoted from Third Sergeant to Second Sergeant in May 2018."},{company:"MyDoc",title:"Android Development Intern",years:"October 2014",description:"Collaborated with a team of 3 to execute a mobile application, with a purpose of helping doctors reach patients. Also, designed a video call feature on Android and on the web using JavaScript and HTML, hosted by OpenTok servers."}],leadership:[{org:"CS 170 Algorithms",title:"Undergraduate Student Instructor, former Reader",years:"Jan 2020 - Present",description:"Led pre-exam review sessions, discussion sections, and weekly office hours for subject material including divide-and-conquer, FFT, greedy algorithms, graph algorithms, dynamic programming, linear programming, and complexity theory"},{org:"Mobile Developers of Berkeley",title:"Vice President of Internal Affairs, iOS Developer",years:"August 2018 - Present",description:"Mobile Developers of Berkeley is a community dedicated to drive change through innovative ideas and application development. This year, I was part of a six-man leadership team and directly in charge of everything from recruitment, member success/satisfaction and leading general club activities for 70+ engineering-driven entrepreneurs. We also planned and executed Techfair at Berkeley, the largest symposium of student makers on the West Coast with >2000 projected attendees. Before this role, I served as the Vice President of Finance, managed a budget of over $50000 by negotiating mobile development contracts with Bay Area companies and developed a cross-platform mobile application called Bear Central, a tool that centralized campus resources for UC Berkeley students and accrued over 5000 users."},{org:"Berkeley Codeology",title:"Director of Technology",years:"January 2019 - Present",description:"Codeology is a supportive community dedicated to professional development, interview preparation and exploring different areas of technology. As the director of technology, I facilitated project development, managed a Tech Committee of 15+ project leaders and road mapped 10 project outlines of various skill levels for 80+ CS students. These projects focus on different areas of technology ranging from web development to machine learning. Prior to this position, I was a project leader for two different projects. First, I led a team of six people teaching them the basics in building web applications. After which, I led a pro-bono project for an organization called The Music Connection and created a matching algorithm that paired tutors with students."},{org:"Upsilon Pi Epsilon",title:"Industrial Relations Committee",years:"August 2019 - Present",description:"UPE is the international honor society for the computing and information disciplines and is endorsed by ACM and IEEE. Membership is extended to the top third of Computer Science students based on GPA. At UPE, I help organize industry events for the Berkeley CS community."},{org:"Phi Beta Lambda Berkeley",title:"Senior Analyst",years:"August 2019 - December 2019",description:"Berkeley PBL helps foster professional growth through the practice of various committees and curriculums. Worked with DocuSign in a team of 8 to sort over 50 different research reports and created 6 different affinity mappings. Pipelined 3 feature improvements in the product roadmap based on an association analysis of target segments and feature sets. Formulated recommendations and presented to DocuSign executives and leadership team"}],skills:["java","python","swift","react","javascript","android","mysql","postgresql","firebase","aws","nodejs","git","photoshop"],interests:"Drums, Tennis, Golf, Travel, Coding, Chess, TV Shows, Reading"},projects:[{name:"Smart Groupings",link:"https://github.com/VaibG/Smart-Groupings",tech:"Python, Jupyter, Airtable API, Messenger API, Pandas, Numpy",topic:"Breaking down large organizations into smaller groups",description:[{desc:"A grouping algorithm built in python that is customized to the user"},{desc:"Creates messenger groups for each group"},{desc:"Loads the groups into Airtable with auto-generated form to track attendance"},{desc:"Updates weightings for next iteration of groupings"}],cover:"images/groupings.jpg",pictures:[{url:"images/groupings-1.jpg",caption:"Generates groups using inital weights"},{url:"images/groupings-2.jpg",caption:"Loads groups in Airtable"},{url:"images/groupings-3.jpg",caption:"Simple automated form to track attendance"}]},{name:"Predicting NBA Player Positions",link:"https://github.com/VaibG/NBA-Predicting-Player-Positions",tech:"Python, Jupyter, Scikit-learn, Pandas, Numpy, Plotly",topic:"NBA Data Exploration Project",description:[{desc:"Explored the dimensionality of the data through Principal Component Analysis"},{desc:"Applied feature engineering and visualizations to create a 75% accurate model"},{desc:"Tested on both the logistic regression and the random forest model"},{desc:"Analyzed reasons as to why it is impossible to get a very high accuracy model"}],cover:"images/ball.jpg",pictures:[{url:"images/ball.jpg",caption:"View the GitHub Repo for the full report and code!"}]},{name:"The Music Connection",link:"https://tmc-codeology.herokuapp.com/",tech:"Python, Jupyter, Pandas, Numpy, Flask, Heroku",topic:"Matching tutors with students",description:[{desc:"Led a team of 6 to develop a matching algorithm for The Music Connection"},{desc:"TMC matches tutors (UC Berkeley students) with students and classes"},{desc:"Used the Pandas data science library to implement a greedy matching algorithm"},{desc:"Calculates pairings based on the instrument, time availabilities and priority level"}],cover:"images/music-connection.jpg",pictures:[{url:"images/music-connection-1.jpg",caption:"Upload the interested tutors, students and high school classes"}]},{name:"Connect With Organizations",link:"https://github.com/VaibG/Connect-with-Organizations-LinkedIn",tech:"Python, Selenium",topic:"A LinkedIn Bot",description:[{desc:"Logs into LinkedIn and searches for a specific organization"},{desc:"Searches through employees and filters by second degree connection"},{desc:"Consecutively sends connect requests with an optional customized message"}],cover:"images/connect.jpg",pictures:[{url:"images/connect-1.jpg",caption:"Goes to Organization Page"},{url:"images/connect-2.jpg",caption:"Filter employees by second degree connection"},{url:"images/connect-3.jpg",caption:"Sends customized message to connect"}]},{name:"Potatoes at Sliver",link:"https://github.com/VaibG/Sliver-Potato-Calendar",tech:"Python, Beautiful Soup, Google Calendar API, Cron",topic:"Automatically adds events to your Google Calendar",description:[{desc:"Scraped the weekly menu for Sliver, a pizza restaurant in Berkeley, using Beautiful Soup"},{desc:"Utilized Google Calendar API to create events when there are Roasted Yukon Gold Potatoes on the pizza"},{desc:"Set up a CRON job to run twice a week to update the calendar automatically"}],cover:"images/sliver.jpg",pictures:[{url:"images/sliver-1.jpg",caption:"Google Calendar after script run"}]},{name:"Stock Exchange Assistant",link:"https://github.com/VaibG/StockExchangeAssistant",tech:"react.js, Yahoo Finance API, chart.js, HTML, CSS",topic:"A personal assistant to assist investments",description:[{desc:"Created a watchlist table that allowed to set desktop notifications"},{desc:"Utilized charts.js to display stock information when playing the game"},{desc:"Constructed Recent News and Top Movers pages to better understand the daily stock market activity"}],cover:"images/stockology.jpg",pictures:[{url:"images/stockology-1.jpg",caption:"Watchlist page"},{url:"images/stockology-2.jpg",caption:"Top Movers page"},{url:"images/stockology-3.jpg",caption:"Recent News page"}]},{name:"Personal Website",link:"https://vaibgattani.com/",tech:"react.js, jQuery, JavaScript, HTML",topic:"A Full-Stack React Website",description:[{desc:"Utilized MicroModal and Swiper libraries to display projects interactively"},{desc:"Implemented a flex slider and anchors for easy navigation"},{desc:"Worked with React Components and understood the activity lifecycle"}],cover:"images/personal_website.jpeg",pictures:[{url:"images/personal_website_1.jpeg",caption:"Landing page of my website"},{url:"images/personal_website_2.jpeg",caption:"About section"},{url:"images/personal_website_3.jpeg",caption:"Experience section"},{url:"images/personal_website_4.jpeg",caption:"Projects section"}]},{name:"Bear Central",topic:"An All-In-One iOS Application Centralizing Campus Resources",link:"http://bit.ly/bearcentralapp",tech:"Google Maps REST API, Firebase Cloud Firestore, Beautiful Soup (web scraping), CocoaPods, Swift, XCode",description:[{desc:"Worked with Firebase cloud firestore and realtime database backends to create calendar, maps and safety features"},{desc:"Designed and implemented the Clubs feature scraping club information to JSONs using Beautiful Soup in Python"},{desc:"Understood the complexity of full-fledged applications and the importance of abstraction in large projects"}],cover:"images/bear-central.jpeg",pictures:[{url:"images/bear-central.jpeg",caption:"Bear Central brings together the most essential campus resources"},{url:"images/bear-central-1.jpg",caption:"Displaying Around Me, Navigation Home and Safety Toolkit screens"},{url:"images/bear-central-2.jpeg",caption:"Campus Map - Each building is displayed as a pin and is searchable!"},{url:"images/bear-central-3.jpeg",caption:"Calendar - Subscribe to the calendar events for your favorite departments"},{url:"images/bear-central-4.jpeg",caption:"Clubs - Search and view all the student organizations in UC Berkeley"},{url:"images/bear-central-5.jpeg",caption:"Resources - A list of all the important links for any Berkeley student"},{url:"images/bear-central-6.jpeg",caption:"Tools - Useful tools including booking library study rooms!"}]},{name:"Invest Test",topic:"A CalHacks Stock Exchange Game",link:"https://www.hackerearth.com/challenges/hackathon/cal-hacks-50/dashboard/e7e2b37/submission/",tech:"BlackRock REST API, CocoaPods, Swift, XCode",description:[{desc:"An iOS application that analyzed stock portfolios during different time periods"},{desc:"Translated financial data to the basic user knowledge level utilizing BlackRock\u2019s REST API and multiple CocoaPods"},{desc:"Simulated a learning experience for new investors to optimize their portfolio returns in the future"}],cover:"images/invest-test.jpeg",pictures:[{url:"images/invest-test.jpeg",caption:"Input your preferred portfolio, select a time period!"},{url:"images/invest-test-1.jpeg",caption:"View your portfolio breakdown, look at how you did"},{url:"images/invest-test-2.jpeg",caption:"Understand how your score is calculated (percentage return compared to S&P)"},{url:"images/invest-test-3.jpeg",caption:"Analyze the progress of your portfolio during this time period"},{url:"images/invest-test-4.jpeg",caption:"Challenge your friends, see how you did on the leaderboard"}]},{name:"NS Checklist",topic:"An Organizer Tool for Army Servicemen",link:"https://github.com/VaibG/PT_NS_Checklist",tech:"CoreData, Local Notifications, Swift, XCode",description:[{desc:"Innovated a tool to help civilians transition into the army, centralizing the essential resources in the army"},{desc:"Utilized CoreData and Local Notifications to integrate checklist, notepad and reminder functions into the application"},{desc:"Calculated IPPT fitness test scores by real time comparisons to an offline scoring grid, helping users train for their test"}],cover:"images/ns-checklist.jpeg",pictures:[{url:"images/ns-checklist-1.jpeg",caption:"Homepage of the NS Checklist app"},{url:"images/ns-checklist-2.jpeg",caption:"Second menu of the NS Checklist app"},{url:"images/ns-checklist-3.jpeg",caption:"Book In Mutable Checklist"},{url:"images/ns-checklist-4.jpeg",caption:"A list of Basic Drills with their English translation"},{url:"images/ns-checklist-5.jpeg",caption:"A calculator for your fitness test (IPPT) scores"},{url:"images/ns-checklist-6.jpeg",caption:"A list of all the Ranks in the Singapore Armed Forces"}]},{name:"Mass Apple ID Creator and Verifier",topic:"An AppleScript Project",link:"https://drive.google.com/open?id=19HB4vczRLn96jkBDmHts1QXe6A21E2Xx",tech:"AppleScript, System Events, CSV generation and manipulation, JavaScript",description:[{desc:"Designed an automated script that created and verified Apple IDs for my high school\u2019s 2000 new Apple devices"},{desc:"Utilized AppleScript and Shell commands to mutate information from a CSV to fully created and verified Apple IDs"},{desc:"Used System Events to navigate around the screen effortlessly"}],cover:"images/applescript.jpg",pictures:[{url:"images/applescript-1.jpeg",caption:"Click on the project link to view the script in action!"}]},{name:"Cambrian Education",topic:"Website built for an upcoming schooling program",link:"vaibgattani.com",tech:"PHP, HTML",description:[{desc:"Built a complete website for an upcoming schooling project"},{desc:"Played around with design concepts and different ways to present information including overlays and sliders"},{desc:"No link available -- website no longer in use"}],cover:"images/cambrian-education.jpeg",pictures:[{url:"images/cambrian-education.jpeg",caption:"Homepage -- listing out the mission and vision of the project"},{url:"images/cambrian-education-1.jpeg",caption:"Utilized three column structure to display more information"},{url:"images/cambrian-education-2.jpeg",caption:"Using overlays to display the different values"},{url:"images/cambrian-education-3.jpeg",caption:"Using four corners to split information"}]}]}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,{data:this.state.resumeData.main}),i.a.createElement(u,{data:this.state.resumeData.main}),i.a.createElement(w,{data:this.state.resumeData.experience}),i.a.createElement(N,{data:this.state.resumeData.projects}),i.a.createElement(C,null),i.a.createElement(S,{data:this.state.resumeData.main}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.c9277857.chunk.js.map