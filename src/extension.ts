import * as vscode from 'vscode';
import { restartAndRunAllCells } from './commands/restartAndRunAllCells';

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "Restart and Run All Cells" is now active!');

  let disposable = vscode.commands.registerCommand('extension.restartAndRunAllCells', restartAndRunAllCells);

  context.subscriptions.push(disposable);
}

export function deactivate() {
  console.log('Extension "Restart and Run All Cells" is now deactivated!');
}