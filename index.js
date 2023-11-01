$('#showHideBtn').on('click', function() {
    var passwordInput = $('#password');
    passwordInput.attr('type', passwordInput.attr('type') === 'password' ? 'text' : 'password');
  });
  
  $('#checkBox').on('click', function() {
    $('#submitButton').prop('disabled', !$(this).prop('checked'));
  });
  
  $('#scrollToTopBtn').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
  
  $('#setBackgroundBtn').on('click', function() {
    $('body').css('background-image',"url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F266471.jpg&f=1&nofb=1&ipt=fc4f41aaed1efa096282f2e2e71bbe0251a149315d41a22ef30de93bd3540da6&ipo=images')");
});

$('#textarea').on('input', function() {
  var maxLength = $(this).attr('maxlength');
  var currentLength = $(this).val().length;
  var remaining = maxLength - currentLength;
  $('#charCount').text(remaining);
});

$('#fadeParagraph').on('click', function() {
  $(this).animate({ opacity: 0 }, 1000);
});

$('#animateBtn').on('click', function() {
  $('#box').animate({ height: '500px', width: '500px' }, 1000);
});

$('#resetBtn').on('click', function() {
  $('#box').animate({ height: '100px', width: '100px' }, 1000);
});