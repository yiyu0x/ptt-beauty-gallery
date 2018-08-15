# ptt-beauty-gallery

[Justified-Gallery](https://github.com/miromannino/Justified-Gallery)

demo : [http://178.128.61.189:7770/](http://178.128.61.189:7770/)


> git clone https://github.com/yiyu0x/ptt-beauty-gallery.git

> docker run  -p 7770:80 -v $PWD/ptt-beauty-gallery:/usr/share/nginx/html:ro -d nginx 

synce time zone
> docker run  -p 7770:80 -v $PWD/ptt-beauty-gallery:/usr/share/nginx/html:ro -e "TZ=Asia/Taipei" -d nginx
