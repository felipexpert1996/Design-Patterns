class Book:

    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self, title: str, price: str, cover: str):
        if not hasattr(self, 'title'):
            self.title = title
            self.price = price
            self.cover = cover

    def get_title(self):
        return self.title

    def get_price(self):
        return self.price
    
    def get_cover(self):
        return self.cover
    
#test
book1 = Book('book 1', 19.90, 'localhost:8080/fake-image.jpg')
book2 = Book('book 2', 100.50, 'localhost:8080/fake-image2.jpg')
print(book1.get_title()) # book 1
print(book2.get_title()) # book 1
print(book1 is book2) # True
