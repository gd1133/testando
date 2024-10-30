class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        ataques = {
            "mago": "usou magia",
            "guerreiro": "usou espada",
            "monge": "usou artes marciais",
            "ninja": "usou shuriken"
        }
        ataque = ataques.get(self.tipo, "usou um ataque desconhecido")
        print(f"O {self.tipo} atacou usando {ataque}")

# Exemplo de uso
heroi1 = Heroi("Aragorn", 87, "guerreiro")
heroi1.atacar()

heroi2 = Heroi("Gandalf", 2019, "mago")
heroi2.atacar()
