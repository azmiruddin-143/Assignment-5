
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




// secont card javascript //
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








// .............................................................................//








/// noakhali buton click function kora//

// document.getElementById("noakhali-button").addEventListener("click", function () {
//     let noakhaliinput = allinputvalue("noakhali-input");
//     let noakhalitext = alltextvalue("noakhaliamount");
//     let finalnoakhalitext = parseFloat(noakhalitext);
//     let noakhalidonate = parseFloat(noakhaliinput) + finalnoakhalitext;
//     document.getElementById("noakhaliamount").innerText = noakhalidonate;
//     let allbalance = alltextvalue("all-balance");
//     let finalallbalance = parseFloat(allbalance);
//     let allamountandnoakhali = finalallbalance - noakhaliinput;
//     document.getElementById("all-balance").innerText = allamountandnoakhali
// })

//   others niom//

function allbuttonclick(noakhalibutton, noakhaliinput, noakhaliamount, allbalance) {
    document.getElementById(noakhalibutton).addEventListener("click", function () {
        let inputvalue = allinputvalue(noakhaliinput);
        let textvalue = alltextvalue(noakhaliamount);
        let finaltextvalue = parseFloat(textvalue);
        let totaldonate = parseFloat(inputvalue) + finaltextvalue;
        document.getElementById(noakhaliamount).innerText = totaldonate;
        
        let balancevalue = alltextvalue(allbalance);
        let finalbalancevalue = parseFloat(balancevalue);
        let remainingbalance = finalbalancevalue - inputvalue;
        document.getElementById(allbalance).innerText = remainingbalance;
    });
}

// এখন বিভিন্ন বাটনের জন্য এই ফাংশন কল করো
allbuttonclick("noakhali-button", "noakhali-input", "noakhali-amount", "all-balance");
allbuttonclick("feni-button", "feni-input", "feni-amount", "all-balance");
allbuttonclick("movement-button", "movement-input", "movement-amount", "all-balance");


