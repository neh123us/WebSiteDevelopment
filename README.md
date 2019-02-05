# WebSiteDevelopment
Sample code to support the Web Site Development class with the Lexington Home School co-op

* After downloading the sample files, open index.html in your browser.  (double click on the file)
* This is a basic web site for conveying simple about me type information but it showcases some of the core concepts of interest as we get started
* BasicStructure.html has only the basic structure to get the required elements in place.   There is no initial content here.   This is a good place to start playing with your own basic pages

### Style Sheets
* style sheets are in the CSS folder
* normalize.css is a reset style sheet to guarantee that all browsers will follow the same basic rules
* main.css has the basic style sheet rules for the site.   
* layout.css has the basic style sheet rules that control the layout for the site.   This is where you would go to change how the content is positioned
* colors.css has the details for the colors used in the web site

Splitting the stylesheets up among main, layout, and colors is not strictly necessary.   This is a convention that I like to follow to more quickly find the rules responsible for what I want to change.

All information to change the colors used should be in the colors.css.   If you want to duplicate the colors in another site, you should be able to include this file  and have the same color scheme.

All the information for how a page is structure should be in the layout.css file.

With stylesheets, order matters.   As rules are applied, rules applied later override rules applied earlier.   This is the nature of the cascade.  So the order to add style sheets is from the most generic to the most specific.
Within a style sheet, we want to follow that same order.   Most general rules should be at the top and go more specific down the file.

In this case, we will add the style sheet files in this order

``` html
   <link type="text/css" rel="stylesheet" href="css/normalize.css" />
    <link type="text/css" rel="stylesheet" href="css/main.css" />
    <link type="text/css" rel="stylesheet" href="css/layout.css" />
    <link type="text/css" rel="stylesheet" href="css/colors.css" />
```
