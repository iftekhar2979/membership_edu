class SiteHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
         <article class="section-header">
      <div class="w-layout-blockcontainer container-22 w-container">
        <div class="columns-19 w-row">
          <div class="column-33 logo-column w-col w-col-3">
        <a href="index.html">
          <img
            class="image-27 has-link"
            src="./images/logo.png"
            alt="Logo"
            sizes="(max-width: 479px) 36px, (max-width: 767px) 19vw, (max-width: 991px) 20vw, 21vw"
          />
        </a>
            <div class="glass-btn d-none w-embed">
              <div class="glass-btn__burger-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.125rem"
                  height="1.125rem"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M2.8125 9H15.1875"
                    stroke="CurrentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M2.8125 4.5H15.1875"
                    stroke="CurrentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M2.8125 13.5H15.1875"
                    stroke="CurrentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="menu-container">
                <div class="menu-header">
                  <span class="close-btn">&times;</span>
                  <a class="login-btn" href="">Login</a>
                </div>
                <ul class="menu-list">
                  <li class="menu-item link-active">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="menu-item">
                    <a href="students-success-hub.html">Success</a>
                  </li>
                   <!-- <li class="menu-item"><a href="">Program</a></li> -->
                  <li class="menu-heading">Company</li>
                  <li class="submenu-item">
                    <a href="about.html">About Us</a>
                  </li>
                  <li class="submenu-item">
                    <a href="contact.html">Help Center</a>
                  </li>
                 
                  <li class="menu-heading" style="display:none;">Learn</li>
                  <li class="submenu-item" style="display:none;"><a href="">Help Center</a></li>
                  <li class="submenu-item" style="display:none;">
                    <a href="membership-calculator.html" style="display:none;"> Salary Growth calculator</a>
                  </li>
                  <li class="menu-btn-item" style="display:none;">
                    <a href="" target="_blank" class="nav-link nav-btn-link">
                      <span>Watch Free Training</span>
                      
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="column-34 d-none-mob w-col w-col-6">
            <div class="html-embed-3 w-embed">
              <div class="nav-menu">
                <a href="index.html" class="nav-link link-active">Home</a>
                <div class="nav-link has-dropdown" style="display:none" >
                  <div class="nav-link-inner-text">
                    <span>Company</span>
                    <span class="has-arrow" style="display:none;">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.125rem"
                        height="1.125rem"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M14.625 6.75L9 12.375L3.375 6.75"
                          stroke="CurrentColor"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                    

                  <div class="nav-dropdown-wrap dropdown-1" style="display:none;"  >
                    <div class="nav-dropdown">
                      <div class="nav-dropdown-column">
                        <a href="about.html" class="nav-link">
                          <div class="nav-link-text">About Us</div>
                          <div class="nav-link-description"></div>
                        </a>
                       
                      </div>
                      <a href="contact.html" class="nav-link">
                        <div class="nav-link-text">Help Center</div>
                        <div class="nav-link-description">
                          You have questions?
                          <br />
                          We got answers.
                        </div>
                    
                      </a>
                
                    </div>
                  </div>
               
                </div>
                
                <a href="students-success-hub.html" class="nav-link">Success</a>
                   <a href="about.html" class="nav-link link-active">About Us</a>
                    <a href="contact.html"class="nav-link link-active">Help Center</a>
                <div class="nav-link has-dropdown"  style="display:none;" >
                  <div class="nav-link-inner-text">
                    <span>Learn</span>
                    <span class="has-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.125rem"
                        height="1.125rem"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M14.625 6.75L9 12.375L3.375 6.75"
                          stroke="CurrentColor"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div class="nav-dropdown-wrap dropdown-2">
                    <div class="nav-dropdown">
                      <div class="nav-dropdown-column">
                      
                        <a
                          href=""
                          class="nav-link"
                        >
                          <div class="nav-link-text">Help Center</div>
                          <div class="nav-link-description">
                            Need assistance? Reach out to our help center.
                          </div>
                        </a>
                        <a href="membership-calculator.html" class="nav-link">
                          <div class="nav-link-text">Salary growth calculator</div>
                          <div class="nav-link-description">
                            Instantly predict your CloudBootcamp.AI earnings
                          </div>
                        </a>
                      </div>
                      <div class="nav-dropdown-column">
                        <a
                          href=""
                          target="_blank"
                          class="nav-link"
                        >
                          <div class="nav-link-text">
                            Watch The Free Training
                          </div>
                          <div class="nav-link-description">
                            Create a massive passive income stream by creating a
                            CloudBootcamp.AI business
                          </div>
                         
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              <!--   <a href="" class="nav-link">Program</a> -->
              </div>
            </div>
          </div>
          <div class="column-1 d-none-mob w-col w-col-3">
            <div class="w-embed">
              <div class="nav-menu" style="display:none;">
               
                <a
                  href=""
                  target="_blank"
                  class="nav-link nav-btn-link custom-button-bg__gradient"
                  ><span>Watch Free Training</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-embed w-script">
        <div class="nav__bottom-line"></div>
      </div>
    </article>
      `;
  }
}
customElements.define("site-header", SiteHeader);


// class SiteHeader extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: 'open' });
//     this.shadowRoot.innerHTML = `
//       <style>
//         /* Reset */
//         * {
//           box-sizing: border-box;
//         }

//         :host {
//           display: block;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           background: #0e0b15;
//           color: white;
//           user-select: none;
//         }

//         a {
//           color: inherit;
//           text-decoration: none;
//           cursor: pointer;
//         }

//         a:hover, a:focus {
//           text-decoration: underline;
//         }

//         /* Navbar container */
//         .navbar {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 1rem;
//           height: 70px;
//           background: linear-gradient(90deg, #201123, #1a0a1c);
//           position: relative;
//           z-index: 1000;
//         }

//         /* Logo */
//         .navbar-logo {
//           display: flex;
//           align-items: center;
//         }

//         .navbar-logo img {
//           height: 40px;
//           width: auto;
//         }

//         /* Desktop menu */
//         .nav-menu {
//           display: flex;
//           align-items: center;
//           gap: 2rem;
//         }

//         /* Nav items */
//         .nav-item {
//           position: relative;
//           text-transform: uppercase;
//           font-weight: 600;
//           font-size: 0.9rem;
//           color: white;
//         }

//         .nav-item.active {
//           color: #fff;
//           font-weight: 700;
//         }

//         /* Dropdown arrow */
//         .nav-item.has-dropdown::after {
//           content: '▾';
//           font-size: 0.6rem;
//           margin-left: 0.3rem;
//         }

//         /* Dropdown menu */
//         .dropdown {
//           display: none;
//           position: absolute;
//           top: 120%;
//           left: 0;
//           background: #1e1423;
//           border-radius: 4px;
//           min-width: 150px;
//           box-shadow: 0 0 10px rgba(255 255 255 / 0.1);
//           padding: 0.5rem 0;
//           z-index: 2000;
//         }

//         .dropdown a {
//           display: block;
//           padding: 0.5rem 1rem;
//           font-weight: 400;
//           color: white;
//           text-transform: none;
//         }

//         .dropdown a:hover {
//           background: #6e2a93;
//         }

//         /* Show dropdown on hover */
//         .nav-item.has-dropdown:hover .dropdown,
//         .nav-item.has-dropdown:focus-within .dropdown {
//           display: block;
//         }

//         /* Gradient button */
//         .btn-gradient {
//           background: linear-gradient(90deg, #9f4cf7, #e73ca9);
//           border: none;
//           border-radius: 8px;
//           color: white;
//           font-weight: 600;
//           padding: 0.5rem 1.25rem;
//           cursor: pointer;
//           transition: background 0.3s ease;
//           font-size: 0.9rem;
//           text-transform: none;
//         }

//         .btn-gradient:hover,
//         .btn-gradient:focus {
//           background: linear-gradient(90deg, #e73ca9, #9f4cf7);
//         }

//         /* Hamburger menu - mobile only */
//         .hamburger {
//           display: none;
//           flex-direction: column;
//           gap: 5px;
//           cursor: pointer;
//           padding: 10px;
//           border-radius: 15px;
//           background: rgba(255 255 255 / 0.1);
//         }

//         .hamburger span {
//           width: 25px;
//           height: 3px;
//           background: white;
//           border-radius: 2px;
//         }

//         /* Mobile menu */
//         .mobile-menu {
//           display: none;
//           position: fixed;
//           top: 0; right: 0;
//           height: 100vh;
//           width: 260px;
//           background: #fff;
//           color: #3b4a6b;
//           box-shadow: -5px 0 15px rgba(0,0,0,0.2);
//           padding: 1rem 1.25rem;
//           overflow-y: auto;
//           z-index: 3000;
//           flex-direction: column;
//         }

//         .mobile-menu.open {
//           display: flex;
//         }

//         /* Mobile close button */
//         .mobile-close {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 1rem;
//         }

//         .mobile-close button {
//           font-size: 1rem;
//           font-weight: 600;
//           color: #3b4a6b;
//           background: none;
//           border: none;
//           cursor: pointer;
//         }

//         /* Mobile nav groups */
//         .mobile-group {
//           margin-bottom: 2rem;
//         }

//         .mobile-group h4 {
//           font-size: 0.8rem;
//           font-weight: 600;
//           color: #7a7e99;
//           margin-bottom: 0.6rem;
//           text-transform: uppercase;
//         }

//         .mobile-group a {
//           display: block;
//           font-weight: 700;
//           font-size: 1.1rem;
//           margin-bottom: 0.8rem;
//           color: #3b4a6b;
//           text-decoration: none;
//         }

//         .mobile-group a:hover {
//           text-decoration: underline;
//         }

//         /* Mobile special button */
//         .mobile-btn {
//           width: fit-content;
//           padding: 0.5rem 1rem;
//           border-radius: 8px;
//           background: linear-gradient(90deg, #9f4cf7, #e73ca9);
//           color: white;
//           font-weight: 600;
//           border: none;
//           cursor: pointer;
//         }

//         .mobile-btn:hover,
//         .mobile-btn:focus {
//           background: linear-gradient(90deg, #e73ca9, #9f4cf7);
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .nav-menu {
//             display: none;
//           }

//           .hamburger {
//             display: flex;
//           }
//         }
//       </style>

//       <nav class="navbar">
//         <a href="#" class="navbar-logo" aria-label="The 1% Percent University logo">
//           <img src="https://i.ibb.co/7bZ7rrF/1-percent-logo.png" alt="The 1% Percent University" />
//         </a>

//         <div class="nav-menu" role="menubar">
//           <a href="#" class="nav-item active" role="menuitem" tabindex="0">Home</a>

//           <div class="nav-item has-dropdown" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false">
//             Company
//             <div class="dropdown" role="menu" aria-label="Company submenu">
//               <a href="#" role="menuitem" tabindex="-1">About Us</a>
//               <a href="#" role="menuitem" tabindex="-1">Contact Us</a>
//             </div>
//           </div>

//           <a href="#" class="nav-item" role="menuitem" tabindex="0">Success</a>

//           <div class="nav-item has-dropdown" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false">
//             Learn
//             <div class="dropdown" role="menu" aria-label="Learn submenu">
//               <a href="#" role="menuitem" tabindex="-1">Help Center</a>
//               <a href="#" role="menuitem" tabindex="-1">Salary Growth calculator</a>
//             </div>
//           </div>

//           <a href="#" class="nav-item" role="menuitem" tabindex="0">Program</a>

//           <button class="btn-gradient">Watch Free Training</button>
//         </div>

//         <div class="hamburger" aria-label="Menu" role="button" tabindex="0" aria-expanded="false" aria-controls="mobile-menu">
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </nav>

//       <div class="mobile-menu" id="mobile-menu" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Main menu">
//         <div class="mobile-close">
//           <button aria-label="Close menu" id="close-menu-btn">&times;</button>
//           <span>Login</span>
//         </div>

//         <div class="mobile-group" role="group" aria-labelledby="home-group-label">
//           <h4 id="home-group-label">Home</h4>
//           <a href="#">Success</a>
//           <a href="#">Program</a>
//         </div>

//         <div class="mobile-group" role="group" aria-labelledby="company-group-label">
//           <h4 id="company-group-label">Company</h4>
//           <a href="#">About Us</a>
//           <a href="#">Contact Us</a>
//         </div>

//         <div class="mobile-group" role="group" aria-labelledby="learn-group-label">
//           <h4 id="learn-group-label">Learn</h4>
//           <a href="#">Help Center</a>
//           <a href="#">Salary Growth calculator</a>
//         </div>

//         <button class="mobile-btn" aria-label="Watch Free Training">Watch Free Training</button>
//       </div>
//     `;

//     // Event handlers
//     this.shadowRoot.querySelector('.hamburger').addEventListener('click', () => {
//       const menu = this.shadowRoot.getElementById('mobile-menu');
//       const expanded = this.shadowRoot.querySelector('.hamburger').getAttribute('aria-expanded') === 'true';
//       if (expanded) {
//         menu.classList.remove('open');
//         menu.setAttribute('aria-hidden', 'true');
//         this.shadowRoot.querySelector('.hamburger').setAttribute('aria-expanded', 'false');
//       } else {
//         menu.classList.add('open');
//         menu.setAttribute('aria-hidden', 'false');
//         this.shadowRoot.querySelector('.hamburger').setAttribute('aria-expanded', 'true');
//       }
//     });

//     this.shadowRoot.getElementById('close-menu-btn').addEventListener('click', () => {
//       const menu = this.shadowRoot.getElementById('mobile-menu');
//       menu.classList.remove('open');
//       menu.setAttribute('aria-hidden', 'true');
//       this.shadowRoot.querySelector('.hamburger').setAttribute('aria-expanded', 'false');
//       this.shadowRoot.querySelector('.hamburger').focus();
//     });

//     // Close mobile menu on Escape key
//     this.shadowRoot.addEventListener('keydown', (e) => {
//       if (e.key === 'Escape') {
//         const menu = this.shadowRoot.getElementById('mobile-menu');
//         if (menu.classList.contains('open')) {
//           menu.classList.remove('open');
//           menu.setAttribute('aria-hidden', 'true');
//           this.shadowRoot.querySelector('.hamburger').setAttribute('aria-expanded', 'false');
//           this.shadowRoot.querySelector('.hamburger').focus();
//         }
//       }
//     });
//   }
// }
// customElements.define("site-header", SiteHeader);