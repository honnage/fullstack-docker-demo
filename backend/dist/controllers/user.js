"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const utiliy_class_1 = __importDefault(require("../utils/utiliy-class"));
const register = (req, res, next) => {
    try {
        // console.log(req.body)
        const { name, email, phone, password } = req.body;
        if (!name || !email || !phone) {
            return next(new utiliy_class_1.default("Please add all filed", 400));
        }
        if (!password || password.length < 6) {
            return res.status(400).json({ error: "Password must be 6 character log'" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.register = register;
