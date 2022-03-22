class Queue:
    def __init__(self):
        """Inicialize sua estrutura aqui"""
        self.fila = []

    def __len__(self):
        """Aqui irá sua implementação"""
        return len(self.fila)

    def enqueue(self, value):
        """Aqui irá sua implementação"""
        return self.fila.append(value)

    def dequeue(self):
        """Aqui irá sua implementação"""
        return self.fila.pop(0)

    def search(self, index):
        """Aqui irá sua implementação"""
        if 0 <= index <= len(self.fila) - 1:
            return self.fila[index]
        raise IndexError("o valor não existe!")
