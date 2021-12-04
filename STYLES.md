# Ulink Styles:
Here is the list of styles that some with ULINK. You do not have to use any of the built in ones you can make your own!

## How to change styles:

Go to `index.html:25` Change `styles/default.css` to the name of the style ex:

    <link rel="stylesheet" href="/styles/default.css" />
Becomes:

    <link rel="stylesheet" href="/styles/legacy.css" />
# List of styles
Here is a list of styles that come with ULINK!

## Default:
The Default style with ULINK that moves as you hover!
    
      Authour: Benja Media Ltd. (Ulink)
      Built in style | Default style

Options

| Name        | Root Var    | Default       |Type                  |
| ------------|-------------| --------------|----------------------|
| Font        | `--fnt`     | `'Veranda'`   | Text / Font name*    |
| Font family | `--fnt_typ` | `sans-serif`  | Text / Font family** |

**All Values are required**

*This only supports fonts that are built in to the browsers! 

List of fonts:

      Arial (sans-serif)
      Verdana (sans-serif)
      Helvetica (sans-serif)
      Tahoma (sans-serif)
      Trebuchet MS (sans-serif)
      Times New Roman (serif)
      Georgia (serif)
      Garamond (serif)
      Courier New (monospace)
      Brush Script MT (cursive)


** Accepted options are: 

       sans-serif 
       serif
       cursive
       monospace

To use fonts from google add 

      @import url('https://fonts.googleapis.com/css2?family=FONT-FAMILY&display=swap');

and set `:root` vars to:
      
      /* NOTE I AM QUOTED */
      --fnt: 'FONT FAMILY'
      --fnt_typ: FONT TYPE
  
## Legacy 
The Classic Gradient style

      Authour: Benja Media Ltd. (Ulink)
      Built in style

Options

None

## Gradient
The custom graident theme! 

      Authour: Benja Media Ltd. (Ulink)
      Built in style

Options
| Name          | Root Var     | Default   |Type      |
| ------------- |--------------| ----------|----------|
| Start Colour  | `--1`        | `Red`     | Colour   |
| End Colour    | `--2`        | `Yellow`  | Colour   |
| Direction     | `--Direction`| `To right`| Direction|
| Text Colour   | `--clr`      | `White`   | Colour   |

**All Values are required**

