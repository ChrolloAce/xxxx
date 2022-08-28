

var reviews = [];
reviews = [
    { name: "Quinyetta B", review: "Everytime i go to wax spa gisele does a fantastic job and makes you feel so comfortable and relax. The staff are very professional and friendly. Thanx Giselle 😊" },
    { name: "Serena Troise", review: "I love Wax Spa! The staff is super professional. Boris is very precise and attentive to customer needs. I have been waxing with Carolina for years, she is very kind, gentle and professional. Always do an amazing job. The spa is extremely clean and beautiful! They are ALWAYS on time. I never had to wait 1 minute for my appointment their app management is on point! Highly recommended." },
    { name: "Keith Holmes", review: "Every time I go there the staff is always friendly and professional. Plus the service is top notch. I always leave completely satisfied with the service that I received while being there. I would highly recommend going there to anyone" },

];

var thropies = [];
trophies =
    [
        { name: "Providing greatness since", startingValue: 2022, finalValue: 2006, extra: "" },
        { name: "Happy clients", startingValue: 0, finalValue: 20000, extra: "+" },
        { name: "Product quality", startingValue: 0, finalValue: 100, extra: "%" }
    ]


 document.addEventListener('DOMContentLoaded', (event) => {
    console.log("active");
    //UpdateTrophyStat();

   
        const throphyOne = document.querySelector(".happy-clients");
        const throphyTwo = document.querySelector(".product-quality");
        const throphyThree = document.querySelector(".pgs");

        const counterObserverSection = document.querySelector(".agency-area");

        const counterObserverOptions = {

            rootMargin: "0px 0px -450px 0px"
        };

        const counterObserver = new IntersectionObserver(function (
            entries,
            counterObserver
        ) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry.target);
                    animateValue(throphyOne, 0, 20000, 1000, () => {
                        throphyOne.innerHTML = throphyOne.innerHTML + '+';
                    });



                    animateValue(throphyTwo, 0, 100, 1300, () => {
                        throphyTwo.innerHTML = throphyTwo.innerHTML + '%';
                    });


                    animateValue(throphyThree, 2022, 2006, 1500, () => { });




                } else {
                    console.log('not intersectiong');
                }
            });
        },
            counterObserverOptions);

        counterObserver.observe(counterObserverSection);





    // mansonry js
    let grid = document.querySelector("#site-main .recent-work-area .images-flex");

    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 100,
        fitWidth: true,
    })


});


///////////////////////////////////////////////UTILITY FUNCTIONS////////////////////////////////////////
function randomArrayIndex(arr, previous = -1) {
    let num = Math.floor(Math.random() * arr.length);


    if (previous != -1) {
        if (num == previous) {
            return randomArrayIndex(arr, previous);
        }
        else {
            return num;
        }
    }
    else {
        return num;
    }

}

function animateValue(obj, start, end, duration, callbackFunction = null) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
        else {
            if (callbackFunction != null)
                callbackFunction();
        }
    };

    window.requestAnimationFrame(step);
}
  /////////////////////////////////////////////UTILITY FUNCTIONS////////////////////////////////////////



  



