

var gender = "female";

const pricingRowUpperlip = document.querySelector(".pricing-row.upper-lip");
const pricingRowLowerLip = document.querySelector(".pricing-row.lower-lip");
const pricingRowCheeks = document.querySelector(".pricing-row.cheeks");
const pricingRowChin = document.querySelector(".pricing-row.chin ");
const pricingRowChinNeck = document.querySelector(".pricing-row.chin-neck");
const pricingRowNeck = document.querySelector(".pricing-row.neck");
const pricingRowEars = document.querySelector(".pricing-row.ears");
const pricingEyebrows = document.querySelector(".pricing-row.eye-brows");
const pricingEyebrowsBetween = document.querySelector(".pricing-row.eye-brows-between");
const pricingSideburns = document.querySelector(".pricing-row.side-burns");
const pricingForehead = document.querySelector(".pricing-row.forehead");
const pricingNose = document.querySelector(".pricing-row.nose");
const pricingTemples = document.querySelector(".pricing-row.temples");
const pricingFullFace = document.querySelector(".pricing-row.full-face");

window.onload = function fn() {
    pricingRowUpperlip.addEventListener('mouseover', (event) => { highlightPart("Upperlip"); });
    pricingRowLowerLip.addEventListener('mouseover', (event) => { highlightPart("BottomLip"); });
    pricingRowCheeks.addEventListener('mouseover', (event) => { highlightPart("Cheeks"); });
    pricingRowChin.addEventListener('mouseover', (event) => { highlightPart("Chin"); });
    pricingRowChinNeck.addEventListener('mouseover', (event) => { highlightPart("Chin&neck"); });
    pricingRowNeck.addEventListener('mouseover', (event) => { highlightPart("Neck"); });
    pricingRowEars.addEventListener('mouseover', (event) => { highlightPart("Ears"); });
    pricingEyebrows.addEventListener('mouseover', (event) => { highlightPart("Eyebrows"); });
    pricingEyebrowsBetween.addEventListener('mouseover', (event) => { highlightPart("EyebrowsBetween"); });
    pricingSideburns.addEventListener('mouseover', (event) => { highlightPart("Sideburns"); });
    pricingForehead.addEventListener('mouseover', (event) => { highlightPart("Forehead"); });
    pricingNose.addEventListener('mouseover', (event) => { highlightPart("Nose"); });
    pricingTemples.addEventListener('mouseover', (event) => { highlightPart("Temples"); });
    pricingFullFace.addEventListener('mouseover', (event) => { highlightPart("Full-Face"); });
}


var activePricingList;
var allPricingLists = document.querySelectorAll('.pricing-list');

function HideAllPricingLists() {
    allPricingLists.forEach(entry => {

        entry.style.display = 'none';
    });
}

function HideActivePricingList(callback) {


    if (activePricingList == null) {
        //no active pricing list
        callback();
        return;
    }
    else {

        activePricingList.classList.remove('active');

        let timeout = setTimeout(() => {
            activePricingList.style.display = 'none'
            let innerTimeout = setTimeout(() => {


                callback();
            }, 150);

        }, 150);
    }
}
ShowPricingList("head");

function ShowPricingList(listType) {


    var pricingListToShow = document.querySelector('.pricing-list-' + listType);

    if (pricingListToShow == null) return;


    if (activePricingList != null) {
        if (pricingListToShow != activePricingList)
            HideActivePricingList(() => {
                activePricingList = pricingListToShow;
                activePricingList.style.display = 'block';
                let timeout = setTimeout(() => {
                    activePricingList.classList.add('active');
                }, 1);

            });
    }
    else {
        activePricingList = pricingListToShow;
        activePricingList.style.display = 'block';

        let timeout = setTimeout(() => {
            activePricingList.classList.add('active');
        }, 1);

    }

}

const faceHighlightImage = document.getElementById("face-image");

function changePrices(gender) {
    const allFemalePrices = document.querySelectorAll(".female-price");
    const allMalePrices = document.querySelectorAll(".male-price");

    if (gender == 'male') {
        var i = 0, flen = allFemalePrices.length;
        while (i < flen) {
            // your code
            allFemalePrices[i].style.display = 'none';
            i++
        }

        var i = 0, mlen = allMalePrices.length;
        while (i < mlen) {
            // your code
            allMalePrices[i].style.display = 'block';
            i++
        }

    }
    else if (gender == 'female') {
        var i = 0, flen = allFemalePrices.length;
        while (i < flen) {
            // your code
            allFemalePrices[i].style.display = 'block';
            i++
        }

        var i = 0, mlen = allMalePrices.length;
        while (i < mlen) {
            // your code
            allMalePrices[i].style.display = 'none';
            i++
        }
    }






    console.log(allFemalePrices);

}


function changeGender(g) {
    gender = g;
    if (g == "male")
        faceHighlightImage.src = "assets/models/male/ManNormal.png";
    else if (g == "female")
        faceHighlightImage.src = "assets/models/female/Female.webp";

    changePrices(g);
}

function highlightPart(part) {
    faceHighlightImage.src = "assets/models/" + gender + "/" + part + ".webp";
}   

