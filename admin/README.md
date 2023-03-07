# Chào Mừng Đến Với Công Cụ Tạo Nội Dung 👋

* Mở file `index.html` để chạy công cụ
* File hướng dẫn `README.md` có thể sử dụng công cụ `Visual Studio Code` để có thể đọc một các trực quan.


Hình ảnh tổng quan về công cụ:
<p align="center">
  <img width="1200" src="home.png" alt="cli output"/>
</p>

Tổng quan về dữ liệu file json:

```json
{
	"trealet":{
		"exec":"streamline",
		"img":"image/img1.jpg",
		"title":"Di Sản Văn Hóa",
		"desc":"Di sản văn hóa là di sản của các hiện vật vật thể ",
		"items":[
			{
				"ID":"1",
				"name":"Trống Đồng Đông Sơn",
				"img":"image/hienvat/trongdongDS/Trống Đồng Đông Sơn.jpg",
				"audio":"css/Ý nghĩa hoa văn trên mặt trống đồng Đông Sơn.mp3",
				"desc":"Trống đồng Đông Sơn là tên một loại trống đồng tiêu biểu cho Văn hóa Đông Sơn (700 TCN - 100) của người Việt cổ.",
				"items":[
					{
						"ID":"1",
						"title":"Trống Đồng Ngọc Lũ",
						"img":"image/hienvat/trongdongDS/Trống đồng ngọc lũ.jpg",
						"descImg":"Trống Đồng Ngọc Lũ",
						"content":"Trống đồng Ngọc Lũ thuộc văn hóa Đông Sơn, cách ngày nay khoảng 2.000 - 2.500 năm."
					},
					{
						"ID":"2",
						"title":"Trống Đồng Hoàng Hạ",
						"img":"image/hienvat/trongdongDS/trống đồng hoàng hạ.jpg",
						"descImg":"Trống Đồng Hoàng Hạ",
						"content":"Trống Hoàng Hạ được các nhà khoa học coi là “Á Hậu” trong cuộc thi vẻ đẹp của trống đồng Đông Sơn ở ta."
					}
				]
			},
			{
				"ID":"2",
				"name":"áo bông tròn của dân tộc Cor",
				"img":"image/vanhoa/áo bông tròn của dân tộc Cor/1.jpg",
				"audio":"",
				"desc":"Chiếc áo dài khăn đóng không chỉ là bộ trang phục cổ điển của người Việt .",
				"items":[]
			}
		]
	}
}
```

## Thêm Head

Gồm 3 thành phần:
* Tiêu Đề: Tạo tiêu đề cho nội dung
* Ảnh: Thêm ảnh bìa cho web
* Mô Tả: Mô tả nội dung


## Tạo item

* Tạo một item với các thành phần Tên, Ảnh, Âm Thanh(Nếu Có) và Nội Dung của item
* Các button `Tạo item`, `Xóa item`, `Sửa item` dùng để tương tác với các item, `Làm Trống` dùng để xóa các from nhập

## Items

Nơi hiển thị danh sách các item để lựa chọn và tương tác sau khi được tạo

## Nội dung chi tiết Item

Nơi tạo thêm các thành phần nội dung chi tiết hơn cho item(Nếu có)
 * Các thành phần `Tiêu Đề`, `Ảnh`, `Mô Tả Ảnh` có thể để trống tùy theo bố cục và nội dung của **item**, `Nội Dung` là phần bắt buộc phải có
 * `Tạo`, `Xóa`, `Sửa`, `Làm Trống` có chức năng tương tự phần **Tạo item**


Cuối cùng click vào `Tạo Chủ Đề` để tạo file json