(this.webpackJsonpvg_website=this.webpackJsonpvg_website||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),s=a.n(r),o=(a(16),a(17),a(1)),l=a(2),c=a(5),m=a(3),p=a(4),d=(a(18),function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.social.map((function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,target:"_blank"},i.a.createElement("i",{className:e.className})))}));var a=function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return a.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML="<span>"+this.txt+"</span>";var a=this,n=150-100*Math.random();this.isDeleting&&(n/=4),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout((function(){a.tick()}),n)},window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),t=0;t<e.length;t++){var n=e[t].getAttribute("data-rotate"),i=e[t].getAttribute("data-period");n&&new a(e[t],JSON.parse(n),i)}},i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#hide-nav-wrap",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#experience"},"Experience")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#projects"},"Projects")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},e,"."),i.a.createElement("h3",null,i.a.createElement("span",{className:"txt-rotate","data-period":"2000","data-rotate":'["Developer. Analyst. Entrepreneur.", "Live. Innovate. Enjoy.", "Challenge. Learn. Improve."]'}),"\xa0"),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},t))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),u=function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image,t=this.props.data.resumedownload}return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"four columns"},i.a.createElement("p",null,i.a.createElement("img",{className:"profile-pic",src:e,alt:"Vaib Profile Pic"}))),i.a.createElement("div",{className:"eight columns main-col"},i.a.createElement("h2",{className:"headerr"},"About Me"),i.a.createElement("p",{className:"description"},"Hi there, I'm ",i.a.createElement("span",null,"Vaib"),". I\u2019m currently a student majoring in",i.a.createElement("span",null," Computer Science "),"at the ",i.a.createElement("span",null,"University of California, Berkeley"),". I\u2019m an international student from ",i.a.createElement("span",null,"Singapore. "),"After finishing high school, I served two years in the Singapore army as a Section Commander.",i.a.createElement("br",null),i.a.createElement("br",null),"I aim to leverage technology to positively ",i.a.createElement("span",null,"impact")," individual's lives on a large-scale. I am a strong believer that technology acts as a bridge to devise ",i.a.createElement("span",null,"solutions")," in all areas of life. When not working on projects, I try to keep myself busy with my varied interests.",i.a.createElement("br",null),i.a.createElement("br",null),"I have learnt a lot about ",i.a.createElement("span",null,"leadership"),"; but most importantly, it taught me there is always more to learn. I cherish every experience I have, and know that every person I meet can teach me something about myself and about life. I'm someone who is eager to ",i.a.createElement("span",null,"learn")," and am always looking for the next ",i.a.createElement("span",null,"challenge.")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"columns centered download"},i.a.createElement("p",null,i.a.createElement("a",{href:t,className:"button",target:"_blank"},i.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),h=a(6),g=[{name:"Education"},{name:"Professional"},{name:"Leadership"},{name:"Skills & Interests"}],f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={activeTab:0,data:g},e.changeTabOnClick=e.changeTabOnClick.bind(Object(h.a)(e)),e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"changeTabOnClick",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"tabs-body"},i.a.createElement(b,{data:this.state.data,click:this.changeTabOnClick,activeId:this.state.activeTab}),i.a.createElement(v,{data:this.state.data,activeId:this.state.activeTab,education:this.props.education,work:this.props.work,skills:this.props.skills,interests:this.props.interests,orgs:this.props.orgs}))}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"doClick",value:function(e,t){this.props.click(e)}},{key:"render",value:function(){var e=this,t=this.props.activeId,a=this.props.data.map((function(a,n){return i.a.createElement("li",{className:t===n?"active":""},i.a.createElement("a",{onClick:e.doClick.bind(e,n)},i.a.createElement("h4",null,a.name)))}));return i.a.createElement("ul",{className:"tabs-header"},a)}}]),t}(i.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.activeId,a=this.props.data.map((function(a,n){return 0===n?i.a.createElement("div",{className:"tabs-textItem "+(t===n?"show":"")},e.props.education):1===n?i.a.createElement("div",{className:"tabs-textItem "+(t===n?"show":"")},e.props.work):2===n?i.a.createElement("div",{className:"tabs-textItem "+(t===n?"show":"")},e.props.orgs):3===n?i.a.createElement("div",{className:"tabs-textItem "+(t===n?"show":"")},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("h2",null,"Skills")),i.a.createElement("p",{className:"offset-three nine columns info"},e.props.skills)),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("h2",null,"Interests")),i.a.createElement("p",{className:"offset-three nine columns info"},e.props.interests))):i.a.createElement("div",{className:"tabs-textItem "+(t===n?"show":"")},i.a.createElement("p",null,a.text))}));return i.a.createElement("div",{className:"tabs-content"},a)}}]),t}(i.a.Component),E=f,y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return i.a.createElement("div",{key:e.school,className:"row"},i.a.createElement("div",{className:"six columns"},i.a.createElement("h3",null,e.school),i.a.createElement("p",{className:"info"},e.degree," ",i.a.createElement("span",null,"\u2022"),i.a.createElement("em",{className:"date"},e.graduated))),i.a.createElement("div",{className:"offset-six six columns"},i.a.createElement("p",null,e.description)))})),t=this.props.data.work.map((function(e){return i.a.createElement("div",{key:e.company,className:"row"},i.a.createElement("div",{className:"six columns"},i.a.createElement("h3",null,e.company),i.a.createElement("p",{className:"info"},e.title,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.years))),i.a.createElement("div",{className:"offset-six six columns"},i.a.createElement("p",null,e.description)))})),a=this.props.data.leadership.map((function(e){return i.a.createElement("div",{key:e.org,className:"row"},i.a.createElement("div",{className:"six columns"},i.a.createElement("h3",null,e.org),i.a.createElement("p",{className:"info"},e.title,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.years))),i.a.createElement("div",{className:"offset-six six columns"},i.a.createElement("p",null,e.description)))})),n=this.props.data.skills,r=this.props.data.interests;return i.a.createElement("section",{id:"experience"},i.a.createElement("h1",{className:"projectTitle"},"Experience"),i.a.createElement(E,{education:e,work:t,skills:n,interests:r,orgs:a}))}}]),t}(n.Component),k=a(7),w=function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"loadPictures",value:function(e){return e.pictures.map((function(e){return i.a.createElement("div",{className:"swiper-slide"},i.a.createElement("div",{className:"swiper-slide-bg swiper-lazy","data-background":e.url},i.a.createElement("div",{className:"swiper-lazy-preloader"})),i.a.createElement("div",{className:"caption"},e.caption))}))}},{key:"loadDesc",value:function(e){return e.description.map((function(e){return i.a.createElement("li",null,e.desc)}))}},{key:"render",value:function(){if(this.props.data){k.a.init();var e=this,t=this.props.data.map((function(e,t){return i.a.createElement("a",{className:"cell",href:"javascript:;",onClick:function(){return k.a.show(t)}},i.a.createElement("img",{className:"grid-image",src:e.cover,"data-aload":e.cover,alt:e.name}),i.a.createElement("div",{className:"grid-item-cover"},i.a.createElement("div",{className:"grid-item-cover-bg"}),i.a.createElement("div",{className:"grid-content"},i.a.createElement("h3",{className:"project-name"},e.name),i.a.createElement("br",null),i.a.createElement("h4",{className:"project-desc"},e.topic))))})),a=this.props.data.map((function(t,a){return i.a.createElement("div",{className:"modal micromodal-slide",id:a,"aria-hidden":"true"},i.a.createElement("div",{className:"modal__overlay",tabIndex:"-1","data-micromodal-close":!0},i.a.createElement("div",{className:"modal__container",role:"dialog","aria-modal":"true","aria-labelledby":"modal-1-title"},i.a.createElement("div",{className:"swiper-container"},i.a.createElement("div",{className:"swiper-wrapper"},e.loadPictures(t)),i.a.createElement("div",{className:"swiper-pagination"}),i.a.createElement("div",{className:"swiper-button-next"}),i.a.createElement("div",{className:"swiper-button-prev"})),i.a.createElement("div",{className:"content-container"},i.a.createElement("h2",{className:"project_name"},i.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},t.name)),i.a.createElement("div",null,i.a.createElement("h2",{className:"project-tech"},i.a.createElement("span",null,"Technologies:")," ",t.tech)),i.a.createElement("ul",null,e.loadDesc(t))),i.a.createElement("div",{className:"modal__footer"},i.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"button project-try-button"},"View Project"),i.a.createElement("button",{className:"button project-close-button","data-micromodal-close":!0,"aria-label":"Close this dialog window"},"Close")))))}))}return i.a.createElement("section",{id:"projects"},i.a.createElement("h1",{className:"projectTitle"},"Projects"),i.a.createElement("div",{className:"grid-container"},t,a))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{id:"contact"},i.a.createElement("h2",null,"Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you, drop me an email or connect with me on LinkedIn."))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}));return i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e),i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"\xa9 Copyright 2019 Vaibhav Gattani"))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={resumeData:{main:{name:"Vaibhav Gattani",image:"profilepic.jpg",website:"http://www.vaibgattani.com",resumedownload:"https://drive.google.com/open?id=1RNchLhjUHYEB_PO1DhF8g2kZZ4WOazmX",social:[{name:"facebook",url:"http://facebook.com/VaibhavGattani",className:"fa fa-facebook"},{name:"linkedin",url:"https://www.linkedin.com/in/vaibhavgattani/",className:"fa fa-linkedin"},{name:"instagram",url:"http://instagram.com/vaibgattani",className:"fa fa-instagram"},{name:"github",url:"http://github.com/VaibG",className:"fa fa-github"}]},experience:{education:[{school:"University of California, Berkeley",degree:"Bachelors in Computer Science",graduated:"Expected May 2021",description:"Relevant Coursework:\nCS61A Structure and Interpretations of Computer Programs\nCS61B Data Structures\nCS70 Discrete Mathematics and Probability Theory\nCS61C Great Ideas of Computer Architecture\nCS170 Efficient Algorithms and Intractable Problems"},{school:"United World College of South East Asia - Dover",degree:"International Baccalaureate, IGCSE",graduated:"May 2016",description:"Completed the IB Diploma at UWCSEA - Dover.\nHigher Level: Computer Science, Further Mathematics, Mathematics, Economics.\nStandard Level: Physics, English: Language and Literature, Spanish.\nActivities and Societies: Model United Nations, UWC Debate Team, Mathematics Competition Club, UWC Tennis Team, HS Percussion Ensemble, Symphonic Band, Interscol (Yearbook) Head of Business, Lights for Sri Lanka GC"}],work:[{company:"GroupStar",title:"iOS Developer Intern",years:"June 2019 - August 2019",description:"GroupStar is a video creation B2B company that enables anyone to create professionally edited videos. At GroupStar, I migrated the iOS application to a new Restify API backend and migrated all the platforms from Azure to AWS. I improved user experience by standardizing the application design according to iOS design principles and removing redundant API calls. I worked with a Postgres SQL database to make edits to the API calls, lowering the app loading times by 20%"},{company:"Singapore Armed Forces",title:"Second Sergeant, Section Commander",years:"July 2016 - July 2018",description:"Received a Silver Bayonet award as an Honor Graduate (top 8%) in the Sergeant course. As a Section Commander, I managed a section of 20-40 newly enlisted recruits, helping them transition from civilian to army life. Promoted from Third Sergeant to Second Sergeant in May 2018."},{company:"MyDoc",title:"Android Development Intern",years:"October 2014",description:"Collaborated with a team of 3 to execute a mobile application, with a purpose of helping doctors reach patients. Also, designed a video call feature on Android and on the web using JavaScript and HTML, hosted by OpenTok servers."}],leadership:[{org:"Berkeley Codeology",title:"Project Manager, Project Leader",years:"January 2019 - Present",description:"Codeology is a supportive community dedicated to professional development, interview preparation and exploring different areas of technology. At Codeology, I led a team of six over the course of eight weeks to develop a Stock Exchange Assistant web app, organized workflow of product, lectured about React topics, and hosted weekly meetings to check up on development progress. Previously, I took on the challenge of image classification using a Resnet Neural Network test on 200,000 images from Amazon fashion dataset."},{org:"Mobile Developers of Berkeley",title:"VP of Finance, iOS Developer",years:"August 2018 - Present",description:"Mobile Developers of Berkeley is a community dedicated to drive change through innovative ideas and application development. I served in a six-man leadership team establishing strategies for short-term and long-term growth of the organization. I also managed a budget of over $50000 while accruing revenue by mobile development contracts with Bay Area companies."},{org:"Upsilon Pi Epsilon",title:"Industrial Relations Committee",years:"August 2019 - Present",description:"UPE is the international honor society for the computing and information disciplines and is endorsed by ACM and IEEE. Membership is extended to the top third of Computer Science students based on GPA. At UPE, I help organize industry events for the Berkeley CS community."},{org:"Phi Beta Lambda Berkeley",title:"Senior Analyst",years:"August 2019 - December 2019",description:"Berkeley PBL helps foster professional growth through the practice of various committees and curriculums. Worked with DocuSign in a team of 8 to sort over 50 different research reports and created 6 different affinity mappings. Pipelined 3 feature improvements in the product roadmap based on an association analysis of target segments and feature sets. Formulated recommendations and presented to DocuSign executives and leadership team"}],skills:"Java, Python, Swift, React, JavaScript, Android, SQL, Scheme, AppleScript, Pandas, Numpy, PyTorch, PostgreSQL, Firebase, AWS, Azure, Node.js, Git, Adobe Photoshop",interests:"Drums, Tennis, Golf, Travel, Coding, Chess, TV Shows, Reading"},projects:[{name:"Personal Website",link:"https://vaibgattani.com/",tech:"ReactJS, jQuery, JavaScript, HTML",topic:"A Full-Stack React Website",description:[{desc:"Utilized MicroModal and Swiper libraries to display projects interactively"},{desc:"Implemented a flex slider and anchors for easy navigation"},{desc:"Worked with React Components and understood the activity lifecycle"}],cover:"images/personal_website.jpeg",pictures:[{url:"images/personal_website_1.jpeg",caption:"Landing page of my website"},{url:"images/personal_website_2.jpeg",caption:"About section"},{url:"images/personal_website_3.jpeg",caption:"Experience section"},{url:"images/personal_website_4.jpeg",caption:"Projects section"}]},{name:"Bear Central",topic:"An All-In-One iOS Application Centralizing Campus Resources",link:"http://bit.ly/bearcentralapp",tech:"Google Maps REST API, Firebase Cloud Firestore, Beautiful Soup (web scraping), CocoaPods, Swift, XCode",description:[{desc:"Worked with Firebase cloud firestore and realtime database backends to create calendar, maps and safety features"},{desc:"Designed and implemented the Clubs feature scraping club information to JSONs using Beautiful Soup in Python"},{desc:"Understood the complexity of full-fledged applications and the importance of abstraction in large projects"}],cover:"images/bear-central.jpeg",pictures:[{url:"images/bear-central.jpeg",caption:"Bear Central brings together the most essential campus resources"},{url:"images/bear-central-1.jpg",caption:"Displaying Around Me, Navigation Home and Safety Toolkit screens"},{url:"images/bear-central-2.jpeg",caption:"Campus Map - Each building is displayed as a pin and is searchable!"},{url:"images/bear-central-3.jpeg",caption:"Calendar - Subscribe to the calendar events for your favorite departments"},{url:"images/bear-central-4.jpeg",caption:"Clubs - Search and view all the student organizations in UC Berkeley"},{url:"images/bear-central-5.jpeg",caption:"Resources - A list of all the important links for any Berkeley student"},{url:"images/bear-central-6.jpeg",caption:"Tools - Useful tools including booking library study rooms!"}]},{name:"Invest Test",topic:"A CalHacks Stock Exchange Game",link:"https://www.hackerearth.com/challenges/hackathon/cal-hacks-50/dashboard/e7e2b37/submission/",tech:"BlackRock REST API, CocoaPods, Swift, XCode",description:[{desc:"An iOS application that analyzed stock portfolios during different time periods"},{desc:"Translated financial data to the basic user knowledge level utilizing BlackRock\u2019s REST API and multiple CocoaPods"},{desc:"Simulated a learning experience for new investors to optimize their portfolio returns in the future"}],cover:"images/invest-test.jpeg",pictures:[{url:"images/invest-test.jpeg",caption:"Input your preferred portfolio, select a time period!"},{url:"images/invest-test-1.jpeg",caption:"View your portfolio breakdown, look at how you did"},{url:"images/invest-test-2.jpeg",caption:"Understand how your score is calculated (percentage return compared to S&P)"},{url:"images/invest-test-3.jpeg",caption:"Analyze the progress of your portfolio during this time period"},{url:"images/invest-test-4.jpeg",caption:"Challenge your friends, see how you did on the leaderboard"}]},{name:"NS Checklist",topic:"An Organizer Tool for Army Servicemen",link:"https://github.com/VaibG/PT_NS_Checklist",tech:"CoreData, Local Notifications, Swift, XCode",description:[{desc:"Innovated a tool to help civilians transition into the army, centralizing the essential resources in the army"},{desc:"Utilized CoreData and Local Notifications to integrate checklist, notepad and reminder functions into the application"},{desc:"Calculated IPPT fitness test scores by real time comparisons to an offline scoring grid, helping users train for their test"}],cover:"images/ns-checklist.jpeg",pictures:[{url:"images/ns-checklist-1.jpeg",caption:"Homepage of the NS Checklist app"},{url:"images/ns-checklist-2.jpeg",caption:"Second menu of the NS Checklist app"},{url:"images/ns-checklist-3.jpeg",caption:"Book In Mutable Checklist"},{url:"images/ns-checklist-4.jpeg",caption:"A list of Basic Drills with their English translation"},{url:"images/ns-checklist-5.jpeg",caption:"A calculator for your fitness test (IPPT) scores"},{url:"images/ns-checklist-6.jpeg",caption:"A list of all the Ranks in the Singapore Armed Forces"}]},{name:"Mass Apple ID Creator and Verifier",topic:"A High School Project",link:"https://drive.google.com/open?id=19HB4vczRLn96jkBDmHts1QXe6A21E2Xx",tech:"AppleScript, System Events, CSV generation and manipulation, JavaScript",description:[{desc:"Designed an automated script that created and verified Apple IDs for my high school\u2019s 2000 new Apple devices"},{desc:"Utilized AppleScript and Shell commands to mutate information from a CSV to fully created and verified Apple IDs"},{desc:"Used System Events to navigate around the screen effortlessly"}],cover:"images/applescript.jpg",pictures:[{url:"images/applescript-1.jpeg",caption:"Click on the project link to view the script in action!"}]},{name:"Cambrian Education",topic:"Website built for an upcoming schooling program",link:"vaibgattani.com",tech:"PHP, HTML",description:[{desc:"Built a complete website for an upcoming schooling project"},{desc:"Played around with design concepts and different ways to present information including overlays and sliders"},{desc:"No link available -- website no longer in use"}],cover:"images/cambrian-education.jpeg",pictures:[{url:"images/cambrian-education.jpeg",caption:"Homepage -- listing out the mission and vision of the project"},{url:"images/cambrian-education-1.jpeg",caption:"Utilized three column structure to display more information"},{url:"images/cambrian-education-2.jpeg",caption:"Using overlays to display the different values"},{url:"images/cambrian-education-3.jpeg",caption:"Using four corners to split information"}]}]}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,{data:this.state.resumeData.main}),i.a.createElement(u,{data:this.state.resumeData.main}),i.a.createElement(y,{data:this.state.resumeData.experience}),i.a.createElement(w,{data:this.state.resumeData.projects}),i.a.createElement(N,null),i.a.createElement(j,{data:this.state.resumeData.main}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.c99fa243.chunk.js.map