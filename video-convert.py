import os
import ffmpeg

start_dir = f"{os.getcwd()}/assets/videos"
print(start_dir)

def convert_to_webm(mp4_file):
    name, ext = os.path.splitext(mp4_file)
    out_name = name + ".webm"
    ffmpeg.input(mp4_file).output(out_name).run()
    print("Finished converting {}".format(mp4_file))

for path, folder, files in os.walk(start_dir):
    print(path)
    print(folder)
    print(files)
    for file in files:
        if file.endswith('.mp4'):
            print("Found file: %s" % file)
            convert_to_webm(os.path.join(start_dir, file))
        else:
            pass
