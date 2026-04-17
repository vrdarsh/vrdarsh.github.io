const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function truncate4(num) {
    return (Math.trunc(num * 10000) / 10000).toFixed(4);
}

function resetUI(quickAnswer, separator, solutionContainer, errorMsg) {
    quickAnswer.style.display = "none"; separator.style.display = "none"; solutionContainer.style.display = "none"; errorMsg.style.display = "none";
}

let isSolutionVisibleQ1 = false;
function toggleSolutionQ1() {
    const container = document.getElementById("solution-container-q1");
    if (isSolutionVisibleQ1) { container.style.display = "none"; isSolutionVisibleQ1 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ1 = true; }
}

async function generateSolutionQ1() {
    let v_l1 = document.getElementById("p1q1-l1").value; let v_l2 = document.getElementById("p1q1-l2").value; let v_l3 = document.getElementById("p1q1-l3").value;
    let v_k12 = document.getElementById("p1q1-k12").value; let v_k23 = document.getElementById("p1q1-k23").value; let v_k31 = document.getElementById("p1q1-k31").value;
    
    const btn = document.getElementById("calc-btn-q1"); const spinner = document.getElementById("loading-spinner-q1"); const quickAnswer = document.getElementById("quick-answer-q1"); const separator = document.getElementById("solution-separator-q1"); const solutionContainer = document.getElementById("solution-container-q1"); const contentDiv = document.getElementById("solution-content-q1"); const cursor = document.getElementById("typing-cursor-q1"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q1"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ1 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_k12 || !v_k23 || !v_k31) {
        errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return;
    }

    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3);
    let k12 = Number(v_k12); let k23 = Number(v_k23); let k31 = Number(v_k31);

    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || k12 < 0 || k23 < 0 || k31 < 0) {
        errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return;
    }

    btn.disabled = true; contentDiv.innerHTML = "";
    
    let m12 = k12 * Math.sqrt(l1 * l2);
    let m23 = k23 * Math.sqrt(l2 * l3);
    let m31 = k31 * Math.sqrt(l3 * l1);
    let leq = l1 + l2 + l3 - (2 * m12) + (2 * m23) - (2 * m31);

    quickAnswer.innerHTML = `answer: l<sub>eq</sub> = ${truncate4(leq)} h`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ1 = true;

    let solutionHTML = 
        `coil 1 and 2 -<br>` + `coil 2 and 3 +<br>` + `coil 1 and 3 -<br><br>` +
        `%%\\( m_{12} = k_{12} \\sqrt{l_1 l_2} = ${k12} \\sqrt{${truncate4(l1)} \\times ${truncate4(l2)}} = ${(truncate4(m12))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{23} = k_{23} \\sqrt{l_2 l_3} = ${k23} \\sqrt{${truncate4(l2)} \\times ${truncate4(l3)}} = ${(truncate4(m23))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{31} = k_{31} \\sqrt{l_3 l_1} = ${k31} \\sqrt{${truncate4(l3)} \\times ${truncate4(l1)}} = ${(truncate4(m31))} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_{eq} = l_1 + l_2 + l_3 - 2m_{12} + 2m_{23} - 2m_{31} \\)%%<br>` +
        `%%\\( l_{eq} = ${truncate4(l1)} + ${truncate4(l2)} + ${truncate4(l3)} - 2(${truncate4(m12)}) + 2(${truncate4(m23)}) - 2(${truncate4(m31)}) \\)%%<br>` +
        `%%\\( l_{eq} = ${(truncate4(leq))} \\text{ h} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ2 = false;
function toggleSolutionQ2() {
    const container = document.getElementById("solution-container-q2");
    if (isSolutionVisibleQ2) { container.style.display = "none"; isSolutionVisibleQ2 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ2 = true; }
}

async function generateSolutionQ2() {
    let v_l1 = document.getElementById("p1q2-l1").value; let v_l2 = document.getElementById("p1q2-l2").value; let v_l3 = document.getElementById("p1q2-l3").value;
    let v_k12 = document.getElementById("p1q2-k12").value; let v_k23 = document.getElementById("p1q2-k23").value; let v_k31 = document.getElementById("p1q2-k31").value;
    
    const btn = document.getElementById("calc-btn-q2"); const spinner = document.getElementById("loading-spinner-q2"); const quickAnswer = document.getElementById("quick-answer-q2"); const separator = document.getElementById("solution-separator-q2"); const solutionContainer = document.getElementById("solution-container-q2"); const contentDiv = document.getElementById("solution-content-q2"); const cursor = document.getElementById("typing-cursor-q2"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q2"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ2 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_k12 || !v_k23 || !v_k31) {
        errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return;
    }

    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3);
    let k12 = Number(v_k12); let k23 = Number(v_k23); let k31 = Number(v_k31);

    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || k12 < 0 || k23 < 0 || k31 < 0) {
        errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return;
    }

    btn.disabled = true; contentDiv.innerHTML = "";
    
    let m12 = k12 * Math.sqrt(l1 * l2); let m23 = k23 * Math.sqrt(l2 * l3); let m31 = k31 * Math.sqrt(l3 * l1);
    let leq = l1 + l2 + l3 + (2 * m12) - (2 * m23) - (2 * m31);

    quickAnswer.innerHTML = `answer: l<sub>eq</sub> = ${truncate4(leq)} h`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ2 = true;

    let solutionHTML = 
        `coil 1 and 2 +<br>` + `coil 2 and 3 -<br>` + `coil 1 and 3 -<br><br>` +
        `%%\\( m_{12} = k_{12} \\sqrt{l_1 l_2} = ${k12} \\sqrt{${truncate4(l1)} \\times ${truncate4(l2)}} = ${(truncate4(m12))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{23} = k_{23} \\sqrt{l_2 l_3} = ${k23} \\sqrt{${truncate4(l2)} \\times ${truncate4(l3)}} = ${(truncate4(m23))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{31} = k_{31} \\sqrt{l_3 l_1} = ${k31} \\sqrt{${truncate4(l3)} \\times ${truncate4(l1)}} = ${(truncate4(m31))} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_{eq} = l_1 + l_2 + l_3 + 2m_{12} - 2m_{23} - 2m_{31} \\)%%<br>` +
        `%%\\( l_{eq} = ${truncate4(l1)} + ${truncate4(l2)} + ${truncate4(l3)} + 2(${truncate4(m12)}) - 2(${truncate4(m23)}) - 2(${truncate4(m31)}) \\)%%<br>` +
        `%%\\( l_{eq} = ${(truncate4(leq))} \\text{ h} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ3 = false;
function toggleSolutionQ3() {
    const container = document.getElementById("solution-container-q3");
    if (isSolutionVisibleQ3) { container.style.display = "none"; isSolutionVisibleQ3 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ3 = true; }
}

async function generateSolutionQ3() {
    let v_l1 = document.getElementById("p1q3-l1").value; let v_l2 = document.getElementById("p1q3-l2").value; let v_l3 = document.getElementById("p1q3-l3").value;
    let v_k12 = document.getElementById("p1q3-k12").value; let v_k23 = document.getElementById("p1q3-k23").value; let v_k31 = document.getElementById("p1q3-k31").value; let v_didt = document.getElementById("p1q3-didt").value;
    
    const btn = document.getElementById("calc-btn-q3"); const spinner = document.getElementById("loading-spinner-q3"); const quickAnswer = document.getElementById("quick-answer-q3"); const separator = document.getElementById("solution-separator-q3"); const solutionContainer = document.getElementById("solution-container-q3"); const contentDiv = document.getElementById("solution-content-q3"); const cursor = document.getElementById("typing-cursor-q3"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q3"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ3 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_k12 || !v_k23 || !v_k31 || !v_didt) {
        errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return;
    }

    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3);
    let k12 = Number(v_k12); let k23 = Number(v_k23); let k31 = Number(v_k31); let didt = Number(v_didt);

    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || k12 < 0 || k23 < 0 || k31 < 0 || didt <= 0) {
        errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return;
    }

    btn.disabled = true; contentDiv.innerHTML = "";
    let m12 = k12 * Math.sqrt(l1 * l2); let m31 = k31 * Math.sqrt(l3 * l1);
    let e1 = (l1 - m12 - m31) * didt;

    quickAnswer.innerHTML = `answer: e<sub>1</sub> = ${truncate4(e1)} mv`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ3 = true;

    let solutionHTML = 
        `coil 1 and 2 -<br>` + `coil 1 and 3 -<br><br>` +
        `%%\\( m_{12} = k_{12} \\sqrt{l_1 l_2} = ${k12} \\sqrt{${truncate4(l1)} \\times ${truncate4(l2)}} = ${(truncate4(m12))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{31} = k_{31} \\sqrt{l_3 l_1} = ${k31} \\sqrt{${truncate4(l3)} \\times ${truncate4(l1)}} = ${(truncate4(m31))} \\text{ h} \\)%%<br><br>` +
        `%%\\( e_1 = l_1 \\frac{di}{dt} - m_{12} \\frac{di}{dt} - m_{31} \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_1 = (l_1 - m_{12} - m_{31}) \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_1 = (${truncate4(l1)} - ${truncate4(m12)} - ${truncate4(m31)}) \\times ${truncate4(didt)} \\)%%<br>` +
        `%%\\( e_1 = ${(truncate4(e1))} \\text{ mv} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ4 = false;
function toggleSolutionQ4() {
    const container = document.getElementById("solution-container-q4");
    if (isSolutionVisibleQ4) { container.style.display = "none"; isSolutionVisibleQ4 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ4 = true; }
}

async function generateSolutionQ4() {
    let v_l1 = document.getElementById("p1q4-l1").value; let v_l2 = document.getElementById("p1q4-l2").value; let v_l3 = document.getElementById("p1q4-l3").value;
    let v_k12 = document.getElementById("p1q4-k12").value; let v_k23 = document.getElementById("p1q4-k23").value; let v_k31 = document.getElementById("p1q4-k31").value; let v_didt = document.getElementById("p1q4-didt").value;
    
    const btn = document.getElementById("calc-btn-q4"); const spinner = document.getElementById("loading-spinner-q4"); const quickAnswer = document.getElementById("quick-answer-q4"); const separator = document.getElementById("solution-separator-q4"); const solutionContainer = document.getElementById("solution-container-q4"); const contentDiv = document.getElementById("solution-content-q4"); const cursor = document.getElementById("typing-cursor-q4"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q4"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ4 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_k12 || !v_k23 || !v_k31 || !v_didt) {
        errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return;
    }

    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3);
    let k12 = Number(v_k12); let k23 = Number(v_k23); let k31 = Number(v_k31); let didt = Number(v_didt);

    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || k12 < 0 || k23 < 0 || k31 < 0 || didt <= 0) {
        errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return;
    }

    btn.disabled = true; contentDiv.innerHTML = "";
    let m12 = k12 * Math.sqrt(l1 * l2); let m31 = k31 * Math.sqrt(l3 * l1);
    
    let e1 = (l1 + m12 - m31) * didt;

    quickAnswer.innerHTML = `answer: e<sub>1</sub> = ${truncate4(e1)} mv`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ4 = true;

    let solutionHTML = 
        `coil 1 and 2 +<br>` + `coil 1 and 3 -<br><br>` +
        `%%\\( m_{12} = k_{12} \\sqrt{l_1 l_2} = ${k12} \\sqrt{${truncate4(l1)} \\times ${truncate4(l2)}} = ${(truncate4(m12))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{31} = k_{31} \\sqrt{l_3 l_1} = ${k31} \\sqrt{${truncate4(l3)} \\times ${truncate4(l1)}} = ${(truncate4(m31))} \\text{ h} \\)%%<br><br>` +
        `%%\\( e_1 = l_1 \\frac{di}{dt} + m_{12} \\frac{di}{dt} - m_{31} \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_1 = (l_1 + m_{12} - m_{31}) \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_1 = (${truncate4(l1)} + ${truncate4(m12)} - ${truncate4(m31)}) \\times ${truncate4(didt)} \\)%%<br>` +
        `%%\\( e_1 = ${(truncate4(e1))} \\text{ mv} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ5 = false;
function toggleSolutionQ5() {
    const container = document.getElementById("solution-container-q5");
    if (isSolutionVisibleQ5) { container.style.display = "none"; isSolutionVisibleQ5 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ5 = true; }
}

async function generateSolutionQ5() {
    let v_l1 = document.getElementById("p1q5-l1").value; let v_l2 = document.getElementById("p1q5-l2").value; let v_l3 = document.getElementById("p1q5-l3").value;
    let v_k12 = document.getElementById("p1q5-k12").value; let v_k23 = document.getElementById("p1q5-k23").value; let v_k31 = document.getElementById("p1q5-k31").value; let v_didt = document.getElementById("p1q5-didt").value;
    
    const btn = document.getElementById("calc-btn-q5"); const spinner = document.getElementById("loading-spinner-q5"); const quickAnswer = document.getElementById("quick-answer-q5"); const separator = document.getElementById("solution-separator-q5"); const solutionContainer = document.getElementById("solution-container-q5"); const contentDiv = document.getElementById("solution-content-q5"); const cursor = document.getElementById("typing-cursor-q5"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q5"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ5 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_k12 || !v_k23 || !v_k31 || !v_didt) {
        errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return;
    }

    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3);
    let k12 = Number(v_k12); let k23 = Number(v_k23); let k31 = Number(v_k31); let didt = Number(v_didt);

    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || k12 < 0 || k23 < 0 || k31 < 0 || didt <= 0) {
        errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return;
    }

    btn.disabled = true; contentDiv.innerHTML = "";
    let m12 = k12 * Math.sqrt(l1 * l2); let m23 = k23 * Math.sqrt(l2 * l3); let m31 = k31 * Math.sqrt(l3 * l1);
    
    let leq = l1 + l2 + l3 - (2 * m12) + (2 * m23) - (2 * m31);
    let etotal = leq * didt;

    quickAnswer.innerHTML = `answer: e<sub>total</sub> = ${truncate4(etotal)} mv`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ5 = true;

    let solutionHTML = 
        `coil 1 and 2 -<br>` + `coil 2 and 3 +<br>` + `coil 1 and 3 -<br><br>` +
        `%%\\( m_{12} = k_{12} \\sqrt{l_1 l_2} = ${k12} \\sqrt{${truncate4(l1)} \\times ${truncate4(l2)}} = ${(truncate4(m12))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{23} = k_{23} \\sqrt{l_2 l_3} = ${k23} \\sqrt{${truncate4(l2)} \\times ${truncate4(l3)}} = ${(truncate4(m23))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{31} = k_{31} \\sqrt{l_3 l_1} = ${k31} \\sqrt{${truncate4(l3)} \\times ${truncate4(l1)}} = ${(truncate4(m31))} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_{eq} = l_1 + l_2 + l_3 - 2m_{12} + 2m_{23} - 2m_{31} \\)%%<br>` +
        `%%\\( l_{eq} = ${truncate4(l1)} + ${truncate4(l2)} + ${truncate4(l3)} - 2(${truncate4(m12)}) + 2(${truncate4(m23)}) - 2(${truncate4(m31)}) = ${(truncate4(leq))} \\text{ h} \\)%%<br><br>` +
        `%%\\( e_{total} = l_{eq} \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_{total} = ${(truncate4(leq))} \\times ${truncate4(didt)} \\)%%<br>` +
        `%%\\( e_{total} = ${(truncate4(etotal))} \\text{ mv} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ6 = false;
function toggleSolutionQ6() {
    const container = document.getElementById("solution-container-q6");
    if (isSolutionVisibleQ6) { container.style.display = "none"; isSolutionVisibleQ6 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ6 = true; }
}

async function generateSolutionQ6() {
    let v_l1 = document.getElementById("p1q6-l1").value; let v_l2 = document.getElementById("p1q6-l2").value; let v_l3 = document.getElementById("p1q6-l3").value;
    let v_k12 = document.getElementById("p1q6-k12").value; let v_k23 = document.getElementById("p1q6-k23").value; let v_k31 = document.getElementById("p1q6-k31").value; let v_didt = document.getElementById("p1q6-didt").value;
    
    const btn = document.getElementById("calc-btn-q6"); const spinner = document.getElementById("loading-spinner-q6"); const quickAnswer = document.getElementById("quick-answer-q6"); const separator = document.getElementById("solution-separator-q6"); const solutionContainer = document.getElementById("solution-container-q6"); const contentDiv = document.getElementById("solution-content-q6"); const cursor = document.getElementById("typing-cursor-q6"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q6"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ6 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_k12 || !v_k23 || !v_k31 || !v_didt) {
        errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return;
    }

    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3);
    let k12 = Number(v_k12); let k23 = Number(v_k23); let k31 = Number(v_k31); let didt = Number(v_didt);

    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || k12 < 0 || k23 < 0 || k31 < 0 || didt <= 0) {
        errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return;
    }

    btn.disabled = true; contentDiv.innerHTML = "";
    let m12 = k12 * Math.sqrt(l1 * l2); let m23 = k23 * Math.sqrt(l2 * l3); let m31 = k31 * Math.sqrt(l3 * l1);
    
    let leq = l1 + l2 + l3 - (2 * m12) - (2 * m23) + (2 * m31);
    let etotal = leq * didt;

    quickAnswer.innerHTML = `answer: e<sub>total</sub> = ${truncate4(etotal)} mv`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ6 = true;

    let solutionHTML = 
        `coil 1 and 2 -<br>` + `coil 2 and 3 -<br>` + `coil 1 and 3 +<br><br>` +
        `%%\\( m_{12} = k_{12} \\sqrt{l_1 l_2} = ${k12} \\sqrt{${truncate4(l1)} \\times ${truncate4(l2)}} = ${(truncate4(m12))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{23} = k_{23} \\sqrt{l_2 l_3} = ${k23} \\sqrt{${truncate4(l2)} \\times ${truncate4(l3)}} = ${(truncate4(m23))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{31} = k_{31} \\sqrt{l_3 l_1} = ${k31} \\sqrt{${truncate4(l3)} \\times ${truncate4(l1)}} = ${(truncate4(m31))} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_{eq} = l_1 + l_2 + l_3 - 2m_{12} - 2m_{23} + 2m_{31} \\)%%<br>` +
        `%%\\( l_{eq} = ${truncate4(l1)} + ${truncate4(l2)} + ${truncate4(l3)} - 2(${truncate4(m12)}) - 2(${truncate4(m23)}) + 2(${truncate4(m31)}) = ${(truncate4(leq))} \\text{ h} \\)%%<br><br>` +
        `%%\\( e_{total} = l_{eq} \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_{total} = ${(truncate4(leq))} \\times ${truncate4(didt)} \\)%%<br>` +
        `%%\\( e_{total} = ${(truncate4(etotal))} \\text{ mv} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ7 = false;
function toggleSolutionQ7() {
    const container = document.getElementById("solution-container-q7");
    if (isSolutionVisibleQ7) { container.style.display = "none"; isSolutionVisibleQ7 = false; } else { container.style.display = "flex"; isSolutionVisibleQ7 = true; }
}

async function generateSolutionQ7() {
    let v_l1 = document.getElementById("p2q7-l1").value; let v_l2 = document.getElementById("p2q7-l2").value; let v_l3 = document.getElementById("p2q7-l3").value;
    let v_leq1 = document.getElementById("p2q7-leq1").value; let v_leq2 = document.getElementById("p2q7-leq2").value;
    
    const btn = document.getElementById("calc-btn-q7"); const spinner = document.getElementById("loading-spinner-q7"); const quickAnswer = document.getElementById("quick-answer-q7"); const separator = document.getElementById("solution-separator-q7"); const solutionContainer = document.getElementById("solution-container-q7"); const contentDiv = document.getElementById("solution-content-q7"); const cursor = document.getElementById("typing-cursor-q7"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q7"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ7 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_leq1 || !v_leq2) { errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return; }
    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3); let leq1 = Number(v_leq1) / 1000; let leq2 = Number(v_leq2) / 1000;
    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || leq1 <= 0 || leq2 <= 0) { errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return; }

    btn.disabled = true; contentDiv.innerHTML = "";
    
    let l_sum = l1 + l2 + l3;
    let m12 = ((leq1 + leq2) / 4) - (l_sum / 2);

    quickAnswer.innerHTML = `answer: m<sub>12</sub> = ${truncate4(m12)} h`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ7 = true;

    let solutionHTML = 
        `coil 1 and 2 +<br>` + `coil 2 and 3 -<br>` + `coil 1 and 3 -<br><br>` +
        `reversed l<sub>3</sub>:<br>` + `coil 1 and 2 +<br>` + `coil 2 and 3 +<br>` + `coil 1 and 3 +<br><br>` +
        `%%\\( l_{eq1} = l_1 + l_2 + l_3 + 2m_{12} - 2m_{23} - 2m_{31} = ${truncate4(leq1)} \\text{ h} \\)%%<br>` +
        `%%\\( l_{eq2} = l_1 + l_2 + l_3 + 2m_{12} + 2m_{23} + 2m_{31} = ${truncate4(leq2)} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_{eq1} + l_{eq2} = 2(l_1 + l_2 + l_3) + 4m_{12} \\)%%<br>` +
        `%%\\( 4m_{12} = (l_{eq1} + l_{eq2}) - 2(l_1 + l_2 + l_3) \\)%%<br>` +
        `%%\\( m_{12} = \\frac{${truncate4(leq1 + leq2)} - 2(${truncate4(l_sum)})}{4} = ${truncate4(m12)} \\text{ h} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ8 = false;
function toggleSolutionQ8() {
    const container = document.getElementById("solution-container-q8");
    if (isSolutionVisibleQ8) { container.style.display = "none"; isSolutionVisibleQ8 = false; } else { container.style.display = "flex"; isSolutionVisibleQ8 = true; }
}

async function generateSolutionQ8() {
    let v_l1 = document.getElementById("p2q8-l1").value; let v_l2 = document.getElementById("p2q8-l2").value; let v_l3 = document.getElementById("p2q8-l3").value;
    let v_leq1 = document.getElementById("p2q8-leq1").value; let v_leq2 = document.getElementById("p2q8-leq2").value; let v_m_ratio = document.getElementById("p2q8-m-ratio").value;
    
    const btn = document.getElementById("calc-btn-q8"); const spinner = document.getElementById("loading-spinner-q8"); const quickAnswer = document.getElementById("quick-answer-q8"); const separator = document.getElementById("solution-separator-q8"); const solutionContainer = document.getElementById("solution-container-q8"); const contentDiv = document.getElementById("solution-content-q8"); const cursor = document.getElementById("typing-cursor-q8"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q8"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ8 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_leq1 || !v_leq2 || !v_m_ratio) { errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return; }
    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3); let leq1 = Number(v_leq1) / 1000; let leq2 = Number(v_leq2) / 1000; let m_ratio = Number(v_m_ratio);
    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || leq1 <= 0 || leq2 <= 0 || m_ratio < 0) { errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return; }

    btn.disabled = true; contentDiv.innerHTML = "";
    
    let l_sum = l1 + l2 + l3;
    let m12 = ((leq1 + leq2) / 4) - (l_sum / 2);
    let m23 = m_ratio * m12;
    let m31 = ((leq2 - leq1) / 4) - m23;

    quickAnswer.innerHTML = `answer: m<sub>13</sub> = ${truncate4(m31)} h`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ8 = true;

    let solutionHTML = 
        `coil 1 and 2 +<br>` + `coil 2 and 3 -<br>` + `coil 1 and 3 -<br><br>` +
        `reversed l<sub>3</sub>:<br>` + `coil 1 and 2 +<br>` + `coil 2 and 3 +<br>` + `coil 1 and 3 +<br><br>` +
        `%%\\( l_{eq1} = l_1 + l_2 + l_3 + 2m_{12} - 2m_{23} - 2m_{31} = ${truncate4(leq1)} \\text{ h} \\)%%<br>` +
        `%%\\( l_{eq2} = l_1 + l_2 + l_3 + 2m_{12} + 2m_{23} + 2m_{31} = ${truncate4(leq2)} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_{eq1} + l_{eq2} = 2(l_1 + l_2 + l_3) + 4m_{12} \\)%%<br>` +
        `%%\\( m_{12} = \\frac{${truncate4(leq1 + leq2)} - 2(${truncate4(l_sum)})}{4} = ${truncate4(m12)} \\text{ h} \\)%%<br><br>` +
        `%%\\( m_{23} = ${m_ratio} \\times m_{12} = ${m_ratio} \\times ${truncate4(m12)} = ${truncate4(m23)} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_{eq2} - l_{eq1} = 4m_{23} + 4m_{31} \\)%%<br>` +
        `%%\\( m_{31} = \\frac{${truncate4(leq2)} - ${truncate4(leq1)}}{4} - ${truncate4(m23)} \\)%%<br>` +
        `%%\\( m_{13} = ${(truncate4(m31))} \\text{ h} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ9 = false;
function toggleSolutionQ9() {
    const container = document.getElementById("solution-container-q9");
    if (isSolutionVisibleQ9) { container.style.display = "none"; isSolutionVisibleQ9 = false; } else { container.style.display = "flex"; isSolutionVisibleQ9 = true; }
}

async function generateSolutionQ9() {
    let v_l1 = document.getElementById("p2q9-l1").value; let v_l2 = document.getElementById("p2q9-l2").value; let v_l3 = document.getElementById("p2q9-l3").value;
    let v_leq1 = document.getElementById("p2q9-leq1").value; let v_leq2 = document.getElementById("p2q9-leq2").value; let v_m_ratio = document.getElementById("p2q9-m-ratio").value;
    
    const btn = document.getElementById("calc-btn-q9"); const spinner = document.getElementById("loading-spinner-q9"); const quickAnswer = document.getElementById("quick-answer-q9"); const separator = document.getElementById("solution-separator-q9"); const solutionContainer = document.getElementById("solution-container-q9"); const contentDiv = document.getElementById("solution-content-q9"); const cursor = document.getElementById("typing-cursor-q9"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q9"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ9 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_leq1 || !v_leq2 || !v_m_ratio) { errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return; }
    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3); let leq1 = Number(v_leq1) / 1000; let leq2 = Number(v_leq2) / 1000; let m_ratio = Number(v_m_ratio);
    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || leq1 <= 0 || leq2 <= 0 || m_ratio < 0) { errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return; }

    btn.disabled = true; contentDiv.innerHTML = "";
    
    let l_sum = l1 + l2 + l3;
    let m12 = ((leq1 + leq2) / 4) - (l_sum / 2);
    let m23 = m_ratio * m12;
    let m31 = ((leq2 - leq1) / 4) - m23;
    let k13 = m31 / Math.sqrt(l1 * l3);

    quickAnswer.innerHTML = `answer: k<sub>13</sub> = ${truncate4(k13)}`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ9 = true;

    let solutionHTML = 
        `coil 1 and 2 +<br>` + `coil 2 and 3 -<br>` + `coil 1 and 3 -<br><br>` +
        `reversed l<sub>3</sub>:<br>` + `coil 1 and 2 +<br>` + `coil 2 and 3 +<br>` + `coil 1 and 3 +<br><br>` +
        `%%\\( l_{eq1} = l_1 + l_2 + l_3 + 2m_{12} - 2m_{23} - 2m_{31} = ${truncate4(leq1)} \\text{ h} \\)%%<br>` +
        `%%\\( l_{eq2} = l_1 + l_2 + l_3 + 2m_{12} + 2m_{23} + 2m_{31} = ${truncate4(leq2)} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_{eq1} + l_{eq2} = 2(l_1 + l_2 + l_3) + 4m_{12} \\)%%<br>` +
        `%%\\( m_{12} = \\frac{${truncate4(leq1 + leq2)} - 2(${truncate4(l_sum)})}{4} = ${truncate4(m12)} \\text{ h} \\)%%<br><br>` +
        `%%\\( m_{23} = ${m_ratio} \\times m_{12} = ${m_ratio} \\times ${truncate4(m12)} = ${truncate4(m23)} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_{eq2} - l_{eq1} = 4m_{23} + 4m_{31} \\)%%<br>` +
        `%%\\( m_{31} = \\frac{${truncate4(leq2)} - ${truncate4(leq1)}}{4} - ${truncate4(m23)} = ${truncate4(m31)} \\text{ h} \\)%%<br><br>` +
        `%%\\( k_{13} = \\frac{m_{31}}{\\sqrt{l_1 l_3}} \\)%%<br>` +
        `%%\\( k_{13} = \\frac{${truncate4(m31)}}{\\sqrt{${truncate4(l1)} \\times ${truncate4(l3)}}} \\)%%<br>` +
        `%%\\( k_{13} = ${(truncate4(k13))} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ10 = false;
function toggleSolutionQ10() {
    const container = document.getElementById("solution-container-q10");
    if (isSolutionVisibleQ10) { container.style.display = "none"; isSolutionVisibleQ10 = false; } else { container.style.display = "flex"; isSolutionVisibleQ10 = true; }
}

async function generateSolutionQ10() {
    let v_l1 = document.getElementById("p2q10-l1").value; let v_l2 = document.getElementById("p2q10-l2").value; let v_l3 = document.getElementById("p2q10-l3").value;
    let v_leq1 = document.getElementById("p2q10-leq1").value; let v_leq2 = document.getElementById("p2q10-leq2").value;
    
    const btn = document.getElementById("calc-btn-q10"); const spinner = document.getElementById("loading-spinner-q10"); const quickAnswer = document.getElementById("quick-answer-q10"); const separator = document.getElementById("solution-separator-q10"); const solutionContainer = document.getElementById("solution-container-q10"); const contentDiv = document.getElementById("solution-content-q10"); const cursor = document.getElementById("typing-cursor-q10"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q10"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ10 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_leq1 || !v_leq2) { errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return; }
    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3); let leq1 = Number(v_leq1) / 1000; let leq2 = Number(v_leq2) / 1000;
    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || leq1 <= 0 || leq2 <= 0) { errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return; }

    btn.disabled = true; contentDiv.innerHTML = "";
    
    let l_sum = l1 + l2 + l3;
    let m12 = ((leq1 + leq2) / 4) - (l_sum / 2);
    let k12 = m12 / Math.sqrt(l1 * l2);

    quickAnswer.innerHTML = `answer: k<sub>12</sub> = ${truncate4(k12)}`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ10 = true;

    let solutionHTML = 
        `coil 1 and 2 +<br>` + `coil 2 and 3 -<br>` + `coil 1 and 3 -<br><br>` +
        `reversed l<sub>3</sub>:<br>` + `coil 1 and 2 +<br>` + `coil 2 and 3 +<br>` + `coil 1 and 3 +<br><br>` +
        `%%\\( l_{eq1} = l_1 + l_2 + l_3 + 2m_{12} - 2m_{23} - 2m_{31} = ${truncate4(leq1)} \\text{ h} \\)%%<br>` +
        `%%\\( l_{eq2} = l_1 + l_2 + l_3 + 2m_{12} + 2m_{23} + 2m_{31} = ${truncate4(leq2)} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_{eq1} + l_{eq2} = 2(l_1 + l_2 + l_3) + 4m_{12} \\)%%<br>` +
        `%%\\( 4m_{12} = (l_{eq1} + l_{eq2}) - 2(l_1 + l_2 + l_3) \\)%%<br>` +
        `%%\\( m_{12} = \\frac{${truncate4(leq1 + leq2)} - 2(${truncate4(l_sum)})}{4} = ${truncate4(m12)} \\text{ h} \\)%%<br><br>` +
        `%%\\( k_{12} = \\frac{m_{12}}{\\sqrt{l_1 l_2}} \\)%%<br>` +
        `%%\\( k_{12} = \\frac{${truncate4(m12)}}{\\sqrt{${truncate4(l1)} \\times ${truncate4(l2)}}} \\)%%<br>` +
        `%%\\( k_{12} = ${(truncate4(k12))} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ11 = false;
function toggleSolutionQ11() {
    const container = document.getElementById("solution-container-q11");
    if (isSolutionVisibleQ11) { container.style.display = "none"; isSolutionVisibleQ11 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ11 = true; }
}

async function generateSolutionQ11() {
    let v_l1 = document.getElementById("p3q11-l1").value; let v_l2 = document.getElementById("p3q11-l2").value; let v_l3 = document.getElementById("p3q11-l3").value;
    
    const btn = document.getElementById("calc-btn-q11"); const spinner = document.getElementById("loading-spinner-q11"); const quickAnswer = document.getElementById("quick-answer-q11"); const separator = document.getElementById("solution-separator-q11"); const solutionContainer = document.getElementById("solution-container-q11"); const contentDiv = document.getElementById("solution-content-q11"); const cursor = document.getElementById("typing-cursor-q11"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q11"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ11 = false;

    if (!v_l1 || !v_l2 || !v_l3) {
        errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return;
    }

    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3);
    let k12 = 0.8; let k23 = 0.8; let k31 = 0.8;

    if (l1 <= 0 || l2 <= 0 || l3 <= 0) {
        errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return;
    }

    btn.disabled = true; contentDiv.innerHTML = "";
    
    let m12 = k12 * Math.sqrt(l1 * l2);
    let m23 = k23 * Math.sqrt(l2 * l3);
    let m31 = k31 * Math.sqrt(l3 * l1);
    let leq = l1 + l2 + l3 - (2 * m12) + (2 * m23) - (2 * m31);

    quickAnswer.innerHTML = `answer: l<sub>eq</sub> = ${truncate4(leq)} h`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ11 = true;

    let solutionHTML = 
        `coil 1 and 2 - <br>` + `coil 2 and 3 + <br>` + `coil 1 and 3 - <br><br>` +
        `%%\\( m_{12} = 0.8 \\sqrt{l_1 l_2} = 0.8 \\sqrt{${truncate4(l1)} \\times ${truncate4(l2)}} = ${(truncate4(m12))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{23} = 0.8 \\sqrt{l_2 l_3} = 0.8 \\sqrt{${truncate4(l2)} \\times ${truncate4(l3)}} = ${(truncate4(m23))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{31} = 0.8 \\sqrt{l_3 l_1} = 0.8 \\sqrt{${truncate4(l3)} \\times ${truncate4(l1)}} = ${(truncate4(m31))} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_{eq} = l_1 + l_2 + l_3 - 2m_{12} + 2m_{23} - 2m_{31} \\)%%<br>` +
        `%%\\( l_{eq} = ${truncate4(l1)} + ${truncate4(l2)} + ${truncate4(l3)} - 2(${truncate4(m12)}) + 2(${truncate4(m23)}) - 2(${truncate4(m31)}) \\)%%<br>` +
        `%%\\( l_{eq} = ${(truncate4(leq))} \\text{ h} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ12 = false;
function toggleSolutionQ12() {
    const container = document.getElementById("solution-container-q12");
    if (isSolutionVisibleQ12) { container.style.display = "none"; isSolutionVisibleQ12 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ12 = true; }
}

async function generateSolutionQ12() {
    let v_l1 = document.getElementById("p3q12-l1").value; let v_l2 = document.getElementById("p3q12-l2").value; let v_l3 = document.getElementById("p3q12-l3").value;
    let v_i = document.getElementById("p3q12-i").value; let v_t = document.getElementById("p3q12-t").value;
    
    const btn = document.getElementById("calc-btn-q12"); const spinner = document.getElementById("loading-spinner-q12"); const quickAnswer = document.getElementById("quick-answer-q12"); const separator = document.getElementById("solution-separator-q12"); const solutionContainer = document.getElementById("solution-container-q12"); const contentDiv = document.getElementById("solution-content-q12"); const cursor = document.getElementById("typing-cursor-q12"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q12"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ12 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_i || !v_t) {
        errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return;
    }

    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3); let i_val = Number(v_i); let t_val = Number(v_t);
    let k12 = 0.8; let k23 = 0.8; let k31 = 0.8;

    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || t_val <= 0) {
        errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return;
    }

    btn.disabled = true; contentDiv.innerHTML = "";
    let m12 = k12 * Math.sqrt(l1 * l2); let m31 = k31 * Math.sqrt(l3 * l1);
    
    let didt = (2 * i_val) / t_val;
    let e1 = (l1 - m12 - m31) * didt;

    quickAnswer.innerHTML = `answer: e<sub>1</sub> = ${truncate4(e1)} v`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ12 = true;

    let solutionHTML = 
        `%%\\( \\frac{di}{dt} = \\frac{2 \\times i}{t} = \\frac{2 \\times ${truncate4(i_val)}}{${truncate4(t_val)}} = ${truncate4(didt)} \\text{ a/s} \\)%%<br><br>` +
        `%%\\( m_{12} = 0.8 \\sqrt{l_1 l_2} = 0.8 \\sqrt{${truncate4(l1)} \\times ${truncate4(l2)}} = ${(truncate4(m12))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{31} = 0.8 \\sqrt{l_3 l_1} = 0.8 \\sqrt{${truncate4(l3)} \\times ${truncate4(l1)}} = ${(truncate4(m31))} \\text{ h} \\)%%<br><br>` +
        `%%\\( e_1 = l_1 \\frac{di}{dt} - m_{12} \\frac{di}{dt} - m_{31} \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_1 = (l_1 - m_{12} - m_{31}) \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_1 = (${truncate4(l1)} - ${truncate4(m12)} - ${truncate4(m31)}) \\times ${truncate4(didt)} \\)%%<br>` +
        `%%\\( e_1 = ${(truncate4(e1))} \\text{ v} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ13 = false;
function toggleSolutionQ13() {
    const container = document.getElementById("solution-container-q13");
    if (isSolutionVisibleQ13) { container.style.display = "none"; isSolutionVisibleQ13 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ13 = true; }
}

async function generateSolutionQ13() {
    let v_l1 = document.getElementById("p3q13-l1").value; let v_l2 = document.getElementById("p3q13-l2").value; let v_l3 = document.getElementById("p3q13-l3").value;
    let v_i = document.getElementById("p3q13-i").value; let v_t = document.getElementById("p3q13-t").value;
    
    const btn = document.getElementById("calc-btn-q13"); const spinner = document.getElementById("loading-spinner-q13"); const quickAnswer = document.getElementById("quick-answer-q13"); const separator = document.getElementById("solution-separator-q13"); const solutionContainer = document.getElementById("solution-container-q13"); const contentDiv = document.getElementById("solution-content-q13"); const cursor = document.getElementById("typing-cursor-q13"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q13"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ13 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_i || !v_t) {
        errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return;
    }

    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3); let i_val = Number(v_i); let t_val = Number(v_t);
    let k12 = 0.8; let k23 = 0.8; let k31 = 0.8;

    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || t_val <= 0) {
        errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return;
    }

    btn.disabled = true; contentDiv.innerHTML = "";
    let m23 = k23 * Math.sqrt(l2 * l3); let m31 = k31 * Math.sqrt(l3 * l1);
    
    let didt = (2 * i_val) / t_val;
    let e3 = (l3 + m23 - m31) * didt;

    quickAnswer.innerHTML = `answer: e<sub>3</sub> = ${truncate4(e3)} v`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ13 = true;

    let solutionHTML = 
        `%%\\( \\frac{di}{dt} = \\frac{2 \\times i}{t} = \\frac{2 \\times ${truncate4(i_val)}}{${truncate4(t_val)}} = ${truncate4(didt)} \\text{ a/s} \\)%%<br><br>` +
        `%%\\( m_{23} = 0.8 \\sqrt{l_2 l_3} = 0.8 \\sqrt{${truncate4(l2)} \\times ${truncate4(l3)}} = ${(truncate4(m23))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{31} = 0.8 \\sqrt{l_3 l_1} = 0.8 \\sqrt{${truncate4(l3)} \\times ${truncate4(l1)}} = ${(truncate4(m31))} \\text{ h} \\)%%<br><br>` +
        `%%\\( e_3 = l_3 \\frac{di}{dt} + m_{23} \\frac{di}{dt} - m_{31} \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_3 = (l_3 + m_{23} - m_{31}) \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_3 = (${truncate4(l3)} + ${truncate4(m23)} - ${truncate4(m31)}) \\times ${truncate4(didt)} \\)%%<br>` +
        `%%\\( e_3 = ${(truncate4(e3))} \\text{ v} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ14 = false;
function toggleSolutionQ14() {
    const container = document.getElementById("solution-container-q14");
    if (isSolutionVisibleQ14) { container.style.display = "none"; isSolutionVisibleQ14 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ14 = true; }
}

async function generateSolutionQ14() {
    let v_l1 = document.getElementById("p4q14-l1").value; let v_l2 = document.getElementById("p4q14-l2").value; let v_l3 = document.getElementById("p4q14-l3").value;
    const btn = document.getElementById("calc-btn-q14"); const spinner = document.getElementById("loading-spinner-q14"); const quickAnswer = document.getElementById("quick-answer-q14"); const separator = document.getElementById("solution-separator-q14"); const solutionContainer = document.getElementById("solution-container-q14"); const contentDiv = document.getElementById("solution-content-q14"); const cursor = document.getElementById("typing-cursor-q14"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q14"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ14 = false;

    if (!v_l1 || !v_l2 || !v_l3) { errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return; }
    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3);
    if (l1 <= 0 || l2 <= 0 || l3 <= 0) { errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return; }

    btn.disabled = true; contentDiv.innerHTML = "";
    let k_val = 0.9;
    
    let m12 = k_val * Math.sqrt(l1 * l2);
    let m23 = k_val * Math.sqrt(l2 * l3);
    let m31 = k_val * Math.sqrt(l3 * l1);
    
    let leq = l1 + l2 + l3 - (2 * m12) + (2 * m23) - (2 * m31);

    quickAnswer.innerHTML = `answer: l<sub>eq</sub> = ${truncate4(leq)} h`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ14 = true;

    let solutionHTML = 
        `coil 1 and 2 - <br>` + `coil 2 and 3 + <br>` + `coil 1 and 3 - <br><br>` +
        `%%\\( m_{12} = 0.9 \\sqrt{l_1 l_2} = 0.9 \\sqrt{${truncate4(l1)} \\times ${truncate4(l2)}} = ${(truncate4(m12))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{23} = 0.9 \\sqrt{l_2 l_3} = 0.9 \\sqrt{${truncate4(l2)} \\times ${truncate4(l3)}} = ${(truncate4(m23))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{31} = 0.9 \\sqrt{l_3 l_1} = 0.9 \\sqrt{${truncate4(l3)} \\times ${truncate4(l1)}} = ${(truncate4(m31))} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_{eq} = l_1 + l_2 + l_3 - 2m_{12} + 2m_{23} - 2m_{31} \\)%%<br>` +
        `%%\\( l_{eq} = ${truncate4(l1)} + ${truncate4(l2)} + ${truncate4(l3)} - 2(${truncate4(m12)}) + 2(${truncate4(m23)}) - 2(${truncate4(m31)}) \\)%%<br>` +
        `%%\\( l_{eq} = ${(truncate4(leq))} \\text{ h} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ15 = false;
function toggleSolutionQ15() {
    const container = document.getElementById("solution-container-q15");
    if (isSolutionVisibleQ15) { container.style.display = "none"; isSolutionVisibleQ15 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ15 = true; }
}

async function generateSolutionQ15() {
    let v_l1 = document.getElementById("p4q15-l1").value; let v_l2 = document.getElementById("p4q15-l2").value; let v_l3 = document.getElementById("p4q15-l3").value; let v_rate = document.getElementById("p4q15-rate").value;
    const btn = document.getElementById("calc-btn-q15"); const spinner = document.getElementById("loading-spinner-q15"); const quickAnswer = document.getElementById("quick-answer-q15"); const separator = document.getElementById("solution-separator-q15"); const solutionContainer = document.getElementById("solution-container-q15"); const contentDiv = document.getElementById("solution-content-q15"); const cursor = document.getElementById("typing-cursor-q15"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q15"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ15 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_rate) { errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return; }
    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3); let rate = Number(v_rate);
    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || rate <= 0) { errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return; }

    btn.disabled = true; contentDiv.innerHTML = "";
    let k_val = 0.9;
    
    let m12 = k_val * Math.sqrt(l1 * l2);
    let m23 = k_val * Math.sqrt(l2 * l3);
    
    let e2 = (l2 - m12 + m23) * rate;

    quickAnswer.innerHTML = `answer: e<sub>2</sub> = ${truncate4(e2)} v`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ15 = true;

    let solutionHTML = 
        `coil 1 and 2 - <br>` + `coil 2 and 3 + <br><br>` +
        `%%\\( m_{12} = 0.9 \\sqrt{l_1 l_2} = 0.9 \\sqrt{${truncate4(l1)} \\times ${truncate4(l2)}} = ${(truncate4(m12))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{23} = 0.9 \\sqrt{l_2 l_3} = 0.9 \\sqrt{${truncate4(l2)} \\times ${truncate4(l3)}} = ${(truncate4(m23))} \\text{ h} \\)%%<br><br>` +
        `%%\\( e_2 = l_2 \\frac{di}{dt} - m_{12} \\frac{di}{dt} + m_{23} \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_2 = (l_2 - m_{12} + m_{23}) \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_2 = (${truncate4(l2)} - ${truncate4(m12)} + ${truncate4(m23)}) \\times ${truncate4(rate)} \\)%%<br>` +
        `%%\\( e_2 = ${(truncate4(e2))} \\text{ v} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ16 = false;
function toggleSolutionQ16() {
    const container = document.getElementById("solution-container-q16");
    if (isSolutionVisibleQ16) { container.style.display = "none"; isSolutionVisibleQ16 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ16 = true; }
}

async function generateSolutionQ16() {
    let v_l1 = document.getElementById("p4q16-l1").value; let v_l2 = document.getElementById("p4q16-l2").value; let v_l3 = document.getElementById("p4q16-l3").value; let v_rate = document.getElementById("p4q16-rate").value;
    const btn = document.getElementById("calc-btn-q16"); const spinner = document.getElementById("loading-spinner-q16"); const quickAnswer = document.getElementById("quick-answer-q16"); const separator = document.getElementById("solution-separator-q16"); const solutionContainer = document.getElementById("solution-container-q16"); const contentDiv = document.getElementById("solution-content-q16"); const cursor = document.getElementById("typing-cursor-q16"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q16"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ16 = false;

    if (!v_l1 || !v_l2 || !v_l3 || !v_rate) { errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return; }
    let l1 = Number(v_l1); let l2 = Number(v_l2); let l3 = Number(v_l3); let rate = Number(v_rate);
    if (l1 <= 0 || l2 <= 0 || l3 <= 0 || rate <= 0) { errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return; }

    btn.disabled = true; contentDiv.innerHTML = "";
    let k_val = 0.9;
    
    let m23 = k_val * Math.sqrt(l2 * l3);
    let m31 = k_val * Math.sqrt(l3 * l1);
    
    let e3 = (l3 + m23 - m31) * rate;

    quickAnswer.innerHTML = `answer: e<sub>3</sub> = ${truncate4(e3)} v`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ16 = true;

    let solutionHTML = 
        `coil 2 and 3 + <br>` + `coil 1 and 3 - <br><br>` +
        `%%\\( m_{23} = 0.9 \\sqrt{l_2 l_3} = 0.9 \\sqrt{${truncate4(l2)} \\times ${truncate4(l3)}} = ${(truncate4(m23))} \\text{ h} \\)%%<br>` +
        `%%\\( m_{31} = 0.9 \\sqrt{l_3 l_1} = 0.9 \\sqrt{${truncate4(l3)} \\times ${truncate4(l1)}} = ${(truncate4(m31))} \\text{ h} \\)%%<br><br>` +
        `%%\\( e_3 = l_3 \\frac{di}{dt} + m_{23} \\frac{di}{dt} - m_{31} \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_3 = (l_3 + m_{23} - m_{31}) \\frac{di}{dt} \\)%%<br>` +
        `%%\\( e_3 = (${truncate4(l3)} + ${truncate4(m23)} - ${truncate4(m31)}) \\times ${truncate4(rate)} \\)%%<br>` +
        `%%\\( e_3 = ${(truncate4(e3))} \\text{ v} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ17 = false;
function toggleSolutionQ17() {
    const container = document.getElementById("solution-container-q17");
    if (isSolutionVisibleQ17) { container.style.display = "none"; isSolutionVisibleQ17 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ17 = true; }
}

async function generateSolutionQ17() {
    let v_x = document.getElementById("p5q17-x").value; let v_e = document.getElementById("p5q17-e").value; let v_l = document.getElementById("p5q17-l").value;
    const btn = document.getElementById("calc-btn-q17"); const spinner = document.getElementById("loading-spinner-q17"); const quickAnswer = document.getElementById("quick-answer-q17"); const separator = document.getElementById("solution-separator-q17"); const solutionContainer = document.getElementById("solution-container-q17"); const contentDiv = document.getElementById("solution-content-q17"); const cursor = document.getElementById("typing-cursor-q17"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q17"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ17 = false;

    if (!v_x || !v_e || !v_l) { errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return; }
    let x = Number(v_x); let e = Number(v_e); let l = Number(v_l);
    if (x <= 0 || e <= 0 || l <= 0) { errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return; }

    btn.disabled = true; contentDiv.innerHTML = "";
    
    let m_h = e / x; 
    let m_mh = m_h * 1000;

    quickAnswer.innerHTML = `answer: m = ${truncate4(m_mh)} mh`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ17 = true;

    let solutionHTML = 
        `%%\\( e = m \\frac{di}{dt} \\)%%<br>` +
        `%%\\( m = \\frac{e}{di/dt} = \\frac{e}{x} \\)%%<br>` +
        `%%\\( m = \\frac{${truncate4(e)}}{${truncate4(x)}} \\)%%<br>` +
        `%%\\( m = ${truncate4(m_h)} \\text{ h} \\)%%<br><br>` +
        `%%\\( m = ${truncate4(m_h)} \\times 1000 = ${truncate4(m_mh)} \\text{ mh} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ18 = false;
function toggleSolutionQ18() {
    const container = document.getElementById("solution-container-q18");
    if (isSolutionVisibleQ18) { container.style.display = "none"; isSolutionVisibleQ18 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ18 = true; }
}

async function generateSolutionQ18() {
    let v_x = document.getElementById("p5q18-x").value; let v_e = document.getElementById("p5q18-e").value; let v_l = document.getElementById("p5q18-l").value;
    const btn = document.getElementById("calc-btn-q18"); const spinner = document.getElementById("loading-spinner-q18"); const quickAnswer = document.getElementById("quick-answer-q18"); const separator = document.getElementById("solution-separator-q18"); const solutionContainer = document.getElementById("solution-container-q18"); const contentDiv = document.getElementById("solution-content-q18"); const cursor = document.getElementById("typing-cursor-q18"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q18"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ18 = false;

    if (!v_x || !v_e || !v_l) { errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return; }
    let x = Number(v_x); let e = Number(v_e); let l = Number(v_l);
    if (x <= 0 || e <= 0 || l <= 0) { errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return; }

    btn.disabled = true; contentDiv.innerHTML = "";
    
    let m = e / x; 
    let k = m / l;

    quickAnswer.innerHTML = `answer: k = ${truncate4(k)}`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ18 = true;

    let solutionHTML = 
        `%%\\( m = \\frac{e}{x} = \\frac{${truncate4(e)}}{${truncate4(x)}} = ${truncate4(m)} \\text{ h} \\)%%<br><br>` +
        `%%\\( l_1 = l_2 = l \\)%%:<br>` +
        `%%\\( k = \\frac{m}{\\sqrt{l_1 l_2}} = \\frac{m}{l} \\)%%<br>` +
        `%%\\( k = \\frac{${truncate4(m)}}{${truncate4(l)}} \\)%%<br>` +
        `%%\\( k = ${truncate4(k)} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ19 = false;
function toggleSolutionQ19() {
    const container = document.getElementById("solution-container-q19");
    if (isSolutionVisibleQ19) { container.style.display = "none"; isSolutionVisibleQ19 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ19 = true; }
}

async function generateSolutionQ19() {
    let v_x = document.getElementById("p5q19-x").value; let v_e = document.getElementById("p5q19-e").value; let v_l = document.getElementById("p5q19-l").value;
    const btn = document.getElementById("calc-btn-q19"); const spinner = document.getElementById("loading-spinner-q19"); const quickAnswer = document.getElementById("quick-answer-q19"); const separator = document.getElementById("solution-separator-q19"); const solutionContainer = document.getElementById("solution-container-q19"); const contentDiv = document.getElementById("solution-content-q19"); const cursor = document.getElementById("typing-cursor-q19"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q19"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ19 = false;

    if (!v_x || !v_e || !v_l) { errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return; }
    let x = Number(v_x); let e = Number(v_e); let l = Number(v_l);
    if (x <= 0 || e <= 0 || l <= 0) { errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return; }

    btn.disabled = true; contentDiv.innerHTML = "";
    
    let n = 100;
    let flux_per_amp = l / n;

    quickAnswer.innerHTML = `answer: &phi;/i = ${truncate4(flux_per_amp)} wb/a`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ19 = true;

    let solutionHTML = 
        `%%\\( l = \\frac{n \\phi}{i} \\)%%<br>` +
        `%%\\( \\frac{\\phi}{i} = \\frac{l}{n} \\)%%<br>` +
        `%%\\( \\frac{\\phi}{i} = \\frac{${truncate4(l)}}{100} \\)%%<br>` +
        `%%\\( \\frac{\\phi}{i} = ${truncate4(flux_per_amp)} \\text{ wb/a} \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

let isSolutionVisibleQ20 = false;
function toggleSolutionQ20() {
    const container = document.getElementById("solution-container-q20");
    if (isSolutionVisibleQ20) { container.style.display = "none"; isSolutionVisibleQ20 = false; } 
    else { container.style.display = "flex"; isSolutionVisibleQ20 = true; }
}

async function generateSolutionQ20() {
    let v_x = document.getElementById("p5q20-x").value; let v_e = document.getElementById("p5q20-e").value; let v_l = document.getElementById("p5q20-l").value;
    const btn = document.getElementById("calc-btn-q20"); const spinner = document.getElementById("loading-spinner-q20"); const quickAnswer = document.getElementById("quick-answer-q20"); const separator = document.getElementById("solution-separator-q20"); const solutionContainer = document.getElementById("solution-container-q20"); const contentDiv = document.getElementById("solution-content-q20"); const cursor = document.getElementById("typing-cursor-q20"); const mathBuffer = document.getElementById("math-buffer"); const errorMsg = document.getElementById("error-msg-q20"); 
    resetUI(quickAnswer, separator, solutionContainer, errorMsg); isSolutionVisibleQ20 = false;

    if (!v_x || !v_e || !v_l) { errorMsg.innerText = "please fill in all blank boxes."; errorMsg.style.display = "block"; return; }
    let x = Number(v_x); let e = Number(v_e); let l = Number(v_l);
    if (x <= 0 || e <= 0 || l <= 0) { errorMsg.innerText = "please enter valid positive numbers."; errorMsg.style.display = "block"; return; }

    btn.disabled = true; contentDiv.innerHTML = "";
    
    let m = e / x; 
    let k = m / l; 
    let k_pct = k * 100;

    quickAnswer.innerHTML = `answer: ${truncate4(k_pct)} %`; quickAnswer.style.display = "block"; separator.style.display = "flex"; solutionContainer.style.display = "flex"; spinner.style.display = "block"; cursor.style.display = "inline-block"; isSolutionVisibleQ20 = true;

    let solutionHTML = 
        `%%\\( m = \\frac{e}{x} = \\frac{${truncate4(e)}}{${truncate4(x)}} = ${truncate4(m)} \\text{ h} \\)%%<br>` +
        `%%\\( k = \\frac{m}{l} = \\frac{${truncate4(m)}}{${truncate4(l)}} = ${truncate4(k)} \\)%%<br><br>` +
        `%%\\( \\text{percentage} = k \\times 100 \\)%%<br>` +
        `%%\\( \\text{percentage} = ${truncate4(k_pct)} \\% \\)%%`;
    await typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn);
}

async function typeoutSolution(solutionHTML, contentDiv, mathBuffer, spinner, cursor, btn) {
    let parts = solutionHTML.split('%%');
    let currentText = "";

    for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 0) {
            const textChunks = parts[i].split(/(<[^>]+>)/g);
            for (let chunk of textChunks) {
                if (chunk.startsWith("<")) {
                    currentText += chunk;
                    contentDiv.innerHTML = currentText;
                } else {
                    for (let char of chunk) {
                        currentText += char;
                        contentDiv.innerHTML = currentText;
                        await sleep(10); 
                    }
                }
            }
        } else {
            mathBuffer.innerHTML = parts[i];
            if (window.MathJax) {
                await MathJax.typesetPromise([mathBuffer]);
            }
            currentText += mathBuffer.innerHTML;
            contentDiv.innerHTML = currentText;
            mathBuffer.innerHTML = "";
            await sleep(40); 
        }
    }
    spinner.style.display = "none";
    cursor.style.display = "none";
    btn.disabled = false;
}
