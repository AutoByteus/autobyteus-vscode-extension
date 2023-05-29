import * as vscode from 'vscode';
import AutomatedCodingWorkflowService from "./services/AutomatedCodingWorkflowService";
import GrpcClient from './services/GrpcClient';

export function handleWebViewMessages(panel: vscode.WebviewPanel) {
    // Create an instance of the workflow service
    const grpcClient = new GrpcClient()
    const workflowService = new AutomatedCodingWorkflowService(/* pass in any dependencies here */);

    panel.webview.onDidReceiveMessage(async (message) => {
        switch (message.command) {
            case 'startWorkflow':
                try {
                    // Start the workflow
                    const workflowId = await workflowService.startWorkflow();

                    // Fetch the workflow config
                    const stages = await workflowService.getWorkflowConfig();

                    // Send the stages back to the Vue app in the WebView
                    panel.webview.postMessage({
                        command: 'workflowStarted',
                        data: stages,
                    });
                } catch (error) {
                    // Handle any errors
                    console.error('Error starting workflow', error);
                }
                break;
            // ... other cases for different messages
        }
    });
}