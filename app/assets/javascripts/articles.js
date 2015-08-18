$(document).ready(function() {
  $('a[data-font-family]').on('click', function(e) {
    e.preventDefault();
    $('body').css('font-family', $(this).data('font-family'));
  });
});