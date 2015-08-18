$(document).ready(function() {
  // Branch 1-Ajax, commented out because ugly :D
  // $.ajax('/').done(function(html) {
  //   $('body').append(html);
  // });

  // Branch 2-Ujs
  $('a[data-font-family]').on('click', function(e) {
    e.preventDefault();
    $('body').css('font-family', $(this).data('font-family'));
  });

  // Branch 3-Rails-Helpers
  $('form[data-remote]').on('ajax:success', function(e, data, status, xhr) {
    $('body').append('<p>Success!</p>');
  }).on('ajax:error', function(e, error, status, xhr) {
    // to reproduce error, inspect and change form action to '/article'
    $('body').append('<p>Error!</p>');
  });

  // Branch 4-Turbolinks
  Turbolinks.enableProgressBar();
});