const advil = document.querySelector('.advil')
const tylenol = document.querySelector('.tylenol')
const wtAdvil = document.querySelector('#advil-wt')
const wtTylenol = document.querySelector('#tylenol-wt')

// eventlistener when age is selected.
document.querySelectorAll('input[name="age"]').forEach((elem)=>{
    elem.addEventListener('change',function(){
        document.querySelector('#result').innerHTML = "";
        document.querySelector('.med-title').style.display = "none";
        tylenol.style.display = "none";
        advil.style.display = "none";
        selectAge();
    });
});

// when age is selected. 
function selectAge() {
    let age = document.querySelector('input[name="age"]:checked').value
    document.querySelector('button').style.display = "none";
    document.querySelector('.wt-title').style.display = "none";    
    document.querySelectorAll('select').forEach((e) => {
        e.selectedIndex = 0;
        e.style.display = "none";
    })
    document.querySelector('img').style.display = "none";
    if (age == "under3"){
        document.querySelector('#result').innerHTML = "3개월 이하 아기가 열이 있다면 응급실로 데려가세요.";
        
    }
    else if (age == "under6"){
        document.querySelector('.med-title').style.display = "initial";
        tylenol.style.display = "initial";
    }
    else{
        document.querySelector('.med-title').style.display = "initial";
        tylenol.style.display = "initial";
        advil.style.display = "initial";
    }
}


// eventlistner for med selection
document.querySelectorAll('input[name="med"]').forEach((elem)=>{
    elem.addEventListener('change',function(){
        document.querySelector('.wt-title').style.display = "none";
        wtTylenol.style.display = "none";
        wtAdvil.style.display = "none";
        document.querySelector('#result').innerHTML = "";
        selectMed();
    });
});

// function for med selection
function selectMed() {
    document.querySelector('.wt-title').style.display = "initial";
    let med = document.querySelector('input[name="med"]:checked').value
    document.querySelector('img').style.display = "none";
    document.querySelector('button').style.display = "none";
    document.querySelectorAll('select').forEach((e) => {
        e.selectedIndex = 0;
        e.style.display = "none";
    })
    if (med == "tylenol"){
        wtTylenol.style.display = "initial";
    }
    else {
        wtAdvil.style.display = "initial";
    }
}


// eventlistner for tylenol wt selection
document.querySelector('#tylenol-wt').addEventListener('change',function(){
    document.querySelector('#result').innerHTML = "";
    document.querySelector('button').style.display = "initial";
    document.querySelector('img').style.display = "block";
    calcTylenol();
});

// function for tylenol calculation.
function calcTylenol() {
    let wt = document.querySelector('#tylenol-wt').value
    let mg = ""
    let tablet = ""
    if (wt == "11"){
        mg = "162.5"
        tablet = "반알(1/2)";
    }
    else if (wt == "16"){
        mg = "243.75"
        tablet = "3/4알"
    }
    else if (wt == "22"){
        mg = "325"
        tablet = "한알"
    }
    else if (wt == "33"){
        mg = "487.5"
        tablet = "한알 반"
    }
    else {
        mg = "650"
        tablet = "두알"
    }
    document.querySelector('#result').innerHTML = "타이레놀 " + tablet + 
    " tablet (" + mg + "mg) " + "을 4시간마다 주세요(하루 최대 5알)."
}



// eventlistner for advil wt selection
document.querySelector('#advil-wt').addEventListener('change',function(){
    document.querySelector('#result').innerHTML = "";
    document.querySelector('button').style.display = "initial";
    document.querySelector('img').style.display = "block";
    calcAdvil();
});

// function for advil calculation.
function calcAdvil() {
    let wt = document.querySelector('#advil-wt').value
    let mg = ""
    let tablet = ""
    if (wt == "10"){
        mg = "100"
        tablet = "반알(1/2)";
    }
    else if (wt == "20"){
        mg = "200"
        tablet = "한알"
    }
    else if (wt == "30"){
        mg = "300"
        tablet = "한알 반"
    }
    else {
        mg = "400"
        tablet = "두알"
    }
    document.querySelector('#result').innerHTML = "애드빌 " + tablet + 
    " tablet (" + mg + "mg) " + "을 6시간마다 주세요."
}


// event listner for reset button
document.querySelector("button").addEventListener('click', function(){
    document.querySelector('#result').innerHTML = "";
    document.querySelector('.wt-title').style.display = "none";
    document.querySelector('.med-title').style.display = "none";
    document.querySelectorAll('select').forEach((e) => {
        e.selectedIndex = 0;
        e.style.display = "none";
    })
    document.querySelectorAll('input').forEach((e) => {e.checked = false;})
    document.querySelector('button').style.display = "none";
    document.querySelector('img').style.display = "none";
    tylenol.style.display = "none";
    advil.style.display = "none";
})

//learning point - try to use reset as function? 