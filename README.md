# Welcome to InstaLink!

InstaLink is a simple Instagram Bio Link Generator. Instalink is the first (and only) bio link generator that has send-away messages

Send-away messages that are short mesages that your guests will see when they click on a link. An example is

`You are being teleported to` `Where ever they are being teleported to`

# Geting Started

Fist you will need to deploy Instalink to a host. Here are some quick start buttons:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Benja-media/instalink)

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/benja-media/instalink)

Glitch handles files different. You will have a .html ending of your page if you do not use index!

[![forks - instalink](https://img.shields.io/github/forks/benja-media/instalink?style=social)](https://github.com/benja-media/instalink/forks)

# Adding your links

All of the Settings for Instalink are in link.json file

Here is an example config.json file

**_Version Prior to 2.1.4 Has it as "link.json" This no longer works_**

```
{
  "user": "benmmonster",
  "user_url": "benmmonster",
  "media": "https://instagram.com",
  "symbol": "@",
  "media_name": "Instagram",
  "name": "Ben M",
  "photo": "https://cdn.glitch.com/35409746-8e4a-406e-ac47-16c4db92cad8%2F10x100profile.jpeg",
  "img_top": "150",
  "img_left_mobile": "37",
  "img_left":"46.5",
  "img_margin": "0",
  "mobile_home":"/@/instagramer.html",
  "desk_home":"/a/instagramer.html",

  "msg": "You are being teleported to",

  "title1": "Link 1",
  "link1": "https://example.com",

  "title2": "Link 2",
  "link2": "https://example.com",

  "title3": "Link 3",
  "link3": "https://example.com",

  "title4": "Link 4",
  "link4": "https://example.com",

  "title5": "Link5",
  "link5": "https://example.com",


  "bio": "Semi avid railfan. Into into 3d printing #ender3pro I take videos with my @gopro of under trains! AKA Programer, Maintainer, And writer @ Benja Media LTD"

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

Recomeded dimensions is 100x100px!

`msg` is your send away message. The default is `You are being teleported to` **_YOU DO NOT NEED A SPACE AT THE END_** Instalink add's it in automaticly

When a guest clicks on a link before they are redirected they will see `msg` + `link#`

`title#` Is the title of the link

`link#` Is the destanation URL

`img_top` Is the space between the top and the logo

`img_left_mobile` Is the space between the left and the logo for mobile

`img_left` Is the space between the left and the logo for standard screens

`img_margin` Is the margin for your image

`mobile_home` Is the mobile home

`desk_home` Is the desktop home page.

`bio` Is your bio.

**_NOTE_**

`title5` & `link5` Are turned off automaticly. You do not need to remove it from config.json file. See below on how to turn it off

# Add a 5th link.

Instalink has come with support for five links but it is turned off by default. To turn it on uncomment line `9` **_AND_** `54`  On `/a` **_AND_** `/@` This will show "Link 5"

# Extras

You may notice a folder called extras. This is where all the extra parts will go. (EX: Themes, 5th link, Push notifications etc...) I will release extra's eventualy. All versions of instalink come with 5.js (Dissabled).

I hope this is easy to understand. If you need more help create an issue in github and I will look in to it. Please see [Extras](../blob/master/extras/READEME.md)
