// import { useState } from "react";
// import { Link } from "react-router-dom";

// const LoginPage = () => {
//     const [duLieuDangNhap, setDuLieuDangNhap] = useState({
//         email: "",
//         matKhau: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setDuLieuDangNhap((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Dữ liệu đăng nhập:", duLieuDangNhap);
//         alert("Đăng nhập thành công (demo)");
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//             <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
//                 <h1 className="text-3xl font-bold text-center text-orange-500 mb-2">
//                     Đăng nhập
//                 </h1>
//                 <p className="text-center text-gray-500 mb-6">
//                     Chào mừng bạn quay lại
//                 </p>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={duLieuDangNhap.email}
//                             onChange={handleChange}
//                             placeholder="Nhập email"
//                             className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Mật khẩu
//                         </label>
//                         <input
//                             type="password"
//                             name="matKhau"
//                             value={duLieuDangNhap.matKhau}
//                             onChange={handleChange}
//                             placeholder="Nhập mật khẩu"
//                             className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
//                             required
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
//                     >
//                         Đăng nhập
//                     </button>
//                 </form>

//                 <p className="text-center text-sm text-gray-600 mt-5">
//                     Chưa có tài khoản?{" "}
//                     <Link to="/register" className="text-orange-500 font-semibold hover:underline">
//                         Đăng ký
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../data/ApiUserService"; // sửa đúng đường dẫn file api của bạn
import { toast } from "sonner";

const LoginPage = () => {
    const navigate = useNavigate();

    const [duLieuDangNhap, setDuLieuDangNhap] = useState({
        username: "",
        password: "",
    });

    const [dangTai, setDangTai] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDuLieuDangNhap((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!duLieuDangNhap.username || !duLieuDangNhap.password) {
            toast.error("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu");
            return;
        }

        try {
            setDangTai(true);

            const duLieu = await login(
                duLieuDangNhap.username,
                duLieuDangNhap.password
            );

            console.log("Kết quả đăng nhập:", duLieu);

            localStorage.setItem("user", JSON.stringify(duLieu));

            toast.success("Đăng nhập thành công");
            navigate("/");
        } catch (error) {
            console.error("Lỗi đăng nhập:", error);
            toast.error(
                error?.response?.data?.message || "Đăng nhập thất bại"
            );
        } finally {
            setDangTai(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-orange-500 mb-2">
                    Đăng nhập
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Chào mừng bạn quay lại
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tên đăng nhập
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={duLieuDangNhap.username}
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
                            value={duLieuDangNhap.password}
                            onChange={handleChange}
                            placeholder="Nhập mật khẩu"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={dangTai}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-70"
                    >
                        {dangTai ? "Đang đăng nhập..." : "Đăng nhập"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-5">
                    Chưa có tài khoản?{" "}
                    <Link
                        to="/register"
                        className="text-orange-500 font-semibold hover:underline"
                    >
                        Đăng ký
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;