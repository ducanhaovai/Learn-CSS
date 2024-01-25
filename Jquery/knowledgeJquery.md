syntax: 
$(selector).action()
+ $: xác định / truy cập bién
+ selector: phần tử được xác định
+ action: là hành động lên phần tử đó
vd:

$(this).hide()- ẩn đi phần tử hiện tại
$('p').hide()- ẩn đi tất cả thẻ p
$('.test').hide() - ẩn đi tất cả các phần tử có class='test'
$('#test').hide() ẩn đi tất cả id = 'test'

+ Note: nên đợi tài liệu tải đầy đủ và sẵn sàng trước khi làm việc với Jquery
  dùng:$(document).ready(funtion(){

  })

jquery selectors:(class, id, tagName, css selector)
sytax:

$("*") selects all element
$(this) Lựa chọn thẻ html hiện tại
$('p.intro') chọn thẻ p có thẻ class = 'intro'
$('ul li:fist') lựa chọn thẻ đầu tiên <li> ủa ul
$('ul li:fist-child') lựa chọn thẻ đầu tiên <li> trong tất cả của ul
$("[href]")		Chọn tất cả các phần tử có thuộc tính href
$("a[target='_blank']")	Chọn tất cả các phần tử <a> có giá trị thuộc tính đích bằng "_blank"
$("a[target!='_blank']")	Chọn tất cả các phần tử <a> có giá trị thuộc tính đích KHÔNG bằng "_blank"
$(":button")	Chọn tất cả phần tử <button> và phần tử <input> của type="button"
$("tr:even")	Chọn tất cả các phần tử <tr> chẵn
$("tr:odd")	Chọn tất cả các phần tử <tr> lẻ


JQuery Event:
Tất cả các hành động khác nhau của khách truy cập mà trang web có thể phản hồi được gọi là sự kiện. Một sự kiện đại diện cho thời điểm chính xác khi một điều gì đó xảy ra.   
Để chỉ định một sự kiện nhấp chuột cho tất cả các đoạn trên một trang:
$("p").click(function(){
  $(this).hide();
});


dblclick() : nhấn 2 lần đê thực thi event
$(document).ready(function(){
  $("p").dblclick(function(){
    $(this).hide();
  });
});

mouseleave() Hàm được thực thi khi con trỏ chuột rời khỏi phần tử HTML:
$(document).ready(function(){
  $("#p1").mouseleave(function(){
    alert("Bye! You now leave p1!");
  });
});

mouseenter() : Hàm được thực thi khi con trỏ chuột nhập vào phần tử HTML:
$(document).ready(function(){
  $("#p1").mouseenter(function(){
    alert("You entered p1!");
  });
});

mousedown(): Hàm được thực thi khi nhấn nút trái, giữa hoặc phải chuột trong khi chuột ở trên phần tử HTML:
$(document).ready(function(){
  $("#p1").mousedown(function(){
    alert("Mouse down over p1!");
  });
});

mouseup(): Hàm được thực thi khi thả nút chuột trái, giữa hoặc phải khi chuột ở trên phần tử HTML
$(document).ready(function(){
  $("#p1").mouseup(function(){
    alert("Mouse up over p1!");
  });
});

hover() Hàm đầu tiên được thực thi khi chuột vào phần tử HTML và hàm thứ hai được thực thi khi chuột rời khỏi phần tử HTML
$("#p1").hover(function(){
  alert("You entered p1!");
},
function(){
  alert("Bye! You now leave p1!");
});

focus() Hàm được thực thi khi trường biểu mẫu được lấy tiêu điểm:
$("input").focus(function(){
  $(this).css("background-color", "#cccccc");
});

blur() Hàm được thực thi khi trường biểu mẫu mất focus:
$("input").blur(function(){
  $(this).css("background-color", "#ffffff");
});

the on() Method gán sự kiện vào thẻ p
<script>
$(document).ready(function(){
  $("p").on("click", function(){
    $(this).hide();
  });
});
</script>
</head>
<body>

<p>If you click on me, I will disappear.</p>
<p>Click me away!</p>
<p>Click me too!</p>

có thể Đính kèm nhiều trình xử lý sự kiện vào phần tử <p>:
$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
