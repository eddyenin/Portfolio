$(document).ready(() => {
    const checkbox = document.getElementById('checkbox');
    
    const body = document.querySelector('.body');

    // if (getTheme) {
    //     // document.documentElement.setAttribute('data-theme', currentTheme);
    //    // document.body.classList.add('currentTheme')
    //    currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    //     if (currentTheme === 'theme-dark') {
    //         checkbox.checked = true;
    //     }
    // }


    checkbox.addEventListener('change', () => {
      // const getTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
        if(checkbox.checked){
            body.classList.toggle('theme-dark');
            localStorage.setItem('theme', 'theme-dark');
        }
       // document.body.classList.toggle('theme-dark');
       // switchTheme();
       
    })



    

 });
//store user preferred theme
// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark'); //add this
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light'); //add this
//     }    
// }

//check for stored user preferred if any
// const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

