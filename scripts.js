function calculate() {
    const plantCapacity = parseFloat(document.getElementById('plantCapacity').value);
    const liqdensity = parseFloat(document.getElementById('liqdensity').value);
    const soldensity = parseFloat(document.getElementById('soldensity').value);
    const solVol = parseFloat(document.getElementById('solVol').value);
    const solMass = parseFloat(document.getElementById('solMass').value);
    const slurryDensity = parseFloat(document.getElementById('slurryDensity').value);

    if (isNaN(plantCapacity) || isNaN(liqdensity) || isNaN(soldensity) || isNaN(solVol) || isNaN(solMass) || isNaN(slurryDensity)) {
        alert('Please enter valid numeric values.');
        return;
    }

    const ironOreFeed = plantCapacity * 1000000 / (24 * 330);
    const solidsFlowRate = ironOreFeed;
    const liquidsFlowRate = solidsFlowRate * (100 - solMass) / solMass;
    const slurryFlowRate = (solidsFlowRate + liquidsFlowRate) / slurryDensity;

    document.getElementById('slurryFlowRate').innerText = `Slurry Flow Rate: ${slurryFlowRate.toFixed(2)} m3/hr`;
    document.getElementById('solidsFlowRate').innerText = `Solids Flow Rate: ${solidsFlowRate.toFixed(2)} TPH`;
    document.getElementById('liquidsFlowRate').innerText = `Liquids Flow Rate: ${liquidsFlowRate.toFixed(2)} TPH`;
}
