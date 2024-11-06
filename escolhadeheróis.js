class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      
      // Definindo o ataque baseado no tipo de herói
      if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "monge") {
        ataque = "artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "shuriken";
      } else {
        ataque = "ataque desconhecido";
      }
  
      // Exibindo a mensagem conforme o tipo e ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias de heróis com tipos diferentes
  const heroi1 = new Heroi("Merlin", 150, "mago");
  const heroi2 = new Heroi("Arthur", 35, "guerreiro");
  const heroi3 = new Heroi("Li", 45, "monge");
  const heroi4 = new Heroi("Shin", 25, "ninja");
  
  // Chamando o método atacar para cada herói
  heroi1.atacar();  // Exibe: O mago atacou usando magia
  heroi2.atacar();  // Exibe: O guerreiro atacou usando espada
  heroi3.atacar();  // Exibe: O monge atacou usando artes marciais
  heroi4.atacar();  // Exibe: O ninja atacou usando shuriken