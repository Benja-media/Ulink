# Welcome to Ulink (Formerly Instalink)!

Ulink (Formerly InstaLink) is an open source bio link generator. Ulink uses a simple json file to create a fast biolink! Ulink is a Static site generator that provides your links in a clean Bio link

# Geting Started

Fist you will need to deploy Ulink to a host. Here are some quick start buttons:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Benja-media/Ulink)

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/benja-media/Ulink)

Glitch handles files different. You will have a .html ending of your page if you do not use index!

[![forks - instalink](https://img.shields.io/github/forks/benja-media/Ulink?style=social)](https://github.com/Benja-media/Ulink/network/members)

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
  "img_margin": "0",
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

In version 2.2.0 The list of links was moved to a array structure to allow unlimited links!!! 

Please note that all later versions don't support Arrays

`id` Is a number `0 - ∞` That gives an ID to the element. This value is required

`title` Is the display to your link

`url` Is the destination

# Styles

I am in the procces of writing styles for Ulink. I will update this file with a list of styles

List of styles:

- Default
    
      Authour: Benja Media Ltd. (Ulink)
      Built in style | Default style

      Options
        --

- Legacy

      Authour: Benja Media Ltd. (Ulink)
      Built in style

      Options
        --

- Gradient

      Authour: Benja Media Ltd. (Ulink)
      Built in style

      Options
        /* First Colour */
        --1: grey;
        /* Second Colour */
        --2: green;
        /* Direction */
        --Direction: to right;
        /* Text & Border Colour */
        --clr: white;

How to change styles:

Go to `index.html:25` Change `styles/default.css` to the name of the style ex:

    <link rel="stylesheet" href="/styles/default.css" />
Becomes:

    <link rel="stylesheet" href="/styles/legacy.css" />


# Extras

**ULINK SVR HAS BEEN DISCONTINUED**

Upload to `/extras` and link to `index.html`
