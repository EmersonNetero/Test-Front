
# e-commerce

## Arquitetura de pastas
Foi utilizado vue CLI com vuetify. Essa ferramenta gera essa estrutura com todo código fonto dentro do src.
- **assets** para imagens, icon etc...
- **components** para código mais fechado sem tanta dependência e possivelmente será usado em mais de um arquivo.  
- **plugins** é para os chamados dos plugins do vue, no caso desse projeto, só é usado para o vuetify.
- **router** pasta para arquivos de configuração de rotas do vue router.
- **services** trata tudo relacionado a api usando a lib axios.
- **store** foi gerada pelo vue CLI é para gerenciamento de estados em todo projeto, mas não foi utilizado.
- **views** pasta onde cada arquivo é página do site. Nesses arquivos que são chamados todos os componentes.
- **tests** pasta para os Testes Unitários.
## Project setup
É possível ultilizar mais de um gerenciador de pacotes para as configurações (yarn ou npm). 

### Para instalar as dependências do projeto é só executar o comando a baixo estando dentro da pasta e-commerce
```
npm install
```
ou

```
yarn
```


### Para rodar o servidor de desenvolvimento
```
npm run serve
```
ou 
```
yarn serve
```

### Compila e compacta para produção
```
npm run build
```

ou
```
yarn build
```

### Para mais informações sobre o CLI
See [Configuration Reference](https://cli.vuejs.org/config/).

## Funcionalidades implementadas
- Search pelo título dos produtos. Busca em todos os produtos.
- Carrossel de produtos na home.
- Página de pesquisa tanta para categoria quanto para a de Busca por termo
- Página de informação/compra do produto (cálculo de desconto com problema de render)
- Modal com a imagem ampliada na página de informação
- Páginação (mostra número fixo de páginas e não funciona junto com a busca)
- Ordenação

## Funcionalidades não implementadas
- Filtro (filtro do preço funciona somente para uma opção por vez). Não foi feito para os outros tipos porque o jeito que estava sendo implementado não era o mais ideal. Iria ficar um switch case gigante. então decidi não aplicar os outros.
Também escolhi criar um botão para aplicar o filtro, pois a ideia era poder aplicar todos ao mesmo tempo, sendo essa a ideia que eu achei que seria mais fácil. 

## Link do projeto publicado
https://test-front-next.netlify.app