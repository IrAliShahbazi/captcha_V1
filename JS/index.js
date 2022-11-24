var sh = ["one.png","two.png","three.png"];
var pic;
function photos(){
    var randomnumber = Math.floor(Math.random()*10);
    if(randomnumber > 2){
        randomnumber = 2;
    }
    pic = sh[randomnumber]
    return "FILES/"+sh[randomnumber]
}

function check(number){
    switch (pic){
        case "one.png":
            if (number==123){
                alert("correct")
            }else{
                alert("false")
            }
            break;
        case "two.png":
            if (number==456){
                alert("correct")
            }else{
                alert("false")
            }
            break;
        case "three.png":
            if (number==789){
                alert("correct")
            }else{
                alert("false")
            }
            break;
    }
}
