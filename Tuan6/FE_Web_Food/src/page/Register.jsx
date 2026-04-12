// import { useState } from "react";
// import { Link } from "react-router-dom";

// const RegisterPage = () => {
//     const [duLieuDangKy, setDuLieuDangKy] = useState({
//         hoTen: "",
//         email: "",
//         matKhau: "",
//         xacNhanMatKhau: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setDuLieuDangKy((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (duLieuDangKy.matKhau !== duLieuDangKy.xacNhanMatKhau) {
//             alert("Mật khẩu xác nhận không khớp");
//             return;
//         }

//         console.log("Dữ liệu đăng ký:", duLieuDangKy);
//         alert("Đăng ký thành công (demo)");
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//             <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
//                 <h1 className="text-3xl font-bold text-center text-orange-500 mb-2">
//                     Đăng ký
//                 </h1>
//                 <p className="text-center text-gray-500 mb-6">
//                     Tạo tài khoản mới
//                 </p>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Họ và tên
//                         </label>
//                         <input
//                             type="text"
//                             name="hoTen"
//                             value={duLieuDangKy.hoTen}
//                             onChange={handleChange}
//                             placeholder="Nhập họ và tên"
//                             className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
//                             required
//                         />
//                     </div>

//                     {/* <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={duLieuDangKy.email}
//                             onChange={handleChange}
//                             placeholder="Nhập email"
//                             className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
//                             required
//                         />
//                     </div> */}

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Mật khẩu
//                         </label>
//                         <input
//                             type="password"
//                             name="matKhau"
//                             value={duLieuDangKy.matKhau}
//                             onChange={handleChange}
//                             placeholder="Nhập mật khẩu"
//                             className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Xác nhận mật khẩu
//                         </label>
//                         <input
//                             type="password"
//                             name="xacNhanMatKhau"
//                             value={duLieuDangKy.xacNhanMatKhau}
//                             onChange={handleChange}
//                             placeholder="Nhập lại mật khẩu"
//                             className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
//                             required
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
//                     >
//                         Đăng ký
//                     </button>
//                 </form>

//                 <p className="text-center text-sm text-gray-600 mt-5">
//                     Đã có tài khoản?{" "}
//                     <Link to="/login" className="text-orange-500 font-semibold hover:underline">
//                         Đăng nhập
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default RegisterPage;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../data/ApiUserService"; // sửa đúng đường dẫn file api của bạn
import { toast } from "sonner";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [duLieuDangKy, setDuLieuDangKy] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        role: "USER",
    });

    const [dangTai, setDangTai] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDuLieuDangKy((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !duLieuDangKy.username ||
            !duLieuDangKy.password ||
            !duLieuDangKy.confirmPassword
        ) {
            toast.error("Vui lòng nhập đầy đủ thông tin");
            return;
        }

        if (duLieuDangKy.password !== duLieuDangKy.confirmPassword) {
            toast.error("Mật khẩu xác nhận không khớp");
            return;
        }

        try {
            setDangTai(true);

            const duLieu = await register(
                duLieuDangKy.username,
                duLieuDangKy.password,
                duLieuDangKy.role
            );

            console.log("Kết quả đăng ký:", duLieu);

            toast.success("Đăng ký thành công");
            navigate("/login");
        } catch (error) {
            console.error("Lỗi đăng ký:", error);
            toast.error(
                error?.response?.data?.message || "Đăng ký thất bại"
            );
        } finally {
            setDangTai(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-orange-500 mb-2">
                    Đăng ký
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Tạo tài khoản mới
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tên đăng nhập
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={duLieuDangKy.username}
                            onChange={handleChange}
                            placeholder="Nhập username"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={duLieuDangKy.password}
                            onChange={handleChange}
                            placeholder="Nhập mật khẩu"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Xác nhận mật khẩu
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={duLieuDangKy.confirmPassword}
                            onChange={handleChange}
                            placeholder="Nhập lại mật khẩu"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Vai trò
                        </label>
                        <select
                            name="role"
                            value={duLieuDangKy.role}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                        >
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={dangTai}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-70"
                    >
                        {dangTai ? "Đang đăng ký..." : "Đăng ký"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-5">
                    Đã có tài khoản?{" "}
                    <Link
                        to="/login"
                        className="text-orange-500 font-semibold hover:underline"
                    >
                        Đăng nhập
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;