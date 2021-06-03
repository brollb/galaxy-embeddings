const container = document.getElementById('graph');
const img = document.getElementById('preview');
const subtitle = document.getElementById('subtitle');
const picker = document.getElementById('graphPicker');

Object.keys(PlotData).forEach(category => {
    const opt = document.createElement('option');
    opt.innerText = category;
    picker.appendChild(opt);
});
picker.onchange = event => showGraph(picker.value);

showGraph(picker.value, false);

function showGraph(category, restoreView=true) {
    let layout;
    if (restoreView) {
        const scene = container._fullLayout.scene._scene;
        layout = {};
        scene.saveLayout(layout);
    }

    Object.assign(PlotData[category].layout, getLayout(container));
    Plotly.newPlot(container, PlotData[category]);
    container.on('plotly_click', data => {
        const [point] = data.points;
        const metadata = PointMetadata[point.pointNumber];
        const {ra, dec} = metadata;
        const url = getImageURL(point.pointNumber);
        img.setAttribute('style', 'display:inline');
        img.setAttribute('src', url);
        img.onclick = () => window.open(getNaviURL(ra, dec), '_blank');
        subtitle.innerText = Object.entries(metadata)
        .map(entry => `${entry[0]}: ${entry[1]}`)
        .join('\n');
    });

    if (restoreView) {
        const scene = container._fullLayout.scene._scene;
        scene.setViewport(layout.scene);
    }
}

function getImageURL(num) {
    return `./images/image_${num.toString().padStart(6, '0')}.jpg`;
}

function getNaviURL(ra, dec) {
    return `http://skyserver.sdss.org/dr14/en/tools/chart/navi.aspx?ra=${ra}&dec=${dec}&scale=0.2&width=120&height=120`;
}

function getLayout(element) {
    return {
        width: element.getBoundingClientRect().width,
        height: element.getBoundingClientRect().height,
    };
}

