
//  function //

function allinputvalue(id) {
    let inputvalue = document.getElementById(id).value;
    return inputvalue;
}

function alltextvalue(id) {
    let inputtext = document.getElementById(id).innerText;
    return inputtext;
}



// first card javascript //
//    value set and validation  kora//
document.getElementById("noakhali-input").addEventListener("input", function () {
    let noakhaliinput = allinputvalue("noakhali-input");
    let allbalance = alltextvalue("all-balance");
    let finalallbalance = parseFloat(allbalance);
    let OnlyNumber = true;

    for (let i = 0; i < noakhaliinput.length; i++) {
        let char = noakhaliinput[i];
        if (char < '0' || char > '9') {
            OnlyNumber = false;
            //  input er man nagitave hole ba string hole //
            document.getElementById("noakhali-button").setAttribute("disabled", true)
        }

        // jodi number na hoy//
        if (OnlyNumber == false) {
            document.getElementById("noakhaliinputfaild").classList.remove("hidden");
            alert("plz type number");
            document.getElementById("noakhaliinputfaild").classList.add("hidden");
            document.getElementById("noakhali-button").removeAttribute("disabled");
            document.getElementById("noakhali-input").value = "";
        }

        // all balance er theke jodi input er valu boro hoy//
        else if (finalallbalance < parseFloat(noakhaliinput)) {
            document.getElementById("noakhali-button").setAttribute("disabled", true)
            document.getElementById("noakhaliinputfaild").classList.remove("hidden");
        }

        else {
            document.getElementById("noakhaliinputfaild").classList.add("hidden");
            document.getElementById("noakhali-button").removeAttribute("disabled");
        }
    }
});



// secont card javascript //
//    value set and validation  kora//
document.getElementById("feni-input").addEventListener("input", function () {
    let noakhaliinput = allinputvalue("feni-input");
    let allbalance = alltextvalue("all-balance");
    let finalallbalance = parseFloat(allbalance);
    let OnlyNumber = true;

    for (let i = 0; i < noakhaliinput.length; i++) {
        let char = noakhaliinput[i];
        if (char < '0' || char > '9') {
            OnlyNumber = false;
            //  input er man nagitave hole ba string hole //
            document.getElementById("feni-button").setAttribute("disabled", true)
        }

        // jodi number na hoy//
        if (OnlyNumber == false) {
            document.getElementById("feniinputfaild").classList.remove("hidden");
            alert("plz type number");
            document.getElementById("feniinputfaild").classList.add("hidden");
            document.getElementById("feni-button").removeAttribute("disabled");
            document.getElementById("feni-input").value = "";
        }

        // all balance er theke jodi input er valu boro hoy//
        else if (finalallbalance < parseFloat(noakhaliinput)) {
            document.getElementById("feni-button").setAttribute("disabled", true)
            document.getElementById("feniinputfaild").classList.remove("hidden");
        }

        else {
            document.getElementById("feniinputfaild").classList.add("hidden");
            document.getElementById("feni-button").removeAttribute("disabled");
        }
    }
});



// therd card javascript //
//    value set and validation  kora//
document.getElementById("movement-input").addEventListener("input", function () {
    let noakhaliinput = allinputvalue("movement-input");
    let allbalance = alltextvalue("all-balance");
    let finalallbalance = parseFloat(allbalance);
    let OnlyNumber = true;

    for (let i = 0; i < noakhaliinput.length; i++) {
        let char = noakhaliinput[i];
        if (char < '0' || char > '9') {
            OnlyNumber = false;
            //  input er man nagitave hole ba string hole //
            document.getElementById("movement-button").setAttribute("disabled", true)
        }

        // jodi number na hoy//
        if (OnlyNumber == false) {
            document.getElementById("movementinputfaild").classList.remove("hidden");
            alert("plz type number");
            document.getElementById("movementinputfaild").classList.add("hidden");
            document.getElementById("movement-button").removeAttribute("disabled");
            document.getElementById("movement-input").value = "";
        }

        // all balance er theke jodi input er valu boro hoy//
        else if (finalallbalance < parseFloat(noakhaliinput)) {
            document.getElementById("movement-button").setAttribute("disabled", true)
            document.getElementById("movementinputfaild").classList.remove("hidden");
        }

        else {
            document.getElementById("movementinputfaild").classList.add("hidden");
            document.getElementById("movement-button").removeAttribute("disabled");
        }
    }
});




// ................

// history text ////////
//  first//
document.getElementById("noakhali-button").addEventListener("click", function () {

    let noakhaliinput = allinputvalue("noakhali-input");
    let historyvalue = document.getElementById("history-part");
    let noakhalititle = alltextvalue("noakhali-title");
    let div = document.createElement("div");
    div.innerHTML = `
             <div class = "w-11/12 2xl:w-8/12 m-auto">
                <div class="border border-b-1 sm:mt-10 mt-6 sm:py-8 py-3 sm:px-8 px-2 rounded-xl">
                    <h1 class="font-bold sm:text-2xl text-xl text-black">${noakhaliinput} Taka is ${noakhalititle}</h1>
                    <p class="pt-3"> Date: ${new Date().toString()}</p>
                </div>
            </div>
        `

    //    others// input emty chek
    let inputvalue = allinputvalue("noakhali-input");
    let noakhaliamount = alltextvalue("noakhali-amount");
    let balancevalue = alltextvalue("all-balance");

    if (inputvalue === "") {
        alert("emty")
        return;
    }
    let noakhaliinputnew = parseFloat(inputvalue);
    let finaltextvalue = parseFloat(noakhaliamount);
    let allbalance = parseFloat(balancevalue);
    let totaldonate = finaltextvalue + noakhaliinputnew;
    document.getElementById("noakhali-amount").innerText = totaldonate;
    let remainingbalance = allbalance - noakhaliinputnew;
    document.getElementById("all-balance").innerText = remainingbalance;
    document.getElementById("noakhali-input").value = "";
    historyvalue.appendChild(div);
    document.getElementById("popup").classList.remove("hidden")

})


// secont///

document.getElementById("feni-button").addEventListener("click", function () {
    let feniinput = allinputvalue("feni-input");
    let historyvalue = document.getElementById("history-part");
    let fenititle = alltextvalue("feni-title");
    let div = document.createElement("div");
    div.innerHTML = `
             <div class = "w-11/12 2xl:w-8/12 m-auto">
                <div class="border border-b-1 sm:mt-10 mt-6 sm:py-8 py-3 sm:px-8 px-2 rounded-xl">
                    <h1 class="font-bold sm:text-2xl text-xl text-black">${feniinput} Taka is ${fenititle}</h1>
                    <p class="pt-3"> Date: ${new Date().toString()}</p>
                </div>
            </div>
        `
    //    others// input emty chek
    let inputvalue = allinputvalue("feni-input");
    let feniamount = alltextvalue("feni-amount");
    let balancevalue = alltextvalue("all-balance");

    if (inputvalue === "") {
        alert("emty")
        return;
    }
    let feniinputnew = parseFloat(inputvalue);
    let finaltextvalue = parseFloat(feniamount);
    let allbalance = parseFloat(balancevalue);
    let totaldonate = finaltextvalue + feniinputnew;
    document.getElementById("feni-amount").innerText = totaldonate;
    let remainingbalance = allbalance - feniinputnew;
    document.getElementById("all-balance").innerText = remainingbalance;
    document.getElementById("feni-input").value = "";
    historyvalue.appendChild(div);
    document.getElementById("popup").classList.remove("hidden")
})

// therd///
document.getElementById("movement-button").addEventListener("click", function () {
    let movement = allinputvalue("movement-input");
    let historyvalue = document.getElementById("history-part");
    let movementtitle = alltextvalue("movement-title");
    let div = document.createElement("div");
    div.innerHTML = `
         <div class = "w-11/12 2xl:w-8/12 m-auto">
            <div class="border border-b-1 sm:mt-10 mt-6 sm:py-8 py-3 sm:px-8 px-2 rounded-xl">
                <h1 class="font-bold sm:text-2xl text-xl text-black">${movement} Taka is ${movementtitle}</h1>
                <p class="pt-3"> Date: ${new Date().toString()}</p>
            </div>
        </div>
    `
    //    others// input emty chek
    let inputvalue = allinputvalue("movement-input");
    let movementamount = alltextvalue("movement-amount");
    let balancevalue = alltextvalue("all-balance");

    if (inputvalue === "") {
        alert("emty")
        return;
    }
    let movementinputnew = parseFloat(inputvalue);
    let finaltextvalue = parseFloat(movementamount);
    let allbalance = parseFloat(balancevalue);
    let totaldonate = finaltextvalue + movementinputnew;
    document.getElementById("movement-amount").innerText = totaldonate;
    let remainingbalance = allbalance - movementinputnew;
    document.getElementById("all-balance").innerText = remainingbalance;
    document.getElementById("movement-input").value = "";
    historyvalue.appendChild(div);
    document.getElementById("popup").classList.remove("hidden")

})


// .............................................................................//

// Azmir aso koi kigiguyhgiujdgiodfjoi//////////gb\gbd

// cbjhv kj nkjl mkl donate and history button/

document.getElementById("history-button").addEventListener("click", function () {
    document.getElementById("donate-part").classList.add("hidden");
    document.getElementById("history-button").classList.add("bg-primarycolor");
    document.getElementById("history-button").classList.remove("bg-secondarycolor");
    document.getElementById("donation-button").classList.remove("bg-primarycolor");
    document.getElementById("history-part").classList.remove("hidden");
})
document.getElementById("donation-button").addEventListener("click", function () {
    document.getElementById("donate-part").classList.remove("hidden");
    document.getElementById("donation-button").classList.add("bg-primarycolor");
    document.getElementById("history-button").classList.remove("bg-primarycolor");
    document.getElementById("history-button").classList.add("bg-secondarycolor");
    document.getElementById("history-part").classList.add("hidden");

})


document.getElementById("close-button").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");

})

