## 1. Produtos Abstratos

class Livro:
    """Interface abstrata para um Livro."""
    def get_details(self):
        raise NotImplementedError

class Revista:
    """Interface abstrata para uma Revista."""
    def get_details(self):
        raise NotImplementedError

## 2. Produtos Concretos

class LivroDigital(Livro):
    """Implementação de um Livro Digital."""
    def get_details(self):
        return "Livro Digital: Disponível para download e leitura em dispositivos."

class LivroFisico(Livro):
    """Implementação de um Livro Físico."""
    def get_details(self):
        return "Livro Físico: Edição impressa, para leitura manual."

class RevistaDigital(Revista):
    """Implementação de uma Revista Digital."""
    def get_details(self):
        return "Revista Digital: Edição online interativa."

class RevistaImpressa(Revista):
    """Implementação de uma Revista Impressa."""
    def get_details(self):
        return "Revista Impressa: Edição física da revista."


## 3. Fábrica Abstrata

class PublicacaoFactory:
    """Interface abstrata para criar uma família de produtos (Livros e Revistas)."""
    def create_livro(self):
        raise NotImplementedError

    def create_revista(self):
        raise NotImplementedError

## 4. Fábricas Concretas

class DigitalPublicacaoFactory(PublicacaoFactory):
    """Fábrica concreta para criar produtos digitais."""
    def create_livro(self):
        return LivroDigital()

    def create_revista(self):
        return RevistaDigital()

class FisicaPublicacaoFactory(PublicacaoFactory):
    """Fábrica concreta para criar produtos físicos."""
    def create_livro(self):
        return LivroFisico()

    def create_revista(self):
        return RevistaImpressa()

## 5. Código Cliente (Uso)

def client_code(factory: PublicacaoFactory):
    """
    O código cliente trabalha com as fábricas e produtos usando interfaces abstratas.
    """
    livro = factory.create_livro()
    revista = factory.create_revista()

    print(f"Criado um livro: {livro.get_details()}")
    print(f"Criada uma revista: {revista.get_details()}")
    print("-" * 30)

# Usando a fábrica de publicações digitais
print("Cliente: Testando com a fábrica de publicações digitais:")
digital_factory = DigitalPublicacaoFactory()
client_code(digital_factory)

# Usando a fábrica de publicações físicas
print("Cliente: Testando com a fábrica de publicações físicas:")
fisica_factory = FisicaPublicacaoFactory()
client_code(fisica_factory)