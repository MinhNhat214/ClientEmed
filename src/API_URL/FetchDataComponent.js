import React, { useState, useEffect } from 'react';

const FetchDataComponent = () => {
  const [data, setData] = useState(null);  // Lưu trữ dữ liệu từ API
  const [loading, setLoading] = useState(true);  // Kiểm tra trạng thái tải dữ liệu
  const [error, setError] = useState(null);  // Lưu trữ lỗi nếu có

  // Sử dụng useEffect để gọi API khi component được render
  useEffect(() => {
    // Địa chỉ API
    const apiUrl = 'https://5d73-1-52-157-27.ngrok-free.app/api/get-all-roles'; // Thay đổi với URL API thực tế của bạn
    
    // Hàm gọi API
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);  // Lưu dữ liệu vào state
      } catch (error) {
        setError(error.message);  // Nếu có lỗi, lưu lỗi vào state
      } finally {
        setLoading(false);  // Đổi trạng thái tải sau khi hoàn thành
      }
    };

    fetchData();
  }, []); // Mảng rỗng [] đảm bảo chỉ gọi API một lần khi component được render lần đầu

  // Render dữ liệu hoặc trạng thái lỗi/loading
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchDataComponent;
