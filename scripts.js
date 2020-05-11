$('button').click(() => {
    $('ul').append(`<li>${$('input').val()}</li>`);
    $('input').val('');
  });