/*
** Change Background on scroll and btn up
 */

let avgScroll = $('#demo').offset().top - 150;
let sectionScroll = $('#MILANCELOS').offset().top - 200;
// console.log(sectionScroll)
// console.log(avgScroll)

$(window).scroll(function() {
    if($(window).scrollTop() > avgScroll) {
        $('.navbar').css({'backgroundColor' : '#9e9997', 'transition':'1.5s'})
        // $('.navbar a').css({'color' : 'black', 'transition':'1.5s'})
    }else {
        $('.navbar').css({'backgroundColor' : 'black', 'transition':'1.5s'})
    } 
    if($(window).scrollTop() > sectionScroll) {
        $('#topbtn').fadeIn(1500)
    } else {
        $('#topbtn').fadeOut(1500)
    }
})

$('#topbtn').click(function() {
    $('body,html').animate({scrollTop:'0px'})
})

let day = document.querySelector('.count-days')
let hour = document.querySelector('.count-hours')
let minute = document.querySelector('.count-minutes')
let second = document.querySelector('.count-seconds')

/*Get Time Counter */
let countDownDate = new Date("Dec 31,2022 23:59:59").getTime();
// console.log( countDownDate)
let counter = setInterval(()=> {

    let dateNow = new Date().getTime();
    let dateDiff = countDownDate -  dateNow;
    // console.log(dateDiff)
    let days=Math.floor(dateDiff/(1000*60*60*24));
    let hours=Math.floor((dateDiff%(1000*60*60*24))/(1000*60*60));
    let minutes=Math.floor((dateDiff%(1000*60*60))/(1000*60));
    let seconds=Math.floor((dateDiff%(1000*  60))/1000);

    day.innerHTML = days 
    hour.innerHTML = hours
    minute.innerHTML = minutes < 10 ? `0${minutes}` : minutes
    second.innerHTML = seconds < 10 ? `0${seconds}` : seconds

    if(dateDiff < 0) {
        clearInterval(counter)
    }
}, 1000)


/**Change when click in image */
let imagesBtn = Array.from(document.getElementsByClassName('mini-photo'));
let changephoto = document.getElementById('changephoto');
// console.log(changephoto)
// console.log(hoverImages); 
// console.log(imageBtn)
for(let i=0; i< imagesBtn.length; i++) {
    imagesBtn[i].addEventListener("click", (e)=> {
         changephoto.src = e.target.src
    })
}
let imagesBtn1 = Array.from(document.getElementsByClassName('mini-photo1'));
console.log(imagesBtn1);
let changephoto1 = document.getElementById('changephoto1');
// console.log(changephoto)
// console.log(hoverImages); 
// console.log(imageBtn)
for(let i=0; i< imagesBtn1.length; i++) {
    imagesBtn1[i].addEventListener("click", (e)=> {
         changephoto1.src = e.target.src
    })
}
let imagesBtn2 = Array.from(document.getElementsByClassName('mini-photo2'));
// console.log(imagesBtn1);
let changephoto2 = document.getElementById('changephoto2');
// console.log(changephoto)
// console.log(hoverImages); 
// console.log(imageBtn)
for(let i=0; i< imagesBtn2.length; i++) {
    imagesBtn2[i].addEventListener("click", (e)=> {
         changephoto2.src = e.target.src
    })
}
let imagesBtn3 = Array.from(document.getElementsByClassName('mini-photo3'));
// console.log(imagesBtn1);
let changephoto3 = document.getElementById('changephoto3');
// console.log(changephoto)
// console.log(hoverImages); 
// console.log(imageBtn)
for(let i=0; i< imagesBtn3.length; i++) {
    imagesBtn3[i].addEventListener("click", (e)=> {
         changephoto3.src = e.target.src
    })
}
let imagesBtn4 = Array.from(document.getElementsByClassName('mini-photo4'));
// console.log(imagesBtn1);
let changephoto4 = document.getElementById('changephoto4');
// console.log(changephoto)
// console.log(hoverImages); 
// console.log(imageBtn)
for(let i=0; i< imagesBtn4.length; i++) {
    imagesBtn4[i].addEventListener("click", (e)=> {
         changephoto4.src = e.target.src
    })
}
let imagesBtn5 = Array.from(document.getElementsByClassName('mini-photo5'));
// console.log(imagesBtn1);
let changephoto5 = document.getElementById('changephoto5');
// console.log(changephoto)
// console.log(hoverImages); 
// console.log(imageBtn)
for(let i=0; i< imagesBtn5.length; i++) {
    imagesBtn5[i].addEventListener("click", (e)=> {
         changephoto5.src = e.target.src
    })
}
let imagesBtn6 = Array.from(document.getElementsByClassName('mini-photo6'));
// console.log(imagesBtn1);
let changephoto6 = document.getElementById('changephoto6');
// console.log(changephoto)
// console.log(hoverImages); 
// console.log(imageBtn)
for(let i=0; i< imagesBtn6.length; i++) {
    imagesBtn6[i].addEventListener("click", (e)=> {
         changephoto6.src = e.target.src
    })
}
let imagesBtn7 = Array.from(document.getElementsByClassName('mini-photo7'));
// console.log(imagesBtn1);
let changephoto7 = document.getElementById('changephoto7');
// console.log(changephoto)
// console.log(hoverImages); 
// console.log(imageBtn)
for(let i=0; i< imagesBtn7.length; i++) {
    imagesBtn7[i].addEventListener("click", (e)=> {
         changephoto7.src = e.target.src
    })
}
