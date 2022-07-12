// 1. make animation for nav bar onScroll

const nav = document.getElementById('nav');
// console.log(nav);
window.onscroll = () => {
    let pointX = window.scrollX;
    let pointY = window.scrollY;

    // console.log(pointX, pointY);
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


// 4. Tạo hiệu ứng di chuyển các phần trong trang chậm


// 5. Tạo hiệu ứng khi nhấn vào nút send

// 6. Tạo hiệu ứng khi nhấn vào nút get-notified

// 7. Tạo hiệu ứng xuất hiện nút di chuyển lên đầu trang khi lướt trang xuống 

// 8. form contact: 
//   - tạo thông báo lỗi khi nhấn sai email
//   - tạo thông báo lỗi khi nhấn nút send mà chưa nhập dữ liệu

// 9. thay đổi prevbutton với nextbutton để tạo hiệu ứng hover
