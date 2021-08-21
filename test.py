from PIL import Image
import os

img = Image.open("dados.png")

img.load()

background = Image.new("RGB", img.size, (255, 255, 255))
background.paste(img, mask=img.split()[3])

background.save(f"dados-min.jpg", optimize=True, quality=50)
