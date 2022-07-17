// 1. make animation for nav bar onScroll

const nav = document.getElementById('nav');
// console.log(nav);
const showNavbar = () => {
    let pointY = window.scrollY;

    let img = nav.querySelector('img');


    if (pointY > 100) {
        
        nav.style.backgroundColor = 'rgb(56, 37, 92)';
        nav.style.height = '65px';
        
        // change logo size
        img.style.width = '46px';
        img.style.height = '52px';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.height = '120px';

        // undo logo size
        img.style.width = '72px';
        img.style.height = '78px';
    }
}
window.addEventListener('scroll', showNavbar);


// 2. make animation: change content slider onclick button

const slider = document.querySelector('.slider');

const orderSlider = slider.querySelector('.order');
const prevButton = slider.querySelector('.prev-button');
const nextButton = slider.querySelector('.next-button');
const contentSliderHeading = slider.querySelector('.content-slider_heading');
const contentSliderDescription = slider.querySelector('.content-slider_description');

const dot1 = slider.querySelector('.dot-1');
const dot2 = slider.querySelector('.dot-2');
const dot3 = slider.querySelector('.dot-3');

// - make data to show in content slider
const heading1 = "GO fitness zone";
const heading2 = "Group and personal workouts";
const heading3 = "Yoga & stretching sessions";

const context1 = "Join the body revolution here at Girls Only friendly atmosphere. \
No matter what your fitness and wellness goals are, GO fitness zone offers a vast variety \
of workout activities to improve both your muscle strengths and flexibility."

const context2 = "We offer group and personal fitness training classes with variety\
 to suit all shapes, sizes and levels of fitness gurus. Our classes will challenge you\
  to reach your full fitness potential, to feel and perform beyond your expectations."

const context3 = "Find relief with yoga and stretching mindfulness sessions. We believe \
there is a yoga path for everyone, regardless of age, gender, ethnicity, or lifestyle, \
that's why we organize our sessions both for beginners and super gurus — no prior experience\
 is required!"

// solution

// content slider 1
const handleSlider1 = () => {
    console.log("slider 1");
    
    // change backround and add css
    slider.style.background = "url('../assets/imgs/slide1.jpg')";
    slider.style.backgroundRepeat = 'no-repeat';
    slider.style.backgroundPosition = 'center';
    slider.style.backgroundSize = '100%';

    contentSliderHeading.innerText = heading1;
    contentSliderDescription.innerText = context1;
    orderSlider.innerText = "01";

    // change dot
    dot1.style.backgroundColor = '#fff';
    dot2.style.backgroundColor = 'transparent';
    dot3.style.backgroundColor = 'transparent';
}

// content slider 2
const handleSlider2 = () => {
    console.log("silder 2");
    
    // change backround and add css
    slider.style.background = "url('../assets/imgs/slide2.jpg')";
    slider.style.backgroundRepeat = 'no-repeat';
    slider.style.backgroundPosition = 'center';
    slider.style.backgroundSize = '100%';

    contentSliderHeading.innerText = heading2;
    contentSliderDescription.innerText = context2;
    orderSlider.innerText = "02";

    // change dot
    dot1.style.backgroundColor = 'transparent';
    dot2.style.backgroundColor = '#fff';
    dot3.style.backgroundColor = 'transparent';
}

// content slider 3
const handleSlider3 = () => {
    console.log("slider 3");
    
    // change backround and add css
    slider.style.background = "url('../assets/imgs/slide3.jpg')";
    slider.style.backgroundRepeat = 'no-repeat';
    slider.style.backgroundPosition = 'center';
    slider.style.backgroundSize = '100%';

    contentSliderHeading.innerText = heading3;
    contentSliderDescription.innerText = context3;
    orderSlider.innerText = "03";

    // change dot
    dot1.style.backgroundColor = 'transparent';
    dot2.style.backgroundColor = 'transparent';
    dot3.style.backgroundColor = '#fff';
}

const handleClickPrevButton = () => {
    console.log("clicked left");

    // check the order of slider currently and change it
    let order = orderSlider.innerText;
    switch(Number(order)) {
        case 1:
            handleSlider3();
            break;
        case 2:
            handleSlider1();
            break;
        case 3: 
            handleSlider2();
            break;
    }
}
prevButton.addEventListener('click', handleClickPrevButton);

const handleClickNextButton = () => {
    console.log("clicked right");

    // check the order of slider currently and change it
    let order = orderSlider.innerText;
    switch(Number(order)) {
        case 1:
            handleSlider2();
            break;
        case 2:
            handleSlider3();
            break;
        case 3: 
            handleSlider1();
            break;
    }

}
nextButton.addEventListener('click', handleClickNextButton);



// 3. make animation: change content slider onclick dots
dot1.addEventListener('click', handleSlider1);
dot2.addEventListener('click', handleSlider2);
dot3.addEventListener('click', handleSlider3);


// 4. make the transition slowly


// 5. make animation when click the button send






// 6. make animation when click the get-notified button




// 7. make appearance of top button when scroll down
const buttonTop = document.querySelector('.button-top');

const showButtonTop = () => {
    let pointY = window.scrollY;

    if (pointY > 300 ) {
        // show Button on top
        buttonTop.style.display = 'block';

    } else {
        // hide Button on top
        buttonTop.style.display = 'none';
    }
}
window.addEventListener('scroll', showButtonTop);








// 8. form contact: 
//   - make notified when enter wrong email
//   - make notified error when click send without enter data

// 9. make animation for prevbutton and nextbutton on hover (done)

// 10. change the scrollbar (done)

// 11. change the content of content 6 
const content1 = "I’m taking personal training sessions at GO zone with Adrienne since December 2021. I really enjoy my sessions and I like the variety of exercises. Adrienne always asks me when I book my next session what I want to work on and tailors the session to accommodate. Since I have been training with her, I can really see an improvement in my upper body strength. I can now do full press up and when working in the gym on my own I lift much heavier weights than when I started. My overall fitness has improved and I feel confident to do exercises I wouldn’t have tried before."
const content2 = "I started my yoga classes a year ago to reduce work related stress. Cindy and her yoga sessions helped me a lot to get through my tough times. The classes are so peaceful, and we get to practice various breathing techniques, stretches and advanced poses. Cindy provides options for poses, so each of us can choose the pose based on our flexibility and comfort level, so you don't need to have any experience in yoga when joining the sessions. I have definitely gained more flexibility. I strongly recommend GO yoga for anyone, at any flexibility level."
const content3 = "I completed my 200th workout last night and felt like I had just climbed the Mountain  Everest! My work is far from over, but I know I will reach my ultimate goal! After every workout, I feel like I want to exercise more consistently. Curves make it so easy to get the strength training I know I need. The changes on my body shapes are so great! I’m happy. I’m more confident. I have lots of energy again. Furthermore, I walk and play with my children with my full potential."
const content4 = "Verica’s personal training has helped me to learn new techniques and exercises that I combine to create a gym routine that I can do in my own time. Verica really takes into considering my needs, helps me to improve problem areas whilst making me feel comfortable and improving my confidence. I really look forward to my next workouts with Verica as I know I will learn new techniques every time. Thank you for helping me to reach my full potential! I'll recommend GO fitness to all my besties."

const author1 = "Mila Fenez / Personal trainings with Adrienne"
const author2 = "Lucia Cellotti / Yoga & stretching sessions"
const author3 = "Paula Zicker / Group fitness trainings"
const author4 = "Jane Simson / Personal trainings with Verica"

const content_6 = document.querySelector('.content-6-description');
const author = content_6.getElementsByTagName('h2')[0];
const content = content_6.getElementsByTagName('p')[0];
// console.log(author, content)

const dot1_content6 = content_6.querySelector('.dot-1');
const dot2_content6 = content_6.querySelector('.dot-2');
const dot3_content6 = content_6.querySelector('.dot-3');
const dot4_content6 = content_6.querySelector('.dot-4');

dot1_content6.addEventListener('click', () => {
    content.innerText = content1;
    author.innerText = author1;
    dot1_content6.style.background = 'linear-gradient(0deg, rgb(255, 88, 160), rgb(255, 202, 104))';
    dot2_content6.style.background = 'rgba(56, 37, 92, 0.5)';
    dot3_content6.style.background = 'rgba(56, 37, 92, 0.5)';
    dot4_content6.style.background = 'rgba(56, 37, 92, 0.5)';
});

dot2_content6.addEventListener('click', () => {
    content.innerText = content2;
    author.innerText = author2;
    dot2_content6.style.background = 'linear-gradient(0deg, rgb(255, 88, 160), rgb(255, 202, 104))';
    dot1_content6.style.background = 'rgba(56, 37, 92, 0.5)';
    dot3_content6.style.background = 'rgba(56, 37, 92, 0.5)';
    dot4_content6.style.background = 'rgba(56, 37, 92, 0.5)';
});

dot3_content6.addEventListener('click', () => { 
    content.innerText = content3;
    author.innerText = author3;
    dot3_content6.style.background = 'linear-gradient(0deg, rgb(255, 88, 160), rgb(255, 202, 104))';
    dot1_content6.style.background = 'rgba(56, 37, 92, 0.5)';
    dot2_content6.style.background = 'rgba(56, 37, 92, 0.5)';
    dot4_content6.style.background = 'rgba(56, 37, 92, 0.5)';
});

dot4_content6.addEventListener('click', () => {
    content.innerText = content4;
    author.innerText = author4;
    dot4_content6.style.background = 'linear-gradient(0deg, rgb(255, 88, 160), rgb(255, 202, 104))';
    dot1_content6.style.background = 'rgba(56, 37, 92, 0.5)';
    dot2_content6.style.background = 'rgba(56, 37, 92, 0.5)';
    dot3_content6.style.background = 'rgba(56, 37, 92, 0.5)';
});


