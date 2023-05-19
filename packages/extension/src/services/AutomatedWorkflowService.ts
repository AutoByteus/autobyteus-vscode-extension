import { StartWorkflowRequest, GetWorkflowConfigRequest, Stage } from '../proto/grpc_service_pb';
import GrpcClient from './GrpcClient';

class AutomatedWorkflowService {
    private client: GrpcClient;

    constructor(client: GrpcClient) {
        this.client = client;
    }

    startWorkflow(): Promise<string> {
        const request = new StartWorkflowRequest();

        return new Promise((resolve, reject) => {
            this.client.getClient().startWorkflow(request, (error, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(response.getResult());
                }
            });
        });
    }

    getWorkflowConfig(): Promise<Array<Stage>> {
        const request = new GetWorkflowConfigRequest();

        return new Promise((resolve, reject) => {
            this.client.getClient().getWorkflowConfig(request, (error, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(response.getStagesList());
                }
            });
        });
    }
}

export default AutomatedWorkflowService;
