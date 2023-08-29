const SASSO_1 = "A";
const SASSO_2 = "X";

const CARTA_1 = "B";
const CARTA_2 = "Y";

const FORBICI_1 = "C";
const FORBICI_2 = "Z";

const PERDI = "X";
const PAREGGIA = "Y";
const VINCI = "Z";

window.onload = () => {

    let strategy = document.querySelector("pre").innerHTML;
    let rounds = strategy.split("\n");
    let newRules = true;
    let score = 0;
    for (let r of rounds) {

        player = r.split(" ");
        if (!newRules) {
            score += getScore(player[0], player[1]);
        } else {
            score += getScore(player[0], getChoiceToFitNewRules(player[0], player[1]));
        }


    }
    console.log(score);


}


// 1 for rock, 2 for paper, 3 for scissors + 0 if lost, 3 if draw, 6 if won --> prima parte
// X means i lose, y means draw, z means win --> seconda parte

function getScore(player1, player2) {
    let scoreTemp = 0;
    switch (player1) {
        case SASSO_1:
            switch (player2) {
                case SASSO_2:
                    scoreTemp = 1 + 3;
                    break;
                case CARTA_2:
                    scoreTemp = 2 + 6;
                    break;
                case FORBICI_2:
                    scoreTemp = 3 + 0;
                    break;
            }
            break;
        case CARTA_1:
            switch (player2) {
                case SASSO_2:
                    scoreTemp = 1 + 0;
                    break;
                case CARTA_2:
                    scoreTemp = 2 + 3;
                    break;
                case FORBICI_2:
                    scoreTemp = 3 + 6;
                    break;
            }
            break;
        case FORBICI_1:
            switch (player2) {
                case SASSO_2:
                    scoreTemp = 1 + 6;
                    break;
                case CARTA_2:
                    scoreTemp = 2 + 0;
                    break;
                case FORBICI_2:
                    scoreTemp = 3 + 3;
                    break;
            }
            break;
    }

    return scoreTemp;

}

function getChoiceToFitNewRules(player1, player2) {
    switch (player1) {
        case SASSO_1:
            switch (player2) {
                case PERDI:
                    player2 = FORBICI_2;
                    break;
                case PAREGGIA:
                    player2 = SASSO_2;
                    break;
                case VINCI:
                    player2 = CARTA_2;
                    break;
            }
            break;
        case CARTA_1:
            switch (player2) {
                case PERDI:
                    player2 = SASSO_2;
                    break;
                case PAREGGIA:
                    player2 = CARTA_2;
                    break;
                case VINCI:
                    player2 = FORBICI_2;
                    break;
            }
            break;
        case FORBICI_1:
            switch (player2) {
                case PERDI:
                    player2 = CARTA_2;
                    break;
                case PAREGGIA:
                    player2 = FORBICI_2;
                    break;
                case VINCI:
                    player2 = SASSO_2;
                    break;
            }
            break;
    }

    return player2;
}