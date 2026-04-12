// import { AnimatePresence, motion } from 'framer-motion';
// import { Heart, Minus, Plus, ShoppingBag, Star, X } from 'lucide-react';
// import { useState } from 'react';
// import { useCart } from '../../context/CartProvider';
// import { toast } from 'sonner';

// const ProductDetailsModal = ({ product, onClose }) => {
//     const [selectedSize, setSelectedSize] = useState(); // initial value = undefined;
//     const [selectedColor, setSelectedColor] = useState(); // initial value = undefined;
//     const [quantity, setQuantity] = useState(1);
//     const { addToCart } = useCart();

//     const handleAdd = () => {
//         addToCart(product, quantity, selectedSize, selectedColor);
//         toast.success('Add to cart successfully!');
//         setQuantity(1);
//         onClose();
//     }
//     return (
//         <AnimatePresence

//         >
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className='overlay-backdrop'
//                 onClick={onClose}
//             />

//             <motion.div
//                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9, y: 20 }}
//                 transition={{ type: "spring", damping: 25, stiffness: 300 }}
//                 className="fixed inset-4 md:inset-auto md:bottom-0 md:left-1/2  md:w-225 md:max-h-[85vh] h-full bg-background z-50 overflow-hidden shadow-2xl flex flex-col md:flex-row p-8 hover:rounded-tl-2xl hover:rounded-tr-2xl transition-all duration-100"
//             >
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 z-10 p-2 hover:bg-muted rounded-full transition-colors cursor-pointer">
//                     <X size={20} className="text-foreground" />
//                 </button>
//                 <div className="md:w-1/2 bg-secondary relative">
//                     <img
//                         src={product.image}
//                         alt={product.name}
//                         className='w-full h-64 md:h-full object-contain'
//                     />
//                     {/* WISHLIST BUTTON  */}
//                     <button className={`absolute top-4 left-4 rounded-full transition-all cursor-pointer`}>
//                         <Heart size={18} fill='currentColor' />
//                     </button>

//                 </div>
//                 <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col">
//                     <p className="text-xs font-body text-muted-foreground tracking-widest uppercase mb-2">{product.category}</p>
//                     <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
//                         {product.name}
//                     </h2>

//                     <div className="flex items-center gap-2 mb-4">
//                         <div className="flex text-accent">
//                             {
//                                 Array.from({ length: 5 })?.map((_, i) => (
//                                     <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
//                                 ))
//                             }
//                         </div>
//                         <span className="text-sm font-body text-muted-foreground">
//                             {product.rating} - {product.reviews}
//                         </span>
//                     </div>

//                     <div className="flex items-center gap-3 mb-6">
//                         <span className="font-display text-3xl font-semibold text-foreground">{product.price}</span>
//                         {
//                             product.originalPrice && (
//                                 <span className="font-body text-lg text-muted-foreground line-through">{product.originalPrice}</span>
//                             )
//                         }
//                     </div>

//                     <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{product.description}</p>

//                     {/* SIZES  */}
//                     {
//                         product.sizes && (
//                             <div className="mb-5">
//                                 <p className="font-body text-xs tracking widest uppercase text-muted-foreground mb-2">
//                                     Size
//                                 </p>
//                                 <div className="flex flex-wrap gap-2">
//                                     {
//                                         product.sizes?.map((size) => (
//                                             <button
//                                                 key={size}
//                                                 onClick={() => setSelectedSize(size === selectedSize ? undefined : size)}
//                                                 className={`px-4 py-2 border text-sm font-body transition-colors cursor-pointer ${selectedSize === size ?
//                                                     "border-foreground bg-foreground text-background"
//                                                     :
//                                                     "border-border text-foreground hover:border-foreground"
//                                                     }`}>{size}</button>
//                                         ))
//                                     }
//                                 </div>
//                             </div>
//                         )
//                     }

//                     {/* PRODUCT COLORS  */}
//                     {
//                         product.colors && (
//                             <div className="mb-6">
//                                 <p className="font-body text-xs tracking widest uppercase text-muted-foreground mb-2">
//                                     Color
//                                 </p>
//                                 {
//                                     product.colors?.map((color) => (
//                                         <button
//                                             key={color}
//                                             onClick={() => setSelectedColor(color === selectedColor ? undefined : color)}
//                                             className={`px-4 py-2 border text-sm font-body transition-colors cursor-pointer ${selectedColor === color ?
//                                                 "border-foreground bg-foreground text-background"
//                                                 :
//                                                 "border-border text-foreground hover:border-foreground"
//                                                 }`}>{color}</button>
//                                     ))
//                                 }
//                             </div>
//                         )
//                     }

//                     <div className="mt-auto flex items-center gap-3">
//                         <div className="flex items-center border border-border">
//                             <button
//                                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                                 className="p-4 hover:bg-muted transition-colors cursor-pointer">
//                                 <Minus size={14} />
//                             </button>
//                             <span className="px-4 font-body text-sm">{quantity}</span>
//                             <button
//                                 onClick={() => setQuantity(quantity + 1)}
//                                 className="p-4 hover:bg-muted transition-colors cursor-pointer">
//                                 <Plus size={14} />
//                             </button>
//                         </div>
//                         <motion.button
//                             whileHover={{ scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                             onClick={handleAdd}
//                             className='flex-1 bg-foreground text-background font-body text-sm tracking-widest uppercase py-4 flex items-center justify-center gap-2 hover:bg-accent cursor-pointer hover:text-accent-foreground transition-colors duration-300'
//                         >
//                             <ShoppingBag size={16} />
//                             Add to cart
//                         </motion.button>
//                     </div>

//                 </div>
//             </motion.div>
//         </AnimatePresence>
//     );
// };

// export default ProductDetailsModal;



import { AnimatePresence, motion } from 'framer-motion';
import { Clock3, Minus, Plus, ShoppingCart, Star, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../context/CartProvider';
import { toast } from 'sonner';

const ProductDetailsModal = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart(product, quantity);
        toast.success('Đã thêm món vào giỏ hàng!');
        setQuantity(1);
        onClose();
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='fixed inset-0 bg-black/50 z-40'
                onClick={onClose}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 24, stiffness: 260 }}
                className='fixed z-50 inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                           w-auto md:w-[900px] max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl 
                           flex flex-col md:flex-row'
            >
                <button
                    onClick={onClose}
                    className='absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-gray-100 transition cursor-pointer'
                >
                    <X size={20} className='text-gray-700' />
                </button>

                {/* Ảnh món ăn */}
                <div className='md:w-1/2 bg-gray-100 relative'>
                    <img
                        src={product.image}
                        alt={product.name}
                        className='w-full h-72 md:h-full object-cover'
                    />

                    {product?.isPopular && (
                        <span className='absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full'>
                            Popular
                        </span>
                    )}
                </div>

                {/* Nội dung chi tiết */}
                <div className='md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col'>
                    <p className='text-xs text-gray-500 tracking-widest uppercase mb-2'>
                        {product.category}
                    </p>

                    <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-3'>
                        {product.name}
                    </h2>

                    <div className='flex items-center gap-3 mb-4'>
                        <div className='flex items-center gap-1 text-orange-500'>
                            <Star size={15} fill='currentColor' />
                            <span className='text-sm font-medium text-gray-700'>
                                {product.rating}
                            </span>
                        </div>

                        <span className='text-sm text-gray-500'>
                            ({product.reviews} đánh giá)
                        </span>

                        {product.time && (
                            <div className='flex items-center gap-1 text-sm text-gray-500'>
                                <Clock3 size={14} />
                                <span>{product.time}</span>
                            </div>
                        )}
                    </div>

                    <div className='mb-5'>
                        <span className='text-3xl font-bold text-orange-500'>
                            {product.price?.toLocaleString('vi-VN')}₫
                        </span>
                    </div>

                    <p className='text-sm text-gray-600 leading-relaxed mb-6'>
                        {product.description || 'Món ăn thơm ngon, được chế biến từ nguyên liệu tươi mới và phục vụ trong thời gian nhanh chóng.'}
                    </p>

                    {/* Gợi ý thông tin thêm */}
                    <div className='space-y-3 mb-6'>
                        {product.ingredients && (
                            <div>
                                <p className='text-xs uppercase tracking-wider text-gray-500 mb-1'>
                                    Thành phần
                                </p>
                                <p className='text-sm text-gray-700'>
                                    {product.ingredients}
                                </p>
                            </div>
                        )}

                        {product.serving && (
                            <div>
                                <p className='text-xs uppercase tracking-wider text-gray-500 mb-1'>
                                    Khẩu phần
                                </p>
                                <p className='text-sm text-gray-700'>
                                    {product.serving}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Số lượng + nút thêm giỏ */}
                    <div className='mt-auto flex items-center gap-3'>
                        <div className='flex items-center border border-gray-300 rounded-lg overflow-hidden'>
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className='p-3 hover:bg-gray-100 transition cursor-pointer'
                            >
                                <Minus size={16} />
                            </button>

                            <span className='px-4 text-sm font-medium'>
                                {quantity}
                            </span>

                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className='p-3 hover:bg-gray-100 transition cursor-pointer'
                            >
                                <Plus size={16} />
                            </button>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleAdd}
                            className='flex-1 bg-orange-500 text-white text-sm font-semibold uppercase tracking-wider py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition cursor-pointer'
                        >
                            <ShoppingCart size={18} />
                            Thêm vào giỏ hàng
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductDetailsModal;