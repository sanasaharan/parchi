"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.middleware = middleware;
const server_1 = require("next/server");
function middleware(req) {
    const { pathname } = req.nextUrl;
    const isAuthenticated = false; // Replace with real auth logic
    if (pathname.startsWith('/dashboard') && !isAuthenticated) {
        return server_1.NextResponse.redirect(new URL('/auth/signin', req.url));
    }
    return server_1.NextResponse.next();
}
exports.config = {
    matcher: ['/dashboard/:path*'],
};
