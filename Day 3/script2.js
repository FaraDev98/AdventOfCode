window.onload = () => {

    let initString = document.querySelector("pre").innerHTML;
    let rucksacks = initString.split("\n");
    let priority = 0;
    priority = getPriorities(rucksacks);
    console.log(priority);
}

function getPriorities(r) {
    let prior = 0;
    for (i = 0; i < r.length - 3; i += 3) {
        for (j = 0; j < r[i].length; j++) {
            if (r[i].trim().includes(r[i][j]) && r[i + 1].trim().includes(r[i][j]) && r[i + 2].trim().includes(r[i][j])) {
                if (r[i].charCodeAt(j) < 97) {
                    prior += r[i].charCodeAt(j) - 64 + 26;
                } else {
                    prior += r[i].charCodeAt(j) - 96;
                }
                break;
            }
        }

    }
    return prior;
}