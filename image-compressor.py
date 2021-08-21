from PIL import Image
from argparse import ArgumentParser
import os

parser = ArgumentParser()
parser.add_argument("-p", "--path", required=False, help="Path of image or directory of images to compress", type=str,
                    default="./")
parser.add_argument("-q", "--quality", required=False,
                    help="Image compression quality", type=int, default=40)

args = vars(parser.parse_args())

path = args["path"]
quality = args["quality"]

if os.path.exists(path):
    print(f"PATH: \t{path}")

    if os.path.isdir(path):
        try:
            os.mkdir(f"{path}/min/")
        except: pass
        for file in os.listdir(path):
            if os.path.isfile(f"{path}/{file}"):
                filename, extension = os.path.splitext(file)
                print(f"FILENAME: \t{filename}")
                print(f"EXTENSION: \t{extension}")
                try:
                    img = Image.open(f"{path}/{file}")
                    if extension.lower() == ".png":
                        img.load()
                        jpg = Image.new("RGB", img.size, (255, 255, 255))
                        jpg.paste(img, mask=img.split()[3])
                        img = jpg
                    img.save(f"{path}/min/{filename}.jpg", optimize=True, quality=quality)
                except(Exception) as e: print(e)
    else:
        img = Image.open(path)
        head, tail = os.path.split(path)
        img.load()
        jpg = Image.new("RGB", img.size, (255, 255, 255))
        jpg.paste(img, mask=img.split()[3])
        jpg.save(f"dados-min.jpg", optimize=True, quality=50)
        jpg.save(f"{head}/min/{tail}", optimize=True, quality=quality)

else:
    print("ERROR: file or directory no found!")
