"use strict";
"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Login;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const fa_1 = require("react-icons/fa");
const ri_1 = require("react-icons/ri");
const si_1 = require("react-icons/si");
const image_1 = __importDefault(require("next/image"));
function Login() {
    const router = (0, navigation_1.useRouter)();
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const handleSignIn = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        // const isAuthenticated = email == "9790035915" && password == "1234";
        const isAuthenticated = true;
        if (isAuthenticated) {
            router.push("/dashboard");
        }
        else {
            alert("Invalid credentials");
        }
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center min-h-screen py-2 sm:p-8 font-[family-name:var(--font-geist-sans)] bg-gray-100", children: (0, jsx_runtime_1.jsx)("main", { className: "flex items-center justify-center w-full flex-1 px-10 text-center sm:items-start", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl sm:flex-col lg:flex-row", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full lg:w-3/5 p-5 flex-shrink-0", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-start my-4", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-customBlue font-bold bg-logoColor border-2 border-customBlue rounded-full p-2 mx-2", children: (0, jsx_runtime_1.jsx)(si_1.SiAbstract, { className: "text-customBlue text-2xl" }) }), (0, jsx_runtime_1.jsxs)("span", { className: " text-left", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-lg text-customBlue font-bold", children: "\u092A\u0930\u094D\u091A\u0940" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs ", children: "Easy Billing" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "pb-10 pt-5", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold text-customBlue mb-2", children: "Sign in to Account" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-sm font-bold text-customBlue mb-10", children: "( \u0905\u092A\u0928\u0947 \u0916\u093E\u0924\u093E \u092E\u0947\u0902 \u092A\u094D\u0930\u0935\u0947\u0936 \u0915\u0930\u0947\u0902 )" }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col items-center mb-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-gray-100 w-full sm:w-80 py-2 flex items-center", children: [(0, jsx_runtime_1.jsx)(fa_1.FaRegEnvelope, { className: "text-gray-400 m-2" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "bg-gray-100 outline-none flex-1 text-sm", placeholder: "Enter Phone Number ( \u092B\u094B\u0928 \u0928\u0902\u092C\u0930 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902 )" })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col items-center mb-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-gray-100 w-full sm:w-80 py-2 flex items-center", children: [(0, jsx_runtime_1.jsx)(ri_1.RiLockPasswordLine, { className: "text-gray-400 m-2" }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "bg-gray-100 outline-none flex-1 text-sm", placeholder: "Enter Password ( \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902 )" })] }) }), (0, jsx_runtime_1.jsx)("button", { onClick: handleSignIn, className: "border-2 mt-8 border-customBlue text-customBlue rounded-full px-12 py-2 inline-block font-semibold hover:bg-customBlue hover:text-white", children: "Sign In ( \u0916\u093E\u0924\u0947 \u092E\u0947\u0902 \u092A\u094D\u0930\u0935\u0947\u0936 \u0915\u0930\u0947\u0902 )" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full lg:w-2/5 bg-customBlue text-white flex-shrink-0 rounded-tl-2xl lg:rounded-tr-2xl lg:rounded-br-2xl py-20 px-12", children: [(0, jsx_runtime_1.jsx)(image_1.default, { className: "inline-block mb-2", src: "/welcome_no_bg.png", alt: "welcome", width: 130, height: 100, priority: true }), (0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold mb-2", children: "\u0928\u092E\u0938\u094D\u0915\u093E\u0930" }), (0, jsx_runtime_1.jsx)("div", { className: "border-2 w-10 border-white inline-block mb-2" }), (0, jsx_runtime_1.jsx)("p", { className: "mb-10", children: "\u0905\u092A\u0928\u0940 \u0935\u094D\u092F\u0915\u094D\u0924\u093F\u0917\u0924 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u092D\u0930\u0947\u0902 \u0914\u0930 \u0939\u092E\u093E\u0930\u0947 \u0938\u093E\u0925 \u0905\u092A\u0928\u0940 \u092F\u093E\u0924\u094D\u0930\u093E \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902\u0964" }), (0, jsx_runtime_1.jsx)("a", { href: "/auth/signup", className: "border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-customBlue", children: "Sign Up ( \u0916\u093E\u0924\u093E \u0916\u094B\u0932\u0947\u0902 )" })] })] }) }) }));
}
