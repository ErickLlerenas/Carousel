i=0;
clicked = false;
function rotateRight(){
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
        clicked = false
        startRotation()
    },3000)
}

function rotateLeft(){
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

function startRotation(){
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
        if(!clicked)
        startRotation()
    },3000)  
}


setTimeout(()=>{
    if(!clicked)
    startRotation()
},3000)
