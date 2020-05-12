$('button').click(() => {
    $('ul').append(`<li>${$('input').val()}</li>`);
    $('input').val('');
  });
  $('#decrease').click(() => {
    counter--;
    $('h2').text(counter);
  });