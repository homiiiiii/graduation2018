$(document).ready(function(){
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace("myDots", "");
  }
  x[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += "myDots";
}

  //to top
  $(window).scroll(function(){
     if ($(this).scrollTop() > 20) {
         $('#toTop').fadeIn('fast');
     } else {
         $('#toTop').fadeOut('fast');
     }
  });
  	$('#toTop').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 500);
     return false;
  	});


  //searchform
  $( ".search" ).click(function() {
       $( "nav" ).toggleClass( "searchActive" );
       $( ".searchform" ).toggleClass( "searchformActive" );
       $("#searchIcon").toggle();
       $("#cancelIcon").toggle();
       $(".mask").fadeToggle(500);
       $('#searchInput').focus();
      });

  //search

  //대소문자 죽이긔
  $.extend($.expr[":"], {
  "MyCaseInsensitiveContains": function(elem, i, match, array) {
  return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
  }
  });

  //서치하긔^^~!
  $('.searchform-img').click(function(){
    $('#searchInput').keyup(function(event) {
          var val = $(this).val();
          if (val == "") {
              $('main li').show();

          } else {
              $('main li').hide();
              $("main li:MyCaseInsensitiveContains('"+val+"')").show();
          }
          console.log(val);
      });
  });

  //엔터 시 검색기능
  $("#searchInput").keypress(function(event){
     if ( event.which == 13 ) {
         $('.searchform-img').click();
         $( ".search" ).click();
         return false;
     }
  });

  //mobile nav
  $(".navT").on("click", function(){
      console.log("clicked!~!~");
        $(this).toggleClass("active");
        $("#sidenav").toggleClass("open");
        $(".main").toggleClass("shift");
    });


  //2depth_sharebox toggle
  $( "#share" ).click(function() {
           $( ".shareBox" ).toggleClass("active");
           $( ".shareMask" ).fadeToggle(500);
          });
  $('.shareMask').click(function () {  
      $(this).fadeToggle(500);  
      $('.shareBox').toggleClass("active");  
  });
  $('#closeBtn').click(function () {  
      $('.shareMask').fadeToggle(500);  
      $('.shareBox').toggleClass("active");  
  }); 

  //link_facebook
  $("#facebook").click(function(){
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(document.URL)+'&amp;t='+encodeURIComponent(document.title), 
      'facebooksharedialog','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
  });

  //link_twitter
  $("#twitter").click(function(){
    window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20'+encodeURIComponent(document.URL)+'%20:%20'+encodeURIComponent(document.title), 
      'twittersharedialog','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
  });

  //link_pinterest
  $("#pinterest").click(function(){
    window.open('http://www.pinterest.com/pin/create/button/?url='+encodeURIComponent(document.URL)+'&media='+encodeURIComponent(document.URL)+'/thumb.jpg&description='+encodeURIComponent(document.title),
      'pinterestsharedialog','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
  });

  //link_naver
  $("#naver").click(function(){
    window.open('http://share.naver.com/web/shareView.nhn?url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(document.title),
      'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
  });

  //link_kakaotalk
  Kakao.init('399c61cb76bc3ac7f1ccb939c8ec0d10');
    // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.

  var isMobile = window.matchMedia("only screen and (max-width: 1024px)");
   
    $("#kakaotalk").click(function() {
      if (isMobile.matches) { 
      Kakao.Link.sendScrap({
      requestUrl: document.URL});
    }
      else {
        alert("모바일만 가능합니다.");
      }
    });

  //copyURL
  document.getElementById("copyURL").value = document.URL;
      

      $(".copy").click(function () {

        if (isMobile.matches) {
          alert("모바일은 자동복사가 지원되지 않습니다.");
        }
        else {
          $("#copyURL").select();
          document.execCommand('copy');
          alert("주소가 클립보드에 복사되었습니다.");}
      });


});