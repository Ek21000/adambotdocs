// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        ({
          hashed: true,
          indexPages: true,

        }),
      ],
    ],






  title: 'AdamBot',
  tagline: 'Introducing AdamBot, your go-to utility, event, and fun bot for Discord!',
  favicon: 'https://cdn.discordapp.com/avatars/936438932864921661/6ddd2b34d4ea30600361a06d71132f56.webp?size=512',

  // Set the production url of your site here
  url: 'https://adambot.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
        
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card

      colorMode: {
      defaultMode: 'dark',
      },
      image: 'https://cdn.discordapp.com/avatars/936438932864921661/6ddd2b34d4ea30600361a06d71132f56.webp?size=512',
      navbar: {
        title: 'AdamBot',
        logo: {
          alt: 'Bot-Icon',
          src: 'https://cdn.discordapp.com/avatars/936438932864921661/6ddd2b34d4ea30600361a06d71132f56.webp?size=512',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://adambot.vercel.app/invite',
            label: 'Invite',
            position: 'right',
          },
          {
            href: 'https://adambot.vercel.app/support',
            label: 'Support',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Info',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Invite',
                to: 'https://discord.com/api/oauth2/authorize?client_id=936438932864921661&permissions=515563137089&scope=bot%20applications.commands',
              },
              {
                label: 'Support',
                to: 'https://discord.gg/kR34brpHv5',
              },
              {
                label: 'Vote',
                to: 'https://top.gg/bot/936438932864921661/vote',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} AdamBot, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};



module.exports = config;
