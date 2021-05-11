// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "deprint" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('deprint.comment', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Commenting print and log statements!');

		const textEditor = vscode.window.activeTextEditor;
		if (!textEditor) {
			return;  // No open text editor
		}

		var firstLine = textEditor.document.lineAt(0);
		console.log(firstLine);
		var lastLine = textEditor.document.lineAt(textEditor.document.lineCount - 1);
		// var textRange = new vscode.Range(0,
		// 	firstLine.range.start.character,
		// 	textEditor.document.lineCount - 1,
		// 	lastLine.range.end.character);

		for (var i = 0; i < textEditor.document.lineCount; i++) {
			let regex = new RegExp("print");
			console.log(i, textEditor.document.lineAt(i).range.start.character, i, textEditor.document.lineAt(i).range.end.character);

			var textRange = new vscode.Range(i, textEditor.document.lineAt(i).range.start.character, i, textEditor.document.lineAt(i).range.end.character);
			textEditor.edit(function (editBuilder) {
				editBuilder.replace(textRange, '$1');
				console.log(i);
			});
		}


	});

	context.subscriptions.push(disposable);

	let disposable2 = vscode.commands.registerCommand('deprint.delete', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Deleting Commented print and log statements!');
	});

	context.subscriptions.push(disposable2);
}

// this method is called when your extension is deactivated
export function deactivate() { }
