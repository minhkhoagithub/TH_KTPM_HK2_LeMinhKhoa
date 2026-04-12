import axios from "axios";

const API_BASE_URL = "http://172.16.54.117:8083"; // sửa đúng port order-service của bạn

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const taoHoaDon = async (duLieuTaoHoaDon) => {
    try {
        const response = await api.post("/orders", duLieuTaoHoaDon);
        return response.data;
    } catch (error) {
         console.error("Lỗi tạo hóa đơn:", error);
        console.error("Status:", error?.response?.status);
        console.error("Response data:", error?.response?.data);
        console.error("Response headers:", error?.response?.headers);
        throw error;
    }
};

export const capNhatTrangThaiHoaDon = async (orderId, duLieuCapNhat) => {
    try {
        const response = await api.put(`/orders/${orderId}/status`, duLieuCapNhat);
        return response.data;
    } catch (error) {
        console.error("Lỗi cập nhật trạng thái hóa đơn:", error);
        throw error;
    }
};

export const layHoaDonTheoId = async (id) => {
    try {
        const response = await api.get(`/orders/${id}`);
        return response.data;
    } catch (error) {
        console.error("Lỗi lấy hóa đơn theo id:", error);
        console.error("Status:", error?.response?.status);
        console.error("Response data:", error?.response?.data);
        throw error;
    }
};