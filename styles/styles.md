# Styles
Styles are what make Ulink look so good!

Ulink styles are customizable making your Bio Link yours!

Ulink also supports over 900+ Fonts From google fonts!

## List of styles:

- Default
    
      Authour: Benja Media Ltd. (Ulink)
      Built in style | Default style

      Prefix
      N/A

- Legacy

      Authour: Benja Media Ltd. (Ulink)
      Built in style

      Prefix
      N/A

- Gradient

      Authour: Benja Media Ltd. (Ulink)
      Built in style

      Prefix
      gdr_
      
 
- Image

      Authour: Benja Media Ltd. (Ulink)
      Built in style

      Prefix
      img_
      
      
## Configure Styles

Some styles have options! These range from color to image to font! In this update (`2.2.3`) Style configuration has moved to `/config/style.json`! Every style that supports it has a prefix 

### ROOT_ Prefix
Some options have the `root_` prefix meaning that all styles respond to your choice!

| JSON       | Discription                    |
|------------|--------------------------------|
|`fontsize`  | Font size for the links        |
|`width`     | How wide the link container is |
|`fontfamily`| The family of your font        |
|`fontname`	 | The name of your font          |

**ALL INPUTS ARE REQUIRED**

**FONT MUST BE FROM GOOGLE FONTS**

`root_fontfamily` & `root_fontname` are found from google fonts

Find fonts at:
[Google fonts](https://fonts.google.com)

### IMG_ Prefix
This option is for the image style (`/style/image.css`)

| JSON       | Discription                        |
|------------|------------------------------------|
|`icon`      | Icon color                         |
|`main_color`| Main color                         |
|`speed`     | Speed of transition                |
|`image`	   | The URL to your image              |  
|`hovercolor`| The color of the link when hovered |

### GDR_ Prefix
This option is for the graident style.

| JSON       | Discription                        |
|------------|------------------------------------|
|`1`         | 1st color of gradient              |
|`2`         | 2nd color of gradient              |
|`direction` | Direction of gradient              |
|`color`	   | Color of links                     |  

## Change styles:

Go to `index.html` Change `styles/default.css` to the name of the style ex:

    <link rel="stylesheet" href="/styles/default.css" />
Becomes:

    <link rel="stylesheet" href="/styles/legacy.css" />
