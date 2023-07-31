let animationIndex = 0;
let interval = 0;

function startAnimation() {

    let animationIndex = document.getElementById('animation').selectedIndex;
    if(animationIndex === 0) {
        return;
    }
    let animation = document.getElementById('animation').options[animationIndex].text;
    let animationStep = 0;

    let animArray = ANIMATIONS[animation].split("=====\n");
    
    console.log(animArray.length);

    interval = setInterval(function() {
        document.getElementById("text-area").value = animArray[animationStep];
        animationStep = (animationStep == animArray.length) ? 0 : animationStep + 1;
    }, 250);

    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
}

function stop() {
    clearInterval(interval);

    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;

    document.getElementById("text-area").value = "";
}