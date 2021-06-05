document.addEventListener("DOMContentLoaded", function(){
    const windowcon = document.querySelector('.main-visual-box');
    const slideList = document.querySelector('.main-visual-img-box');  // Slide parent dom
    const slideContents = document.querySelectorAll('.slide_content');  // each slide dom
    const slideBtnNext = document.querySelector('.control-wrap .next'); // next button
    const slideBtnPrev = document.querySelector('.control-wrap .prev'); // prev button
    // const pagination = document.querySelector('.slide_pagination');
    const slideLen = slideContents.length;  // slide length

    // const slideWidth = 400; // slide width
    // const slideSpeed = 300; // slide speed
    // const startNum = 0; // initial slide index (0 ~ 4)
      
    // slideList.style.width = slideWidth * (slideLen + 2) + "px";
    

    // let firstChild = slideList.firstElementChild;
    // let lastChild = slideList.lastElementChild;
    // let clonedFirst = firstChild.cloneNode(true);
    // let clonedLast = lastChild.cloneNode(true);

    // slideList.appendChild(clonedFirst);
    // slideList.insertBefore(clonedLast, slideList.firstElementChild);


    // let currentindex = 0;

    for(i=0; i < slideLen; i++){
        console.log("slideContents[i].firstElementChild ===> " + slideContents[i].firstElementChild );
        slideContents[i].style.left = `${i*100}%`;
    }

    function calcul() {
        for(i=0; i<slideContents; i++) {
            if(windowcon.offsetHeight < slideContents[i].offsetHeight){
                windowcon.style.height = slideContents[i].offsetHeight + "px";
                windowcon.style.width = slideContents[i].offsetWidth + "px";
            }
        }
        console.log("실행");
    }
    calcul();

    let lele = 0;
    let a = 0;

    function moveevent(){
        setInterval(() => {
            lele += 100;
            slideList.style.transition ='.3s' ;
            slideList.style.left ="-" + lele +"%";
            a++;
    
            if(a == slideLen-1){
                setTimeout(() => {
                    slideList.style.transition = '0s';
                    lele = 0;
                    slideList.style.left = "-" + lele + "%"; 
                }, 201);
                a = 0;
            }
        }, 1000);
    }
    // moveevent();

});