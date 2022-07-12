/**var maths;
var physics;
var chem;
var bio;
var comp;
var total=0;
var perc=0;*/
let res=0;
let perc=0;
function getresult() {
    let maths = document.getElementById("maths").value;
    //alert(maths)
    let phy= document.getElementById("phy").value;
    //alert(phy)
    let chem = document.getElementById("chem").value;
    //alert(chem)
    let bio = document.getElementById("bio").value;
    //alert(bio)
    let comp = document.getElementById("comp").value;
    //alert(comp)
    res=parseInt(maths)+parseInt(phy)+parseInt(chem)+parseInt(bio)+parseInt(comp);
    console.log(res)
    perc=(res/500)*100
    console.log(perc)
    if(perc>80){
        let g="A";
        document.getElementById("getoo").innerHTML= `<h1>your total marks=${res} and your pecentage=${perc}%
                            your grade is=${g}</h1>`;

    }   
    else if(perc>60 && perc<80){
        let g="B";
        document.getElementById("getoo").innerHTML= `<h1>your total marks=${res} and your pecentage=${perc}%
                            your grade is=${g}</h1>`;

    }
    else if(perc>40 && perc<60){
        let g="C";
        document.getElementById("getoo").innerHTML= `<h1>your total marks=${res} and your pecentage=${perc}%
                            your grade is=${g}</h1>`;
    }
    else{
        let g="FAIL";
        document.getElementById("getoo").innerHTML= `<h1>your total marks=${res} and your pecentage=${perc}%
                            your grade is=${g}</h1>`;
    }

    
    
}