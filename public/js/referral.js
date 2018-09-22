(function() {
    
    // Create reusable copy fn
    function copy(element) {
        
        return function() {
          document.execCommand('copy', false, element.select());
        }
    }
    
    // Grab shareUrl element
    var shareUrl = document.querySelector('.js-shareUrl');

    // Create new instance of copy, passing in shareUrl element
    var copyShareUrl = copy(shareUrl);
    
    // Set value via markup or JS
    shareUrl.value = "scootsuman";
  
    // Click listener with copyShareUrl handler
    shareUrl.addEventListener('click', copyShareUrl, false);
  
}());