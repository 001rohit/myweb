const arrows =document.querySelectorAll('.arrow');
const movieList =document.querySelectorAll('.movie-list');

arrows.forEach((arrow,i)=>{
    const itemNumber= movieList[i].querySelectorAll("img").length;
    let clickCounter = 0; 
    arrow.addEventListener("click", ()=>{
        clickCounter++;
        if(itemNumber-(3 + clickCounter) >= 0){
            movieList[i].style.transform = `translateX(${
                movieList[i].computedStyleMap().get("transform")[0].x.value - 270
                }px)`;
        }
       else{
        movieList[i].style.transform="translateX(0)";
        clickCounter = 0;
       }
    });
    console.log(window.innerWidth);      

    //console.log(movieList[i].querySelectorAll("img").length);
});
//toggle
const ball=document.querySelector(".toggle");
const item=document.querySelectorAll(".main-content,.movie-list-title,.movie-list-wrapper,.navbar,.menu-list-item,.sidebar,.left-menu-icon,.toggle,.profile-container,.tongel-bail,.arrow,active1"

  );
ball.addEventListener("click",()=>{
    item.forEach(item=>{
        item.classList.toggle("active");
    })
})
