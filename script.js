let currentIndex = 0;
    const images = document.querySelectorAll('.slide-img img');
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000);

window.onload = function() {
    var modal = document.getElementById("modal");
    var closeBtn = document.getElementsByClassName("close-btn")[0];
    var loginBtn = document.getElementById("loginBtn");


    modal.style.display = "block";


    closeBtn.onclick = function() {
        modal.style.display = "none";
    }


    loginBtn.onclick = function() {
        window.location.href = "login.html";
    }


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
