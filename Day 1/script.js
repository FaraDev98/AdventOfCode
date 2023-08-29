window.onload = () => {

    let elves = document.querySelector("pre").innerHTML;

    let caloriesTot = elves.split("\n");
    let elvesCalories = [];
    let sum = 0;
    for (let c of caloriesTot) {
        c = c.trim();
        if (c != "") {
            sum += +c;
            continue;
        }
        elvesCalories.push(sum);
        sum = 0;
    }

    elvesCalories.sort((a, b) => a - b);
    elvesCalories.reverse();

    sum = 0;
    for (i = 0; i < 3; i++) {
        sum += elvesCalories[i];
    }
    console.log("Amount of calories of the first elf: " + elvesCalories[0]);
    console.log("total Amount of calories for the three top elves: " + sum);
}