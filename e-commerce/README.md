
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

### Rodar os testes unitários
```
npm run test:unit
```

### Para mais informações sobre o CLI
See [Configuration Reference](https://cli.vuejs.org/config/).
