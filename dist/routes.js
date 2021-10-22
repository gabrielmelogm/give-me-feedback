"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const AuthenticateUserController_1 = require("./controllers/AuthenticateUserController");
const CreateMessageController_1 = require("./controllers/CreateMessageController");
const GetLast3MessagesController_1 = require("./controllers/GetLast3MessagesController");
const ProfileUserController_1 = require("./controllers/ProfileUserController");
const ensureAuthenticate_1 = require("./middleware/ensureAuthenticate");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/authenticate", new AuthenticateUserController_1.AuthenticateUserController().handle);
router.post("/messages", ensureAuthenticate_1.ensureAuthenticate, new CreateMessageController_1.CreateMessageController().handle);
router.get("/messages/last3", new GetLast3MessagesController_1.Get3LastMessagesController().handle);
router.get("/profile", ensureAuthenticate_1.ensureAuthenticate, new ProfileUserController_1.ProfileUserController().handle);
