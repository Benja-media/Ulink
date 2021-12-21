# Welcome to Ulink (Formerly Instalink)!

Ulink is a simple Bio Link Generator. Ulink uses JSON to create a simple Bio Link page that will impress your followers!

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
  "display":"instagrammer",

  "links":[
    {"id":"1","title":"Link_1","url":"/link"},
    {"id":"2","title":"Link_2","url":"/link"},
    {"id":"3","title":"Link_3","url":"/link"}
  ]
}
```

## Options

| Value   | Discription                           | Defaults to     | Sugested Value |
|---------|---------------------------------------|-----------------|----------------|
|`user`   | Username                              | N/A             |                |
|`profile`| Your primary profile                  | N/A             |                |
|`symbol` | The symbol in front of your username  | N/A             | @              |
|`name`   | Your name                             | N/A             |                |
|`photo`* | Your Profile photo                    | N/A             |                |
|`display`| The title of your ULINK               | ULINK           |                |

**_ALL VALUES ARE REQUIRED_**

* Recomeded dimensions is 100x100px

## Links

In version 2.2.0 The list of links was moved to a array structure to allow unlimited links!!! 

Please note that all later versions don't support Arrays
| Value   | Discription          | Defaults to     | 
|---------|----------------------|-----------------|
|`id`     | ID of Link           | N/A             |                
|`title`  | Display of link      | Hidden          |
|`url`    | Destination of link  | Hidden          |

**_ALL VALUES ARE REQUIRED_**

# Icons
**NEW!** You can now add icons to your project with links to other social media accounts!
The Icons in this project make use of Font Awesome Icons!

The icon file is found at `/config/icons.json`

Adding Icons:
```
{
  "size": "fa-2x",
  "space": "fa-fw",
  "color":"#1A4EB4",
  "icons": [
    {
      "fa": "fas fa-pencil-ruler",
      "url": "/config/icon.json"
    },
    {
      "fa": "fas fa-icons",
      "url": "/config/icon.json"
    }
  ]
}
```
Options:

| Value  | Discription                | Defaults to     | Sugested Value |
|--------|----------------------------|-----------------|----------------|
|`size`  | The size for the Icon      | None            | `fa-2x`        |
|`space` | The space for the spacing  | None            | `fa-fw`        |
|`color` | The color of the icon      | CSS Body `color`|                |

Icons:
| Value  | Discription                | Defaults to     | Sugested Value |
|--------|----------------------------|-----------------|----------------|
|`fa`    | Unicode / Icon class       | Hidden (none)   | `fa-2x`        |
|`url`   | The destination of the Icon| Undefined       | `fa-fw`        |

# Styles


List of styles:

- Default
    
      Authour: Benja Media Ltd. (Ulink)
      Built in style | Default style

      Option prefix
        N/A

- Legacy

      Authour: Benja Media Ltd. (Ulink)
      Built in style

      Option prefix
        N/A

- Gradient

      Authour: Benja Media Ltd. (Ulink)
      Built in style

      Option prefix
        gdr_
        
- Image

      Authour: Benja Media Ltd. (Ulink)
      Built in style

      Option prefix
        img_
           
Styles now have options built into them. Find the options at `/config/style.json`


How to change styles:

Go to `index.html` Change `styles/default.css` to the name of the style ex:

    <link rel="stylesheet" href="/styles/default.css" />
Becomes:

    <link rel="stylesheet" href="/styles/legacy.css" />

# Extras

**ULINK SVR HAS BEEN DISCONTINUED**

Upload to `/extras` and link to `index.html`
