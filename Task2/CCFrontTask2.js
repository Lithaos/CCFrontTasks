var runeTable = [];

runeTable[runeTable.length] = {
    name: "El",
    power: 28,
    cantLink: "Ort"
};
runeTable[runeTable.length] = {
    name: "Eld",
    power: 33,
    cantLink: "Sur"
};
runeTable[runeTable.length] = {
    name: "Tir",
    power: 9,
    cantLink: "Eth"
};
runeTable[runeTable.length] = {
    name: "Nef",
    power: 7,
    cantLink: "Ist"
};
runeTable[runeTable.length] = {
    name: "Eth",
    power: 31,
    cantLink: "Tir"
};
runeTable[runeTable.length] = {
    name: "Ith",
    power: 22,
    cantLink: "Pul"
};
runeTable[runeTable.length] = {
    name: "Tal",
    power: 8,
    cantLink: "Io"
};
runeTable[runeTable.length] = {
    name: "Ral",
    power: 25,
    cantLink: "Um"
};
runeTable[runeTable.length] = {
    name: "Ort",
    power: 18,
    cantLink: "El"
};
runeTable[runeTable.length] = {
    name: "Thul",
    power: 13,
    cantLink: "Sol"
};
runeTable[runeTable.length] = {
    name: "Amn",
    power: 6,
    cantLink: "Fal"
};
runeTable[runeTable.length] = {
    name: "Sol",
    power: 10,
    cantLink: "Thul"
};
runeTable[runeTable.length] = {
    name: "Shael",
    power: 17,
    cantLink: "Lem"
};
runeTable[runeTable.length] = {
    name: "Dol",
    power: 11,
    cantLink: "Hel"
};
runeTable[runeTable.length] = {
    name: "Hel",
    power: 12,
    cantLink: "Dol"
};
runeTable[runeTable.length] = {
    name: "Io",
    power: 20,
    cantLink: "Tal"
};
runeTable[runeTable.length] = {
    name: "Lum",
    power: 32,
    cantLink: "Gul"
};
runeTable[runeTable.length] = {
    name: "Ko",
    power: 27,
    cantLink: "Mal"
};
runeTable[runeTable.length] = {
    name: "Fal",
    power: 14,
    cantLink: "Amn"
};
runeTable[runeTable.length] = {
    name: "Lem",
    power: 26,
    cantLink: "Shall"
};
runeTable[runeTable.length] = {
    name: "Pul",
    power: 15,
    cantLink: "Ith"
};
runeTable[runeTable.length] = {
    name: "Um",
    power: 16,
    cantLink: "Ral"
};
runeTable[runeTable.length] = {
    name: "Mal",
    power: 21,
    cantLink: "Ko"
};
runeTable[runeTable.length] = {
    name: "Ist",
    power: 4,
    cantLink: "Nef"
};
runeTable[runeTable.length] = {
    name: "Gul",
    power: 23,
    cantLink: "Lum"
};
runeTable[runeTable.length] = {
    name: "Vex",
    power: 24,
    cantLink: "Ohm"
};
runeTable[runeTable.length] = {
    name: "Ohm",
    power: 1,
    cantLink: "Vex"
};
runeTable[runeTable.length] = {
    name: "Lo",
    power: 2,
    cantLink: "Cham"
};
runeTable[runeTable.length] = {
    name: "Sur",
    power: 30,
    cantLink: "Eld"
};
runeTable[runeTable.length] = {
    name: "Ber",
    power: 3,
    cantLink: ""
};
runeTable[runeTable.length] = {
    name: "Jah",
    power: 5,
    cantLink: "Zod"
};
runeTable[runeTable.length] = {
    name: "Cham",
    power: 29,
    cantLink: "Lo"
};
runeTable[runeTable.length] = {
    name: "Zod",
    power: 19,
    cantLink: "Jah"
};
runeTable.sort(function (a, b) {
    return a.power - b.power
});

var wordTable = [];
    var length = prompt("Enter amount of runes");

    while (length <= 1 || length > runeTable.length) {
        length = prompt("Wrong number! Try again");
    }

function generateRunicWords(length) {

    for (var i = 0; i < 10; i++) {
        if (runeTable.length >= length && wordTable.length < 10) {
            var word = [];
            var tempWord;
            var temp;
            var errors = [];
            var powerOfWord = 0;
            var slowo = "";
            var cantLink = false;


            while (word.length != length) {
                temp = runeTable[runeTable.length - 1];
                runeTable.pop();
                if (word.length == 0) {
                    word.push(temp);
                } else {
                    for (var j = 0; j < word.length; j++) {
                        if (word[j].cantLink != temp.name) {
                            cantLink = false;
                        } else {
                            errors.push(temp);
                            cantLink = true;
                            j = word.length;
                        }
                    }
                    if (!cantLink)
                        word.push(temp);
                }
            }
            if (errors.length >= 1)
                runeTable.push(errors[0]);

            for (var i in word) {
                powerOfWord += word[i].power;
            }
            powerOfWord = powerOfWord - length;
            slowo = word.map(function (elem) {
                return elem.name
            }).join("-");
            tempWord = {
                name: slowo,
                power: powerOfWord
            };

            wordTable.push(tempWord);
            wordTable.sort(function (a, b) {
                return b.power - a.power
            })

        }
    }
    return wordTable;
}




// var runicWord = prompt("Enter runic word: ");

var checkRunicWord = function (runicWord) {
    if (runicWord == "") {
        return "Runic word cant be empty";
        alert("tu1");
    }
    var wordTable = [];
    var allRunes = []
    var runes = runicWord.split("-");
    var power = 0;
    var powerOfFirst = 0;
    var exist = false;
    for (var i = 0; i < runes.length; i++) {
        for (var j = 0; j < runeTable.length; j++) {
            if (runeTable[j].name.toLowerCase() == runes[i].toLowerCase()) {
                exist = true;

                allRunes.push(runeTable[j]);
                power += runeTable[j].power;
                break;
            } else {
                exist = false;
            }

        }
        if (!exist) {
            console.log(runeTable);
            alert("tu2");
            alert(runeTable[j].name.toLowerCase() + " " + runes[i].toLowerCase())
            return ("This runic word is uncorrect!");
        }
    }
    for (var i = 0; i < allRunes.length; i++) {
        exist = false;
        for (var j = 0; j < allRunes.length; j++) {
            if (allRunes[j].cantLink == allRunes[i].name) {
                exist = true;
            }
            if (exist) {
                alert("tu3");
                return ("This runic word is uncorrect!");
            }

        }
    }
    for (var i = 0; i < allRunes.length; i++) {
        if (i == 0) {
            powerOfFirst = allRunes[i].power;
        }
        if (powerOfFirst < allRunes[i].power) {
            alert("t4");
            return ("This runic word is uncorrect!");
        }
    }
    wordTable = {
        name: runicWord,
        powerOfWord: power
    }

    return wordTable.powerOfWord;
}
