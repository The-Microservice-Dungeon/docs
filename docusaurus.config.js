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
            specUrl: 'https://raw.githubusercontent.com/The-Microservice-Dungeon/robot/main/swagger/v1/swagger.yaml',
            routePath: "/openapi/robot"
          },
          {
            specUrl: 'https://raw.githubusercontent.com/The-Microservice-Dungeon/trading/main/swagger/v1/swagger.yaml',
            routePath: "/openapi/trading"
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
            label: "Introduction",
          },
          { to: "/openapi/map", label: "Map OpenAPI", position: "left" },
          { to: "/openapi/robot", label: "Robot OpenAPI", position: "left" },
          { to: "/openapi/trading", label: "Trading OpenAPI", position: "left" },
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
