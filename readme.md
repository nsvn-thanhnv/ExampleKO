# Note:
## Observable
- Cần phải khai báo các thuộc tính của model bằng observable, bởi chỉ có JavaScript Object mới thông báo được cho người theo dõi biết về những thay đổi đó
- Muốn phát hiện và phản hồi lại những thay đổi của tập hợp nhiều thứ thì dùng observableArray:
- Một số phương thức của observableArray: 
    - push(value): thêm mới 1 item vào cuối array
    - pop(): lấy ra phần tử cuối cùng và trả về nó 
    - unshift(value): chèn thêm phần tử vào đầu mảng
    - shift(): lấy ra phần tử đầu và trả về nó
    - reverse(), sort() 

## Bindings 
- The visible and hidden bindings: ẩn hoặc hiện thành phần của DOM tùy vào giá trị pass
- The text binding: hiển thị text 1 biên hay 1 trường nào đó trong database 