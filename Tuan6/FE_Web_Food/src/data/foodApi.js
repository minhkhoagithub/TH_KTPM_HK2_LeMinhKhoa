import axios from "axios";

const API_BASE_URL = "http://172.16.48.25:8082";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// ================= FOOD API =================

// GET /foods
export const layTatCaMonAn = async () => {
    try {
        const res = await api.get("/foods");
        return res.data;
    } catch (err) {
        console.error("Lỗi layTatCaMonAn:", err);
        throw err;
    }
};

// GET /foods/available
export const layMonAnDangBan = async () => {
    try {
        const res = await api.get("/foods/available");
        return res.data;
    } catch (err) {
        console.error("Lỗi layMonAnDangBan:", err);
        throw err;
    }
};

// GET /foods/{id}
export const layMonTheoId = async (id) => {
    try {
        const res = await api.get(`/foods/${id}`);
        return res.data;
    } catch (err) {
        console.error("Lỗi layMonTheoId:", err);
        throw err;
    }
};

// POST /foods
export const themMon = async (data) => {
    try {
        const res = await api.post("/foods", data);
        return res.data;
    } catch (err) {
        console.error("Lỗi themMon:", err);
        throw err;
    }
};

// PUT /foods/{id}
export const suaMon = async (id, data) => {
    try {
        const res = await api.put(`/foods/${id}`, data);
        return res.data;
    } catch (err) {
        console.error("Lỗi suaMon:", err);
        throw err;
    }
};

// DELETE /foods/{id}
export const xoaMon = async (id) => {
    try {
        const res = await api.delete(`/foods/${id}`);
        return res.data;
    } catch (err) {
        console.error("Lỗi xoaMon:", err);
        throw err;
    }
};