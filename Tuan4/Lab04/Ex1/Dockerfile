# Sử dụng base image Node.js 18
FROM node:18

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file app vào container
COPY index.js .

# Mở cổng 3000
EXPOSE 3000

# Chạy ứng dụng
CMD ["node", "index.js"]