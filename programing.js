
//  libary function akhne theke function ke call kore kore bibinno jagay kaj kora oice //

//  all input er valu newya occe//
function allinputvalue(id) {
    let inputvalue = document.getElementById(id).value;
    return inputvalue;
}

//  all input er innertext newya occe//

function alltextvalue(id) {
    let inputtext = document.getElementById(id).innerText;
    return inputtext;
}

// ...........................//



//  first card er javascript//

document.getElementById("noakhali-button").addEventListener("click", function () {
    //  akhne history part er jonno element crete kora occe//
    let noakhaliinput = allinputvalue("noakhali-input");
    let historyvalue = document.getElementById("history-part");
    let noakhalititle = alltextvalue("noakhali-title");
    let div = document.createElement("div");
    div.innerHTML = `
             <div class = "w-11/12 2xl:w-8/12 m-auto">
                <div class="border border-b-1 sm:mt-10 mt-6 mb-8 sm:py-8 py-3 sm:px-8 px-2 rounded-xl">
                    <h1 class="font-bold sm:text-2xl text-xl text-black">${noakhaliinput} Taka is ${noakhalititle}</h1>
                    <p class="pt-3"> Date: ${new Date().toString()}</p>
                </div>
            </div>
        `
    //  input er tupe validation kora occe//

    let inputvalue = allinputvalue("noakhali-input");
    let noakhaliamount = alltextvalue("noakhali-amount");
    let balancevalue = alltextvalue("all-balance");

    // input man 0 er besi  1 er kom  alert dekhabe//
    if (inputvalue >= 0 && inputvalue < 1) {
        alert("Take the big number")
        return;
    }

    //  input er value number na hole//
    if (isNaN(inputvalue)) {
        alert("Just type the number")
        return;
    }

    //  input er value jodi emty thake//
    if (inputvalue === "") {
        alert("There is nothing")
        return;
    }

     //  input er type validation kora occe ar ei value function theke newya//
    let noakhaliinputnew = parseFloat(inputvalue);
    let finaltextvalue = parseFloat(noakhaliamount);
    let allbalance = parseFloat(balancevalue);
    let totaldonate = finaltextvalue + noakhaliinputnew;

    //  input er value theke jodi Balance er taka kom hoy//
    if (allbalance < parseFloat(noakhaliinputnew)) {
        alert("I don't have that much money")
        return;
    }
    //  input er value jodi 0 theke choto hoy //
    else if (noakhaliinputnew < 0) {
        alert("Type positive numbers")
        return
    }

    // input er value er man dondate e show occe and all amont theke input er amount dicrement occe//
    document.getElementById("noakhali-amount").innerText = totaldonate;
    let remainingbalance = allbalance - noakhaliinputnew;
    document.getElementById("all-balance").innerText = remainingbalance;
    document.getElementById("noakhali-input").value = "";
    // condision thik rakhar jonno uporer templte html er parent diglar kora hoice//
    historyvalue.appendChild(div);
    //input er valu thik thkle popup show hobe//
    document.getElementById("popup").classList.remove("hidden")
})


//  second card er javascript//

document.getElementById("feni-button").addEventListener("click", function () {
    //  akhne history part er jonno element crete kora occe//
    let feniinput = allinputvalue("feni-input");
    let historyvalue = document.getElementById("history-part");
    let fenititle = alltextvalue("feni-title");
    let div = document.createElement("div");
    div.innerHTML = `
             <div class = "w-11/12 2xl:w-8/12 m-auto">
                <div class="border border-b-1 sm:mt-10 mt-6 mb-8 sm:py-8 py-3 sm:px-8 px-2 rounded-xl">
                    <h1 class="font-bold sm:text-2xl text-xl text-black">${feniinput} Taka is ${fenititle}</h1>
                    <p class="pt-3"> Date: ${new Date().toString()}</p>
                </div>
            </div>
        `
    //  input er type validation kora occe ar ei value function theke newya//
    let inputvalue = allinputvalue("feni-input");
    let feniamount = alltextvalue("feni-amount");
    let balancevalue = alltextvalue("all-balance");

     // input man 0 er besi  1 er kom  alert dekhabe//
     if (inputvalue >= 0 && inputvalue < 1) {
        alert("Take the big number")
        return;
    }

    //  input er value number na hole//
    if (isNaN(inputvalue)) {
        alert("Just type the number")
        return;
    }
    //  input er value emty thkle//
    if (inputvalue === "") {
        alert("There is nothing")
        return;
    }
   
    // input er value er sate Donate er taka plus occe//
    let feniinputnew = parseFloat(inputvalue);
    let finaltextvalue = parseFloat(feniamount);
    let allbalance = parseFloat(balancevalue);
    let totaldonate = finaltextvalue + feniinputnew;

    //  input er value theke jodi Balance er taka kom hoy//
    if (allbalance < parseFloat(feniinputnew)) {
        alert("I don't have that much money")
        return;
    }
    //  input er value jodi 0 theke choto hoy //
    else if (feniinputnew < 0) {
        alert("Type positive numbers")
        return
    }
    // input er value er man dondate e show occe and all amont theke input er amount dicrement occe//
    document.getElementById("feni-amount").innerText = totaldonate;
    let remainingbalance = allbalance - feniinputnew;
    document.getElementById("all-balance").innerText = remainingbalance;
    document.getElementById("feni-input").value = "";
    // condision thik rakhar jonno uporer templte html er parent diglar kora hoice//
    historyvalue.appendChild(div);
    //input er valu thik thkle popup show hobe//
    document.getElementById("popup").classList.remove("hidden")
})

//  therd card er javascript//


document.getElementById("movement-button").addEventListener("click", function () {
    //  akhne history part er jonno element crete kora occe//
    let movement = allinputvalue("movement-input");
    let historyvalue = document.getElementById("history-part");
    let movementtitle = alltextvalue("movement-title");
    let div = document.createElement("div");
    div.innerHTML = `
         <div class = "w-11/12 2xl:w-8/12 m-auto">
            <div class="border border-b-1 sm:mt-10 mt-6 mb-8 sm:py-8 py-3 sm:px-8 px-2 rounded-xl">
                <h1 class="font-bold sm:text-2xl text-xl text-black">${movement} Taka is ${movementtitle}</h1>
                <p class="pt-3"> Date: ${new Date().toString()}</p>
            </div>
        </div>
    `

     //  input er type validation kora occe ar ei value function theke newya//
    let inputvalue = allinputvalue("movement-input");
    let movementamount = alltextvalue("movement-amount");
    let balancevalue = alltextvalue("all-balance");

     // input man 0 er besi  1 er kom  alert dekhabe//
     if (inputvalue >= 0 && inputvalue < 1) {
        alert("Take the big number")
        return;
    }

    //  input er value number na hole//
    if (isNaN(inputvalue)) {
        alert("Just type the number")
        return;
    }

    //  input er value emty thkle//
    if (inputvalue === "") {
        alert("There is nothing")
        return;
    }
    // input er value er sate Donate er taka plus occe//
    let movementinputnew = parseFloat(inputvalue);
    let finaltextvalue = parseFloat(movementamount);
    let allbalance = parseFloat(balancevalue);
    let totaldonate = finaltextvalue + movementinputnew;

    //  input er value theke jodi Balance er taka kom hoy//
    if (allbalance < parseFloat(movementinputnew)) {
        alert("I don't have that much money")
        return;
    }
    //  input er value jodi 0 theke choto hoy //
    else if (movementinputnew < 0) {
        alert("Type positive numbers")
        return
    }
    // input er value er man dondate e show occe and all amont theke input er amount dicrement occe//
    document.getElementById("movement-amount").innerText = totaldonate;
    let remainingbalance = allbalance - movementinputnew;
    document.getElementById("all-balance").innerText = remainingbalance;
    document.getElementById("movement-input").value = "";
    // condision thik rakhar jonno uporer templte html er parent diglar kora hoice//
    historyvalue.appendChild(div);
    //input er valu thik thkle popup show hobe//
    document.getElementById("popup").classList.remove("hidden")
})

// .............................................................................//

// history page er button er kaj kora oice//

document.getElementById("history-button").addEventListener("click", function () {
    document.getElementById("donate-part").classList.add("hidden");
    document.getElementById("history-button").classList.add("bg-primarycolor");
    document.getElementById("history-button").classList.remove("bg-secondarycolor");
    document.getElementById("donation-button").classList.remove("bg-primarycolor");
    document.getElementById("history-part").classList.remove("hidden");
})

// donate page er button er kaj kora oice//

document.getElementById("donation-button").addEventListener("click", function () {
    document.getElementById("donate-part").classList.remove("hidden");
    document.getElementById("donation-button").classList.add("bg-primarycolor");
    document.getElementById("history-button").classList.remove("bg-primarycolor");
    document.getElementById("history-button").classList.add("bg-secondarycolor");
    document.getElementById("history-part").classList.add("hidden");
})

// popup er button er kaj kora oice//
document.getElementById("close-button").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
})


// akhane scrool er maddome navbar er bacground rimove kora oice and upre gele abr ad kora oice//

const header = document.getElementById("navbar");

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        header.style.backgroundColor = "#f9f7f3";
    } else {
        header.style.backgroundColor = "transparent";
    }
});


// github live server page er error er karone Netlify host er live link dewya oice//