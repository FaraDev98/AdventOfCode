window.onload = () => {

    let initList = document.querySelector("pre").innerHTML;
    let pairs = initList.split("\n");
    let fullyContainedIDs = 0;
    let overlappingIDs = 0;
    let sideRange1 = [];
    let sideRange2 = [];
    for(let p of pairs) {
        let sides = p.split(",");
        sideRange1 = getSidesRange(sides[0]);
        sideRange2 = getSidesRange(sides[1]);
        
        for(s of sideRange2) {
            if(sideRange1.find(s1 => s1 == s) != undefined) {
                console.log("side1: " + sideRange1 + "\n" + "side2: " + sideRange2);
                overlappingIDs ++;
                break;           
            }             
        }
    }
    console.log(overlappingIDs);
    
}

function getSidesRange(side) {
    let sideRange = [];
    let ranges = side.split("-");  
    for(i = +ranges[0]; i <= +ranges[1]; i++) {
        sideRange.push(i);        
    }
    return sideRange;
}