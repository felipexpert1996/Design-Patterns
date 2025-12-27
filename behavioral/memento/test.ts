import TextEditor from "./TextEditor";
import History from "./History";

const editor = new TextEditor();
const history = new History(editor);
editor.type("Hello");
history.backup();
editor.type("World");
history.backup();
editor.type("Design Patterns");
history.undo();
history.undo();
