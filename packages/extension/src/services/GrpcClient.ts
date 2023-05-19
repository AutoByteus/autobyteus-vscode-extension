import * as grpc from 'grpc';
import { AutomatedCodingWorkflowServiceClient } from '../proto/grpc_service_grpc_pb';

class GrpcClient {
    private client: AutomatedCodingWorkflowServiceClient;

    constructor(host: string, port: number) {
        this.client = new AutomatedCodingWorkflowServiceClient(`${host}:${port}`, grpc.credentials.createInsecure());
    }

    getClient(): AutomatedCodingWorkflowServiceClient {
        return this.client;
    }
}

export default GrpcClient;