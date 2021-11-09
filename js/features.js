
window.onload = function () {
    const graphContainer = document.querySelector('#graph');
    const modelSelector = document.querySelector('#modelSelector');
    const featureSelector = document.querySelector('#featureSelector');

    const plotEmbeddedFeatures = () => {
        const feature = featureSelector.value;
        const model = modelSelector.value;
        const plotData = Features[model][feature];
        console.log(plotData, model, feature);
        if (plotData) {
            Plotly.newPlot(graphContainer, plotData);
        }
    };

    const addFeatureOptions = function () {
        Features.featureOptions.forEach(feature => {
            const option = document.createElement('option');
            option.innerText = feature;
            featureSelector.appendChild(option);
        });
    };

    const addModelOptions = function () {
        Object.keys(Features)
            .filter(key => key !== 'featureOptions')
            .forEach(model => {
                const option = document.createElement('option');
                option.innerText = model;
                modelSelector.appendChild(option);
            });
    };

    addFeatureOptions();
    addModelOptions();
    modelSelector.onchange = plotEmbeddedFeatures;
    featureSelector.onchange = plotEmbeddedFeatures;
};