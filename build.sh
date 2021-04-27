echo "const PlotData = {};" > data/index.js
echo "PlotData.redshift = $(cat data/redshift.json);" >> data/index.js
echo "PlotData.bptclass = $(cat data/bptclass.json);" >> data/index.js
echo "const PointMetadata = $(cat data/metadata.json);" >> data/index.js
