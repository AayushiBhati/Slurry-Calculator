function calculate() {
    let plantCapacity = parseFloat(document.getElementById("plantCapacity").value);
    let solMass = parseFloat(document.getElementById("solMass").value);
    let solVol = parseFloat(document.getElementById("solVol").value);
    let slurryDensity = parseFloat(document.getElementById("slurryDensity").value);
    let soldensity = parseFloat(document.getElementById("soldensity").value);
    let liqdensity = parseFloat(document.getElementById("liqdensity").value);

    if (isNaN(plantCapacity) || isNaN(solMass) || isNaN(solVol) || isNaN(slurryDensity) || isNaN(soldensity) || isNaN(liqdensity)) {
        alert("Please enter valid numeric values.");
        return;
    }

    let ironOreFeed = plantCapacity * 1000000 / (24 * 330);
    let solidsFlowRate = ironOreFeed;
    let liquidsFlowRate = solidsFlowRate * (100 - solMass) / solMass;
    let slurryFlowRate = (solidsFlowRate + liquidsFlowRate) / slurryDensity;

    document.getElementById("slurryFlowRate").textContent = `Slurry Flow Rate (m3/hr): ${slurryFlowRate.toFixed(2)}`;
    document.getElementById("solidsFlowRate").textContent = `Solids Flow Rate (TPH): ${solidsFlowRate.toFixed(2)}`;
    document.getElementById("liquidsFlowRate").textContent = `Liquids Flow Rate (TPH): ${liquidsFlowRate.toFixed(2)}`;
}
