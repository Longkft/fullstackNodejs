# fullstackNodejs
* Tự động khởi động server mỗi khi thay đổi mã nguồn.
  - Thay vì chúng ta mỗi lần chạy dự án bằng cách chạy câu lệnh với file index.js $ node index.js thì chúng ta dùng nodemon để thay thế cho công việc đó
  - Để cài đặt nodemon chúng ta cần ghi đoạn code này vào dự án "$ npm install nodemon --save-dev"
    + Tham số --save:māc đích là sau khi cài đặt xong vào thư māc node_modules thì cũng thêm thông
      tin vào mục dependencies trong package.json. Với việc thêm vào dependencies, sau này người khác
      muốn cài đặt các thư viện cần thiết cho dự án thì cần gõ: npm install là nó tự cài đặt tất cả 
      dependencies được liệt kê trong package.json
    + Tham số -dev:có những thư viện chỉ dùng để hỗ trợ phát triển dự án, còn khi triển
      khai thật ra thị trường thì không cần. Đó là lý do mà phần dependencies của
      package.json được chia làm 2 phần: "dependencies" và "devDependencies".
      Tham số -dev là để thêm vào "devDependencies".
      
