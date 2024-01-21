Biến: nơi giúp mình lưu trữ tạm lên bộ nhớ
+ với phiên bản ES5 thì dùng var(funtion scope) hiện tại js đang dùng là ES6 nên var không còn được dùng nữa
+ từ phiên bản Es6 thì dùng let(thì dùng cho biêns có mong muốn thay đổi giá trị) và const (thì dùng cho hằng số không có nhu cầu thay đổi) và luôn luôn dùng const cho dễ quản lý 

Cách đặt tên biến: 
+ dùng tiếng anh 
 + đặt tên để biết biến đó chứa gì
 + với true/flase thì đặt với is, has, show từ mang ý nghĩa chỉ có nhận giá trị true/false
 + với dạng danh sách thì dùng thêm List ở đằng sau 
 vd: 
 Const ProductName= 'a'; //tot

 let isSelected = true;

Case style:
 +camelCase : student,  studentList ( thường dùng cho đặt tên biến, tên hàm nói chung )
 +UPPER_CASE: PI, API-URL (thường dùng cho hàm số)
 +PascalCase: Menu, Sliderbar (thường dùng cho các class trong js)

Thuật toán js:
 +toán tử số học : a+b ; a%b
 +Unary: có 1 toán hạng count++
 +Binary: có 2 toán hạng: a=b; a +b
 +ternary: có 3 toán hạng : isShow? 'Show' : 'Hide'
 +logical: toán hạng luận lý : a||b; a && b
 +Bitwise: chuyên xử lý bit

  +ternary: condition ? exprIfTrue : exprIfFalse
  vd: const grade = mark > 8 ? 'GOOD' : ' BAD' hãy tránh lặp lại thì nó sẽ rất khó là đọc hiểu 

Các kiểu dữ liệu:
+ Number: int hoặc là float, interger được giới hạn bởi +-(2^53-1)
+ bigint: nó thường dùng cho những con số lớn
+ string: một chuỗi
+ boolean: cho dạng true flase
+ null: cho không biết giá trị 
+ undefined: cho những giá trị chưa được gán
+ symbol: 1 
+ object: thường dành cho dữ liệu phức tạp
dùng typeof để xác định kiểu duex liệu gì

Boolean:
+ tìm hiểu về type conversion vs type coercion: đều là chuyển đổi dữ liểu từ kiểu này sang kiểu khác 
  -type coercion Là ép kiểu tự động( ép kiểu ngầm )
  -type conversion có thể ép kiểu tự động hoặc ép kiểu do mình tự yêu cầu nó ép
  vd: 
  //type coersion 
  const a = 1 + '2';//'12' nó tự động nối  số 1 thành string '1' trước khi mà làm hành động
  const b = 1 - '2' // -1 nos tự động chuyển string '2' thành số 2 
  const message = ' Js is easy'
  if(message){ //thì khi đó cái message này sẽ tự động chuyển thành boolean 
    console.log("oke")
  }

  //type conversion
  const error = 'Something wrong';
  const hasError= Boolean(error): //thì cái này mình bảo nó là muốn biến đoạn chữ trên để chuyển sang thành boolean( dùng khi có giá trị nào đó về boolean )

  const mark = 9;
  const markString = mark.toString(); để chuyển đổi giá trị sang string

  const mark = "9";
  const markString = mark.parseInt(mark); //chuyển đổi từ string sang number
  // phổ biến hay dùng của type conversion:
  + string: .toString() or String()
  + number : parseint(), parseFloat()or Number()
  + boolean: ! 


Truthy vs Falsy
+truthy là những giá trị khi chuyển đổi về boolean thì sẽ được giá trị true 
+ Falsy: là những gí trị khi chuyển đổi về boolean thì sẽ được giá trị flase
 - cách xác định falsy thì có 1 danh sách thì ngoài danh sách đó thì sẽ là truthy
 ![Alt text](image.png)
 link: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 đối với object{} thì lúc nòa cũng là true






