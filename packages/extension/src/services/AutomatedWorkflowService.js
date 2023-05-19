"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_service_pb_1 = require("../proto/grpc_service_pb");
class AutomatedWorkflowService {
    constructor(client) {
        this.client = client;
    }
    startWorkflow() {
        const request = new grpc_service_pb_1.StartWorkflowRequest();
        return new Promise((resolve, reject) => {
            this.client.getClient().startWorkflow(request, (error, response) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(response.getResult());
                }
            });
        });
    }
    getWorkflowConfig() {
        const request = new grpc_service_pb_1.GetWorkflowConfigRequest();
        return new Promise((resolve, reject) => {
            this.client.getClient().getWorkflowConfig(request, (error, response) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(response.getStagesList());
                }
            });
        });
    }
}
exports.default = AutomatedWorkflowService;
//# sourceMappingURL=AutomatedWorkflowService.js.map