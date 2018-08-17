# ptt-beauty-gallery
![Python Version](https://img.shields.io/badge/Python-3.6-green.svg)

[Live Demo](http://178.128.61.189:7770/)

## 使用工具
- [Justified-Gallery](https://github.com/miromannino/Justified-Gallery)
- [ptt-beauty-API](https://github.com/yiyu0x/ptt-beauty-API)

## demo
![screenshot](https://i.imgur.com/Ac2KwtI.jpg)

## build on your server

clone repo
> git clone https://github.com/yiyu0x/ptt-beauty-gallery.git

run on nginx
> docker run  -p 7770:80 -v $PWD/ptt-beauty-gallery:/usr/share/nginx/html:ro -d nginx 

or run on nginx (with time zone)
> docker run  -p 7770:80 -v $PWD/ptt-beauty-gallery:/usr/share/nginx/html:ro -e "TZ=Asia/Taipei" -d nginx

