
/*
const lightMode = () => {
    const themeToggleBtns = document.querySelectorAll("#theme-toggle");
    const theme = localStorage.getItem('theme');
  
    theme && document.body.classList.add(theme);
  
    themeToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
  
        if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark-mode');
          btn.querySelector('svg').setAttribute('fill', 'var(--clr-light)');
        } else {
          localStorage.removeItem('theme');
          btn.querySelector('svg').setAttribute('fill', '#f1c40f');
        }
      });
    });
  };
  
  export default lightMode;
  */

  const lightMode = () => {
    const themeToggleBtns = document.querySelectorAll("#theme-toggle");
    const theme = localStorage.getItem('theme');
    
    themeToggleBtns.forEach(btn => {
      const svgElement = btn.querySelector('svg');
      const svgFill = localStorage.getItem('svgFill');
      if (svgFill) {
        svgElement.setAttribute('fill', svgFill);
      }
    });
  
    theme && document.body.classList.add(theme);
  
    themeToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
  
        if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark-mode');
          localStorage.setItem('svgFill', 'var(--clr-light)');
          btn.querySelector('svg').setAttribute('fill', 'var(--clr-light)');
        } else {
          localStorage.removeItem('theme');
          localStorage.setItem('svgFill', '#f1c40f');
          btn.querySelector('svg').setAttribute('fill', '#f1c40f');
        }
      });
    });
  };
  
  export default lightMode;
  