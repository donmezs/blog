// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require("dotenv").config();

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: process.env.SITE_TITLE,
  tagline: "",
  url: process.env.SITE_URL,
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: process.env.ORGANIZATION_NAME,
  projectName: process.env.REPOSITORY_NAME,
  customFields: {
    giscusDiscussionCategory: process.env.GISCUS_DISCUSSION_CATEGORY,
    giscusDiscussionCategoryId: process.env.GISCUS_DISCUSSION_CATEGORY_ID,
    giscusProjectId: process.env.GISCUS_PROJECT_ID,
    senderToken: process.env.SENDER_TOKEN,
    senderGroupId: process.env.SENDER_GROUP_ID,
    emailJsServiceId: process.env.EMAIL_JS_SERVICE_ID,
    emailJsTemplateId: process.env.EMAIL_JS_TEMPLATE_ID,
    emailJsPk: process.env.EMAIL_JS_PK,
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        gtag: {
          trackingID: process.env.GOOGLE_ANALYTICS_TAG_ID,
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [
    ["./plugins/docusuarusWebpack5Plugin", {}],
    ["docusaurus-plugin-sass", {}],
    [
      "./plugins/blog-plugin",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
        blogSidebarCount: 0,
        showReadingTime: true,
        postsPerPage: 10,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: process.env.SITE_TITLE,
        logo: {
          alt: "SD Logo",
          src: "img/logo.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "right" },
          { to: "/contact", label: "Contact", position: "right" },
        ],
      },
      footer: {
        style: "light",
        logo: {
          alt: "SD Logo",
          href: "/",
          src: "img/logo.png",
          height: 50,
          width: 50,
        },
        copyright: `Created by Suleyman Donmez, &copy; ${new Date().getFullYear()}`,
      },

      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        placeholder: "Search...",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      sidebar: {
        hideable: false,
      },
    }),
};

module.exports = config;
