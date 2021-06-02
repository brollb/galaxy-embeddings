from astropy.visualization import make_lupton_rgb
import sys
import numpy as np
from tqdm import tqdm
from PIL import Image

if len(sys.argv) < 2:
    print(f'usage: {sys.argv[0]} path/to/dataset.npy')
    exit(1)

dataset = np.load(sys.argv[1], mmap_mode='r')

for idx in tqdm(range(dataset.shape[0])):
    cube = dataset[idx]
    image = make_lupton_rgb(cube[:,:,3], cube[:,:,2], cube[:,:,1], Q=10, stretch=0.5)
    Image.fromarray(image).save(f'image_{str(idx).zfill(6)}.jpg')

