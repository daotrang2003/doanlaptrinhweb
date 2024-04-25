document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".slideshow-header img");
    var currentImageIndex = 0;
    var slideInterval = setInterval(nextSlide, 3000); 
  
    function nextSlide() {
        images[currentImageIndex].classList.remove("active");
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add("active");
    }
  });
//câu chuyện NL

function playVideo(id) {
    document.querySelector(`.banner:nth-child(${id}) .banner-image`).style.filter = 'blur(0px)'; // Đặt mức độ mờ của hình ảnh về 0 để làm rõ hình ảnh
    document.querySelector(`.banner:nth-child(${id}) .video-overlay`).style.display = 'block'; // Hiển thị video
    document.querySelector(`.banner:nth-child(${id}) video`).play(); // Phát video
  }

  function pauseVideo(id) {
    document.querySelector(`.banner:nth-child(${id}) .banner-image`).style.filter = 'blur(5px)'; // Đặt lại mức độ mờ của hình ảnh khi rời khỏi banner
    document.querySelector(`.banner:nth-child(${id}) .video-overlay`).style.display = 'none'; // Ẩn video
    document.querySelector(`.banner:nth-child(${id}) video`).pause(); // Tạm dừng video
  }
  //SPBC
  let currentIndex = 0;
const slides = document.querySelectorAll('.sp');
const totalSlides = slides.length;
let intervalId;

function nextSlidee() {
    clearInterval(intervalId); // Dừng chạy tự động
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidee();
    startAutoSlideWithDelay(); // Bắt đầu lại tự động sau 5 giây
}

function prevSlidee() {
    clearInterval(intervalId); // Dừng chạy tự động
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidee();
    startAutoSlideWithDelay(); // Bắt đầu lại tự động sau 5 giây
}

function updateSlidee() {
    let offsetX;
    if (currentIndex === totalSlides - 1) {
        offsetX = -100; // Slide cuối cùng
    } else {
        offsetX = -currentIndex * (100 / totalSlides);
    }
    document.querySelector('.san-pham').style.transform = `translateX(${offsetX}%)`;
}

function startAutoSlideWithDelay() {
    intervalId = setInterval(nextSlidee, 2000); // Bắt đầu tự chạy lại sau 5 giây
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

document.querySelector('.arrow-left').addEventListener('click', function() {
    prevSlidee();
});

document.querySelector('.arrow-right').addEventListener('click', function() {
    nextSlidee();
});

startAutoSlideWithDelay(); // Bắt đầu tự động chạy slideshow ban đầu
//CHƯƠNG TRÌNH CỘNG ĐỒNG
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".slideshow-CTCD img");
    var currentImageIndex = 0;
    var slideInterval = setInterval(nextSlide, 3000); 
  
    function nextSlide() {
        images[currentImageIndex].classList.remove("active");
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add("active");
    }
  });
//ĐĂNG NHẬP
// Kiểm tra xem có tên đăng nhập trong localStorage không
if(localStorage.getItem('username')) {
    // Lấy tên đăng nhập từ localStorage
    var username = localStorage.getItem('username');
    
    // Thay đổi icon thành tên đăng nhập
    document.getElementById('usernameIcon').innerText = username;
} 