// 1. Tạo hiệu ứng thanh navbar khi cuộn trang

const nav = document.getElementById('nav');
console.log(nav);
window.onscroll = () => {
    let pointX = window.scrollX;
    let pointY = window.scrollY;

    console.log(pointX, pointY);
    let img = nav.querySelector('img');


    if (pointY > 100) {
        
        nav.style.backgroundColor = 'rgb(56, 37, 92)';
        nav.style.height = '65px';

        // sửa lại kích thước logo
        img.style.width = '46px';
        img.style.height = '52px';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.height = '120px';

        // sửa lại kích thước logo
        img.style.width = '72px';
        img.style.height = '78px';
    }
}


// 2. Tạo hiệu ứng chuyển slide khi click vào prev-button và next-button hoặc khi click vào dots

// 3. Tạo hiệu ứng di chuyển các phần trong trang chậm

// 4. Tạo hiệu ứng khi nhấn vào các nút dots ở phần challenge yourself

// 5. Tạo hiệu ứng khi nhấn vào nút send

// 6. Tạo hiệu ứng khi nhấn vào nút get-notified

// 7. Tạo hiệu ứng xuất hiện nút di chuyển lên đầu trang khi lướt trang xuống 

// 8. form contact: 
//   - tạo thông báo lỗi khi nhấn sai email
//   - tạo thông báo lỗi khi nhấn nút send mà chưa nhập dữ liệu


