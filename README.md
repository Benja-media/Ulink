# Welcome to Ulink (Formerly Instalink)!

Ulink is a simple Bio Link Generator that uses JSON to create a epic & fast Bio link page! 

# Geting Started

Fist you will need to deploy Ulink to a host. Here are some quick start buttons:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Benja-media/Ulink)

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/benja-media/Ulink)

Glitch handles files different. You will have a .html ending of your page if you do not use index!

[![forks - instalink](https://img.shields.io/github/forks/benja-media/Ulink?style=social)](https://github.com/Benja-media/Ulink/network/members)

# Adding your links
Ulink's JSON structure is setup so that it is easy to read! You can change your links mannualy or use Ulink Generator to create the perfect Bio Link generator

### 1. Generator
Ulink now has a generator for `2.2.0` Try it out:

[Ulink Generator](https://generator.ulink.benja.ml/)
### 2. Manual
All options are required unless otherwise stated

Here is an example of config.json file

**Link structure has changed!!! Below is the new verion**

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

`img_margin` **Depricated** This was a feature that was left from v2.1.6 Change this manualy by visiting the style's stylesheet

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

None

- Legacy

      Authour: Benja Media Ltd. (Ulink)
      Built in style

Options

None

- Gradient

      Authour: Benja Media Ltd. (Ulink)
      Built in style

Options
| Name          | Root Var     | Default   | Required         |
| ------------- |--------------| ----------|------------------|
| Start Colour  | `--1`        | `Red`     |:white_check_mark:|
| End Colour    | `--2`        | `Yellow`  |:white_check_mark:|
| Direction     | `--Direction`| `To right`|:white_check_mark:|
| Text Colour   | `--clr`      | `White`   |:white_check_mark:|


How to change styles:

Go to `index.html:25` Change `styles/default.css` to the name of the style ex:

    <link rel="stylesheet" href="/styles/default.css" />
Becomes:

    <link rel="stylesheet" href="/styles/legacy.css" />


# Extras

**ULINK SVR HAS BEEN DISCONTINUED**

Upload to `/extras` and link to `index.html`
