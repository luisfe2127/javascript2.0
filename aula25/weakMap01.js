// Há uma série de mensagens como na tarefa anterior . A situação é semelhante.

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];
// A questão agora é: qual estrutura de dados você sugeriria para armazenar a informação: “quando a mensagem foi lida?”.

// Na tarefa anterior precisávamos apenas armazenar o fato “sim/não”. Agora precisamos armazenar a data, e ela só deve permanecer na memória até que a mensagem seja coletada como lixo.

// PS As datas podem ser armazenadas como objetos de classe interna Date, que abordaremos mais tarde.

let messages01 = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMap = new WeakMap();
  
  readMap.set(messages01[0], new Date(2017, 1, 1));

//   Seu código pode acessá-lo, mas as mensagens são gerenciadas pelo código de outra pessoa. Novas mensagens são adicionadas, as antigas são removidas regularmente por esse código e você não sabe os momentos exatos em que isso acontece.

// Agora, qual estrutura de dados você poderia usar para armazenar informações sobre se a mensagem “foi lida”? A estrutura deve ser adequada para dar a resposta “foi lido?” para o objeto de mensagem fornecido.

// PS Quando uma mensagem é removida de messages, ela também deve desaparecer da sua estrutura.

// PPS Não devemos modificar objetos de mensagens, adicionar nossas propriedades a eles. Como eles são gerenciados pelo código de outra pessoa, isso pode levar a consequências ruins.

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMessages = new WeakSet();

  readMessages.add(messages[0]);
  readMessages.add(messages[1]);

  readMessages.add(messages[0]);

  console.log("Read message 0: " + readMessages.has(messages[0])); // true

  messages.shift();

  console.log(messages)
  console.log(readMessages)


