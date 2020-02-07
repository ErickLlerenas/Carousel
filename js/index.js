i=0;
clicked = false;
rotation = true; //true = right ... false = left
countR = 0;
countL = 0;

function rotateRight(){
    rotation = true;
    var n = document.getElementById("carousel").childElementCount;
    if(i==n) i=0;
    i++;
    document.getElementById(`${i}`).classList.add("not-selected")
    if(i!=n)
    document.getElementById(`${i+1}`).classList.remove("not-selected")
    else{
        i=0;
        document.getElementById(`${i+1}`).classList.remove("not-selected")
    }

    clicked = true
    setTimeout(()=>{
        countR++;
        clicked = false
        if(countR<2)
        startRotationRight()
    },3000)
}

function rotateLeft(){
    rotation = false;
    var n = document.getElementById("carousel").childElementCount;
    if(i==0)
    i=n
    if(i!=n)
    document.getElementById(`${i+1}`).classList.add("not-selected")
    else{
        document.getElementById(`1`).classList.add("not-selected")
    }
    document.getElementById(`${i}`).classList.remove("not-selected")
    if(i!=0)
    i--;
    clicked = true
    setTimeout(()=>{
        countL++;
        clicked = false
        console.log(countL)
        if(countL<2)
        startRotationLeft()
    },3000)
}

function startRotationRight(){
    rotation = true;
    if(rotation){
        var n = document.getElementById("carousel").childElementCount;
    if(i==n) i=0;
    i++;
    document.getElementById(`${i}`).classList.add("not-selected")
    if(i!=n)
    document.getElementById(`${i+1}`).classList.remove("not-selected")
    else{
        i=0;
        document.getElementById(`${i+1}`).classList.remove("not-selected")
    }
    setTimeout(()=>{
        if(!clicked){
            startRotationRight()
            countR = 0;
        }
        
    },3000)  
    }
}
function startRotationLeft(){
    rotation = false;
    if(!rotation){
        var n = document.getElementById("carousel").childElementCount;
    if(i==0)
    i=n
    if(i!=n)
    document.getElementById(`${i+1}`).classList.add("not-selected")
    else{
        document.getElementById(`1`).classList.add("not-selected")
    }
    document.getElementById(`${i}`).classList.remove("not-selected")
    if(i!=0)
    i--;
    }
    setTimeout(()=>{
        if(!clicked){
            startRotationLeft()
            countL = 0;
        }
    },3000)  
}

setTimeout(()=>{
    if(!clicked)
    startRotationRight()
},3000)
