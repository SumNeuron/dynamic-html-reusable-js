# Dynamic HTML - Reusable JS

Herein lies a minimum working example (MWE) for JS functions that produce dynamic HTML. Currently this is a horizontal navigation (nav) bar located at the top, centered, with-even spacing. This nav bar will change its structure depending on the window's width. Elements that do not fit are put in a drop-down on the right-most side of the nav. bar.  To get the dynamic nav. bar to work, there are a few requirements.



###HTML
- jQuery
- the w3-css style sheet
- the hover-master style sheet
- a container for the nav. bar
- readying the document for a function

###JS
- a variable containing the pages, e.g. var pages = ["HOME", "PAGE2", "PAGE3", ...];
- the functions
