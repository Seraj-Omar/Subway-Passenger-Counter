let count=0
let x=0
let countPs=document.getElementById("count-ps")
let countEn=document.getElementById("count-en")

function increment(){
    count++
    countPs.innerText=count
}

function save(){
    if(count!=0){
        if(x!=0){
            countEn.innerText+=" -"
        }
        countEn.innerText+=" "+count
        x=1
        count=0
        countPs.innerText=0
    }
}
