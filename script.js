const advil = document.querySelector('.advil');
const tylenol = document.querySelector('.tylenol');
let weight = document.querySelector("#weight");

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
    document.querySelectorAll('.img').forEach((e) => {e.style.display = "none";});
    document.querySelector('label[for="weight"]').style.display = "none";
    document.querySelector('#weight').value = '';
    document.querySelectorAll('input[name="med"').forEach((e) => {e.checked = false;})
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
        document.querySelector('#result').innerHTML = "";
        selectMed();
    });
});

// function for med selection
function selectMed() {
    document.querySelector('.wt-title').style.display = "initial";
    let med = document.querySelector('input[name="med"]:checked').value
    document.querySelectorAll('.img').forEach((e) => {e.style.display = "none";});
    document.querySelector('button').style.display = "none";
    document.querySelector('label[for="weight"]').style.display = "initial";
    document.querySelector('#weight').value = '';
}

//weight input
weight.addEventListener('input', calc)

// function to calculate input and show result
function calc(){
    document.querySelector('#result').innerHTML = "";
    document.querySelector('button').style.display = "initial";
    document.querySelectorAll('.img').forEach((e) => {e.style.display = "none";});
    let medType = document.querySelector('input[name="med"]:checked').value;
    let wt = weight.value;
    let mg, tablet = "";

    if (medType == "tylenol"){
        if (wt >= 5 && wt <11){
            mg = "81.25";
            tablet = "1/4알"
        }
        else if (wt <= 11){
            mg = "162.5";
            tablet = "반알(1/2)";
        }
        else if (wt <= 16){
            mg = "243.75";
            tablet = "3/4알";
        }
        else if (wt <= 22){
            mg = "325";
            tablet = "한알";
        }
        else if (wt <= 33){
            mg = "487.5";
            tablet = "한알 반";
        }
        else {
            mg = "650";
            tablet = "두알";
        }
        
        if (wt < 5){
            document.querySelector('#result').innerHTML = "체중 5KG 이하인 경우 먼저 의사와 상담하세요."
        }
        else {
            document.querySelector('#result').innerHTML = "일반 타이레놀 " + tablet + 
            " tablet (" + mg + "mg) " + "을 4시간마다 주세요(하루 최대 5번)."
        }
    }

    else if (medType == "advil"){
        if (wt >= 5 && wt <10){
            mg = "50";
            tablet = "1/4알"
        }
        else if (wt <= 10){
            mg = "100"
            tablet = "반알(1/2)";
        }
        else if (wt <= 20){
            mg = "200"
            tablet = "한알"
        }
        else if (wt <= 30){
            mg = "300"
            tablet = "한알 반"
        }
        else {
            mg = "400"
            tablet = "두알"
        }
        if (wt < 5){
            document.querySelector('#result').innerHTML = "체중 5KG 이하인 경우 먼저 의사와 상담하세요."
        }
        else {
            document.querySelector('#result').innerHTML = "일반 애드빌 " + tablet + 
            " tablet (" + mg + "mg) " + "을 6시간마다 주세요."
        }
    }

    else{
        console.log("error calculating dose")
    }

    if (tablet == "1/4알"){
        document.querySelector('.img-qtr').style.display = "block";
    }
    else if (tablet == "반알(1/2)"){
        document.querySelector('.img-half').style.display = "block";
    }
    else if (tablet == "3/4알"){
        document.querySelector('.img-threeqtr').style.display = "block";
    }
    else if (tablet == "한알"){
        document.querySelector('.img-one').style.display = "block";
    }
    else if (tablet == "한알 반"){
        document.querySelector('.img-onehalf').style.display = "block";
    }
    else if (tablet == "두알"){
        document.querySelector('.img-two').style.display = "block";
    }
    else {
        console.log("error showing image");
    }
}

// event listner for reset button
document.querySelector("button").addEventListener('click', function(){
    document.querySelector('#result').innerHTML = "";
    document.querySelector('.wt-title').style.display = "none";
    document.querySelector('.med-title').style.display = "none";
    document.querySelectorAll('input').forEach((e) => {e.checked = false;});
    document.querySelector('button').style.display = "none";
    document.querySelectorAll('.img').forEach((e) => {e.style.display = "none";});
    document.querySelector('label[for="weight"]').style.display = "none";
    document.querySelector('#weight').value = '';
    tylenol.style.display = "none";
    advil.style.display = "none";
})

//learning point - try to use reset as function? 

//disable right click
window.addEventListener('contextmenu', function (e) { 
    e.preventDefault(); 
  }, false);