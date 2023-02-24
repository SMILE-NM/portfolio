let button = document.getElementById("finish");

button.addEventListener("click", checkTest);


function checkTest() {
    let s = 0;

    let ans_1 = document.getElementById("test_1");
    let ans_2 = document.getElementById("test_2");
    let ans_3 = document.getElementById("test_3");
    let ans_4 = document.getElementById("test_4");
    let ans_5 = document.getElementById("test_5");

    ///First Test
    if (ans_1.value === "5") {
        s++;
        correct_test(ans_1)
    } else incorrect_test(ans_1);

    if (ans_2.value === "10") {
        s++;
        correct_test(ans_2)
    } else incorrect_test(ans_2);

    if (ans_3.value === "27") {
        s++;
        correct_test(ans_3)
    } else incorrect_test(ans_3);

    if (ans_4.value === "74") {
        s++;
        correct_test(ans_4)
    } else incorrect_test(ans_4);

    if (ans_5.value === "48") {
        s++;
        correct_test(ans_5)
    } else incorrect_test(ans_5);
   
}

function correct_test(a) {
    a.style.backgroundColor = 'greenyellow';
    a.value = "😊"
    a.style.fontSize = "50px";
}

function incorrect_test(a) {
    a.style.backgroundColor = 'red';
    a.value = "☹️";
    a.style.fontSize = "50px";
}