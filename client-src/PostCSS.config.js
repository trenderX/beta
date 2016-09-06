var discardComments = require("postcss-discard-comments")
var lost = require("lost")
var calc = require("postcss-calc")
var gradientTransparencyFix = require("postcss-gradient-transparency-fix")
var easings = require("postcss-easings")
var colorHexAlpha = require("postcss-color-hex-alpha")
var flexbugsFixes = require("postcss-flexbugs-fixes")
var filters = require("pleeease-filters")
var pseudoClassAnyLink = require("postcss-pseudo-class-any-link")
var pseudoelements = require("postcss-pseudoelements")
var autoprefixer = require("autoprefixer")
var reporter = require("postcss-reporter")
var precss = require("precss")



module.exports = function(bundler, variables){
  return [
    /*
    $css.devtools({
      silent: true
    }),
    */
    // Discard comments in your CSS files with PostCSS.
    // https://github.com/ben-eb/postcss-discard-comments
    // Remove all comments... we don't need them further down the line
    // which improves performance (reduces number of AST nodes)
    discardComments({
      removeAll: true
    }),

    // Fractional grid system built with calc(). Supports masonry, vertical, and waffle grids.
    // https://github.com/peterramsing/lost
    lost,


    // Fallback for Webkit Filters property to SVG filters. Amazing stuff.
    // It converts all 10 CSS shorthand filters:
    // grayscale, sepia, saturate, hue-rotate, invert, opacity, brightness, contrast, blur, drop-shadow
    // https://github.com/iamvdo/pleeease-filters
    filters(),

    // Reduce calc()
    // Note: Important to keep this after mixin/variable processing
    // https://github.com/postcss/postcss-calc
    calc,

    // Fix up CSS gradients with transparency for older browsers
    // https://github.com/gilmoreorless/postcss-gradient-transparency-fix
    gradientTransparencyFix,

    // Replace easing names from http://easings.net to `cubic-bezier()`.
    // https://github.com/postcss/postcss-easings
    easings,

    // Transform RGBA hexadecimal notations (#RRGGBBAA or #RGBA) to more compatible CSS (rgba())
    // https://github.com/postcss/postcss-color-hex-alpha
    colorHexAlpha,

    // Tries to fix all of flexbug's issues
    // https://github.com/luisrudge/postcss-flexbugs-fixes
    flexbugsFixes,

    // Use the proposed :any-link pseudo-class in CSS
    // https://github.com/jonathantneal/postcss-pseudo-class-any-link
    pseudoClassAnyLink,


    // Add single and double colon peudo selectors
    // Normalizes e.g. `::before` to `:before` for wider browser support
    // https://github.com/axa-ch/postcss-pseudoelements
    pseudoelements,

    precss({import:{disable: true}}),

    // Parse CSS and add vendor prefixes to rules by Can I Use
    // https://github.com/postcss/autoprefixer
    autoprefixer({ browsers: ['last 10 versions'] }),

    // Log PostCSS messages to the console
    reporter({
      clearMessages: true
    })
  ]
}
