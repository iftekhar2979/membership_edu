// class StudentInterviewSection extends HTMLElement {
//     constructor() {
//       super();

//       this.interviews = {
//         id:"1",
//         heading:"Student Interviews",
//         introParagraph :`Step into the world of career transformation with inspiring interviews
//       from students who went from zero cloud experience to landing
//       high-paying roles in tech. From help desk jobs and non-tech
//       backgrounds to remote Cloud Engineer positions earning $130K or more,
//       their stories are proof of what’s possible with the right mentorship,
//       hands-on training, and a proven system like CloudBootcamp.AI.`,
//         infos: [
//         {
//           videoLink: "https://www.youtube.com/embed/PsGZR9lsib4?si=P13v2CiC3oQUNGzb",
//           thumbnail:
//             "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/666822fdb0daa253e9dcef4e_maxresdefault.webp",
//           title:
//             "_smittythegoat_ $949k in 2 Months | Boniface Ogunti | Skool | Membership Community",
//           author: "Kenny Smith",
//           description: `Today we have kenon Smith also known on all social media platform as Smitty the goat so first and foremost guys this is going to be an amazing interview uh so kenth is crushing it but before we get into his results what I want to say just a quick disclaimer because results is not typical right Kenneth was already a successful entrepreneur were before he actually started working with us he was already he already had his community going he was already had people in his community he was crushing it before he started going working with us he just was like Hey man uh let me see what you guys have going on at membership edu and he tapped in with us now we helped him take it to the next level.`,
//         },
//         {
//           videoLink: "https://www.youtube.com/embed/RDqMc_0Nzbs?si=5MttjWRNGYHiYcAd",
//           thumbnail:
//             "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/66460fbe088f5fe29d4ac940_Screen%20Shot%202024-05-16%20at%209.48.06%20AM.png",
//           title:
//             "Vincent Fischer $130k in 4 Weeks | Boniface Ogunti | Membership Community",
//           author: "Vincent Fischer",
//           description: `In this moving success story, Vince Fischer shares his journey from doubt to triumph, highlighting how he retired his mom thanks to newfound income. He credits his success to authentic content creation and the supportive community provided by MembershipEDU.com program he joined.`,
//         },
//         // add more interviews here...
//       ]},
//       content:`
//         <section id="tab-students-interview" class="section-15 d-sec-block">
//           <div class="w-layout-blockcontainer container-35 w-container">
//             <h3 class="heading-78">${this.heading}</h3>
//             <p class="paragraph-17">${this.introParagraph}</p>
//           </div>
//           ${this.interviews
//             .map(
//               (item) => `
//             <div class="columns-14-copy w-row">
//               <div class="column-30 w-col w-col-6">
//                 <img
//                   class="image-73 testimonial-video-thumbnail"
//                   data-video-embed-link="${item.videoLink}"
//                   src="${item.thumbnail}"
//                   alt="${item.title}"
//                   sizes="100vw"
//                   loading="lazy"
//                 />
//               </div>
//               <div class="w-col w-col-6">
//                 <h4 class="heading-74">${item.title}<br /></h4>
//                 <p class="paragraph-19"><span class="text-span-4">${item.author}</span></p>
//                 <p class="paragraph-19">${item.description}</p>
//               </div>
//             </div>
//           `
//             )
//             .join('')}
//         </section>
//       `
//     }
  
//     connectedCallback() {
//       this.render();
//     }
  
//     // render() {
//     //   this.innerHTML = ;
//     // // }
//   }
  
//   customElements.define("student-interview-section", StudentInterviewSection);
  