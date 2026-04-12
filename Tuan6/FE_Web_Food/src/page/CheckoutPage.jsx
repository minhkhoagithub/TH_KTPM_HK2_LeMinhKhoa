// import { useMemo, useState } from "react";
// import { useCart } from "../context/CartProvider";
// import { Link } from "react-router-dom";
// import { CreditCard, MapPin, Phone, User } from "lucide-react";
// import { toast } from "sonner";

// const CheckoutPage = () => {
//     const { items } = useCart();

//     const [thongTinDatHang, setThongTinDatHang] = useState({
//         hoTen: "",
//         soDienThoai: "",
//         diaChi: "",
//         ghiChu: "",
//         phuongThucThanhToan: "COD",
//     });

//     const tongTien = useMemo(() => {
//         return items.reduce((tong, mon) => {
//             return tong + mon.price * mon.quantity;
//         }, 0);
//     }, [items]);

//     const phiGiaoHang = items.length > 0 ? 20000 : 0;
//     const tongThanhToan = tongTien + phiGiaoHang;

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setThongTinDatHang((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!thongTinDatHang.hoTen || !thongTinDatHang.soDienThoai || !thongTinDatHang.diaChi) {
//             toast.error("Vui lòng nhập đầy đủ thông tin thanh toán");
//             return;
//         }

//         if (items.length === 0) {
//             toast.error("Giỏ hàng đang trống");
//             return;
//         }

//         console.log("Thông tin thanh toán:", thongTinDatHang);
//         console.log("Sản phẩm:", items);

//         toast.success("Đặt hàng thành công!");
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-10 px-4">
//             <div className="container mx-auto max-w-6xl">
//                 <div className="mb-8">
//                     <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//                         Thanh toán
//                     </h1>
//                     <p className="text-gray-500 mt-2">
//                         Hoàn tất thông tin để đặt món ăn của bạn
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     {/* FORM */}
//                     <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8">
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div>
//                                 <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                                     Thông tin khách hàng
//                                 </h2>

//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="text-sm font-medium text-gray-700 mb-2 block">
//                                             Họ và tên
//                                         </label>
//                                         <div className="relative">
//                                             <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                                             <input
//                                                 type="text"
//                                                 name="hoTen"
//                                                 value={thongTinDatHang.hoTen}
//                                                 onChange={handleChange}
//                                                 placeholder="Nhập họ và tên"
//                                                 className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500"
//                                             />
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <label className="text-sm font-medium text-gray-700 mb-2 block">
//                                             Số điện thoại
//                                         </label>
//                                         <div className="relative">
//                                             <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                                             <input
//                                                 type="text"
//                                                 name="soDienThoai"
//                                                 value={thongTinDatHang.soDienThoai}
//                                                 onChange={handleChange}
//                                                 placeholder="Nhập số điện thoại"
//                                                 className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                                     Địa chỉ giao hàng
//                                 </h2>

//                                 <div className="relative">
//                                     <MapPin size={18} className="absolute left-3 top-4 text-gray-400" />
//                                     <textarea
//                                         name="diaChi"
//                                         value={thongTinDatHang.diaChi}
//                                         onChange={handleChange}
//                                         rows="4"
//                                         placeholder="Nhập địa chỉ nhận hàng"
//                                         className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500 resize-none"
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="text-sm font-medium text-gray-700 mb-2 block">
//                                     Ghi chú
//                                 </label>
//                                 <textarea
//                                     name="ghiChu"
//                                     value={thongTinDatHang.ghiChu}
//                                     onChange={handleChange}
//                                     rows="3"
//                                     placeholder="Ví dụ: ít cay, không hành, giao giờ trưa..."
//                                     className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-orange-500 resize-none"
//                                 />
//                             </div>

//                             <div>
//                                 <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                                     Phương thức thanh toán
//                                 </h2>

//                                 <div className="space-y-3">
//                                     <label className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 cursor-pointer hover:border-orange-500">
//                                         <input
//                                             type="radio"
//                                             name="phuongThucThanhToan"
//                                             value="COD"
//                                             checked={thongTinDatHang.phuongThucThanhToan === "COD"}
//                                             onChange={handleChange}
//                                         />
//                                         <span className="text-gray-700">Thanh toán khi nhận hàng (COD)</span>
//                                     </label>

//                                     <label className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 cursor-pointer hover:border-orange-500">
//                                         <input
//                                             type="radio"
//                                             name="phuongThucThanhToan"
//                                             value="BANKING"
//                                             checked={thongTinDatHang.phuongThucThanhToan === "BANKING"}
//                                             onChange={handleChange}
//                                         />
//                                         <span className="text-gray-700">Chuyển khoản ngân hàng</span>
//                                     </label>
//                                 </div>
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition"
//                             >
//                                 Đặt hàng ngay
//                             </button>
//                         </form>
//                     </div>

//                     {/* ORDER SUMMARY */}
//                     <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-24">
//                         <h2 className="text-xl font-semibold text-gray-800 mb-5">
//                             Đơn hàng của bạn
//                         </h2>

//                         {items.length === 0 ? (
//                             <div className="text-center text-gray-500">
//                                 <p className="mb-4">Giỏ hàng đang trống</p>
//                                 <Link
//                                     to="/"
//                                     className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
//                                 >
//                                     Quay lại menu
//                                 </Link>
//                             </div>
//                         ) : (
//                             <>
//                                 <div className="space-y-4 mb-6">
//                                     {items.map((item, index) => (
//                                         <div
//                                             key={index}
//                                             className="flex items-center gap-3 border-b border-gray-100 pb-4"
//                                         >
//                                             <img
//                                                 src={item.image}
//                                                 alt={item.name}
//                                                 className="w-16 h-16 rounded-lg object-cover"
//                                             />

//                                             <div className="flex-1">
//                                                 <h3 className="font-medium text-gray-800 line-clamp-1">
//                                                     {item.name}
//                                                 </h3>
//                                                 <p className="text-sm text-gray-500">
//                                                     Số lượng: {item.quantity}
//                                                 </p>
//                                             </div>

//                                             <div className="text-sm font-semibold text-orange-500">
//                                                 {(item.price * item.quantity).toLocaleString("vi-VN")}₫
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className="space-y-3 text-sm">
//                                     <div className="flex justify-between text-gray-600">
//                                         <span>Tạm tính</span>
//                                         <span>{tongTien.toLocaleString("vi-VN")}₫</span>
//                                     </div>

//                                     <div className="flex justify-between text-gray-600">
//                                         <span>Phí giao hàng</span>
//                                         <span>{phiGiaoHang.toLocaleString("vi-VN")}₫</span>
//                                     </div>

//                                     <div className="flex justify-between text-lg font-bold text-gray-800 border-t border-gray-200 pt-3">
//                                         <span>Tổng cộng</span>
//                                         <span className="text-orange-500">
//                                             {tongThanhToan.toLocaleString("vi-VN")}₫
//                                         </span>
//                                     </div>
//                                 </div>

//                                 <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
//                                     <CreditCard size={16} />
//                                     <span>Thanh toán an toàn và nhanh chóng</span>
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CheckoutPage;
// import { useEffect, useMemo, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { CreditCard, MapPin, Phone, User } from "lucide-react";
// import { toast } from "sonner";
// import { taoThanhToan } from "../data/paymentApi";
// import { useCart } from "../context/CartProvider";

// const CheckoutPage = () => {
//     const navigate = useNavigate();
//     const { clearCart } = useCart();

//     const [hoaDon, setHoaDon] = useState(null);
//     const [dangThanhToan, setDangThanhToan] = useState(false);

//     const [thongTinDatHang, setThongTinDatHang] = useState({
//         hoTen: "",
//         soDienThoai: "",
//         diaChi: "",
//         ghiChu: "",
//         phuongThucThanhToan: "COD",
//     });

//     useEffect(() => {
//         const data = localStorage.getItem("currentOrder");

//         if (data) {
//             setHoaDon(JSON.parse(data));
//         }
//     }, []);

//     const tongTien = useMemo(() => {
//         if (!hoaDon?.totalAmount) return 0;
//         return Number(hoaDon.totalAmount);
//     }, [hoaDon]);

//     const phiGiaoHang = hoaDon?.items?.length > 0 ? 20000 : 0;
//     const tongThanhToan = tongTien + phiGiaoHang;

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setThongTinDatHang((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!thongTinDatHang.hoTen || !thongTinDatHang.soDienThoai || !thongTinDatHang.diaChi) {
//             toast.error("Vui lòng nhập đầy đủ thông tin thanh toán");
//             return;
//         }

//         if (!hoaDon?.id) {
//             toast.error("Không tìm thấy hóa đơn để thanh toán");
//             return;
//         }

//         try {
//             setDangThanhToan(true);

//             const requestBody = {
//                 orderId: hoaDon.id,
//                 paymentMethod: thongTinDatHang.phuongThucThanhToan,
//             };

//             console.log("request payment =", requestBody);

//             const ketQuaThanhToan = await taoThanhToan(requestBody);

//             console.log("Kết quả thanh toán:", ketQuaThanhToan);

//             toast.success("Thanh toán thành công");

//             // Xóa giỏ hàng sau khi thanh toán xong
//             clearCart();

//             // Có thể lưu payment nếu muốn
//             localStorage.setItem("currentPayment", JSON.stringify(ketQuaThanhToan));

//             navigate("/");
//         } catch (error) {
//             console.error(error);
//             toast.error(
//                 error?.response?.data?.message || "Thanh toán thất bại"
//             );
//         } finally {
//             setDangThanhToan(false);
//         }
//     };

//     if (!hoaDon) {
//         return (
//             <div className="min-h-screen bg-gray-50 py-10 px-4">
//                 <div className="container mx-auto max-w-4xl text-center">
//                     <h1 className="text-3xl font-bold text-gray-800 mb-4">
//                         Không tìm thấy hóa đơn
//                     </h1>
//                     <p className="text-gray-500 mb-6">
//                         Bạn cần tạo hóa đơn trước khi vào trang thanh toán.
//                     </p>
//                     <Link
//                         to="/"
//                         className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
//                     >
//                         Quay lại trang chủ
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 py-10 px-4">
//             <div className="container mx-auto max-w-6xl">
//                 <div className="mb-8">
//                     <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//                         Thanh toán
//                     </h1>
//                     <p className="text-gray-500 mt-2">
//                         Hoàn tất thông tin để thanh toán đơn hàng của bạn
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8">
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div>
//                                 <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                                     Thông tin khách hàng
//                                 </h2>

//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="text-sm font-medium text-gray-700 mb-2 block">
//                                             Họ và tên
//                                         </label>
//                                         <div className="relative">
//                                             <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                                             <input
//                                                 type="text"
//                                                 name="hoTen"
//                                                 value={thongTinDatHang.hoTen}
//                                                 onChange={handleChange}
//                                                 placeholder="Nhập họ và tên"
//                                                 className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500"
//                                             />
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <label className="text-sm font-medium text-gray-700 mb-2 block">
//                                             Số điện thoại
//                                         </label>
//                                         <div className="relative">
//                                             <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                                             <input
//                                                 type="text"
//                                                 name="soDienThoai"
//                                                 value={thongTinDatHang.soDienThoai}
//                                                 onChange={handleChange}
//                                                 placeholder="Nhập số điện thoại"
//                                                 className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                                     Địa chỉ giao hàng
//                                 </h2>

//                                 <div className="relative">
//                                     <MapPin size={18} className="absolute left-3 top-4 text-gray-400" />
//                                     <textarea
//                                         name="diaChi"
//                                         value={thongTinDatHang.diaChi}
//                                         onChange={handleChange}
//                                         rows="4"
//                                         placeholder="Nhập địa chỉ nhận hàng"
//                                         className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500 resize-none"
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="text-sm font-medium text-gray-700 mb-2 block">
//                                     Ghi chú
//                                 </label>
//                                 <textarea
//                                     name="ghiChu"
//                                     value={thongTinDatHang.ghiChu}
//                                     onChange={handleChange}
//                                     rows="3"
//                                     placeholder="Ví dụ: ít cay, không hành, giao giờ trưa..."
//                                     className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-orange-500 resize-none"
//                                 />
//                             </div>

//                             <div>
//                                 <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                                     Phương thức thanh toán
//                                 </h2>

//                                 <div className="space-y-3">
//                                     <label className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 cursor-pointer hover:border-orange-500">
//                                         <input
//                                             type="radio"
//                                             name="phuongThucThanhToan"
//                                             value="COD"
//                                             checked={thongTinDatHang.phuongThucThanhToan === "COD"}
//                                             onChange={handleChange}
//                                         />
//                                         <span className="text-gray-700">Thanh toán khi nhận hàng (COD)</span>
//                                     </label>

//                                     <label className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 cursor-pointer hover:border-orange-500">
//                                         <input
//                                             type="radio"
//                                             name="phuongThucThanhToan"
//                                             value="BANKING"
//                                             checked={thongTinDatHang.phuongThucThanhToan === "BANKING"}
//                                             onChange={handleChange}
//                                         />
//                                         <span className="text-gray-700">Chuyển khoản ngân hàng</span>
//                                     </label>
//                                 </div>
//                             </div>

//                             <button
//                                 type="submit"
//                                 disabled={dangThanhToan}
//                                 className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition disabled:opacity-70"
//                             >
//                                 {dangThanhToan ? "Đang xử lý thanh toán..." : "Thanh toán ngay"}
//                             </button>
//                         </form>
//                     </div>

//                     <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-24">
//                         <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                             Đơn hàng của bạn
//                         </h2>

//                         <p className="text-sm text-gray-500 mb-5">
//                             Mã hóa đơn: #{hoaDon.id}
//                         </p>

//                         {!hoaDon.items || hoaDon.items.length === 0 ? (
//                             <div className="text-center text-gray-500">
//                                 Không có sản phẩm trong hóa đơn
//                             </div>
//                         ) : (
//                             <>
//                                 <div className="space-y-4 mb-6">
//                                     {hoaDon.items.map((item, index) => (
//                                         <div
//                                             key={index}
//                                             className="flex items-start justify-between gap-3 border-b border-gray-100 pb-4"
//                                         >
//                                             <div className="flex-1">
//                                                 <h3 className="font-medium text-gray-800">
//                                                     {item.foodName}
//                                                 </h3>
//                                                 <p className="text-sm text-gray-500">
//                                                     Số lượng: {item.quantity}
//                                                 </p>
//                                                 <p className="text-sm text-gray-500">
//                                                     Đơn giá: {Number(item.unitPrice).toLocaleString("vi-VN")}₫
//                                                 </p>
//                                             </div>

//                                             <div className="text-sm font-semibold text-orange-500 whitespace-nowrap">
//                                                 {Number(item.subtotal).toLocaleString("vi-VN")}₫
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className="space-y-3 text-sm">
//                                     <div className="flex justify-between text-gray-600">
//                                         <span>Tạm tính</span>
//                                         <span>{tongTien.toLocaleString("vi-VN")}₫</span>
//                                     </div>

//                                     <div className="flex justify-between text-gray-600">
//                                         <span>Phí giao hàng</span>
//                                         <span>{phiGiaoHang.toLocaleString("vi-VN")}₫</span>
//                                     </div>

//                                     <div className="flex justify-between text-lg font-bold text-gray-800 border-t border-gray-200 pt-3">
//                                         <span>Tổng cộng</span>
//                                         <span className="text-orange-500">
//                                             {tongThanhToan.toLocaleString("vi-VN")}₫
//                                         </span>
//                                     </div>
//                                 </div>

//                                 <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
//                                     <CreditCard size={16} />
//                                     <span>Trạng thái đơn: {hoaDon.status}</span>
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CheckoutPage;
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreditCard, MapPin, Phone, User } from "lucide-react";
import { toast } from "sonner";
import { taoThanhToan } from "../data/paymentApi";
import { layHoaDonTheoId } from "../data/orderApi";
import { useCart } from "../context/CartProvider";

const CheckoutPage = () => {
    const navigate = useNavigate();
    const { clearCart } = useCart();

    const [hoaDon, setHoaDon] = useState(null);
    const [dangTaiHoaDon, setDangTaiHoaDon] = useState(true);
    const [dangThanhToan, setDangThanhToan] = useState(false);

    const [thongTinDatHang, setThongTinDatHang] = useState({
        hoTen: "",
        soDienThoai: "",
        diaChi: "",
        ghiChu: "",
        phuongThucThanhToan: "COD",
    });

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                setDangTaiHoaDon(true);

                const data = localStorage.getItem("currentOrder");
                if (!data) {
                    setHoaDon(null);
                    return;
                }

                const orderLocal = JSON.parse(data);
                if (!orderLocal?.id) {
                    setHoaDon(null);
                    return;
                }
                console.log(orderLocal.id)

                const orderMoiNhat = await layHoaDonTheoId(orderLocal.id);
                console.log("ỏder",orderMoiNhat)
                setHoaDon(orderMoiNhat);
            } catch (error) {
                console.error(error);
                toast.error("Không lấy được thông tin hóa đơn");
                setHoaDon(null);
            } finally {
                setDangTaiHoaDon(false);
            }
        };

        fetchOrder();
    }, []);

    const tongTien = useMemo(() => {
        if (!hoaDon?.totalAmount) return 0;
        return Number(hoaDon.totalAmount);
    }, [hoaDon]);

    
    const tongThanhToan = tongTien;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setThongTinDatHang((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!thongTinDatHang.hoTen || !thongTinDatHang.soDienThoai || !thongTinDatHang.diaChi) {
            toast.error("Vui lòng nhập đầy đủ thông tin thanh toán");
            return;
        }

        if (!hoaDon?.id) {
            toast.error("Không tìm thấy hóa đơn để thanh toán");
            return;
        }

        try {
            setDangThanhToan(true);

            const requestBody = {
                orderId: hoaDon.id,
                paymentMethod: thongTinDatHang.phuongThucThanhToan,
            };

            console.log("request payment =", requestBody);

            const ketQuaThanhToan = await taoThanhToan(requestBody);

            console.log("Kết quả thanh toán:", ketQuaThanhToan);

            toast.success("Thanh toán thành công");

            clearCart();
            localStorage.setItem("currentPayment", JSON.stringify(ketQuaThanhToan));
            localStorage.removeItem("currentOrder");

            navigate("/");
        } catch (error) {
            console.error(error);
            toast.error(
                error?.response?.data?.message || "Thanh toán thất bại"
            );
        } finally {
            setDangThanhToan(false);
        }
    };

    if (dangTaiHoaDon) {
        return (
            <div className="min-h-screen bg-gray-50 py-10 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Đang tải hóa đơn...
                    </h1>
                </div>
            </div>
        );
    }

    if (!hoaDon) {
        return (
            <div className="min-h-screen bg-gray-50 py-10 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Không tìm thấy hóa đơn
                    </h1>
                    <p className="text-gray-500 mb-6">
                        Bạn cần tạo hóa đơn trước khi vào trang thanh toán.
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
                    >
                        Quay lại trang chủ
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Thanh toán
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Hoàn tất thông tin để thanh toán đơn hàng của bạn
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    Thông tin khách hàng
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                                            Họ và tên
                                        </label>
                                        <div className="relative">
                                            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                name="hoTen"
                                                value={thongTinDatHang.hoTen}
                                                onChange={handleChange}
                                                placeholder="Nhập họ và tên"
                                                className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                                            Số điện thoại
                                        </label>
                                        <div className="relative">
                                            <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                name="soDienThoai"
                                                value={thongTinDatHang.soDienThoai}
                                                onChange={handleChange}
                                                placeholder="Nhập số điện thoại"
                                                className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    Địa chỉ giao hàng
                                </h2>

                                <div className="relative">
                                    <MapPin size={18} className="absolute left-3 top-4 text-gray-400" />
                                    <textarea
                                        name="diaChi"
                                        value={thongTinDatHang.diaChi}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Nhập địa chỉ nhận hàng"
                                        className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-orange-500 resize-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">
                                    Ghi chú
                                </label>
                                <textarea
                                    name="ghiChu"
                                    value={thongTinDatHang.ghiChu}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Ví dụ: ít cay, không hành, giao giờ trưa..."
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-orange-500 resize-none"
                                />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    Phương thức thanh toán
                                </h2>

                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 cursor-pointer hover:border-orange-500">
                                        <input
                                            type="radio"
                                            name="phuongThucThanhToan"
                                            value="COD"
                                            checked={thongTinDatHang.phuongThucThanhToan === "COD"}
                                            onChange={handleChange}
                                        />
                                        <span className="text-gray-700">Thanh toán khi nhận hàng (COD)</span>
                                    </label>

                                    <label className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 cursor-pointer hover:border-orange-500">
                                        <input
                                            type="radio"
                                            name="phuongThucThanhToan"
                                            value="BANKING"
                                            checked={thongTinDatHang.phuongThucThanhToan === "BANKING"}
                                            onChange={handleChange}
                                        />
                                        <span className="text-gray-700">Chuyển khoản ngân hàng</span>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={dangThanhToan}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition disabled:opacity-70"
                            >
                                {dangThanhToan ? "Đang xử lý thanh toán..." : "Thanh toán ngay"}
                            </button>
                        </form>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-24">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Đơn hàng của bạn
                        </h2>

                        <p className="text-sm text-gray-500 mb-2">
                            Mã hóa đơn: #{hoaDon.id}
                        </p>

                        <p className="text-sm text-gray-500 mb-2">
                            User ID: {hoaDon.userId}
                        </p>

                        <p className="text-sm text-gray-500 mb-5">
                            Trạng thái: {hoaDon.status}
                        </p>

                        {!hoaDon.items || hoaDon.items.length === 0 ? (
                            <div className="text-center text-gray-500">
                                Không có sản phẩm trong hóa đơn
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4 mb-6">
                                    {hoaDon.items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start justify-between gap-3 border-b border-gray-100 pb-4"
                                        >
                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-800">
                                                    {item.foodName}
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    Food ID: {item.foodId}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Số lượng: {item.quantity}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Đơn giá: {Number(item.price).toLocaleString("vi-VN")}₫
                                                </p>
                                            </div>

                                            <div className="text-sm font-semibold text-orange-500 whitespace-nowrap">
                                                {Number(item.subtotal).toLocaleString("vi-VN")}₫
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tạm tính</span>
                                        <span>{tongTien.toLocaleString("vi-VN")}₫</span>
                                    </div>

                              
                                    <div className="flex justify-between text-lg font-bold text-gray-800 border-t border-gray-200 pt-3">
                                        <span>Tổng cộng</span>
                                        <span className="text-orange-500">
                                            {tongThanhToan.toLocaleString("vi-VN")}₫
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                                    <CreditCard size={16} />
                                    <span>
                                        Phương thức thanh toán: {thongTinDatHang.phuongThucThanhToan}
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;