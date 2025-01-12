"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const tb_1 = require("react-icons/tb");
const fa_1 = require("react-icons/fa");
const link_1 = __importDefault(require("next/link"));
const Header = () => {
    return ((0, jsx_runtime_1.jsx)("header", { className: "bg-customBlue text-white shadow-md", children: (0, jsx_runtime_1.jsxs)("div", { className: "mx-auto px-4 py-5 flex justify-end items-center", children: [(0, jsx_runtime_1.jsxs)("nav", { className: "hidden md:flex items-center space-x-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4", children: [(0, jsx_runtime_1.jsx)(fa_1.FaUserCircle, { className: "text-3xl" }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { className: "text-sm font-semibold", children: "User Name (\u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0928\u093E\u092E)" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-1", children: [(0, jsx_runtime_1.jsx)(tb_1.TbLogout, { className: "text-3xl" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/", className: "text-sm font-semibold", children: "Logout (\u0932\u0949\u0917\u0906\u0909\u091F)" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "md:hidden", children: (0, jsx_runtime_1.jsx)("button", { 
                        // onClick={toggleSidebar} 
                        className: "text-white", children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h16" }) }) }) })] }) }));
};
exports.default = Header;
