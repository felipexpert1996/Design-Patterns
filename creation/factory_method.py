from abc import ABC, abstractmethod

# Product Interface
class Document(ABC):
    @abstractmethod
    def open(self):
        pass

    @abstractmethod
    def save(self):
        pass

# Concrete Products
class TextDocument(Document):
    def __init__(self, content=""):
        self.content = content

    def open(self):
        print(f"Opening Text Document with content: '{self.content}'")

    def save(self):
        print("Saving Text Document.")

class SpreadsheetDocument(Document):
    def __init__(self, num_rows=10, num_cols=5):
        self.num_rows = num_rows
        self.num_cols = num_cols

    def open(self):
        print(f"Opening Spreadsheet Document with {self.num_rows} rows and {self.num_cols} columns.")

    def save(self):
        print("Saving Spreadsheet Document.")

# Creator (Factory)
class DocumentFactory:
    def create_document(self, doc_type, **kwargs):
        if doc_type == "text":
            return TextDocument(**kwargs)
        elif doc_type == "spreadsheet":
            return SpreadsheetDocument(**kwargs)
        else:
            raise ValueError("Unknown document type.")


factory = DocumentFactory()

# Create a Text Document with specific content
text_doc = factory.create_document("text", content="This is a sample text.")
text_doc.open()

# Create a Spreadsheet Document with custom dimensions
spreadsheet_doc = factory.create_document("spreadsheet", num_rows=20, num_cols=8)
spreadsheet_doc.open()