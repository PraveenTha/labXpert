
(function(){
  const hero = document.querySelector(".labx-hero");
  const slides = hero.querySelectorAll(".labx-slide");
  let current = 0;

  function autoSlide(){
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");

    if(current === 1){
      hero.classList.add("theme-doctor");
    } else {
      hero.classList.remove("theme-doctor");
    }
  }

  setInterval(autoSlide,4000);

  /* Parallax */
  document.addEventListener("mousemove",(e)=>{
    const activeImg = hero.querySelector(".labx-slide.active img");
    if(activeImg){
      const x = (window.innerWidth - e.pageX*2)/100;
      const y = (window.innerHeight - e.pageY*2)/100;
      activeImg.style.transform = `translate(${x}px,${y}px)`;
    }
  });

})();
