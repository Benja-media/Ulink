# Welcome to Ulink (Formerly Instalink)!

Ulink is a simple Instagram Bio Link Generator. Instalink is the first (and only) bio link generator that has send-away messages

Send-away messages that are short mesages that your guests will see when they click on a link. An example is

`You are being teleported to` `Where ever they are being teleported to`

# Geting Started

Fist you will need to deploy Ulink to a host. Here are some quick start buttons:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Benja-media/Ulink)

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/benja-media/Ulink)

Glitch handles files different. You will have a .html ending of your page if you do not use index!

[![forks - instalink](https://img.shields.io/github/forks/benja-media/Ulink?style=social)](https://github.com/benja-media/Ulink/forks)

# Adding your links

All of the Settings for Instalink are in link.json file

Here is an example config.json file

**_Version Prior to 2.1.4 Has it as "link.json" This no longer works_**

```
{
  "user": "instagrammer",
  "user_url": "instagrammer",
  "media": "https://instagram.com",
  "symbol": "@",
  "media_name": "Instagram",
  "name": "Instagrammer",
  "photo": "https://cdn.glitch.com/35409746-8e4a-406e-ac47-16c4db92cad8%2F10x100profile.jpeg",
  "img_top": "150",
  "img_margin": "0",
  "home": "/@/instagrammer.html",
  "display":"instagrammer",

  "msg": "You are being teleported to",

  "title1": "Link 1",
  "link1": "/link.html",

  "title2": "Link 2",
  "link2": "/link.html",

  "title3": "",
  "link3": "",

  "title4": "",
  "link4": "",

  "title5": "",
  "link5": "",
  
  "title6":"",
  "link6":"",
  
  "title7":"",
  "link7":"",

  "bio": "Semi avid railfan. Into into 3d printing #ender3pro I take videos with my @gopro of under trains! AKA Programer, Maintainer, And writer @ Benja Media LTD",

  "Topic1": "",
  "Topic2": ""
}
```

`user` Is your username.

`user_url` Is your username url **_DO NOT INCLUDE THE FULL LINK_** Only whatever comes after the domain (Ommit the first `/`) EX:

`https://instagram.com/benmmonster` becomes `benmmonster`

`media` is your social media name

`symbol` is the symbol from your name EX: `@benmmonster`

`media_name` is the name of your primary social media

`name` Is your display name

`photo` Is your avatar! This must be self hosted! Using your instagram profile photo will not work due to CORS!

***Recomeded dimensions is 100x100px!***

`img_top` Is the space between the image and the top (Recomended value is 0)

`img_margin` Is the margin of your profile photo (Recomended value is 0)

`home` Is the home page of your bio link. (If some one gets a 404 error or goes to index.html they will be redirected to that page)

`display` is the title of the page (`@instagrammer` becomes `@instagrammer | Ulink` The ` | Ulink` Part is required for atribution!

`msg` is your send away message. The default is `You are being teleported to` **_YOU DO NOT NEED A SPACE AT THE END_** Instalink add's it in automaticly

When a guest clicks on a link before they are redirected they will see `msg` + value of `link#`

`title#` Is the title of the link

`link#` Is the destanation URL

`img_top` Is the space between the top and the logo

`img_margin` Is the margin for your image

`bio` Is your bio.


# Extras

You may notice a folder called extras. This is where all the extra parts will go. (EX: Themes, 5th link, Push notifications etc...) I will release extra's eventualy.

I hope this is easy to understand. If you need more help create an issue in github and I will look in to it. Please see [Extras](../blob/master/extras/README.md)
