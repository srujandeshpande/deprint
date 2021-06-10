const { langs, patterns } = require('./constants.js')
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

		if (langs.js.includes(langId)) {
			// JS Stuff console.log()
			textEditor.edit(function (editBuilder) {
				// Iterate through each line
				for (var i = 0; i < textEditor.document.lineCount; i++) {
					// Iterate through each char in a line
					let linetext = textEditor.document.lineAt(i).text;
					var newline = linetext;

					if (linetext.includes('console.log')) {
						newline = "// " + linetext;
					}
					var textRange = new vscode.Range(i, textEditor.document.lineAt(i).range.start.character, i, textEditor.document.lineAt(i).range.end.character);
					editBuilder.replace(textRange, newline);
				}
			});
		}
		else if (langs.py.includes(langId)) {
			// Python Stuff print()
			textEditor.edit(function (editBuilder) {
				// Iterate through each line
				for (var i = 0; i < textEditor.document.lineCount; i++) {
					let linetext = textEditor.document.lineAt(i).text;
					var newline = linetext;

					if (linetext.match(patterns.py.print)) {
						var j = 0;
						for (j = 0; j < linetext.length; j++) {
							if (linetext[j] != ' ' && linetext[j] != '\t') break;
						}
						newline = [linetext.slice(0, j), "# ", linetext.slice(j)].join('');
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
