const sections = document.querySelectorAll('.section');
const sectionsButtons = document.querySelectorAll('.controlls');
const sectionButton = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content');
const themeBtn = document.querySelector('.theme-btn');


function pageTransitions() {
    //Button click active class
    for(let i = 0; i < sectionButton.length; i++) {
        sectionButton[i].addEventListener('click', function() {
          let currentButton = document.querySelector('.active-btn');
          currentButton.classList = currentButton.className.replace('active-btn', '');
          this.className += ' active-btn';
        })
    }

    // Sections active class
    allSection.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // remove selected from the other button
            sectionsButtons.forEach((button) => {
              button.classList.remove('active')
            })
            e.target.classList.add('active') 
            // hide other setion
            sections.forEach((section) => {
              section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
  // Toogle theme
  themeBtn.addEventListener('click', () => {
   let element = document.body;
   element.classList.toggle('light-mode');
  })
}

pageTransitions();