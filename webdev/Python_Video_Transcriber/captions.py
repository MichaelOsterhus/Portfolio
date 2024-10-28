from pytubefix import YouTube
import re

yt = YouTube('https://www.youtube.com/watch?v=NhmgcA93W-Q')

caption = yt.captions.get('a.en')
if caption is None:
    print("Auto-generated English captions not available.")
else:
    # Get the caption text in SRT format (or another text format your library supports)
    caption_text = caption.generate_srt_captions()

    # Use regular expressions to remove line numbers and timestamps
    text_only = re.sub(r"\d+\n\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}\n", "", caption_text)
    text_only = re.sub(r"\n{2,}", "\n", text_only).strip()

    # Print or save the text-only captions
    print(text_only)

    # Optionally, save to a file
    with open("captions_text_only.txt", "w", encoding="utf-8") as f:
        f.write(text_only)



