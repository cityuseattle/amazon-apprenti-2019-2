"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var timestamp_1 = __importDefault(require("./middlewares/timestamp"));
var addressController_1 = __importDefault(require("./controllers/addressController"));
var app = express_1.default();
var port = 4000;
app.get('/', function (req, res) {
    res.send("PONG");
});
app.use(timestamp_1.default);
app.use(express_1.default.static('../public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/address', addressController_1.default);
app.listen(port, "localhost", function () {
    console.log("Server listening on http://localhost:" + port);
});
