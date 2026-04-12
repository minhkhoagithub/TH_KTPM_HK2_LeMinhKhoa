// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Toaster } from 'sonner'
// import CartProvider  from './context/CartProvider'
// import Navbar from './components/Navbar/Navbar'
// import Footer from './components/Footer/Footer'
// import Index from './page/index'
// import NotFound from './page/not_found/NotFound'

// function App() {
//   return (
//     <>
//       <CartProvider>
//         <Toaster />
//         <BrowserRouter>
//           {/* NAVBAR  */}
//           <Navbar />

//           <Routes>
//             <Route index element={<Index />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>

//           {/* FOOTER  */}
//           <Footer />
//         </BrowserRouter>
//       </CartProvider>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'
import CartProvider from './context/CartProvider'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Index from './page/index'
import NotFound from './page/not_found/NotFound'
import LoginPage from './page/Login'
import RegisterPage from './page/Register'
import CheckoutPage from './page/CheckoutPage'

function Layout() {
  const location = useLocation()

  const anHeaderFooter =
    location.pathname === '/login' || location.pathname === '/register'

  return (
    <>
      {!anHeaderFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!anHeaderFooter && <Footer />}
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <Toaster />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App