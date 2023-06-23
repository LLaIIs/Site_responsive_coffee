const navLinks = document.querySelectorAll('.nav-bar ul li a');
const burger = document.querySelector('.burguer');
const navbar = document.querySelector('.nav-bar');


//menu responsivo
burger.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });
  
  
  //ajustes do header
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId === 'login/index (2).html') {
        // Redirecionar para o link de login
        
        return;
      }else if (targetId == '/Cofee_responsive/index.html'){
        return;
      }
      else if (targetId == '/Cofee_responsive/index.html#sobre'){
        return;
      }
      else if (targetId == '/Cofee_responsive/index.html#produtos'){
        return;
      }else if(targetId == '/Cofee_responsive/index.html#avaliacoes'){
        return;
      }
  
      event.preventDefault();
      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
  
      const targetSection = document.querySelector(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Ajuste de deslocamento vertical
          behavior: 'smooth' // Rolagem suave
        });
      }
    });
  });
  
  window.addEventListener('scroll', function() {
    const headerContainer = document.querySelector('.header-container');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 200) {
      headerContainer.classList.add('scrolled');
    } else {
      headerContainer.classList.remove('scrolled');
    }
  });
  
  