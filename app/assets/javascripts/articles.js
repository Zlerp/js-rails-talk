$(document).ready(function() {
  $('form[data-remote]').on('ajax:success', function(e, data, status, xhr) {
    $('body').append('<p>Success!</p>');
  }).on('ajax:error', function(e, error, status, xhr) {
    // to reproduce error, inspect and change form action to '/article'
    $('body').append('<p>Error!</p>');
  });
});