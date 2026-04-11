const mu0 = 4 * Math.PI * Math.pow(10, -7);

const p1_length_steel = 0.5;
const p1_area = 2 * Math.pow(10, -4);
const p1_turns = 700;
const p1_length_gap = 1.5 * Math.pow(10, -3);
const p1_flux = 0.5 * Math.pow(10, -3);

const p1_B = p1_flux / p1_area; 

function calcP1Q1() {
    let mu_r = Number(document.getElementById("p1q1-x").value);
    let resultBox = document.getElementById("p1q1-result");

    if (mu_r <= 0) return resultBox.innerHTML = "please enter a valid x value.";

    let H_steel = p1_B / (mu0 * mu_r);
    let H_gap = p1_B / mu0;
    
    let mmf_total = (H_steel * p1_length_steel) + (H_gap * p1_length_gap);
    let current = mmf_total / p1_turns;
    let choppedcurrent = Math.trunc(current * 10000) / 10000;
    resultBox.innerHTML = "answer: i = " + choppedcurrent.toFixed(4) + " amperes";
}

function calcP1Q2() {
    let mu_r = Number(document.getElementById("p1q2-x").value);
    let resultBox = document.getElementById("p1q2-result");

    if (mu_r <= 0) return resultBox.innerHTML = "please enter a valid x value.";

    let H_steel = p1_B / (mu0 * mu_r);
    H_steel = Math.trunc(H_steel * 10000) / 10000;
    resultBox.innerHTML = "answer: h<sub>rod</sub> = " + H_steel.toFixed(4) + " at/m";
}

// Automatically populate Q3 since it doesn't need an input button
let p1_H_gap = p1_B / mu0;
p1_H_gap = Math.trunc(p1_H_gap * 10000) / 10000;
document.getElementById("p1q3-result").innerHTML = "answer: h<sub>gap</sub> = " + p1_H_gap.toFixed(4) + " at/m";


function getHfromB(B) {
    const bValues = [0.0, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6];
    const hValues = [0, 200, 300, 420, 600, 900, 1600, 3000];

    if (B >= bValues[bValues.length - 1]) return hValues[hValues.length - 1];

    for (let i = 0; i < bValues.length - 1; i++) {
        if (B >= bValues[i] && B <= bValues[i+1]) {
            return hValues[i] + (B - bValues[i]) * (hValues[i+1] - hValues[i]) / (bValues[i+1] - bValues[i]);
        }
    }
    return 0;
}

const p2_len_b = 0.1;
const p2_area_a = 4 * Math.pow(10, -4);
const p2_B_b = 0.8;
const p2_H_b = 420;
const p2_current = 0.5;

function calculateP2Core(lenId, areaId, resultId) {
    let len_a_cm = Number(document.getElementById(lenId).value);
    let area_b_cm2 = Number(document.getElementById(areaId).value);
    let resultBox = document.getElementById(resultId);

    if (len_a_cm <= 0 || area_b_cm2 <= 0) {
        resultBox.innerHTML = "please enter valid numbers.";
        return null; 
    }

    let len_a = len_a_cm / 100; 
    let area_b = area_b_cm2 * Math.pow(10, -4); 
    
    const area_a = 4 * Math.pow(10, -4); 
    const len_b = 0.1; 

    let total_flux, B_a, B_b, H_a, H_b;

    if (area_a > area_b) {
        B_a = 0.8;
        total_flux = B_a * area_a;
        B_b = total_flux / area_b;
    } else {
        B_b = 0.8;
        total_flux = B_b * area_b;
        B_a = total_flux / area_a;
    }

    H_a = getHfromB(B_a);
    H_b = getHfromB(B_b);

    let net_mmf = (H_a * len_a) + (H_b * len_b);

    return { 
        flux: total_flux, 
        B_a: B_a, 
        H_a: H_a, 
        mmf: net_mmf, 
        resultBox: resultBox 
    };
}

function calcP2Q4() {
    let core = calculateP2Core("p2q4-len", "p2q4-area", "p2q4-result");
    if (!core) return;

    let choppedMMF = Math.trunc(core.mmf * 10000) / 10000;
    core.resultBox.innerHTML = "answer: net mmf = " + choppedMMF.toFixed(4) + " at";
}

function calcP2Q5() {
    let core = calculateP2Core("p2q5-len", "p2q5-area", "p2q5-result");
    if (!core) return;

    let turns = core.mmf / p2_current;
    
    let choppedTurns = Math.trunc(turns * 10000) / 10000;
    core.resultBox.innerHTML = "answer: n = " + choppedTurns.toFixed(4) + " turns";
}

function calcP2Q6() {
    let core = calculateP2Core("p2q6-len", "p2q6-area", "p2q6-result");
    if (!core) return;

    let reluctance = core.mmf / core.flux;

    let choppedReluctance = Math.trunc(reluctance * 10000) / 10000;
    core.resultBox.innerHTML = "answer: reluctance = " + choppedReluctance.toFixed(4) + " at/wb";
}

function calcP2Q7() {
    let core = calculateP2Core("p2q7-len", "p2q7-area", "p2q7-result");
    if (!core) return;

    if (core.H_a === 0) {
        return core.resultBox.innerHTML = "error: h is zero, cannot calculate permeability.";
    }

    let mu_r = core.B_a / (core.H_a * mu0);

    let choppedMu_r = Math.trunc(mu_r * 10000) / 10000;
    core.resultBox.innerHTML = "answer: relative permeability (&mu;<sub>r</sub>) = " + choppedMu_r.toFixed(4);
}

function calcP3Q1() {
    let flux_b = Number(document.getElementById("p3q1-flux-b").value);
    let rel_b = Number(document.getElementById("p3q1-rel-b").value);
    let rel_c = Number(document.getElementById("p3q1-rel-c").value);
    let resultBox = document.getElementById("p3q1-result");

    if (!flux_b || !rel_b || !rel_c) return resultBox.innerHTML = "please enter all values.";

    let flux_c = (flux_b * rel_b) / rel_c;

    let chopped = Math.trunc(flux_c * 10000) / 10000;
    resultBox.innerHTML = "answer: flux in c = " + chopped.toFixed(4) + " mwb";
}

function calcP3Q2() {
    let flux_b_mWb = Number(document.getElementById("p3q2-flux-b").value);
    let rel_b = Number(document.getElementById("p3q2-rel-b").value);
    let rel_c = Number(document.getElementById("p3q2-rel-c").value);
    let turns = Number(document.getElementById("p3q2-turns").value);
    let current = Number(document.getElementById("p3q2-current").value);
    let resultBox = document.getElementById("p3q2-result");

    if (!flux_b_mWb || !rel_b || !rel_c || !turns || !current) return resultBox.innerHTML = "please enter all values.";

    let flux_b = flux_b_mWb * Math.pow(10, -3); 

    let mmf_total = turns * current;
    let mmf_parallel = flux_b * rel_b;
    let flux_c = mmf_parallel / rel_c;
    let flux_a = flux_b + flux_c;
    let mmf_a = mmf_total - mmf_parallel;
    let rel_a = mmf_a / flux_a;

    let chopped = Math.trunc(rel_a * 10000) / 10000;
    resultBox.innerHTML = "answer: reluctance a = " + chopped.toFixed(4) + " at/wb";
}

function calcP3Q3() {
    let flux_c_mWb = Number(document.getElementById("p3q3-flux-c").value);
    let rel_a = Number(document.getElementById("p3q3-rel-a").value);
    let rel_b = Number(document.getElementById("p3q3-rel-b").value);
    let rel_c = Number(document.getElementById("p3q3-rel-c").value);
    let turns = Number(document.getElementById("p3q3-turns").value);
    let resultBox = document.getElementById("p3q3-result");

    if (!flux_c_mWb || !rel_a || !rel_b || !rel_c || !turns) return resultBox.innerHTML = "please enter all values.";

    let flux_c = flux_c_mWb * Math.pow(10, -3);

    let mmf_parallel = flux_c * rel_c;
    let flux_b = mmf_parallel / rel_b;
    let flux_a = flux_b + flux_c;
    let mmf_a = flux_a * rel_a;
    let mmf_total = mmf_a + mmf_parallel;
    let current_amps = mmf_total / turns;
    let current_mA = current_amps * 1000;

    let chopped = Math.trunc(current_mA * 10000) / 10000;
    resultBox.innerHTML = "answer: current = " + chopped.toFixed(4) + " ma";
}

const p4_perm = 2400;

function calcP4Q11() {
    let len_cm = Number(document.getElementById("p4q11-len").value);
    let area_cm2 = Number(document.getElementById("p4q11-area").value);
    let turns = Number(document.getElementById("p4q11-turns").value);
    let flux_mWb = Number(document.getElementById("p4q11-flux").value);
    let resultBox = document.getElementById("p4q11-result");

    if (!len_cm || !area_cm2 || !turns || !flux_mWb) {
        return resultBox.innerHTML = "please enter all values.";
    }

    let len = len_cm / 100; 
    let area = area_cm2 * Math.pow(10, -4); 
    let flux = flux_mWb * Math.pow(10, -3); 

    let B = flux / area;
    let H = B / (mu0 * p4_perm);
    let mmf = H * len;
    let current = mmf / turns;

    let chopped = Math.trunc(current * 10000) / 10000;
    resultBox.innerHTML = "answer: current = " + chopped.toFixed(4) + " amperes";
}

function calcP4Q12() {
    let len_cm = Number(document.getElementById("p4q12-len").value);
    let gap_cm = Number(document.getElementById("p4q12-gap").value);
    let area_cm2 = Number(document.getElementById("p4q12-area").value);
    let turns = Number(document.getElementById("p4q12-turns").value);
    let flux_mWb = Number(document.getElementById("p4q12-flux").value);
    let resultBox = document.getElementById("p4q12-result");

    if (!len_cm || !gap_cm || !area_cm2 || !turns || !flux_mWb) {
        return resultBox.innerHTML = "please enter all values.";
    }

    let gap = gap_cm / 100; 
    let core_len = (len_cm - gap_cm) / 100; 
    let area = area_cm2 * Math.pow(10, -4); 
    let flux = flux_mWb * Math.pow(10, -3); 

    let B = flux / area;
    
    let H_core = B / (mu0 * p4_perm);
    let mmf_core = H_core * core_len;

    let H_gap = B / mu0;
    let mmf_gap = H_gap * gap;

    let mmf_total = mmf_core + mmf_gap;
    let current = mmf_total / turns;

    let chopped = Math.trunc(current * 10000) / 10000;
    resultBox.innerHTML = "answer: current = " + chopped.toFixed(4) + " amperes";
}

const p5_mu_r = 1200;
const p5_area = 16 * Math.pow(10, -4);
const p5_gap_len = 0.2 / 100;

const p5_len_outer = 0.44;
const p5_len_center_iron = 0.158;

function calcP5Q13() {
    let flux_gap_mWb = Number(document.getElementById("p5q13-flux").value);
    let resultBox = document.getElementById("p5q13-result");
    if (!flux_gap_mWb) return resultBox.innerHTML = "please enter the flux.";

    let flux_left_mWb = flux_gap_mWb / 2;
    
    let b_left = flux_left_mWb / p5_area; 

    let chopped = Math.trunc(b_left * 10000) / 10000;
    resultBox.innerHTML = "answer: flux density = " + chopped.toFixed(4) + " mwb/m²";
}

function calcP5Q14() {
    let flux_gap_mWb = Number(document.getElementById("p5q14-flux").value);
    let resultBox = document.getElementById("p5q14-result");
    if (!flux_gap_mWb) return resultBox.innerHTML = "please enter the flux.";

    let flux_right = (flux_gap_mWb / 2) * Math.pow(10, -3);
    
    let b_right = flux_right / p5_area;
    let h_right = b_right / (mu0 * p5_mu_r);
    let mmf_right = h_right * p5_len_outer;

    let chopped = Math.trunc(mmf_right * 10000) / 10000;
    resultBox.innerHTML = "answer: mmf in right limb = " + chopped.toFixed(4) + " at";
}

function calcP5Q15() {
    let flux_gap_mWb = Number(document.getElementById("p5q15-flux").value);
    let resultBox = document.getElementById("p5q15-result");
    if (!flux_gap_mWb) return resultBox.innerHTML = "please enter the flux.";

    let flux_center = flux_gap_mWb * Math.pow(10, -3);
    let b_center = flux_center / p5_area;
    
    let h_center_iron = b_center / (mu0 * p5_mu_r);
    let h_gap = b_center / mu0;
    let mmf_center = (h_center_iron * p5_len_center_iron) + (h_gap * p5_gap_len);

    let flux_right = flux_center / 2;
    let b_right = flux_right / p5_area;
    let h_right = b_right / (mu0 * p5_mu_r);
    let mmf_right = h_right * p5_len_outer;

    let mmf_total = mmf_center + mmf_right;

    let chopped = Math.trunc(mmf_total * 10000) / 10000;
    resultBox.innerHTML = "answer: total mmf = " + chopped.toFixed(4) + " at";
}

function calcP5Q16() {
    let turns = Number(document.getElementById("p5q16-turns").value);
    let flux_gap_mWb = Number(document.getElementById("p5q16-flux").value);
    let resultBox = document.getElementById("p5q16-result");
    if (!turns || !flux_gap_mWb) return resultBox.innerHTML = "please enter n and flux.";

    let flux_center = flux_gap_mWb * Math.pow(10, -3);
    let b_center = flux_center / p5_area;
    
    let h_center_iron = b_center / (mu0 * p5_mu_r);
    let h_gap = b_center / mu0;
    let mmf_center = (h_center_iron * p5_len_center_iron) + (h_gap * p5_gap_len);

    let flux_right = flux_center / 2;
    let b_right = flux_right / p5_area;
    let h_right = b_right / (mu0 * p5_mu_r);
    let mmf_right = h_right * p5_len_outer;

    let mmf_total = mmf_center + mmf_right;
    
    let current = mmf_total / turns;

    let chopped = Math.trunc(current * 10000) / 10000;
    resultBox.innerHTML = "answer: current = " + chopped.toFixed(4) + " amperes";
}

const p6_mu_r = 1200;
const p6_area = 16 * Math.pow(10, -4);

const p6_len_top_iron = 0.42;

const p6_len_mid_iron = 0.259;
const p6_len_mid_gap = 0.001; 

const p6_len_bot_iron = 0.419;
const p6_len_bot_gap = 0.001; 

const p6_R_top = p6_len_top_iron / (mu0 * p6_mu_r * p6_area);
const p6_R_mid = (p6_len_mid_iron / (mu0 * p6_mu_r * p6_area)) + (p6_len_mid_gap / (mu0 * p6_area));
const p6_R_bot = (p6_len_bot_iron / (mu0 * p6_mu_r * p6_area)) + (p6_len_bot_gap / (mu0 * p6_area));

function calcP6Q17() {
    let flux_top_mWb = Number(document.getElementById("p6q17-flux").value);
    let resultBox = document.getElementById("p6q17-result");
    if (!flux_top_mWb) return resultBox.innerHTML = "please enter the flux.";

    let flux_top = flux_top_mWb * Math.pow(10, -3);
    
    let mmf_parallel = flux_top * p6_R_top;
    let flux_mid = mmf_parallel / p6_R_mid; 
    
    let flux_mid_mWb = flux_mid * 1000;
    let chopped = Math.trunc(flux_mid_mWb * 10000) / 10000;
    resultBox.innerHTML = "answer: flux in bae = " + chopped.toFixed(4) + " mwb";
}

function calcP6Q18() {
    let flux_top_mWb = Number(document.getElementById("p6q18-flux").value);
    let resultBox = document.getElementById("p6q18-result");
    if (!flux_top_mWb) return resultBox.innerHTML = "please enter the flux.";

    let flux_top = flux_top_mWb * Math.pow(10, -3);
    let mmf_parallel = flux_top * p6_R_top;
    let flux_mid = mmf_parallel / p6_R_mid;
    
    let flux_bot = flux_top + flux_mid; 

    let flux_bot_mWb = flux_bot * 1000;
    let chopped = Math.trunc(flux_bot_mWb * 10000) / 10000;
    resultBox.innerHTML = "answer: flux in bhgfe = " + chopped.toFixed(4) + " mwb";
}

function calcP6Q19() {
    let flux_top_mWb = Number(document.getElementById("p6q19-flux").value);
    let resultBox = document.getElementById("p6q19-result");
    if (!flux_top_mWb) return resultBox.innerHTML = "please enter the flux.";

    let flux_top = flux_top_mWb * Math.pow(10, -3);
    
    let mmf_parallel = flux_top * p6_R_top;
    let flux_mid = mmf_parallel / p6_R_mid;
    let flux_bot = flux_top + flux_mid;
    
    let mmf_bot = flux_bot * p6_R_bot;
    
    let mmf_total = mmf_bot + mmf_parallel;

    let chopped = Math.trunc(mmf_total * 10000) / 10000;
    resultBox.innerHTML = "answer: total mmf = " + chopped.toFixed(4) + " at";
}

function calcP6Q20() {
    let turns = Number(document.getElementById("p6q20-turns").value);
    let flux_top_mWb = Number(document.getElementById("p6q20-flux").value);
    let resultBox = document.getElementById("p6q20-result");
    
    if (!turns || !flux_top_mWb) return resultBox.innerHTML = "please enter both n and flux.";

    let flux_top = flux_top_mWb * Math.pow(10, -3);
    
    let mmf_parallel = flux_top * p6_R_top;
    let flux_mid = mmf_parallel / p6_R_mid;
    let flux_bot = flux_top + flux_mid;
    let mmf_bot = flux_bot * p6_R_bot;
    
    let mmf_total = mmf_bot + mmf_parallel;
    
    let current = mmf_total / turns;

    let chopped = Math.trunc(current * 10000) / 10000;
    resultBox.innerHTML = "answer: current = " + chopped.toFixed(4) + " amperes";
}
