import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1 style={{ fontFamily: "Times New Roman, Times, serif" }}>
          Bán khoá học online trực tuyến
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="index.html">Trang chủ</a>
          </li>
          <li>
            <a href="order.html" target="_blank">
              Đơn hàng
            </a>
          </li>
          <li>
            <a href="blog.html" target="_blank">
              Blog
            </a>
          </li>
          <li>
            <a href="contact.html" target="_blank">
              Liên hệ
            </a>
          </li>
          <li>
            <a href="login.html" target="_blank">
              Đăng nhập
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const CourseInfo = () => {
  return (
    <div className="container">
      <h1>
        🔥 Khóa Học Lập Trình Online – Bước Đầu Trở Thành Developer Chuyên
        Nghiệp!
      </h1>
      <h2>🚀 Bạn Muốn Học Lập Trình Nhưng Không Biết Bắt Đầu Từ Đâu?</h2>
      <p>
        Lập trình là một trong những kỹ năng
        <span className="highlight"> được săn đón nhất</span> hiện nay. Dù bạn
        muốn trở thành lập trình viên chuyên nghiệp, xây dựng website cá nhân
        hay đơn giản là tìm hiểu về công nghệ, đây là cơ hội để bạn bắt đầu!
      </p>
      <h2>📌 Khóa học lập trình online của chúng tôi sẽ giúp bạn:</h2>
      <ul>
        <li>
          ✅ Nắm vững kiến thức từ cơ bản đến nâng cao về HTML, CSS, JavaScript
        </li>
        <li>✅ Tự tay xây dựng website/blog chuyên nghiệp</li>
        <li>✅ Thành thạo các công cụ phát triển web như VS Code, GitHub</li>
        <li>✅ Nhận chứng chỉ hoàn thành khóa học</li>
      </ul>
      <h2>💰 Học Phí & Ưu Đãi</h2>
      <ul>
        <li>
          🎉{" "}
          <span className="highlight">
            Đăng ký ngay hôm nay để nhận ưu đãi giảm 50%!
          </span>
        </li>
        <li>📅 Thời gian: Học linh hoạt online, không giới hạn</li>
        <li>📜 Chứng chỉ hoàn thành khóa học</li>
      </ul>
      <div className="cta">
        👉 <a href="#">Đăng ký ngay tại đây</a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <CourseInfo />
    </div>
  );
};

export default App;
