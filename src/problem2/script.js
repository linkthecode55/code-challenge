
window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No Web3 Detected... using HTTP Provider')
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/<APIKEY>"));
    }
})
function validate() {
    var user = document.getElementById("input-address").value;
    var user2 = document.getElementById("input-address");
    if (web3.utils.isAddress(user) == true) {
        user2.style.border = "green solid 3px";
    }
    else {
        user2.style.border = "red solid 3px";
    }
    var otp = document.getElementById("input-otp").value;
    var otp2 = document.getElementById("input-otp");
    var amt = document.getElementById("input-amount").value;
    var amt2 = document.getElementById("input-amount");
    var x = otp.toString();
    if (x.length == 6) {
        otp2.style.border = "green solid 3px";
    }
    else {
        otp2.style.border = "red solid 3px";
    }
    if (amt <= 0) {
        amt2.style.border = "red solid 3px";
    }
    else {
        amt2.style.border = "green solid 3px";
    }
    if (web3.utils.isAddress(user) == true && x.length == 6 && amt > 0) {
        alert("Tokens Sent!")
        document.getElementById("form").reset();
    }
    else {
        alert("Please re-check input of border in red!")
    }
}




function addressChange() {
    var user = document.getElementById("input-address").value;
    var user2 = document.getElementById("input-address");
    var a = document.getElementById("a");

    if (web3.utils.isAddress(user) == true) {
        user2.style.border = "green solid 3px";
        a.style.display = "none";

    }
    else {
        user2.style.border = "red solid 3px";
        a.style.display = "block";
    }

}

function otpChange() {
    var otp = document.getElementById("input-otp").value;
    var otp2 = document.getElementById("input-otp");
    var x = otp.toString();
    var b = document.getElementById("b");

    if (x.length == 6) {
        otp2.style.border = "green solid 3px";
        b.style.display = "none";
    }
    else {
        otp2.style.border = "red solid 3px";
        b.style.display = "block";
    }
}

function amountChange() {
    var amt = document.getElementById("input-amount").value;
    var amt2 = document.getElementById("input-amount");
    var c = document.getElementById("c");


    if (amt <= 0) {
        amt2.style.border = "red solid 3px";
        c.style.display = "block";
    }
    else {
        amt2.style.border = "green solid 3px";
        c.style.display = "none";
    }
}