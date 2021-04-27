import json
import numpy as np
labels = np.load('./sdss-labels-10k.npz')
fields = ['ra', 'dec', 'z', 'zphot', 'dzphot', 'spectrotype', 'bptclass', 'dust1_mean', 'dust2_mean', 'logMass_median']
field_idx = [ (name, idx) for (idx, name) in enumerate(labels.dtype.names) if name in fields]

def obj_from_list(l, key_idx):
    result = {}
    for (name, idx) in key_idx:
        value = l[idx].item()
        if type(value) is bytes:
            value = str(value)
        result[name] = value
    return result

metadata = [ obj_from_list(row, field_idx) for row in labels ]
print(json.dumps(metadata))
