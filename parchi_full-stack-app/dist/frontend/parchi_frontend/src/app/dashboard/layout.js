"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DashboardLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const page_1 = __importDefault(require("../components/header/page"));
const page_2 = __importDefault(require("../components/sidebar/page"));
const page_3 = __importDefault(require("../components/loader/page"));
function DashboardLayout({ children, }) {
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light", children: [isLoading && ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-gray-300", children: (0, jsx_runtime_1.jsx)(page_3.default, {}) })), (0, jsx_runtime_1.jsx)(page_2.default
            // isSidebarOpen={isSidebarOpen}
            // toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            // isSidebarOpen={true}
            , {}), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 flex flex-col", children: [(0, jsx_runtime_1.jsx)(page_1.default
                    // toggleSidebar={toggleSidebar}
                    , {}), (0, jsx_runtime_1.jsx)("main", { className: "flex flex-col  flex-1 p-8", children: children })] })] }));
}
