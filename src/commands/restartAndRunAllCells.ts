import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.restartAndRunAllCells', () => {
    vscode.commands.executeCommand('jupyter.notebook.clearAllOutputs');
    vscode.commands.executeCommand('jupyter.notebook.executeAllCells');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}