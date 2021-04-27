echo "const PlotData = {};" > data/index.js
echo "PlotData.redshift = $(cat data/redshift.json);" >> data/index.js
echo "PlotData.bptclass = $(cat data/bptclass.json);" >> data/index.js
echo "PlotData.petroR90 = $(cat data/petroR90.json);" >> data/index.js
echo "PlotData.lgm_tot_p50 = $(cat data/lgm_tot_p50.json);" >> data/index.js
echo "const PointMetadata = $(cat data/metadata.json);" >> data/index.js
