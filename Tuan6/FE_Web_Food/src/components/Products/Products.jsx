
// import { useState } from "react";
// import { products } from "../../data/data";
// import ProductCard from "../ProductCard/ProductCard";

// const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

// const Products = ({ setSelectedProduct }) => {
//     const [activeCategory, setActiveCategory] = useState("All");

//     const filtered =
//         activeCategory === "All"
//             ? products
//             : products.filter((p) => p.category === activeCategory);

//     return (
//         <section id="menu" className="container mx-auto px-4 py-16">

//             {/* HEADER */}
//             <div className="text-center mb-12">
//                 <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-3">
//                     Our Menu
//                 </p>

//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//                     Delicious Dishes For You 🍽️
//                 </h2>
//             </div>

//             {/* CATEGORY FILTER */}
//             <div className="flex justify-center gap-3 mb-12 flex-wrap">
//                 {categories.map((cat) => (
//                     <button
//                         key={cat}
//                         onClick={() => setActiveCategory(cat)}
//                         className={`px-5 py-2 text-sm rounded-full transition-all cursor-pointer ${
//                             activeCategory === cat
//                                 ? "bg-orange-500 text-white shadow-md"
//                                 : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-500"
//                         }`}
//                     >
//                         {cat}
//                     </button>
//                 ))}
//             </div>

//             {/* FOOD GRID */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {filtered.map((product, index) => (
//                     <ProductCard
//                         key={product.id}
//                         product={product}
//                         index={index}
//                         onProductClick={setSelectedProduct}
//                     />
//                 ))}
//             </div>

//             {/* EMPTY STATE */}
//             {filtered.length === 0 && (
//                 <div className="text-center text-gray-500 mt-10">
//                     Không có món nào trong danh mục này 😢
//                 </div>
//             )}
//         </section>
//     );
// };

// export default Products;
import { useEffect, useMemo, useState } from "react";
import { layMonAnDangBan } from "../../data/foodApi";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ setSelectedProduct }) => {
    const [danhSachMon, setDanhSachMon] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [dangTai, setDangTai] = useState(true);
    const [loi, setLoi] = useState("");

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                setDangTai(true);
                setLoi("");

                const data = await layMonAnDangBan();

                // nếu backend trả mảng luôn
                setDanhSachMon(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Lỗi tải món ăn:", error);
                setLoi("Không tải được danh sách món ăn");
            } finally {
                setDangTai(false);
            }
        };

        fetchFoods();
    }, []);

    const categories = useMemo(() => {
        return [
            "All",
            ...Array.from(
                new Set(danhSachMon.map((p) => p.category).filter(Boolean))
            ),
        ];
    }, [danhSachMon]);

    const filtered =
        activeCategory === "All"
            ? danhSachMon
            : danhSachMon.filter((p) => p.category === activeCategory);

    if (dangTai) {
        return (
            <section id="menu" className="container mx-auto px-4 py-16">
                <div className="text-center text-gray-500">
                    Đang tải danh sách món ăn...
                </div>
            </section>
        );
    }

    if (loi) {
        return (
            <section id="menu" className="container mx-auto px-4 py-16">
                <div className="text-center text-red-500">
                    {loi}
                </div>
            </section>
        );
    }

    return (
        <section id="menu" className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-3">
                    Our Menu
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Delicious Dishes For You 🍽️
                </h2>
            </div>

            <div className="flex justify-center gap-3 mb-12 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 text-sm rounded-full transition-all cursor-pointer ${
                            activeCategory === cat
                                ? "bg-orange-500 text-white shadow-md"
                                : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-500"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filtered.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                        onProductClick={setSelectedProduct}
                    />
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="text-center text-gray-500 mt-10">
                    Không có món nào trong danh mục này 😢
                </div>
            )}
        </section>
    );
};

export default Products;