
# Controle de Estoque para Supermercados

Esta aplicação web e mobile é destinada ao controle de estoque para supermercados, com foco no acompanhamento de produtos próximos da validade. A aplicação permite adicionar, editar, remover e visualizar produtos, além de gerar relatórios de produtos que estão próximos do vencimento.

### Link para o chat GPT:
https://chatgpt.com/share/cebb9cc6-1582-4b41-8c70-1cf713ba01c9

## Funcionalidades

- **Acompanhamento da validade dos produtos:** Exibe uma lista de produtos com suas respectivas datas de validade, destacando os produtos próximos da validade.
- **Alertas automáticos:** Notificação na aplicação para produtos próximos da validade.
- **Geração de relatórios:** Relatórios detalhados com opções de filtragem por data de validade (15, 30 e 45 dias).
- **Autenticação:** Tela de login para acesso à aplicação, com usuário "luan" e senha "123456".

## Tecnologias Utilizadas

- **HTML**
- **CSS**
- **JavaScript**
- **LocalStorage (para armazenamento de dados)**

## Estrutura do Projeto

```
project-root/
│
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── layout.css
│   ├── forms.css
│   ├── tables.css
│   ├── buttons.css
│   ├── notifications.css
│   └── modal.css
│
├── js/
│   ├── storage.js
│   ├── product.js
│   ├── notification.js
│   ├── report.js
│   ├── main.js
│   ├── login.js
│   └── auth.js
│
├── index.html
├── login.html
└── script.js
```

## Instruções para Uso

1. **Clone o repositório:**
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. **Navegue até o diretório do projeto:**
   ```
   cd project-root
   ```

3. **Abra o arquivo `login.html` em seu navegador para acessar a tela de login.**

4. **Faça login com as credenciais:**
   - Usuário: `luan`
   - Senha: `123456`

5. **Após o login, você será redirecionado para a aplicação de controle de estoque (`index.html`).**

## Como Usar

### Gerenciamento de Produtos

- **Adicionar Produto:**
  - Preencha os campos do formulário com as informações do produto e clique em "Adicionar Produto".
- **Editar Produto:**
  - Clique no ícone de edição ao lado do produto na lista. Faça as alterações e clique em "Salvar Alterações".
- **Remover Produto:**
  - Clique no ícone de exclusão ao lado do produto na lista. Confirme a ação para remover o produto.

### Geração de Relatórios

- **Filtrar por dias até vencimento:**
  - Selecione a quantidade de dias (15, 30, ou 45) no campo de seleção do relatório.
- **Gerar Relatório:**
  - Clique em "Gerar Relatório" para visualizar os produtos que estão próximos do vencimento com base no filtro selecionado.

## Contribuição

Se desejar contribuir para este projeto, sinta-se à vontade para abrir um pull request ou relatar problemas no repositório.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
