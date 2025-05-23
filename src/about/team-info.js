const teamMembers = [
    {
      name: "Boniface Ogunti",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/6639089de997cbb894204129_Boniface%20Ogunti%202.jpg",
      designation: "Founder, Chief Executive Officer"
    },
    {
      name: "Assi Ogunti",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/6638ff4267ff63ce380162cf_Assi_Ogunti%20.JPG",
      designation: "Head of Influencer Marketing"
    },
    {
      name: "Hadji Sall",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/663a4e8e8a47ab667275db83_Hadji%20Sall.png",
      designation: "Facebook Ads Media Buyer"
    },
    {
      name: "Manish Nath Tiwari",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/663a56130d380d7faca76dc3_Manish%20Nath%20Tiwari.png",
      designation: "Designation"
    },
    {
      name: "Khushi Bansal",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/663dbfe111e03eca4b9c11ee_Khushi%20Bansal.png",
      designation: "Designation"
    },
    {
      name: "Bo Mogeni",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/663a4f242f3961a53a5d49be_Bo%20Mogeni.png",
      designation: "TikTok Ads Media Buyer"
    },
    {
      name: "Sean Gustavson",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/663a4eb5f598e5be79021c57_Sean%20Gustavson.png",
      designation: "Designation"
    },
    {
      name: "Ruchika Srivastava",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/663a55ca09ee49392f9440c2_Ruchika%20Srivastava.png",
      designation: "Designation"
    },
    {
      name: "Benjamin Anaya Jr",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/663a4efcf598e5be79024e43_Benjamin%20Anaya%20Jr.png",
      designation: "Designation"
    },
    {
      name: "Glenn Johnson",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/663a4f4f114e111854ee1480_Glenn%20Johnson.png",
      designation: "Designation"
    },
    {
      name: "Devesh Srivastava",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/663a54953201c691dbc8301d_Devesh%20Srivastava.png",
      designation: "Designation"
    },
    {
      name: "Abhishek Tiwari",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/663a54b4d8739cd529852893_Abhishek%20Tiwari.png",
      designation: "Designation"
    },
    {
      name: "Vikas Raturi",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/663a54e0d10b271e8f545380_Vikas%20Raturi.png",
      designation: "Designation"
    },
    {
      name: "Ravi Mishra",
      image: "https://cdn.prod.website-files.com/65fc810e091c7ea4dc2da4c1/663a550ff598e5be7907c45e_Ravi%20Mishra.png",
      designation: "Designation"
    }
  ];
  
  
document.addEventListener("DOMContentLoaded", () => {
    const teamGrid = document.getElementById("w-node-_432cb75f-6683-fabd-f7a0-87cde3290be4-d0fd52f4");
    
    teamMembers.forEach(member => {
        const card = document.createElement("div");
        card.className = "w-layout-cell cell";
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h1 class="heading-104">${member.name}</h1>
            <p class="paragraph-43">${member.designation}</p>
        `;
        teamGrid.appendChild(card);
    });
});
