$('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:2000,//スライドの動きのスピード。初期値は300。
    dots: true,　　　　　　//スライドしたのドット
    // arrows: true,          //左右の矢印
    infinite: true,　　　　//スライドのループ
    pauseOnHover: false,   //ホバーしたときにスライドを一時停止しない
});

