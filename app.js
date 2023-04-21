const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const itemBox = $$(".item-box");
const fadeout = $(".box-hide.fade-out");
let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8];
let randomArr = arrNumber.concat(arrNumber).sort(() => 0.5 - Math.random());
let itemClicked = [];
function assignItem() {
    itemBox.forEach(function (item, i) {
        const image = item.querySelector("img");
        const boxHide = item.querySelector(".box-hide");
        image.setAttribute("src", `./images/img-${randomArr[i]}.jpg`);
        item.onclick = function () {
            if (boxHide.classList.contains("fade-out")) {
                return; // already clicked
            }
            boxHide.classList.add("fade-out");
            itemClicked.push(item);
            if (itemClicked.length === 2) {
                // check if two items have been clicked
                console.log(
                    itemClicked[0].querySelector("img").getAttribute("src") ===
                        itemClicked[1].querySelector("img").getAttribute("src")
                );
                setTimeout(() => {
                    itemClicked.forEach((clickedItem) => {
                        clickedItem
                            .querySelector(".box-hide")
                            .classList.remove("fade-out");
                    });
                    itemClicked = [];
                }, 800);
            }
        };
    });
}

assignItem();
