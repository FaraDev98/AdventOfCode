window.onload = () => {

    let stream = document.querySelector("pre").innerHTML;

    for (let i = 0; i < stream.length; i++) {
        let start = [];
        let index = 14;
        for (let j = i; j < i + index; j++) {
            if (!start.includes(stream[j])) {
                start.push(stream[j]);
            } else {
                break;
            }
        }
        if (start.length == index) {
            console.log(i + index);
            break;
        }
    }
}