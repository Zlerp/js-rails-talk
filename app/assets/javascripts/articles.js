$(document).ready(function() {
  // Branch 1-Ajax
  // $.ajax('/').done(function(html) {
  //   $('body').append(html);
  $('a[data-font-family]').on('click', function(e) {
    e.preventDefault();
    $('body').css('font-family', $(this).data('font-family'));
  });
});