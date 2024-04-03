$(function() {
  // ボタンをクリックしたら
  $('#change-color').on('click', function(){
    // 文字色が変わる
    $('#target').css('color', 'red');
  });

  // ボタンをクリックしたら
  $('#change-text').on('click', function(){
    // 文字内容が変わる
    $('#target').text('Hello!');
  });

  // ボタンをクリックしたら
  $('#fade-out').on('click', function(){
    // 文字フェードアウト
    $('#target').fadeOut();
  });

  // ボタンをクリックしたら
  $('#fade-in').on('click', function(){
    // 文字フェードイン
    $('#target').fadeIn();
  });
});