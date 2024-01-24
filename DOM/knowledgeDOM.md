DOM là gì: Document Object Model
DOM được dùng để truy xuất và thao tác trên các tài liệu có cấu trúc dạng HTML hay XML bằng các ngôn ngữ lập trình thông dụng như Javascript, PHP…
2. các loại DOM
- DOM Selector: name, id, class, attribute
- DOM HTML: change attribute, content, text
- DOM Event: cung cấp các event để tác động vào envet HTML
- DOM Style: change style
- DOM listerner: lắng nghe các sự kiện hành động tác động lên các thẻ HTML đó

2.1 DOM Selector:quản lý
- document.getElementByTagName('tagName')
Ex: 
let tabObject = document.getElementByTagName('p')
tabObject[0].style.color = 'red';

  *document.getElementByClassName('className')
  let tabObject = document.getElementByClassName('name')
  tabObject[0].style.color = 'red';

  *document.getElementByID('idName')
  let htmlObject = document.getElementByID('one')
  htmlObject.style.color = 'red';

  *document.querySelector() & document.querySelectorAll()
  // chỉ lấy được 1 object trên trang đó mặc dù nhiều thẻ 
  let  object = document.querySelector('p a small')

  // lấy được tất cả các thẻ giống nhau
  let  object = document.querySelectorAll()

2.2 DOM HTML : .inner
<a href ='#'>Google</a>
  1.innerHTMl
  // sẽ lấy bao gồm cả thẻ HTML 
  let content = document.getElementById('name').innerHTML
  2.innerText
  // sẽ chỉ lấy text 
  let content = document.getElementById('name').innerText
  3.getAttribute('attributeName')
  <input type='text' name="Anh" id='phone' number='1'/>
  let name = document.getElementById('phone').getAttribute('name');//Anh

  let number = document.getElementById('phone').getAttribute('number');//1

  4.setAttribute('attributeName', 'value')
  document.getElementById('phone').setAttribute('number' , 1000);
   let newNumber = document.getElementById('phone').getAttribute('number'); //1000

   //thay đổi giá trị trong thẻ <p>
   <p id='email'>Giá trị P</p>
   document.getElementById('email').innerHTML ='Giá trị email mới' // thì thằng nội dung trong p có id là email sẽ thay đổi

    


  



