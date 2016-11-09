//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  Make the navigation showing however many fit
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ASSUMPTIONS:
// this assumes that the corresponding .html pages are the lowercase
// equivalent to whatever was passed as navElements. e.g. if you pass
// ["HOME", "BLOG", "ABOUT"], then it is assuemd that your .htmls are
// named home.html, blog.html, & about.html and all in the same folder
// there are multiple ways to change this behavior. Perhaps make a key
// value pair, so that way you can lookup - keyValPair[navElements[i]]
// - the name of the actual html file.  I also use a style navFont
// which is specifies the font style for the navigation bar. Here
// it is Lato at 14px and monospaced.

function renderNavigationBar(navElements, navDocID, curWindowWidth) {


  // Get navigation bar
  var nav = document.getElementById(navDocID);

  // Clear whatever was there
  nav.innerHTML = null;

  // Space saved for each navigation bar element
  var maximumTextSize = 150; // in px. This is an assumption based on the word
                             // PUBLICATIONS at font size 14px. Longer words will
                             // need to increase this size
  var elemPadding = 25;      // in px. This is an asuumption for how much spacing
                             // you want each element to have on each side
                             // 50 is fairly generous
  var elementSpace = (maximumTextSize + 2 * elemPadding); // *2 for each side

  var numElem = navElements.length;   // how many elements in the array

  var sideSpace = 4;                  // to set margins

  // Add margins
  nav.style.marginLeft = sideSpace + "%";
  nav.style.marginRight = sideSpace + "%";
  nav.style.marginTop = sideSpace/2 + "%";

  // CALCULATION:
  // We want to do things in percentage. Here we have (100 - 2 * padding) perecent
  // to fit our elements. To get this in pixels we times by the pixel width of
  // the screen and divid by 100. Then we divid by the element space and
  // get the floor as elements are integers. How much space to give them
  // in percent is then 100 / number that fit.

  var percentToUse = (100 - (2 * sideSpace)); // thus less space to use
  var pixelsFree = percentToUse * curWindowWidth / 100; // space free in pixels

  var howManyFit = Math.floor(pixelsFree / elementSpace);
  var spaceAllocated = 100 / howManyFit; // Percentage of space for each element to take up

  if (howManyFit > numElem) { // If you can fit more than you have, only alloc space
                              // for those you have
    spaceAllocated = 100 / numElem;
  }
  // LOGIC:
  // We have two conditions 1.) everything fits. 2.) Not everything fits

  if (howManyFit >= numElem) { // ALL FIT
    for (var i = 0; i < numElem; i++) {
        nav.innerHTML +=
        '<li style = "width:' + spaceAllocated + '%">' +
        '<a class="hvr-reveal navFont"' + ' href="' + navElements[i].toLowerCase() + '.html">' +
        navElements[i] + '</a></li>';
    };


  } else { // SOME FIT

    for (var i = 0; i < (howManyFit - 1); i++) { // minus 1 to save space for the bar drop-down element
        nav.innerHTML +=
        '<li style = "width:' + spaceAllocated + '%">' +
        '<a class="hvr-reveal navFont"' + ' href="' + navElements[i].toLowerCase() + '.html">' +
        navElements[i] + '</a></li>';
    };

    // This chuck makes a drop-down hover element as the last in our
    // navigation bar with the fa-bar icon. We then, inside, make an
    // empty unordered list (ul) with an id to then add in the missing
    // pages.
    nav.innerHTML += '<li class="w3-dropdown-hover w3-centered" '+
    'style="width:' + spaceAllocated + '%" >' +
    '<a class="hvr-reveal navFont">' +
    '<i class="fa fa-bars"></i></a>' +
    '<ul id="dropDownContent" class="w3-dropdown-content" style="width:100%; list-style-type: none;">' +
    '</ul></li>';

    for (var i = (howManyFit - 1); i < numElem; i++ ) {
      document.getElementById('dropDownContent').innerHTML+=
      '<li style="width:' + spaceAllocated + '%">'+
      '<a class="hvr-reveal navFont" href="' + navElements[i].toLowerCase() + '.html">' +
      navElements[i] + '</a></li><br><br>';
    };
  }; // Note this is very important. If the screen size is less than the size to fit
     // one element. If it does not fit (e.g. curWindowWidth < elementSpace) then nothing
     // will be rendered. One should have a special use case for that. However currently
     // elementSpace is 250px. You'd need a very small / low-res screen for this to arise.


 // THINGS THAT NEED IMPROVEMENT:
 // I have to use <br> twice to get correct verticle spacing on the drop down...
 // On small widths home gets stacked over the other pages
}





function openClose(id) {
    var docElem = document.getElementById(id);
    if (docElem.className.indexOf("w3-show") == -1) {
        docElem.className += " w3-show";
    } else {
        docElem.className = docElem.className.replace(" w3-show", "");
    }
}
