$(document).ready(function() {
  $.ajax('/').done(function(html) {
    $('body').append(html);
  });
});