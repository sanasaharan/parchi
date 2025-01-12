"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const si_1 = require("react-icons/si");
const Loader = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col items-center", children: (0, jsx_runtime_1.jsx)("div", { className: "animate-spin text-customBlue font-bold bg-logoColor border-2 border-customBlue rounded-full p-2 mx-2", children: (0, jsx_runtime_1.jsx)(si_1.SiAbstract, { className: "text-2xl" }) }) }) }));
};
exports.default = Loader;
