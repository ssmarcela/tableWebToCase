# LWC - Web-to-Case Records Viewer

## Descrição
Este projeto Lightning Web Component (LWC) foi desenvolvido para exibir e gerenciar os registros criados automaticamente no Salesforce por meio do **Web-to-Case**. O Web-to-Case é uma funcionalidade nativa do Salesforce que permite a submissão de solicitações de suporte por meio de formulários online, criando casos diretamente no Salesforce. Este componente oferece uma interface amigável para os usuários visualizarem e manipularem esses registros com eficiência.

## Objetivo
Simplificar a gestão dos registros provenientes do Web-to-Case, oferecendo uma interface acessível e funcional para:
- Visualizar casos de suporte criados por meio do Web-to-Case.
- Filtrar e priorizar registros conforme critérios específicos.
- Facilitar ações administrativas, como atualização em massa de status ou reassignment de casos.

## Funcionalidades
### Exibição de Registros
- Lista os casos criados pelo Web-to-Case com detalhes como:
  - Número do Caso
  - Assunto
  - Status
  - Prioridade
  - Cliente associado

### Filtros Dinâmicos
- Permite ao usuário refinar a exibição dos casos utilizando filtros como:
  - Status (Aberto, Fechado, Pendente, etc.)
  - Prioridade (Alta, Média, Baixa)
  - Data de Criação

### Ações em Massa
- Atualização de múltiplos registros simultaneamente:
  - Alteração de status
  - Reatribuição de responsável
  - Marcar casos como resolvidos

### Design Responsivo
- Interface otimizada para dispositivos móveis e desktops.
- Integração com o Salesforce Lightning Design System (SLDS) para um layout moderno e consistente.

### Customização
- Flexibilidade para adicionar ou remover campos exibidos.
- Configurável para atender diferentes cenários de negócios.

## Relação com o Web-to-Case
Este componente é diretamente vinculado ao Web-to-Case porque:
1. **Origem dos Dados:** Os registros exibidos pelo LWC são criados automaticamente no Salesforce a partir de formulários Web-to-Case submetidos pelos clientes.
2. **Gerenciamento de Casos:** O LWC serve como uma camada de interação para os administradores ou agentes de suporte lidarem com os casos provenientes do Web-to-Case.
3. **Aprimoramento do Processo:** Complementa o Web-to-Case ao oferecer funcionalidades adicionais, como filtros personalizados e ações em massa, que não estão disponíveis na interface padrão do Salesforce.

## Tecnologias Utilizadas
- **LWC (Lightning Web Component):** Framework para construção de componentes modernos e reativos.
- **Apex:** Métodos back-end para buscar, atualizar e gerenciar os registros de Web-to-Case.
- **SOQL:** Consultas para extração de dados relevantes.
- **Salesforce Lightning Design System (SLDS):** Garantia de um design consistente e responsivo.

## Estrutura do Componente
### Front-End (LWC)
- **Arquivos:**
  - `.html`: Estrutura visual do componente, com tabelas e botões de ação.
  - `.js`: Lógica do componente, incluindo eventos, manipulação de filtros e integração com Apex.
  - `.css`: Estilização personalizada para alinhamento com o branding e SLDS.
- **Funcionalidades:** 
  - Exibição dos registros em tabela com paginação.
  - Implementação de filtros dinâmicos.
  - Botões para ações em massa.

### Back-End (Apex)
- **Classes Apex:**
  - Métodos para buscar os registros do objeto `Case` relacionados ao Web-to-Case.
  - Lógica para aplicar filtros e executar atualizações em massa.
- **Retorno de Dados:** Os métodos retornam os dados filtrados para o front-end do LWC, garantindo eficiência e segurança.

## Instalação e Configuração
1. **Deploy:**
   - Faça o deploy do LWC e das classes Apex para a sua organização Salesforce.
   - Certifique-se de que os metadados (permissões, layouts, etc.) estão configurados adequadamente.
2. **Adicione o Componente:**
   - No Lightning App Builder, arraste o componente para a página desejada.
3. **Configurações Adicionais:**
   - Ajuste os filtros e campos visíveis no componente conforme a necessidade do negócio.

## Pré-requisitos
- Permissões no Salesforce para acessar o objeto `Case` e os campos relevantes.
- O Web-to-Case deve estar habilitado e funcionando na organização Salesforce.
- Usuários devem ter permissões para visualizar e atualizar os casos.

## Visualização

![Após o inserção de dados no formulário o registro é criado e salvo no objeto Case.](image.png)

![Clicando no botão "Tratar" será possivel aprovar ou rejeitar o registro.](image-1.png)

![Após aprovar ou rejeitar o registro, a tabela é atualizada pois já houve uma tratativa.](image-2.png)

![O status vai para aprovado ou rejeitado com base na sua escolha.](image-3.png)