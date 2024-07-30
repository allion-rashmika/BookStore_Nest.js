"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingMiddleware = void 0;
class LoggingMiddleware {
    use(req, res, next) {
        next();
    }
}
exports.LoggingMiddleware = LoggingMiddleware;
//# sourceMappingURL=logging.middleware.js.map