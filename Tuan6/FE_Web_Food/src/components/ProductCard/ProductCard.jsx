// import { motion } from "framer-motion";
// import { Heart, ShoppingBag, Star } from "lucide-react";

// const ProductCard = ({ product, index, onProductClick }) => {
//     return (
//         <>
//             <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.08, duration: 0.4 }}
//                 className="group cursor-pointer"
//                 onClick={() => onProductClick(product)}
//             >

//                 <div className="relative overflow-hidden bg-secondary aspect-square mb-4">
//                     <img src={product?.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

//                     {
//                         product?.originalPrice && (
//                             <span className="absolute top-3 left-3 bg-accent text-accent-foreground tex-xs font-body font-semibold px-3 py-1 tracking-wide uppercase">
//                                 sale
//                             </span>
//                         )
//                     }

//                     {/* WISHLIST BUTTON  */}
//                     <button className={`absolute top-3 right-3 transition-all duration-300 p-3 rounded-full bg-background/90 backdrop-blur-sm cursor-pointer`}>
//                         <Heart size={16} fill="currentColor" />
//                     </button>

//                     {/* CART BUTTON  */}
//                     <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg cursor-pointer rounded-full"
//                     >
//                         <ShoppingBag size={18} className="text-foreground" />
//                     </motion.button>
//                 </div>

//                 <div className="space-y-1 5">
//                     <p className="text-xs font-body text-muted-foreground tracking-widest uppercase">{product.category}</p>
//                     <h3 className="font-display text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">{product.name}</h3>
//                     <div className="flex items-center gap-1 text-accent">
//                         <Star size={12} fill={"currentColor"} />
//                         <span className="text-xs font-body text-muted-foreground">
//                             {product.rating} ({product.reviews})
//                         </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <span className="font-body font-semibold text-foreground">${product.price}</span>
//                         {
//                             product.originalPrice && (
//                                 <span className="font-body text-sm text-muted-foreground line-through">
//                                     {product.originalPrice}
//                                 </span>
//                             )
//                         }
//                     </div>
//                 </div>

//             </motion.div>
//         </>
//     );
// };

// export default ProductCard;

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product, index, onProductClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            onClick={() => onProductClick(product)}
        >
            {/* IMAGE PLACEHOLDER */}
            <div className="relative h-52 bg-orange-100 flex items-center justify-center">
                <span className="text-5xl">🍽️</span>

                <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                        product.available
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                    }`}
                >
                    {product.available ? "Còn món" : "Hết món"}
                </span>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className="absolute bottom-3 right-3 bg-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg cursor-pointer rounded-full"
                >
                    <ShoppingCart size={18} className="text-orange-500" />
                </motion.button>
            </div>

            {/* INFO */}
            <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                    {product.name}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px]">
                    {product.description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-500">
                        {product.price?.toLocaleString("vi-VN")}₫
                    </span>

                    <span
                        className={`text-xs font-medium ${
                            product.available ? "text-green-600" : "text-red-500"
                        }`}
                    >
                        {product.available ? "Available" : "Unavailable"}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;