"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inspector_1 = require("inspector");
const mongoUri = () => {
    const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DBNAME } = process.env;
    if (!MONGO_DBNAME || !MONGO_PASSWORD || !MONGO_DBNAME) {
        inspector_1.console.log('Error in connecting database');
    }
    const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@mernstack-pagination.dmkoc.mongodb.net/${MONGO_DBNAME}?retryWrites=true&w=majority`;
    return uri;
};
exports.default = mongoUri;
