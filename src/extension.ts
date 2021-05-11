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

		let filename = textEditor.document.fileName;
		let langId = textEditor.document.languageId;

		let jslang = ['javascript', 'javascriptreact', 'typescript', 'typescriptreact'];
		let pylang = ['python'];

		if (jslang.includes(langId)) {
			// JS Stuff console.log()
			textEditor.edit(function (editBuilder) {
				// Iterate through each line
				for (var i = 0; i < textEditor.document.lineCount; i++) {
					// Iterate through each char in a line
					let linetext = textEditor.document.lineAt(i).text;
					var newline = linetext;
					// for (var j = 0; j < textEditor.document.lineAt(i).range.end.character; j++) {
					if (linetext.includes('console.log')) {
						newline = "// " + linetext;
					}
					var textRange = new vscode.Range(i, textEditor.document.lineAt(i).range.start.character, i, textEditor.document.lineAt(i).range.end.character);
					editBuilder.replace(textRange, newline);
					// let regex = new RegExp("print");

					// }
					// var textRange = new vscode.Range(i, textEditor.document.lineAt(i).range.start.character, i, textEditor.document.lineAt(i).range.end.character);
					// editBuilder.replace(textRange, '$1');
				}
			});
		}
		else if (pylang.includes(langId)) {
			// Python Stuff print()
			textEditor.edit(function (editBuilder) {
				// Iterate through each line
				for (var i = 0; i < textEditor.document.lineCount; i++) {
					// Iterate through each char in a line
					let linetext = textEditor.document.lineAt(i).text;
					var newline = linetext;
					// TODO if line is a comment skip it
					// Check for open bracket to make sure no other stuff gets randomly commented
					if (linetext.includes('print(') || linetext.includes('print (')) {
						newline = "# " + linetext;
					}
					var textRange = new vscode.Range(i, textEditor.document.lineAt(i).range.start.character, i, textEditor.document.lineAt(i).range.end.character);
					editBuilder.replace(textRange, newline);
				}
			});
		}
		else {
			return;
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
