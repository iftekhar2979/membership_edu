
function buttonToggle(){
    const cards2 = document.querySelectorAll(".is--card-blur2");
    for (const card of cards2) {
      card.onmousemove = (e) => {
        for (const productCard of card.getElementsByClassName("product-card2")) {
          const rect = productCard.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
    
          productCard.style.setProperty("--mouse-x", `${x}px`);
          productCard.style.setProperty("--mouse-y", `${y}px`);
        }
      };
    }
    
    
}
buttonToggle()

const cloudBootcampInfo = {
  opportunity: [
    {
      question:
        "What do you mean by a “$130K+ remote tech career without a degree?”",
      answer:
        "We help everyday people land cloud engineering roles by focusing on real-world skills, not paper certs or degrees. No fluff, just what actually gets you hired.",
    },
    {
      question: "Is this program only for people with tech experience?",
      answer:
        "Not at all. Many of our students started in retail, help desk, or other non-technical roles. If you’re willing to learn and take action, we’ll guide you through everything.",
    },
    {
      question: "Why Cloud Engineering?",
      answer:
        "It’s one of the most in-demand, high-paying, and remote-friendly paths in tech. The barrier to entry is lower than you think when you have the right roadmap.",
    },
    {
      question: "Why hands-on projects instead of certifications?",
      answer:
        "Certs are great, but recruiters care more about what you can do. Our projects prove your skills, build confidence, and make your resume stand out immediately.",
    },
    {
      question: "Isn’t tech super competitive?",
      answer:
        "Yes, if you do what everyone else is doing. Our program gives you an unfair advantage through personalized mentorship, recruiter-attraction systems, and a proven game plan.",
    },
  ],
  about: [
    {
      question: "What exactly is CloudBootcamp.AI?",
      answer:
        "We’re a mentorship-driven platform helping people land cloud engineer roles in 8 weeks. No degree, no fluff, just a step-by-step path with coaching and support.",
    },
    {
      question: "What makes your program different?",
      answer:
        "We don’t just teach, we get you ready to work. You’ll graduate with a portfolio of real-world projects, job-ready experience, and a clear system to attract recruiters.",
    },
    {
      question: "Do I get 1-on-1 support?",
      answer:
        "Yes. You’ll be guided by expert mentors, attend weekly coaching calls, and get personalized help through our client success system and private community.",
    },
    {
      question: "What do students do after the 8 weeks?",
      answer:
        "They launch their careers. Most start interviewing in Week 6 to 8 and land their first $100K+ roles shortly after. Some even have multiple roles.",
    }],
    faqArray : [
        {
          question: "How can a tech career give me more freedom in life?",
          answer: "A high-paying cloud engineering role puts you in control, working remotely, earning what you're truly worth, more time freedom, and designing a life on your terms. No degree needed. No years of climbing the corporate ladder."
        },
        {
          question: "Is this really something anyone can do?",
          answer: "Yes, if you’re willing to put in the work. Many of our students started with zero tech background. Our mentorship and step-by-step roadmap bridge the gap between where you are and where you want to be."
        },
        {
          question: "Why Cloud Engineering specifically?",
          answer: "It’s one of the fastest growing, highest paying paths in tech. Demand is high, remote work is standard, and the skillset is transferable across industries."
        },
        {
          question: "Why focus on hands-on learning?",
          answer: "Because it works. Real projects prove to employers you can do the job. That’s what leads to interviews and offers, not just certifications or theory."
        },
        {
          question: "Isn’t the tech industry too crowded?",
          answer: "Only if you follow the crowd. Most people are stuck chasing certs with no direction. We give you a proven system, personal mentorship, and the tools to stand out fast."
        }
  ],
};

function addingFaQ(option,id,className){
    let faqSection = document.getElementById(id);
    let opertunaityContent = "";
    cloudBootcampInfo[option].forEach((item) => {
       
      opertunaityContent += `
       <div
                class="product-card2 is--faq"
                style="
                  --mouse-x: 230.39999389648438px;
                  --mouse-y: 43.400001525878906px;
                "
              >
                <div class="faq-btn">
                  <div class="faq-btn__inner">
                    <img
                      src="https://assets-global.website-files.com/6478a8ada70541eef2afb81f/647de41aa75a08c0bcc333f5_plus-icon.svg"
                      loading="lazy"
                      alt="Plus icon"
                      class="product-slider__nav-icon2 is--faq"
                      style="
                        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                          rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                          skew(0deg, 0deg);
                        transform-style: preserve-3d;
                      "
                    />
                  </div>
                </div>
                <div class="product-card__content is--faq">
                  <div class="product-card__faq-title">
                   ${item.question}
                  </div>
                  <div
                    class="product-card__faq-c-text2"
                    style="width: 740px; height: 0px"
                  >
                    <div class="product-card__text is--faq">
                      ${item.answer}
                    </div>
                  </div>
                </div>
              </div>
       
       `;
    });
    
    faqSection.innerHTML = opertunaityContent;
    var productCards2 = document.querySelectorAll(".product-card2");
    productCards2.forEach((card) => {
        card.addEventListener("click", function () {
          var faqText = this.querySelector(".product-card__faq-c-text2");
          var chkimg = this.querySelector(".product-slider__nav-icon2");
          if (faqText.style.height === "auto" || faqText.style.height === "") {
            faqText.style.height = "0px";
    
            chkimg.style.transform =
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
          } else {
            faqText.style.height = "auto";
            chkimg.style.transform =
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)";
          }
        });
      });

    

}
window.addEventListener("DOMContentLoaded", function(){
    addingFaQ('opportunity','faq-1',".is--card-blur")
    addingFaQ('about','faq-2',".is--card-blur1")
    addingFaQ('faqArray','faq-3',".is--card-blur1")
    hoverOnEffect(".is--card-blur, .is--card-blur1");
});
function hoverOnEffect(className){
    const cards2 = document.querySelectorAll(className);
    // console.log(cards2)
    for (const card of cards2) {
       
      card.onmousemove = (e) => {
        for (const productCard of card.getElementsByClassName("product-card2")) {
            
          const rect = productCard.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
    
          productCard.style.setProperty("--mouse-x", `${x}px`);
          productCard.style.setProperty("--mouse-y", `${y}px`);
    
        }
        var productCards1 = document.querySelectorAll(".product-card1");
        productCards1.forEach((card) => {
           console.log("card",card)
          card.addEventListener("click", function () {
            console.log(this)
            var faqText = this.querySelector(
              ".product-card__faq-c-text1"
            );
            var chkimg = this.querySelector(
              ".product-slider__nav-icon1"
            );
          
            if (
              faqText.style.height === "auto" ||
              faqText.style.height === ""
            ) {
              faqText.style.height = "0px";

              chkimg.style.transform =
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
            } else {
              faqText.style.height = "auto";
              chkimg.style.transform =
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)";
            }
          });
        });
      };
    }
}

function toggle() {
   
    // Combine both card groups
    const cards = document.querySelectorAll(".is--card-blur, .is--card-blur1");

    for (const card of cards) {
        card.onmousemove = (e) => {
            // Handle product-card1 inside
            for (const productCard of card.getElementsByClassName("product-card1")) {
                const rect = productCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                productCard.style.setProperty("--mouse-x", `${x}px`);
                productCard.style.setProperty("--mouse-y", `${y}px`);
            }

            // Handle product-card2 inside
            for (const productCard of card.getElementsByClassName("product-card2")) {
                const rect = productCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                productCard.style.setProperty("--mouse-x", `${x}px`);
                productCard.style.setProperty("--mouse-y", `${y}px`);
            }
        };
    }

    // Run after DOM is loaded
    document.addEventListener("DOMContentLoaded", function () {
        // CLICK HANDLER FOR product-card1
        const productCards1 = document.querySelectorAll(".product-card1");
        productCards1.forEach((card) => {
            card.addEventListener("click", function () {
                const faqText = this.querySelector(".product-card__faq-c-text1");
                const chkimg = this.querySelector(".product-slider__nav-icon1");

                if (faqText.style.height === "auto" || faqText.style.height === "") {
                    faqText.style.height = "0px";
                    chkimg.style.transform =
                        "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateZ(0deg)";
                } else {
                    faqText.style.height = "auto";
                    chkimg.style.transform =
                        "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateZ(90deg)";
                }
            });
        });

        // CLICK HANDLER FOR product-card2
        const productCards2 = document.querySelectorAll(".product-card2");
        productCards2.forEach((card) => {
            card.addEventListener("click", function () {
                const faqText = this.querySelector(".product-card__faq-c-text2");
                const chkimg = this.querySelector(".product-slider__nav-icon2");

                if (faqText.style.height === "auto" || faqText.style.height === "") {
                    faqText.style.height = "0px";
                    chkimg.style.transform =
                        "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateZ(0deg)";
                } else {
                    faqText.style.height = "auto";
                    chkimg.style.transform =
                        "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateZ(90deg)";
                }
            });
        });
    });
}

window.addEventListener("DOMContentLoaded", toggle);
