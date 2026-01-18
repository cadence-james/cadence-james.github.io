import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cadence James",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "cadencejames.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Spectral SC",
        body: "Spectral",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#12001a", //Background
          lightgray: "#000020", //Code Background
          gray: "#b8b8b8", //"Search"
          darkgray: "#f4ecd7", //Text, Mag. Glass
          dark: "#8967a9", //Code, link icon
          secondary: "#3c9fe1", //Links (and headers)
          tertiary: "#6efffd", //Hovered link
          highlight: "rgba(255, 255, 255, 0.15)", //?
          textHighlight: "#ffffff88", //?
        },
        darkMode: {
          light: "#12001a", //Background
          lightgray: "#000020", //Code Background
          gray: "#b8b8b8", //"Search"
          darkgray: "#f4ecd7", //Text, Mag. Glass
          dark: "#8967a9", //Code, link icon
          secondary: "#3c9fe1", //Links (and headers)
          tertiary: "#6efffd", //Hovered link
          highlight: "rgba(255, 255, 255, 0.15)", //?
          textHighlight: "#ffffff88", //?
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
