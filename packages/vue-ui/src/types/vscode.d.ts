declare global {
    interface Window {
      vscode: {
        postMessage(message: any): void;
      };
    }
}


export interface WorkflowCommand {
  name: string;
  data?: any;
}
