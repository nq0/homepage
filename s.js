$(function() {

  var page = 0;  //（１）ページの概念・初期ページを設定
  var lastPage = parseInt($(".slide img").length-1);  //（２）イメージの数を最後のページ数として変数化

  $(".slide img").css("display","none");  //（３）最初に全部のイメージを一旦非表示にします
  $(".slide img").eq(page).css("display","block");  //（４）初期ページを表示

  function changePage(){  //（５）ページ切換用、自作関数作成
    $(".slide img").fadeOut(1000);
    $(".slide img").eq(page).fadeIn(1000);
  };

  var Timer = setInterval(startTimer,2500);  //（６）～秒間隔でイメージ切換の発火設定

  function startTimer(){
    if(page === lastPage){
      page = 0;
      changePage();
    }else{
      page ++;
      changePage();
    };
  }

  function stopTimer(){  //（７）～秒間隔でイメージ切換の停止設定
    clearInterval(Timer);
  }

  startTimer();  //（８）タイマースタート


  $(".scroll").on("click", function(event){
	        event.preventDefault();
	        var target = $(this).attr("href"); // クリックされた<a>タグのhrefプロパティの値を取得
	        var target_top = $(target).offset().top;
          var rem = parseInt($("html").css('font-size')); // rem単位の値を取得
          var fixed_top = target_top - rem * 7 * 1.5; // ヘッダーによる位置ズレ補正
          $('html, body').animate({scrollTop:fixed_top}, "slow");
	    });
	});
