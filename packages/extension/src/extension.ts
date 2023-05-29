// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from "path";
import { prepareWebView } from './webview';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "autobyteus-vscode-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('autobyteus-vscode-extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from AutoByteus!');
	});

	context.subscriptions.push(disposable);

	// adding a new command for the webview panel
	let webview = vscode.commands.registerCommand('autobyteus-vscode-extension.showPanel', () => {
		vscode.window.showInformationMessage('showing autobyteus webview here');
		const panel = prepareWebView(context);
	});
	context.subscriptions.push(webview);

	vscode.window.registerTreeDataProvider('autobyteus-workflow', new YourTreeDataProvider());
}

class YourTreeDataProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
    getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: vscode.TreeItem): Thenable<vscode.TreeItem[]> {
        if (element) {
            return Promise.resolve([]);
        } else {
            return Promise.resolve([
                new vscode.TreeItem('Item 1'),
                new vscode.TreeItem('Item 2'),
                new vscode.TreeItem('Item 3'),
            ]);
        }
    }
}

// This method is called when your extension is deactivated
export function deactivate() {}
