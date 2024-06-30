const images = [
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1719530910223-80eee3e889cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://media.istockphoto.com/id/517150337/photo/path-by-the-lake.jpg?s=1024x1024&w=is&k=20&c=6ZbuYC6c6kadS0ioQNCpo_BBFC4gcdHJbLhU5UJitds=',
    'https://media.istockphoto.com/id/1534040386/photo/an-outdoor-bamboo-gazebo-nestled-amidst-lush-greenery-offering-serene-relaxation-after-a.jpg?s=1024x1024&w=is&k=20&c=puHgSbTQpBTWvqIBd69gDXvBgDwpor6-fdYJoU0Hihc=',
    'https://media.istockphoto.com/id/1353340042/photo/false-shamrock-flowers.jpg?s=1024x1024&w=is&k=20&c=b_jJh56fc8xURa9n4zdutZgnywf5U9djyrMkdQ6P1pQ=',
    'https://images.unsplash.com/photo-1580193813605-a5c78b4ee01a?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1458693416646-07f13b1a3159?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

];

const n = images.length;
const flexContainer = document.getElementById('flex-container');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');
const carouselnav = document.getElementById('carousel-nav');



const containerWidth = 40;
const flexContainerWidth = n * containerWidth;
flexContainer.style.width = flexContainerWidth;





for (let i = 0; i < n; i++) {
    const newImg = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add("img-style");
    flexContainer.appendChild(newImg);

    const dotDiv=document.createElement('div');
    dotDiv.classList.add('carousel-dot');
    carouselnav.appendChild(dotDiv);
    dotDiv.addEventListener('click',(event)=>{
     const index= [...carouselnav.children].indexOf(event.target);
     console.log(index);
     curPosition=index;
     showImg()
    })
}

let curPosition = 0;
leftButton.addEventListener("click", () => {
    if (curPosition > 0) {
        curPosition--;
    
    }
    else{
        curPosition=n-1;
    }
    showImg()
})
rightButton.addEventListener("click", () => {
    if (curPosition < n - 1) {
        curPosition++;
        
    }
    else{
        curPosition=0;
    }
    showImg()
})

function showImg() {
    const translateXDistance = -curPosition * containerWidth;
 
    flexContainer.style.transform = `translateX(${translateXDistance}vw)`;
}


