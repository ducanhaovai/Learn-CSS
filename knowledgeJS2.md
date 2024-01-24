tổng quan về array

- khai báo mảng: const numberList =[]
  1 mảng các số: const numberList =[1,2,3];
  list Student
  const studentlist = [
  {id: 1, name: 'Van A'},
  {id: 2, name: 'Van B'},
  {id: 3, name: 'Van C'},
  ]
  có thể khái báo tất cả các dữ liệu:
  const mixedList =[
  1,
  'Word',
  true,
  null,
  undenfined,
  {id: 3, name: 'Van C'},
  [1,2,3]

  ]

-truy xuất phần từ của mảng

- dùng square brackets để truy xuất phần tử tại vị trí index.
- index của mảng bắt đầu từ số 0
- nếu length của aray bằng 3, thì index lớn nhất là length -1 =2

-mẳng 2 chiều: là mẳng lồng mảng
vd: const board = [
[1,2,3],
[4,5,6],
[7,8,9],
]
board[0]; //[1,2,3]
board[0],[1]//2
board[1],[2]//6

Tổng quan về array object

- Array.isArray(arr): kiểm tra arr có phải là mảng không?
- Array.from() tạo mảng mới từ các dữ liệu khác như Set,

* nhóm hàng kiểm tra phần tử có tồn tại không?
  +every(callbackFn):kiểm tra tất cả phần tử thỏa điều kiện
  +some(callbackFN): kiểm tra có 1 phần tử thỏa điều kiện
  +indexOf(SearchElement): tìm vị trí đầu tiên của phần tử
  +lastIndex(searchElement): tìm vị trí cuối cùng của phần tử
  +includes(searchElement): kiểm tra có chứa phần tử searchElement không
  +find(callbackFn): tìm phần tử đầu tiên thỏa điều kiện
  +findindex(callbackFn): tìm vị trí của phần tử đầu tiên thỏa điều kiện
* nhóm hàm thên xóa phần tử
  +push(element0,...,elementN) thêm cuối mảng
  +pop() xóa cuối mảng
  +shift() xóa đầu mảng
  +unshift(element0) thêm đầu mảng
  +splice(start, deleteCount,item1,..) xóa/ thêm giữa mảng
  -nhóm hàm hay sử dụng
  +forEach() : duyệt mảng
  +map(): biển đổi mảng giá trị từ mảng này sang mảng khác sô lượng như nhau
  +fillter() lọc mảng theo điều kiện

- slice() lẩy mảng con
- reduce(): duyệt mảng và tính toán cho kết quả cuối cùng

* Array Destructuring

  const sutdent = {
  id:1,
  name: 'EA'
  }
  const {id , name} =sutdent;
  console.log(id);
  console.log(name);

  const [fist, second, third ] =[3, 5, 7, 9, 11]

  const [fist, second, third, ...rest ] =[3, 5, 7, 9, 11]
  console.log(rest); // [9, 11]

*Clone array
  
  const numberList = [1, 2, 3];
  const anotherlist = numbetList;

  anothertList[0] = 4 // sẽ thảy đổi mảng hiện tại thành  1 -> 4
  console.log(numberList); //[4, 2, 3]

  //nhưng khi dùng clone array

  const numberList = [1, 2, 3]
  const anotherList = [...numberList]; // thì khi dùng cách này sẽ tạo ra 1 mảng mới với tất cả phẩn tử trong numberList

  anotherList[0] = 4;
  console.log(numberList); // [1,2,3]





