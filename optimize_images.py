import os
from PIL import Image

IMG_DIR = 'images'
QUALITY = 80  # Adjust for more/less compression

for filename in os.listdir(IMG_DIR):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        path = os.path.join(IMG_DIR, filename)
        img = Image.open(path)
        # Compress and overwrite original
        img.save(path, optimize=True, quality=QUALITY)
        # Convert to WebP
        webp_path = os.path.splitext(path)[0] + '.webp'
        img.save(webp_path, 'WEBP', quality=QUALITY)
        print(f'Optimized and converted: {filename} -> {os.path.basename(webp_path)}') 