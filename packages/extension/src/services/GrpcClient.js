"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("grpc");
const grpc_service_grpc_pb_1 = require("../proto/grpc_service_grpc_pb");
class GrpcClient {
    constructor(host, port) {
        this.client = new grpc_service_grpc_pb_1.AutomatedCodingWorkflowServiceClient(`${host}:${port}`, grpc.credentials.createInsecure());
    }
    getClient() {
        return this.client;
    }
}
exports.default = GrpcClient;
//# sourceMappingURL=GrpcClient.js.map