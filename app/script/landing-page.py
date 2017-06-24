import json
import requests
import os
import urllib
from random import randint

url ="https://www.instagram.com/instagram/media/"
r = requests.get(url)
json_data = json.loads(r.text)
index = randint(0,19)
got_image = True
while got_image:
    if json_data['items'][index]['type'] == "image":
        img = json_data['items'][index]['images']['low_resolution']['url']
        urllib.urlretrieve(img,"../instamasonry/public/landing_page_photos/instagram-card.jpg")
        got_image = False
    else:
        index = index + 1
