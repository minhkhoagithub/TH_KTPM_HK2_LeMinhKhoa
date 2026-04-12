// import axios from "axios";

// const api = axios.create({
//     baseURL: "http://172.16.54.117:8084",
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// export const taoThanhToan = async (duLieuThanhToan) => {
//     try {
//         const response = await api.post("/payments", duLieuThanhToan);
//         return response.data;
//     } catch (error) {
//         console.error("Lỗi tạo thanh toán:", error);
//         console.error("Status:", error?.response?.status);
//         console.error("Response data:", error?.response?.data);
//         throw error;
//     }
// };

// export const layTatCaThanhToan = async () => {
//     try {
//         const response = await api.get("/payments");
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };

// export const layThanhToanTheoId = async (id) => {
//     try {
//         const response = await api.get(`/payments/${id}`);
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };

import axios from "axios";

const api = axios.create({
    baseURL: "http://172.16.54.117:8084",
    headers: {
        "Content-Type": "application/json",
    },
});

export const taoThanhToan = async (duLieuThanhToan) => {
    try {
        const response = await api.post("/payments", duLieuThanhToan);
        return response.data;
    } catch (error) {
        console.error("Lỗi tạo thanh toán:", error);
        console.error("Status:", error?.response?.status);
        console.error("Response data:", error?.response?.data);
        throw error;
    }
};