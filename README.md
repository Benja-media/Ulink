# Welcome to Ulink (Formerly Instalink)!

Ulink is a simple Bio Link Generator for every social media! Ulink uses JSON to create a epic Bio Link!

# Geting Started

Fist you will need to deploy Ulink to a host. Here are some quick start buttons:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Benja-media/Ulink)

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/benja-media/Ulink)

[![forks - instalink](https://img.shields.io/github/forks/benja-media/Ulink?style=social)](https://github.com/Benja-media/Ulink/network/members)

[Deploy to repl.it*](https://replit.com/@Benmmonster/Ulink?v=1)

To deploy to replit use deploy command `ulink`
# Adding your links

All options are required unless otherwise stated

Here is an example config.json file

**_Link structure has changed!!! Below is the new verion_**

```
{
  "user": "instagrammer",
  "profile": "https://instagram.com/instagrammer",
  "symbol": "@",
  "name": "Instagrammer",
  "photo": "https://cdn.glitch.com/35409746-8e4a-406e-ac47-16c4db92cad8%2F10x100profile.jpeg",
  "display":"instagrammer",

  "links":[
    {"id":"1","title":"Link_1","url":"/link"},
    {"id":"2","title":"Link_2","url":"/link"},
    {"id":"3","title":"Link_3","url":"/link"}
  ]
}
```

## Options

`user` Is your username.

`profile` Is the URL to your chosen profile

`symbol` is the symbol from your name EX: `@benmmonster`

`name` Is your display name

`photo` This is your URL to your avatar! Linking directly to your social media avatar is not supported due to CORS restrictions!

**_Recomeded dimensions is 100x100px!_**

## Links

In version 2.2.0 The list of links was moved to a array structure to allow unlimited links!

Please note that all later versions don't support Arrays

`id` Is a number `0 - ∞` That gives an ID to the element. This value is required

`title` Is the display to your link

`url` Is the destination

# Styles
Style docs:

[styles/styles.md](https://github.com/Benja-media/Ulink/blob/main/styles/styles.css)

# Icons
Ulink now supports Icons from Font Awesome!

The icon config file is found at `/config/icon.json`

## Configure Icons

```
{
  "size": "fa-2x",
  "space": "fa-fw",
  "color":"#1A4EB4",
  "icons": [
    {
      "fa": "fab fa-github-square",
      "url": "https://github.com/Benja-media"
    },
    {
      "fa": "fab fa-youtube-square",
      "url": "https://youtube.com/channel/UC8g9QqWZYtgfKvuzs22TNqw"
    },
    {
      "fa": "fab fa-flickr",
      "url": "https://www.flickr.com/people/benmmonster/"
    },
    {
      "fa": "fas fa-cube",
      "url": "https://www.thingiverse.com/benjm/"
    },    
    {
      "fa": "fab fa-instagram",
      "url": "https://instagram.com/benmmonster"
    }
  ]
}
```

Options:
`size` The size of the Icon. Reccomended Value is `fa-2x`

`space` The spacing between Icons. Reccomended Value is `fa-fw`

`color` The color of the Icon.

Icons:

`fa` The Font awesome Icon! (The `fa` is required)

`url` Where the icon brings users to

# Extras

**ULINK SVR HAS BEEN DISCONTINUED**

Upload to `/extras` and link to `index.html`
