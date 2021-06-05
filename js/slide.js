document.addEventListener("DOMContentLoaded", function(){
    // const windowcon = document.querySelector('.main-visual-box');
    const slideList = document.querySelector('.main-visual-img-box');  // Slide parent dom
    const slideContents = document.querySelectorAll('.slide_content');  // each slide dom
    const slideBtnNext = document.querySelector('.control-wrap .next'); // next button
    const slideBtnPrev = document.querySelector('.control-wrap .prev'); // prev button
    const pagination = document.querySelector('.slide_pagination');
    const slideLen = slideContents.length;  // slide length
    const slideWidth = 1800; // slide width
    const slideSpeed = 300; // slide speed
    const startNum = 0; // initial slide index (0 ~ 4)
      
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

    let lele = 0;
    let a = 0;

    function moveevent(){
        setInterval(() => {
            // console.log("slideWidth====" + slideWidth);
            // slideList.style.transition = slideSpeed + "ms";
            // slideList.style.transform = "translate3d(-" + ("800" * curIndex) + "px, 0px, 0px)";
            // a++;

            // if(a == slideLen-1){
            //     setTimeout(() => {
            //         slideList.style.transition = "0ms";
            //         lele = 0;
            //         slideList.style.left = "-" + lele + "%"; 
            //     }, 201);
            //     a = 0;
            // }
        }, 1000);
    }
    moveevent();


    // let currentindex = 0;

    // for(i=0; i < slideLen; i++){
    //    slideContents[i].style.left = `${i*100}%`;
    // }

    // function calcul() {
    //     for(i=0; i<slideLen; i++) {
    //         // console.log("slideLen ===>" +slideLen)
    //         // console.log("slideContents[i].offsetHeight ===>" + slideContents[i].offsetHeight)
    //         if(slideList.offsetHeight < slideContents[i].offsetHeight){
    //             slideList.style.height = slideContents[i].offsetHeight + "px";
    //             slideList.style.width = slideContents[i].offsetWidth + "px";
    //         }
    //     }
    //     console.log("실행");
    // }
    // calcul();

    // let lele = 0;
    // let a = 0;

    // function moveevent(){
    //     setInterval(() => {
    //         lele += 100;
    //         slideList.style.transition ='.3s' ;
    //         slideList.style.left ="-" + lele +"%";
    //         a++;
    
    //         if(a == slideLen-1){
    //             setTimeout(() => {
    //                 slideList.style.transition = '0s';
    //                 lele = 0;
    //                 slideList.style.left = "-" + lele + "%"; 
    //             }, 201);
    //             a = 0;
    //         }
    //     }, 1000);
    // }
    // // moveevent();

});