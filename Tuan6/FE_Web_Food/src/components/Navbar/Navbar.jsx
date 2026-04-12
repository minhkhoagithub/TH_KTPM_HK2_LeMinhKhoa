
// import { Search, ShoppingCart } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useCart } from '../../context/CartProvider';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const { setIsCartOpen, items, setIsSearchOpen } = useCart();

//     return (
//         <nav className='sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm'>
//             <div className="container mx-auto flex items-center justify-between h-16 px-4">

//                 {/* LEFT MENU */}
//                 <div className="hidden md:flex items-center gap-6">
//                     <a href="#menu" className='text-sm uppercase tracking-wider text-gray-600 hover:text-orange-500 transition'>
//                         Menu
//                     </a>
//                     <a href="#about" className='text-sm uppercase tracking-wider text-gray-600 hover:text-orange-500 transition'>
//                         About
//                     </a>
//                     <a href="#contact" className='text-sm uppercase tracking-wider text-gray-600 hover:text-orange-500 transition'>
//                         Contact
//                     </a>
//                 </div>

//                 {/* LOGO */}
//                 <Link to="/" className="text-2xl font-bold text-orange-500 tracking-wide">
//                     🍽️ FOODIE
//                 </Link>

//                 {/* RIGHT */}
//                 <div className="flex items-center gap-4">

//                     {/* SEARCH */}
//                     <button
//                         onClick={() => setIsSearchOpen(true)}
//                         className='text-gray-600 hover:text-orange-500 transition cursor-pointer'>
//                         <Search size={20} />
//                     </button>

//                     {/* CART */}
//                     <button
//                         onClick={() => setIsCartOpen(true)}
//                         className="relative text-gray-600 hover:text-orange-500 transition cursor-pointer"
//                     >
//                         <ShoppingCart size={22} />

//                         <motion.span
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             className='absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold'
//                         >
//                             {items?.length || 0}
//                         </motion.span>
//                     </button>

//                     {/* LOGIN */}
//                     <Link
//                         to="/login"
//                         className="text-sm font-medium text-gray-600 hover:text-orange-500 transition"
//                     >
//                         Login
//                     </Link>

//                     {/* REGISTER */}
//                     <Link
//                         to="/register"
//                         className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
//                     >
//                         Register
//                     </Link>

//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
import { Search, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { setIsCartOpen, items, setIsSearchOpen } = useCart();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem("user");
        if (data) {
            setUser(JSON.parse(data));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <nav className='sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm'>
            <div className="container mx-auto flex items-center justify-between h-16 px-4">

                {/* LEFT MENU */}
                <div className="hidden md:flex items-center gap-6">
                    <a href="#menu" className='text-sm uppercase tracking-wider text-gray-600 hover:text-orange-500 transition'>
                        Menu
                    </a>
                    <a href="#about" className='text-sm uppercase tracking-wider text-gray-600 hover:text-orange-500 transition'>
                        About
                    </a>
                    <a href="#contact" className='text-sm uppercase tracking-wider text-gray-600 hover:text-orange-500 transition'>
                        Contact
                    </a>
                </div>

                {/* LOGO */}
                <Link to="/" className="text-2xl font-bold text-orange-500 tracking-wide">
                    🍽️ FOODIE
                </Link>

                {/* RIGHT */}
                <div className="flex items-center gap-4">

                    {/* SEARCH */}
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className='text-gray-600 hover:text-orange-500 transition cursor-pointer'>
                        <Search size={20} />
                    </button>

                    {/* CART */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative text-gray-600 hover:text-orange-500 transition cursor-pointer"
                    >
                        <ShoppingCart size={22} />

                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className='absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold'
                        >
                            {items?.length || 0}
                        </motion.span>
                    </button>

                    {/* AUTH */}
                    {user ? (
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-700">
                                👋 {user.username}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="text-sm text-red-500 hover:text-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-sm font-medium text-gray-600 hover:text-orange-500 transition"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
                            >
                                Register
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;