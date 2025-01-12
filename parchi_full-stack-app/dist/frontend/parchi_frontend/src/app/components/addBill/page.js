"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const AddBill = () => {
    const rentMaterialList = [
        {
            materialId: "1",
            materialName: "Cement",
            materialPic: "https://plus.unsplash.com/premium_photo-1678454430356-0556234c68f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2VtZW50JTIwYmFnc3xlbnwwfDB8MHx8fDA%3D",
            rent: "$200",
        },
        {
            materialId: "2",
            materialName: "Steel Rods",
            materialPic: "https://images.unsplash.com/photo-1671404910386-8c2a9ae40efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0ZWVsJTIwcm9kc3xlbnwwfDB8MHx8fDA%3D",
            rent: "$350",
        },
        {
            materialId: "3",
            materialName: "Bricks",
            materialPic: "https://plus.unsplash.com/premium_photo-1673973366864-d1a7555faa15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJpY2tzfGVufDB8MHwwfHx8MA%3D%3D",
            rent: "$150",
        },
        {
            materialId: "4",
            materialName: "Sand",
            materialPic: "https://images.unsplash.com/photo-1488197047962-b48492212cda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNhbmR8ZW58MHwwfDB8fHww",
            rent: "$100",
        },
        {
            materialId: "5",
            materialName: "Gravel",
            materialPic: "https://images.unsplash.com/photo-1596385574887-f98a9a116927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGdyYXZlbHxlbnwwfDB8MHx8fDA%3D",
            rent: "$120",
        },
        {
            materialId: "6",
            materialName: "Concrete Mix",
            materialPic: "https://images.unsplash.com/photo-1656058050399-3f51f0dceb8c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            rent: "$250",
        },
        {
            materialId: "7",
            materialName: "Plywood Sheets",
            materialPic: "https://plus.unsplash.com/premium_photo-1682144651096-fce0649fe8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGx5d29vZCUyMFNoZWV0c3xlbnwwfDB8MHx8fDA%3D",
            rent: "$180",
        },
        {
            materialId: "8",
            materialName: "Scaffolding",
            materialPic: "https://images.unsplash.com/photo-1525295517318-44448e468bab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNjYWZmb2xkaW5nfGVufDB8MHwwfHx8MA%3D%3D",
            rent: "$400",
        },
        {
            materialId: "9",
            materialName: "Tiles",
            materialPic: "https://images.unsplash.com/photo-1706629503586-2731f65587ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvb3IlMjB0aWxlc3xlbnwwfDB8MHx8fDA%3D",
            rent: "$220",
        },
        {
            materialId: "10",
            materialName: "Paint Buckets",
            materialPic: "https://images.unsplash.com/photo-1560400692-3d860fd45eeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFpbnQlMjBCdWNrZXRzfGVufDB8MHwwfHx8MA%3D%3D",
            rent: "$90",
        },
    ];
    return ((0, jsx_runtime_1.jsx)("div", { className: "container mx-auto p-4", children: (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: rentMaterialList.map((item) => ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative h-32", children: (0, jsx_runtime_1.jsx)(image_1.default, { className: "rounded-t-xl", src: item.materialPic, alt: item.materialName, layout: "fill", objectFit: "cover" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "p-5 flex flex-col justify-between h-40", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-xl font-semibold text-gray-800", children: item.materialName }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-gray-600", children: item.rent })] }), (0, jsx_runtime_1.jsx)("button", { className: "mt-4 w-full text-white font-semibold bg-green-500 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform-gpu hover:scale-105", children: "Add" })] })] }, item.materialId))) }) }));
};
exports.default = AddBill;
