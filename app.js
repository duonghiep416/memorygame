const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const itemBox = $$(".item-box");
const fadeout = $(".box-hide.fade-out");
const reset = $(".reset");
const yourScore = $(".score span");
let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8];
let randomArr;
let itemClicked = [];
let numerClicked = 0;
let score = 0;
let isComparing = false;

function random() {
    randomArr = arrNumber.concat(arrNumber).sort(() => 0.5 - Math.random());
}
random();
function assignItem() {
    itemBox.forEach(function (item, i) {
        yourScore.innerHTML = score;
        const image = item.querySelector("img");
        const boxHide = item.querySelector(".box-hide");
        image.setAttribute("src", `./images/img-${randomArr[i]}.jpg`);
        item.onclick = function () {
            if (isComparing || boxHide.classList.contains("fade-out")) {
                return; // already clicked
            }
            boxHide.classList.add("fade-out");
            itemClicked.push(item);
            numerClicked++;
            if (itemClicked.length % 2 === 0) {
                if (
                    itemClicked
                        .at(-1)
                        .querySelector("img")
                        .getAttribute("src") !==
                    itemClicked.at(-2).querySelector("img").getAttribute("src")
                ) {
                    isComparing = true;
                    setTimeout(() => {
                        itemClicked
                            .at(-1)
                            .querySelector(".box-hide")
                            .classList.remove("fade-out");
                        itemClicked
                            .at(-2)
                            .querySelector(".box-hide")
                            .classList.remove("fade-out");
                        isComparing = false;
                    }, 800);
                } else {
                    score += 10;
                    yourScore.innerHTML = score;
                }
            }
        };
    });
}

assignItem();

function refresh() {
    reset.onclick = function () {
        score = 0;
        random();
        assignItem();

        itemClicked.forEach(function (clickedItem) {
            clickedItem.querySelector(".box-hide").classList.remove("fade-out");
        });
        itemClicked = [];
    };
}

refresh();
