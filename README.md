# gatsby-starter-spectral

Gatsby.js V2 starter site, based on Spectral template by HTML5 UP

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

Clone the site and then you can run it by:

```sh
cd haf-site
npm install
gatsby develop
```


### Deploying using Github page

`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `npm run deploy` would publish the site on github pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js`. Change `pathPrefix` to relevant path if your gatsby site is hosted on subpath of a domain, `https://example.com/somePath/`. If you are hosting it as root site, i.e, `https://example.com/` , remove the pathPrefix configuration.
