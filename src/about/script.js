const body_2 = document.body;

body_2.addEventListener("mousemove", handleMouseMove_2);

function handleMouseMove_2(event) {
  const offsetX =
    ((event.clientX - window.innerWidth / 2) / window.innerWidth) *
    20;
  const offsetY =
    ((event.clientY - window.innerHeight / 2) /
      window.innerHeight) *
    20;

  const productIcon = document.querySelector(
    ".product__c-icon-2.is--big.is--linkedin-2"
  );
  productIcon.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  const productBlur = document.querySelector(
    ".product-icon__blur-2.is--big"
  );
  productBlur.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;

  const productIconImage = document.querySelector(
    ".product__icon-2.is--icon.is--big"
  );
  productIconImage.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
}

body_2.addEventListener("mouseleave", () => {
  const productIcon = document.querySelector(
    ".product__c-icon-2.is--big.is--linkedin-2"
  );
  productIcon.style.transform = "translate3d(0, 0, 0)";

  const productBlur = document.querySelector(
    ".product-icon__blur-2.is--big"
  );
  productBlur.style.transform = "translate3d(0, 0, 0)";

  const productIconImage = document.querySelector(
    ".product__icon-2.is--icon.is--big"
  );
  productIconImage.style.transform = "translate3d(0, 0, 0)";
});

// Animation loop function
function animate_2() {
  // Calculate scale value between 0 and 1.2
  const scale = Math.min(
    1.3,
    Math.max(0, Math.sin(Date.now() / 1000) * 0.2 + 1)
  );

  // Apply transform with scale3d to the element
  const productBlur = document.querySelector(
    ".product-icon__blur-2.is--big"
  );
  productBlur.style.transform = `translate3d(0px, 0px, 0px) scale3d(${scale}, ${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;

  // Call animate function again for the next frame
  requestAnimationFrame(animate_2);
}

// Start the animation loop
animate_2();