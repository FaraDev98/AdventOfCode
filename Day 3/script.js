window.onload = () => {

    let initString = document.querySelector("pre").innerHTML;
    let rucksacks = initString.split("\n");
    let prioritySum = 0;

    for (let r of rucksacks) {
        r = r.trim();
        getPriority(r);
        prioritySum += getPriority(r);
    }
    console.log(prioritySum);

}

function getPriority(rucksack) {
    let compartments = [];
    let c = "";
    let indexSeparator = 0;
    for (i = 0; i < rucksack.length; i++) {

        if (i < (rucksack.length - 1) / 2) {
            c += rucksack[i];
        } else {
            indexSeparator = i;
            compartments.push(c);
            break;
        }
    }
    compartments.push(rucksack.substring(indexSeparator));

    let sum = 0

    for (i = 0; i < compartments[0].length; i++) {

        if (compartments[0].includes(compartments[0][i]) && compartments[1].includes(compartments[0][i])) {

            if (compartments[0].charCodeAt(i) < 97) {
                sum += compartments[0].charCodeAt(i) - 64 + 26;
            } else {
                sum += compartments[0].charCodeAt(i) - 96;
            }
            break;
        }

    }

    return sum;
}