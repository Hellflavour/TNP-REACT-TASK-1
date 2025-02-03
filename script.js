
var btn = document.querySelector("button")

var arr = ["https://images6.alphacoders.com/127/thumb-1920-1273439.png","https://www.citypng.com/public/uploads/preview/toji-fushiguro-from-jujutsu-kaisen-hd-png-735811696676715ravfofa7e1.png","https://i1.sndcdn.com/artworks-dKDYz0bo2E3m1UC7-mJeVPQ-t500x500.jpg"]

function random(){
    const image = Math.floor(Math.random()*arr.length)
    const x = Math.random()*99
    const y = Math.random()*99
    const rotate = Math.random()*360
    
    return {x,y,rotate,image}
}

    btn.addEventListener("click",()=>{
        
        var {x,y,rotate,image} = random();

        var img = document.createElement("img")
        img.style.position = "absolute";
      

        img.style.height = "300px"
       


        img.style.top = x + "%";
        img.style.left = y + "%";
        img.style.rotate = rotate + "deg";
        img.src = arr[image];


   

        document.body.appendChild(img);
    

    }) 
    

