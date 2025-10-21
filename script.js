// Validação do formulário e interações simples (comentários em português)
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
const form = document.getElementById('form-contato');
const msgRetorno = document.getElementById('msg-retorno');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }
    if (!validarEmail(email)) {
      alert('O e-mail informado não tem um formato válido. Ex: usuario@dominio.com');
      return;
    }
    form.reset();
    msgRetorno.hidden = false;
    msgRetorno.textContent = 'Mensagem enviada com sucesso! (simulação)';
    setTimeout(function() { msgRetorno.hidden = true; msgRetorno.textContent = ''; }, 5000);
  });
}
