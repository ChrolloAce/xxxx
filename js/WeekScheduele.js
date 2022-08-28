
// execute script after page load
var d = new Date();


var weekScheduele;
weekScheduele =
    [
        { name: "mon", openingTime: "10am", closingTime: "6pm", },
        { name: "tue", openingTime: "10am", closingTime: "6pm", },
        { name: "wed", openingTime: "10am", closingTime: "6pm", },
        { name: "thu", openingTime: "10am", closingTime: "6pm", },
        { name: "fri", openingTime: "10am", closingTime: "6pm", },
        { name: "sat", openingTime: "10am", closingTime: "6pm", },
        { name: "sun", openingTime: "10am", closingTime: "3pm", },
    ]


    document.addEventListener('DOMContentLoaded', (event) => {
        //Update current date
    switch (d.getDay()) {
        case 0:
            highlightDate('.sunday');
            // code block
            break;
        case 1:
            highlightDate('.monday');
            // code block
            break;
        case 2:
            highlightDate('.tuesday');
            // code block
            break;
        case 3:
            highlightDate('.wednesday');
            // code block
            break;
        case 4:
            highlightDate('.thursday');
            // code block
            break;
        case 5:
            highlightDate('.friday');
            // code block
            break;
        case 6:
            highlightDate('.saturday');
            // code block
            break;
        default:
        // code block
    }

    })


    
function highlightDate(date) {
    let dateRow = document.querySelector(date);
    let informativeDate = document.querySelector('.contact-opening-text');

    let ampmTime = d.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");

    
    if (ampmTime.slice(-2).toLowerCase() == "pm") {
        if (ampmTime >= "6") {
            if(d.getDay() == weekScheduele[d.getDay()].closingTime)
            {
                informativeDate.innerHTML = "We open tommorow at " + weekScheduele[0].openingTime;  
            }
            else
            informativeDate.innerHTML = "We open tommorow at " + weekScheduele[d.getDay() + 1].openingTime; 
        }
        else if(ampmTime <  weekScheduele[d.getDay()].closingTime)
        {
            informativeDate.innerHTML = "We close today at " + weekScheduele[d.getDay()].closingTime; 
        }
    }
    else {


        if (parseInt(ampmTime) < 10) {
            informativeDate.innerHTML = "We open today at " + weekScheduele[d.getDay()].openingTime; 
        }
        else if (parseInt(ampmTime) >= 10)
        {
            informativeDate.innerHTML = "We close today at " + weekScheduele[d.getDay()].closingTime; 
        }
    }

    dateRow.classList.toggle('highlighted-date-row');

}

    
    