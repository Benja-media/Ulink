# Welcome to InstaLink!

InstaLink is a simple Instagram Bio Link Generator. Instalink is the first (and only) bio link generator that has send-away messages

Send-away messages that are short mesages that your guests will see when they click on a link. An example is

`You are being teleported to` `Where ever they are being teleported to`

# Geting Started

Fist you will need to deploy Instalink to a host. Here are some quick start buttons:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Benjamin-del/instalink)

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/benjamin-del/instalink)

Glitch handles files different. You will have a .html ending of your page if you do not use index!

[![forks - instalink](https://img.shields.io/github/forks/benjamin-del/instalink?style=social)](https://github.com/benjamin-del/instalink)

# Adding your links

All of the Settings for Instalink are in link.json file 

Here is an example link.json file

```
{
  "user" : "benmmonster",
  "user_url" : "benmmonster",
  "media" : "https://instagram.com",
  "symbol" : "@",
  "media_name" : "Instagram",

  
  "msg" : "You are being teleported to",
  
  "title1": "Link1",
  "link1": "https://google.com",

  "title2": "Link2",
  "link2": "https://google.com",

  "title3": "Link3",
  "link3": "https://google.com",

  "title4": "Link4",
  "link4": "https://google.com",
  
  "title5": "Link5",
  "link5": "https://google.com"

}
```




`user` Is your username. 


`user_url` Is your username url ***DO NOT INCLUDE THE FULL LINK*** Only whatever comes after the domain (Ommit the first `/`) EX:

`https://instagram.com/benmmonster` becomes `benmmonster`

`media` is your social media name 

`symbol` is the symbol from your name EX: `@benmmonster`

`media_name` is the name of your primary social media

`msg` is your send away message. The default is `You are being teleported to` ***YOU DO NOT NEED A SPACE AT THE END*** Instalink add's it in automaticly

When a guest clicks on a link before they are redirected they will see `msg` + `link#`

`title#` Is the title of the link 

`link#` Is the destanation URL

***NOTE***

`title5` & `link5` Are turned off automaticly. You do not need to remove it from link.json file. See below on how to turn it off


# Add a 5th link.

Instalink has come with support for five links but it is turned off by default. To turn it on uncomment line 38 ***AND*** 45. This will show "Link 5"


# Extras

You may notice a folder called extras. This is where all the extra parts will go. (EX: Themes, 5th link, 6th link etc...) I will release extra's eventualy. All new versions of instalink come with 5.js (Dissabled). 

I hope this is easy to understand. If you need more help create an issue in github and I will look in to it. Please see [Extras](../blob/master/EXTRAS.md)







