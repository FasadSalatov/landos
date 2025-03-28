import React, {Suspense, lazy, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import History from "./pages/history";
import Memes from "./pages/memes";
import Buy from "./pages/buy";
import Roadmap from "./pages/roadmap";
import { motion } from 'framer-motion';

// Динамический импорт компонентов
const Main = lazy(() => import('./pages/main.js'));
const Socials = lazy(() => import('./pages/socials.js'));
const About = lazy(() => import('./pages/about.js'));

const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const headerVariants = {
    hidden: { y: -100 },
    visible: { 
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { 
        x: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    },
    exit: {
        x: "100%",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    }
};

const mobileNavItemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1,
        transition: { duration: 0.3 }
    }
};

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    const location = useLocation(); // Определяем текущий путь
    return (<>
        {/* Хедер */}
        <motion.header 
            className='d-none d-lg-block'
            initial="hidden"
            animate="visible"
            variants={headerVariants}
        >
            <nav className="navbar navbar-expand-lg navbar-gray bg-black header">
                <div className="container d-flex align-items-center">
                    <motion.div
                        className="d-flex align-items-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <Link className="navbar-brand" to="/">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_204)">
                                    <path
                                        d="M13.9806 0.0673031C12.8258 0.411894 10.1163 1.80792 6.47401 3.94615C6.03871 4.20238 5.0793 4.74136 4.34196 5.13897C2.52083 6.11973 1.83679 6.58802 1.26824 7.18883C0.291051 8.24029 -0.0287579 9.30054 0.060078 11.1472C0.157797 13.1176 0.806297 14.8317 2.33427 17.1555C3.03608 18.2246 4.35973 20.0005 5.26585 21.0873C5.56788 21.4496 6.02982 22.0062 6.27861 22.3155C6.53618 22.6247 6.88267 23.04 7.05145 23.2432C7.22911 23.4376 7.42457 23.6938 7.49564 23.7999C7.70884 24.1003 9.45004 26.3887 9.87644 26.9188C10.4272 27.5903 11.5466 28.6771 12.044 29.0217C13.1634 29.7904 14.3627 30.1174 15.3931 29.9406C16.9033 29.6844 18.1648 28.739 19.9504 26.5124C21.2652 24.8866 21.434 24.6834 22.9975 22.8898C23.335 22.501 23.8237 21.9444 24.0635 21.6616C24.3122 21.3789 24.6498 20.9813 24.8275 20.7869C25.3072 20.2391 26.773 18.4278 27.1283 17.9418C28.301 16.3249 28.9406 15.2999 29.2516 14.5401C29.8734 12.9938 30.1044 11.2532 29.8556 10.0781C29.6602 9.18572 29.2959 8.31097 28.8784 7.7455C28.0256 6.57917 27.1728 6.03135 21.5761 3.10676C19.8083 2.17902 18.3158 1.35731 18.0049 1.13642C17.8539 1.03039 17.312 0.738813 16.7967 0.491412C15.9173 0.0673031 15.8018 0.0319596 15.0733 0.00545208C14.6469 -0.0122195 14.1495 0.0142879 13.9806 0.0673031ZM15.6241 2.98307C15.9173 3.12443 16.5658 3.49553 17.0721 3.79595C17.5696 4.09636 19.2131 5.0241 20.7144 5.86349C22.2157 6.69404 23.4416 7.41858 23.4416 7.46271C23.4416 7.50691 22.7399 7.90451 21.887 8.33746C21.0342 8.77926 20.0126 9.31824 19.6217 9.53029C19.2308 9.75119 18.0138 10.4315 16.9211 11.0412L14.9312 12.1545L14.6291 12.0308C14.3271 11.9071 13.3144 11.3416 11.2356 10.1488C10.6315 9.79538 10.1252 9.51259 10.0985 9.51259C10.0719 9.51259 9.9475 9.43311 9.81427 9.34473C9.45003 9.07964 7.53117 8.07243 6.85604 7.78964C6.51844 7.64827 6.25192 7.48926 6.25192 7.43622C6.26081 7.31255 7.30908 6.67635 9.27237 5.6161C9.6366 5.42169 10.3028 5.05944 10.7381 4.81205C11.1823 4.57348 11.8575 4.20238 12.2483 3.99033C12.6392 3.77827 13.3233 3.40718 13.7586 3.15978C14.2116 2.91238 14.6736 2.718 14.8246 2.718C14.9756 2.70916 15.331 2.83286 15.6241 2.98307ZM4.11988 9.50379C4.90163 9.82187 6.26971 10.4934 7.54007 11.1914C7.83324 11.3504 8.47284 11.7038 8.96141 11.9689C9.45003 12.234 9.98304 12.5432 10.1607 12.6581C10.3295 12.773 10.4983 12.8702 10.5249 12.8702C10.5871 12.8702 12.8347 14.2132 13.2078 14.4782L13.4476 14.6461V20.5218C13.4476 25.9911 13.4387 26.3975 13.2966 26.371C13.1545 26.3445 11.8308 24.9397 11.1379 24.0915C10.9691 23.8794 10.7026 23.5613 10.5516 23.3934C10.2673 23.0576 8.14414 20.3009 7.11362 18.9226C6.79381 18.4808 6.40295 17.9683 6.26081 17.7739C4.19983 15.0526 3.729 14.275 3.22263 12.7818C2.96501 12.0308 2.93836 11.8364 2.93836 10.9263C2.92947 9.97208 3.06273 9.15917 3.21375 9.15917C3.24928 9.15917 3.65793 9.30939 4.11988 9.50379ZM26.7108 9.29174C26.9774 9.55678 27.084 10.0781 27.084 11.1472C27.084 12.0485 27.0484 12.2958 26.8707 12.7818C26.1334 14.7698 24.4544 17.1024 20.5545 21.5203C19.9682 22.1829 19.1154 23.199 17.9694 24.6216C17.5341 25.1517 16.3437 26.3887 16.2637 26.3887C16.2282 26.3887 16.2104 23.738 16.2193 20.4953L16.246 14.602L16.6013 14.3546C17.0011 14.0718 18.7067 13.0646 19.5951 12.5786C19.9149 12.4019 21.3984 11.6508 22.882 10.9263C24.3567 10.1929 25.7514 9.50379 25.9735 9.38007C26.4532 9.13268 26.5421 9.11498 26.7108 9.29174Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_204">
                                        <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </motion.div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse puvv" id="navbarNav">
                        <ul className="navbar-nav flex gap-4 ps-4">
                            <motion.li className="nav-item" variants={navItemVariants}>
                                <Link
                                    className={`nav-link pavv ${location.pathname === "/about" ? "active-link" : ""}`}
                                    to="/about"
                                >
                                    ABOUT US
                                </Link>
                            </motion.li>
                            <motion.li className="nav-item" variants={navItemVariants}>
                                <Link
                                    className={`nav-link pavv ${location.pathname === "/history" ? "active-link" : ""}`}
                                    to="/history"
                                >
                                    HISTORY
                                </Link>
                            </motion.li>
                            <motion.li className="nav-item" variants={navItemVariants}>
                                <Link
                                    className={`nav-link pavv ${location.pathname === "/memes" ? "active-link" : ""}`}
                                    to="/memes"
                                >
                                    MEMES
                                </Link>
                            </motion.li>
                            <motion.li className="nav-item" variants={navItemVariants}>
                                <Link
                                    className={`nav-link pavv ${location.pathname === "/buy" ? "active-link" : ""}`}
                                    to="/buy"
                                >
                                    BUY
                                </Link>
                            </motion.li>
                            <motion.li className="nav-item" variants={navItemVariants}>
                                <Link
                                    className={`nav-link pavv ${location.pathname === "/road" ? "active-link" : ""}`}
                                    to="/road"
                                >
                                    ROADMAP
                                </Link>
                            </motion.li>
                        </ul>
                        <ul className="w-full navbar-nav flex gap-4 ps-4 flex pupu justify-end">
                            <motion.li variants={navItemVariants}>
                                <Link
                                    className={`nav-link pavv ${location.pathname === "/socials" ? "active-link" : ""}`}
                                    to="/socials"
                                >
                                    SOCIALS
                                </Link>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </nav>
        </motion.header>

        <motion.header 
            className="header d-lg-none"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
        >
            <nav className="navbar navbar-dark pupupu">
                <div className="container-fluid d-flex align-items-center">
                    <motion.div
                        className="d-flex align-items-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_0_2712)">
                                <path
                                    d="M13.9806 0.0673031C12.8258 0.411894 10.1163 1.80792 6.47401 3.94615C6.03871 4.20238 5.0793 4.74136 4.34196 5.13897C2.52083 6.11973 1.83679 6.58802 1.26824 7.18883C0.291051 8.24029 -0.0287579 9.30054 0.060078 11.1472C0.157797 13.1176 0.806297 14.8317 2.33427 17.1555C3.03608 18.2246 4.35973 20.0005 5.26585 21.0873C5.56788 21.4496 6.02982 22.0062 6.27861 22.3155C6.53618 22.6247 6.88267 23.04 7.05145 23.2432C7.22911 23.4376 7.42457 23.6938 7.49564 23.7999C7.70884 24.1003 9.45004 26.3887 9.87644 26.9188C10.4272 27.5903 11.5466 28.6771 12.044 29.0217C13.1634 29.7904 14.3627 30.1174 15.3931 29.9406C16.9033 29.6844 18.1648 28.739 19.9504 26.5124C21.2652 24.8866 21.434 24.6834 22.9975 22.8898C23.335 22.501 23.8237 21.9444 24.0635 21.6616C24.3122 21.3789 24.6498 20.9813 24.8275 20.7869C25.3072 20.2391 26.773 18.4278 27.1283 17.9418C28.301 16.3249 28.9406 15.2999 29.2516 14.5401C29.8734 12.9938 30.1044 11.2532 29.8556 10.0781C29.6602 9.18572 29.2959 8.31097 28.8784 7.7455C28.0256 6.57917 27.1728 6.03135 21.5761 3.10676C19.8083 2.17902 18.3158 1.35731 18.0049 1.13642C17.8539 1.03039 17.312 0.738813 16.7967 0.491412C15.9173 0.0673031 15.8018 0.0319596 15.0733 0.00545208C14.6469 -0.0122195 14.1495 0.0142879 13.9806 0.0673031ZM15.6241 2.98307C15.9173 3.12443 16.5658 3.49553 17.0721 3.79595C17.5696 4.09636 19.2131 5.0241 20.7144 5.86349C22.2157 6.69404 23.4416 7.41858 23.4416 7.46271C23.4416 7.50691 22.7399 7.90451 21.887 8.33746C21.0342 8.77926 20.0126 9.31824 19.6217 9.53029C19.2308 9.75119 18.0138 10.4315 16.9211 11.0412L14.9312 12.1545L14.6291 12.0308C14.3271 11.9071 13.3144 11.3416 11.2356 10.1488C10.6315 9.79538 10.1252 9.51259 10.0985 9.51259C10.0719 9.51259 9.9475 9.43311 9.81427 9.34473C9.45003 9.07964 7.53117 8.07243 6.85604 7.78964C6.51844 7.64827 6.25192 7.48926 6.25192 7.43622C6.26081 7.31255 7.30908 6.67635 9.27237 5.6161C9.6366 5.42169 10.3028 5.05944 10.7381 4.81205C11.1823 4.57348 11.8575 4.20238 12.2483 3.99033C12.6392 3.77827 13.3233 3.40718 13.7586 3.15978C14.2116 2.91238 14.6736 2.718 14.8246 2.718C14.9756 2.70916 15.331 2.83286 15.6241 2.98307ZM4.11988 9.50379C4.90163 9.82187 6.26971 10.4934 7.54007 11.1914C7.83324 11.3504 8.47284 11.7038 8.96141 11.9689C9.45003 12.234 9.98304 12.5432 10.1607 12.6581C10.3295 12.773 10.4983 12.8702 10.5249 12.8702C10.5871 12.8702 12.8347 14.2132 13.2078 14.4782L13.4476 14.6461V20.5218C13.4476 25.9911 13.4387 26.3975 13.2966 26.371C13.1545 26.3445 11.8308 24.9397 11.1379 24.0915C10.9691 23.8794 10.7026 23.5613 10.5516 23.3934C10.2673 23.0576 8.14414 20.3009 7.11362 18.9226C6.79381 18.4808 6.40295 17.9683 6.26081 17.7739C4.19983 15.0526 3.729 14.275 3.22263 12.7818C2.96501 12.0308 2.93836 11.8364 2.93836 10.9263C2.92947 9.97208 3.06273 9.15917 3.21375 9.15917C3.24928 9.15917 3.65793 9.30939 4.11988 9.50379ZM26.7108 9.29174C26.9774 9.55678 27.084 10.0781 27.084 11.1472C27.084 12.0485 27.0484 12.2958 26.8707 12.7818C26.1334 14.7698 24.4544 17.1024 20.5545 21.5203C19.9682 22.1829 19.1154 23.199 17.9694 24.6216C17.5341 25.1517 16.3437 26.3887 16.2637 26.3887C16.2282 26.3887 16.2104 23.738 16.2193 20.4953L16.246 14.602L16.6013 14.3546C17.0011 14.0718 18.7067 13.0646 19.5951 12.5786C19.9149 12.4019 21.3984 11.6508 22.882 10.9263C24.3567 10.1929 25.7514 9.50379 25.9735 9.38007C26.4532 9.13268 26.5421 9.11498 26.7108 9.29174Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_0_2712">
                                    <rect width="30" height="30" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </motion.div>

                    <motion.button
                        className={`navbar-toggler ${menuOpen ? "open" : ""}`}
                        type="button"
                        onClick={toggleMenu}
                        whileTap={{ scale: 0.95 }}
                    >
                        {menuOpen ? (
                            <motion.span 
                                className="close-icon"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 180 }}
                                transition={{ duration: 0.3 }}
                            >
                                ✕
                            </motion.span>
                        ) : (
                            <span className="burger-icon">&#9776;</span>
                        )}
                    </motion.button>
                </div>
            </nav>
            {menuOpen && (
                <motion.div 
                    className="menu-overlay"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={mobileMenuVariants}
                >
                    <ul className="menu-list text-center">
                        <motion.li className="nav-item" variants={mobileNavItemVariants} onClick={closeMenu}>
                            <Link
                                className={`nav-link pavv pavvv ${location.pathname === "/about" ? "active2-link" : ""}`}
                                to="/about"
                            >
                                ABOUT US
                            </Link>
                        </motion.li>
                        <motion.li className="nav-item" variants={mobileNavItemVariants} onClick={closeMenu}>
                            <Link
                                className={`nav-link pavv pavvv ${location.pathname === "/history" ? "active2-link" : ""}`}
                                to="/history"
                            >
                                HISTORY
                            </Link>
                        </motion.li>
                        <motion.li className="nav-item" variants={mobileNavItemVariants} onClick={closeMenu}>
                            <Link
                                className={`nav-link pavv pavvv ${location.pathname === "/memes" ? "active2-link" : ""}`}
                                to="/memes"
                            >
                                MEMES
                            </Link>
                        </motion.li>
                        <motion.li className="nav-item" variants={mobileNavItemVariants} onClick={closeMenu}>
                            <Link
                                className={`nav-link pavv pavvv ${location.pathname === "/buy" ? "active2-link" : ""}`}
                                to="/buy"
                            >
                                BUY
                            </Link>
                        </motion.li>
                        <motion.li className="nav-item" variants={mobileNavItemVariants} onClick={closeMenu}>
                            <Link
                                className={`nav-link pavv pavvv ${location.pathname === "/road" ? "active2-link" : ""}`}
                                to="/road"
                            >
                                ROADMAP
                            </Link>
                        </motion.li>
                        <motion.li className="nav-item" variants={mobileNavItemVariants} onClick={closeMenu}>
                            <Link
                                className={`nav-link pavv pavvv ${location.pathname === "/socials" ? "active2-link" : ""}`}
                                to="/socials"
                            >
                                SOCIALS
                            </Link>
                        </motion.li>
                    </ul>
                </motion.div>
            )}
        </motion.header>
        {/* Основное содержимое */}
        <main className="flex-grow-1">
            <Suspense fallback={<div style={{background: 'black'}}>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/socials" element={<Socials/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/memes" element={<Memes/>}/>
                    <Route path="/buy" element={<Buy/>}/>
                    <Route path="/road" element={<Roadmap/>}/>
                </Routes>
            </Suspense>
        </main>

        {/* Футер */}
        <footer className="bg-black text-center py-3 d-none d-md-flex bg-black">
            <div className="container d-flex justify-content-start align-items-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.2525 0.0493556C9.4056 0.302055 7.41863 1.32581 4.74764 2.89385C4.42842 3.08175 3.72485 3.477 3.18414 3.76857C1.84864 4.4878 1.34702 4.83121 0.930077 5.27181C0.21347 6.04288 -0.0210566 6.82039 0.0440898 8.17462C0.11575 9.61954 0.591317 10.8765 1.71183 12.5807C2.22649 13.3647 3.19717 14.667 3.86166 15.464C4.08315 15.7297 4.4219 16.1379 4.60434 16.3647C4.79323 16.5914 5.04733 16.896 5.17109 17.045C5.30138 17.1876 5.44472 17.3755 5.49684 17.4532C5.65318 17.6735 6.93006 19.3517 7.24275 19.7405C7.64667 20.2329 8.46751 21.0299 8.83232 21.2826C9.65316 21.8463 10.5326 22.0861 11.2883 21.9565C12.3958 21.7686 13.3209 21.0752 14.6303 19.4424C15.5945 18.2502 15.7183 18.1012 16.8649 16.7858C17.1124 16.5007 17.4707 16.0925 17.6466 15.8852C17.829 15.6778 18.0766 15.3863 18.2069 15.2437C18.5587 14.842 19.6336 13.5137 19.8941 13.1573C20.7541 11.9716 21.2231 11.22 21.4512 10.6627C21.9072 9.52881 22.0766 8.25237 21.8942 7.39061C21.7508 6.73619 21.4837 6.09471 21.1775 5.68003C20.5522 4.82473 19.9267 4.42299 15.8225 2.27829C14.5261 1.59795 13.4316 0.99536 13.2036 0.833371C13.0929 0.75562 12.6955 0.541796 12.3176 0.360369C11.6727 0.0493556 11.588 0.023437 11.0538 0.00399819C10.7411 -0.00896099 10.3763 0.0104778 10.2525 0.0493556ZM11.4577 2.18758C11.6727 2.29125 12.1483 2.56339 12.5196 2.7837C12.8844 3.004 14.0896 3.68434 15.1906 4.29989C16.2916 4.90897 17.1906 5.44029 17.1906 5.47266C17.1906 5.50506 16.6759 5.79664 16.0505 6.11414C15.4251 6.43812 14.6759 6.83337 14.3893 6.98888C14.1027 7.15087 13.2102 7.64979 12.4089 8.09687L10.9496 8.91328L10.7281 8.82255C10.5066 8.73186 9.76392 8.31719 8.23948 7.44245C7.79649 7.18328 7.42516 6.9759 7.40562 6.9759C7.38609 6.9759 7.29487 6.91761 7.19716 6.8528C6.93006 6.6584 5.52289 5.91978 5.02779 5.7124C4.78022 5.60873 4.58477 5.49212 4.58477 5.45323C4.5913 5.36254 5.36002 4.89599 6.79977 4.11847C7.06687 3.9759 7.55545 3.71026 7.87467 3.52883C8.20041 3.35389 8.69551 3.08175 8.98215 2.92624C9.26878 2.77073 9.77044 2.4986 10.0897 2.31717C10.4219 2.13575 10.7606 1.9932 10.8714 1.9932C10.9822 1.98672 11.2427 2.07743 11.4577 2.18758ZM3.02127 6.96945C3.59456 7.2027 4.59782 7.69513 5.52942 8.20703C5.74441 8.32363 6.21345 8.58281 6.57173 8.77721C6.93006 8.97161 7.32093 9.19837 7.45122 9.28261C7.57498 9.36685 7.69879 9.43812 7.71832 9.43812C7.76391 9.43812 9.41212 10.423 9.68575 10.6174L9.86163 10.7405V15.0493C9.86163 19.0601 9.8551 19.3582 9.75087 19.3387C9.64664 19.3193 8.67597 18.2891 8.16783 17.6671C8.04406 17.5115 7.84861 17.2783 7.73785 17.1552C7.52939 16.9089 5.9724 14.8874 5.21668 13.8765C4.98216 13.5526 4.69553 13.1768 4.5913 13.0342C3.07991 11.0385 2.73463 10.4684 2.3633 9.3733C2.17437 8.82255 2.15483 8.68003 2.15483 8.01263C2.14831 7.31286 2.24604 6.71672 2.35678 6.71672C2.38284 6.71672 2.68251 6.82688 3.02127 6.96945ZM19.588 6.81394C19.7834 7.0083 19.8616 7.39061 19.8616 8.17462C19.8616 8.83553 19.8355 9.01695 19.7052 9.3733C19.1645 10.8312 17.9332 12.5418 15.0733 15.7815C14.6434 16.2675 14.018 17.0126 13.1776 18.0558C12.8584 18.4446 11.9854 19.3517 11.9268 19.3517C11.9007 19.3517 11.8877 17.4079 11.8942 15.0299L11.9138 10.7081L12.1743 10.5267C12.4675 10.3193 13.7183 9.58068 14.3698 9.22429C14.6043 9.0947 15.6922 8.54395 16.7802 8.01263C17.8616 7.47482 18.8844 6.96945 19.0472 6.87872C19.399 6.6973 19.4642 6.68432 19.588 6.81394Z"
                        fill="white"/>
                </svg>

                <nav className="d-flex navfoot">
                    <Link
                        to="https://www.xt.com/en/trade/tbcc_usdt"
                        className="text-light footLink mx-2 pe-3"
                        style={{borderRight: '2px solid #393B44'}}
                    >
                        xt
                    </Link>
                    <Link
                        to="https://www.bitmart.com/trade/en-US?symbol=TBCC_USDT&r=PjkAFy&type=spot"
                        className="text-light footLink mx-2 pe-3"
                        style={{borderRight: '2px solid #393B44'}}
                    >
                        bitmart
                    </Link>
                    <Link
                        to="https://hamsterkombatgame.io/"
                        className="text-light footLink mx-2 pe-3"
                        style={{borderRight: '2px solid #393B44'}}
                    >
                        project
                    </Link>

                    <Link
                        to="https://t.me/tbcc_coin"
                        className="text-light footLink mx-2 pe-3"
                        style={{borderRight: '2px solid #393B44'}}
                    >
                        telegram
                    </Link>
                    <Link
                        to="https://x.com/tbcc_coin"
                        className="text-light footLink mx-2 pe-3"
                        style={{borderRight: '2px solid #393B44'}}
                    >
                        twitter
                    </Link>
                    <Link
                        to="/contact"
                        className="text-light footLink mx-2 pe-3"
                    >
                        whitepepper
                    </Link>
                </nav>
            </div>
        </footer>
    </>);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</React.StrictMode>);
