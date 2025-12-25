import EditorMemento from "./EditorMemento";
import TextEditor from "./TextEditor";

export default class History {
    private editor: TextEditor;
    private history: EditorMemento[] = [];

    constructor(editor: TextEditor){
        this.editor = editor;
    }

    backup(): void {
        this.history.push(this.editor.save());
    }

    undo(): void{
        if(this.history.length > 0){
            const memento = this.history.pop();
            if(memento){
                this.editor.restore(memento);
            }
        }
    }
}