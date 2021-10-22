"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.server.listen(process.env.PORT || 4000, () => console.log(`🚀 Server is runnig on PORT ${process.env.PORT || 4000}`));
