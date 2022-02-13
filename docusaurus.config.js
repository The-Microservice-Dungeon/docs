const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "The Microservice Dungeon",
  tagline: "WS 21/21",
  url: "https://The-Microservice-Dungeon.github.io",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "The-Microservice-Dungeon", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  customFields: {
    asyncApiSpec: {
      map: "https://raw.githubusercontent.com/The-Microservice-Dungeon/map/main/asyncapi/asyncapi.yml",
      robot: "https://raw.githubusercontent.com/The-Microservice-Dungeon/robot/main/swagger/v5/asyncapi.yaml",
      trading: "https://raw.githubusercontent.com/The-Microservice-Dungeon/trading/main/swagger/v1/asyncAPI.yaml",
      gamelog: "https://raw.githubusercontent.com/The-Microservice-Dungeon/gamelog/main/docs/event-spec.yaml",
      game: "https://raw.githubusercontent.com/The-Microservice-Dungeon/game/main/doc/game_service_asyncapi_v1.0.0.yaml",
    }
  },

  presets: [
    [
      'redocusaurus',
      {
        specs: [
          {
            specUrl: 'https://raw.githubusercontent.com/The-Microservice-Dungeon/map/main/swagger/v1/swagger.yaml',
            routePath: "/openapi/map"
          },
          {
            specUrl: 'https://raw.githubusercontent.com/The-Microservice-Dungeon/robot/main/swagger/v5/swagger.yaml',
            routePath: "/openapi/robot"
          },
          {
            specUrl: 'https://raw.githubusercontent.com/The-Microservice-Dungeon/trading/main/swagger/v1/swagger.yaml',
            routePath: "/openapi/trading"
          },
          {
            specUrl: 'https://raw.githubusercontent.com/The-Microservice-Dungeon/gamelog/main/docs/api-spec.yaml',
            routePath: "/openapi/gamelog"
          },
          {
            specUrl: 'https://raw.githubusercontent.com/The-Microservice-Dungeon/game/main/doc/game_service_api_v3.2.0.yaml',
            routePath: "/openapi/game"
          }
        ],
      }
    ],
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/The-Microservice-Dungeon/docs/edit/main/",
          path: "docs",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/The-Microservice-Dungeon/docs/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "The Microservice Dungeon",
        logo: {
          alt: "Spaceship",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Project",
          },
          {
            type: "doc",
            docId: "quickstart_entry",
            position: "left",
            label: "Quickstart Guide",
          },
          {
            label: "Map",
            position: "left",
            items: [
              { to: "/openapi/map", label: "Map OpenAPI" },
              { to: "/asyncapi/map", label: "Map AsyncAPI" }
            ]
          },
          {
            label: "Robot",
            position: "left",
            items: [
              { to: "/openapi/robot", label: "Robot OpenAPI" },
              { to: "/asyncapi/robot", label: "Robot AsyncAPI" }
            ]
          },
          {
            label: "Trading",
            position: "left",
            items: [
              { to: "/openapi/trading", label: "Trading OpenAPI" },
              { to: "/asyncapi/trading", label: "Trading AsyncAPI" }
            ]
          },
          {
            label: "Gamelog",
            position: "left",
            items: [
              { to: "/openapi/gamelog", label: "Gamelog OpenAPI" },
              { to: "/asyncapi/gamelog", label: "Gamelog AsyncAPI" }
            ]
          },
          {
            label: "Game",
            position: "left",
            items: [
              { to: "/openapi/game", label: "Game OpenAPI" },
              { to: "/asyncapi/game", label: "Game AsyncAPI" }
            ]
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/The-Microservice-Dungeon",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/The-Microservice-Dungeon",
              },
              {
                label: "Archi Lab",
                href: "https://archi-lab.io/display/public/The+Microservice+Dungeon",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Archi Lab. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
