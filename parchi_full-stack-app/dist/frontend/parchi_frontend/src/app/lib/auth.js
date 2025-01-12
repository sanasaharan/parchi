"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockAuthenticate = void 0;
const mockAuthenticate = (username, password) => {
    return username === "user" && password === "password";
};
exports.mockAuthenticate = mockAuthenticate;
