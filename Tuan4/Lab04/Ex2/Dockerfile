# Base image Python 3.9
FROM python:3.9

# Thư mục làm việc
WORKDIR /app

# Copy file vào container
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY app.py .

# Mở cổng 5000
EXPOSE 5000

# Chạy ứng dụng
CMD ["python", "app.py"]