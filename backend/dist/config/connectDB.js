"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoUri = () => {
    const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DBNAME } = process.env;
    if (!MONGO_USERNAME || !MONGO_PASSWORD || !MONGO_DBNAME) {
        console.log("Error in connecting database");
    }
    const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.hqax9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    return uri;
};
exports.default = mongoUri;
