const piano = document.getElementById('piano')
const lowerTile = document.querySelectorAll(".lowerTile")
const whiteNote = document.querySelectorAll(".whiteNote")
const upperTile = document.querySelectorAll(".upperTile")
const blackNote = document.querySelectorAll(".blackNote")

function notePress(){
    lowerTile.forEach((lTile, i) => {
        lTile.addEventListener('mousedown', function(){
            lowerTile[i].style.transform = " scaleY(1.1) rotateX(30deg) translateY(1px)";
            whiteNote[i].currentTime = 0;
            whiteNote[i].play();
            setTimeout(function(){
            lowerTile[i].style.transform = "scaleY(1) rotateX(0deg) translateY(0px)";
            },200);
        });
    });

    upperTile.forEach((uTile, i) => {
        uTile.addEventListener('mousedown', function(){
            upperTile[i].style.transform = "scale(0.975)";
            blackNote[i].currentTime = 0;
            blackNote[i].play()
            setTimeout(function(){
                upperTile[i].style.transform = "scale(1)";
            },200);
        });
    });
}

notePress()