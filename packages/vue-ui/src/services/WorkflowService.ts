import { WorkflowCommand } from "../types/vscode";
import eventEmitter from "./EventEmitter";

class WorkflowService {
    constructor() {
      window.addEventListener('message', this.handleMessageFromExtension);
    }
  
    sendMessageToExtension(workflowCmd: WorkflowCommand) {
      window.vscode.postMessage(workflowCmd);
    }
  
    handleMessageFromExtension(message: any) {
      // Emit a custom event or use a pub-sub model
      // For this example, let's use a Vue3-friendly approach with the mitt event emitter
      eventEmitter.emit(message.command, message.data);
    }
  }
  
export default new WorkflowService();
  