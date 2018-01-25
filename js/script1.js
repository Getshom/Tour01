// Demo by Dan Rose.
// See: http://www.sitepoint.com/recreating-google-images-search-layout-css

// dynamically create loads of image cells

  //bind click events
  var $cell = $('.package-cell');
  
  $cell.find('.image--basic').click(function() {
    var $thisCell = $(this).closest('.package-cell');
    
    if ($thisCell.hasClass('is-collapsed')) {
      $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed');
      $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    } else {
      $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    }
  });
  
  $cell.find('.expand__close').click(function(){
    
    var $thisCell = $(this).closest('.package-cell');
    
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  });