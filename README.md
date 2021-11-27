# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Add your OpenAPI spec

Update the `docuaurus.config.js` where to add another spec

```javascript
...
      'redocusaurus',
      {
        specs: [
          {
            specUrl: 'https://raw.githubusercontent.com/The-Microservice-Dungeon/map/main/swagger/v1/swagger.yaml',
            routePath: "/openapi/map"
          },
          {
            specUrl: 'https://raw.githubusercontent.com/The-Microservice-Dungeon/MYSERVICE/main/swagger.yaml',
            routePath: "/openapi/MYSERVICE"
          }, 
        ],
      }

...

          { to: "/openapi/map", label: "Map OpenAPI", position: "left" },
          { to: "/openapi/MYSERVIC", label: "MYSERVICE OpenAPI", position: "left" },
```

### Add your AsyncAPI spec

Update the `docuaurus.config.js` where to add another spec

```js
  customFields: {
    asyncApiSpec: {
      map: "https://raw.githubusercontent.com/The-Microservice-Dungeon/map/main/asyncapi/asyncapi.yml",
      robot: "",
      trading: "",
      gamelog: "",
      game: "",
    }
  },
```
