$(function() {
  //「送信」ボタンの色をマウスを乗せたり外すと変えるイベント
  $('.btn').on('mouseenter', function(){
    $(this).css('background-color', '#873955');
  })
  .on('mouseleave', function(){
    $(this).css('background-color', '#0074bf');
  });
 //モーダルの表示・非表示
  $('#inquire_show').on('click', function(){
    $('#inquire_modal').fadeIn();
  });
  $('#close_modal').on('click', function(){
    $('#inquire_modal').fadeOut();
  });
 //「送信」ボタンを押したときにアラームを表示するイベント。
 //if文を使って「空欄だった時にエラーを表示」させようとしたけどうまくできず・・・。ひとまずあきらめました T_T
  $('.btn').on('click',function(){
      window.alert("お問い合わせくださりありがとうございます！");
//送信ボタンを押したら入力内容を空欄に戻す（リセット）する設定。...しかし、定数formを定義してないのでこのままでは使えない。作りかけです^^;
      form.value = "";
  });
});
