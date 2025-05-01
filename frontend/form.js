// Função que será chamada quando o formulário for enviado
function createUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Envia a requisição POST para o backend
    fetch('http://localhost:5050/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  // Diz que estamos enviando JSON
      },
      body: JSON.stringify({ name, email, password })  // Corpo da requisição com os dados do usuário
    })
    .then(response => response.json())  // Processa a resposta da API
    .then(data => console.log(data))  // Exibe a resposta do servidor
    .catch(error => console.error('Erro:', error));  // Caso haja um erro
  }
  
  // Previne o envio padrão do formulário e chama a função createUser
  // biome-ignore lint/complexity/useArrowFunction: <explanation>
      document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Impede o envio padrão do formulário (o recarregamento da página)
    createUser();  // Chama a função para enviar os dados
  });
  