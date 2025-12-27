import EditorMemento from "./EditorMemento";

export default class TextEditor {
    private content: string = "";

    type(words: string): void{
       this.content += " " + words;
       console.log(this.content);
    }

    save(): EditorMemento {
        const editorMemento = new EditorMemento(this.content);
        return editorMemento;
    }

    restore(memento: EditorMemento){
        this.content = memento.getContent();
        console.log(this.content)
    }
}