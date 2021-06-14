document.addEventListener("DOMContentLoaded", function(){
    const gnbli = document.querySelectorAll('.gnb-ul');

    const slideList = document.querySelector('.main-visual-img-box');  // Slide parent dom
    const slideContents = document.querySelectorAll('.slide_content');  // each slide dom
    const slideBtnNext = document.querySelector('.control-wrap .next'); // next button
    const slideBtnPrev = document.querySelector('.control-wrap .prev'); // prev button
    const pagination = document.querySelector('.slide_pagination');
    const slideLen = slideContents.length;  // slide length
    const slideWidth = 1750; // slide width
    const slideSpeed = 300; // slide speed
    const startNum = 0; // initial slide index (0 ~ 4)

    const autoStatBtn = document.querySelector('.main-visual-slide_ctr');
    const autoStatBtnimg = document.querySelector('.main-visual-slide_ctr > img');
   
    // 슬라이드 스크립트
    slideList.style.width = slideWidth * (slideLen + 2) + "px";
   
    let firstChild = slideList.firstElementChild;
    let lastChild = slideList.lastElementChild;
    let clonedFirst = firstChild.cloneNode(true);
    let clonedLast = lastChild.cloneNode(true);

    slideList.appendChild(clonedFirst);
    slideList.insertBefore(clonedLast, slideList.firstElementChild);

    // Add pagination dynamically
    let pageChild = '';
    for (var i = 0; i < slideLen; i++) {
      pageChild += '<li class="dot';
      pageChild += (i === startNum) ? ' dot_active' : '';
      pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
    }
    pagination.innerHTML = pageChild;
    const pageDots = document.querySelectorAll('.dot'); // each dot from pagination

    slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1));
   
    let curIndex = startNum; // current slide index (except copied slide)
    let curSlide = slideContents[curIndex]; // current slide dom
    curSlide.classList.add('slide_active');

    let isStop = false;
    let auto ="";

    function autistart (){
        if(!isStop) {
            //console.log("자동시작");
            if (curIndex <= slideLen - 1) {
                slideList.style.transition = slideSpeed + "ms";
                slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
            }
            if (curIndex === slideLen - 1) {
                setTimeout(function() {
                    slideList.style.transition = "0ms";
                    slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
                }, slideSpeed);
                curIndex = -1;
            }
            curSlide.classList.remove('slide_active');
            pageDots[(curIndex === -1) ? slideLen - 1 : curIndex].classList.remove('dot_active');
            curSlide = slideContents[++curIndex];
            curSlide.classList.add('slide_active');
            pageDots[curIndex].classList.add('dot_active');
        } else {
            //console.log("오토끝");
            clearInterval(auto);
        }
    }
    auto = setInterval(autistart, 3000);

    autoStatBtn.addEventListener('click', function(){
        if(!isStop){
            console.log("자동시작");
            isStop = true;
            autoStatBtnimg.src = "images/button/btn-main-slide-play.png";
        } else {
            console.log("자동멈춤");
            autoStatBtnimg.src = "images/button/btn-main-slide-stop.png";
            isStop = false;
            auto = setInterval(autistart, 3000);
        }
    });

    slideBtnNext.addEventListener('mouseover', function(){
        // console.log("마우스올림");        
        isStop = true;
        clearInterval(auto);
    });

    slideBtnNext.addEventListener('mouseout', function(){
        // console.log("마우스 나감")
        isStop = false;
        auto = setInterval(autistart, 3000);
    });

    slideBtnPrev.addEventListener('mouseover', function(){
        // console.log("마우스올림");        
        isStop = true;
        clearInterval(auto);
    });

    slideBtnPrev.addEventListener('mouseout', function(){
        // console.log("마우스 나감")
        isStop = false;
        auto = setInterval(autistart, 3000);
    });


    slideBtnNext.addEventListener('click', function() {
        if (curIndex <= slideLen - 1) {
            slideList.style.transition = slideSpeed + "ms";
            slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
        }
        if (curIndex === slideLen - 1) {
            setTimeout(function() {
                slideList.style.transition = "0ms";
                slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
            }, slideSpeed);
            curIndex = -1;
        }
        curSlide.classList.remove('slide_active');
        pageDots[(curIndex === -1) ? slideLen - 1 : curIndex].classList.remove('dot_active');
        curSlide = slideContents[++curIndex];
        curSlide.classList.add('slide_active');
        pageDots[curIndex].classList.add('dot_active');
    });

    slideBtnPrev.addEventListener('click', function() {
        if (curIndex >= 0) {
            slideList.style.transition = slideSpeed + "ms";
            slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
        }
        if (curIndex === 0) {
            setTimeout(function() {
                slideList.style.transition = "0ms";
                slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
            }, slideSpeed);
            curIndex = slideLen;
        }
        curSlide.classList.remove('slide_active');
        pageDots[(curIndex === slideLen) ? 0 : curIndex].classList.remove('dot_active');
        curSlide = slideContents[--curIndex];
        curSlide.classList.add('slide_active');
        pageDots[curIndex].classList.add('dot_active');
    });
});