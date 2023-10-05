const site = require('./site')

module.exports = [
  {
    "inHeader": true,
    "inFlyout": false,
    "inFooter": false,
    "items": [
      {
        "name": "Store",
        "slug": "store",
        "url": site.products.buyUrl,
        "target": "_blank",
        "class": ""
      },
      {
        "name": "Docs",
        "slug": "docs",
        "url": site.docs.url,
        "target": "_blank",
        "order": 1,
        "class": "hide-on-mobile"
      }
    ]
  },
  {
    "name": "Company",
    "slug": "company",
    "order": 0,
    "size": "full",
    "inHeader": false,
    "inFlyout": true,
    "inFooter": true,
    "items": [
      {
        "name": "About",
        "slug": "about",
        "url": "/about",
        "target": "",
        "order": 0,
        "class": ""
      },
      {
        "name": "Jobs",
        "slug": "jobs",
        "url": "/jobs",
        "target": "",
        "order": 1,
        "class": ""
      },
      {
        "name": "Contribute",
        "slug": "contribute",
        "url": "/contribute",
        "target": "",
        "order": 2,
        "class": ""
      },
      {
        "name": "Contact",
        "slug": "contact",
        "url": "/contact",
        "target": "",
        "order": 3,
        "class": ""
      }
    ]
  },
  {
    "name": "Products",
    "slug": "products",
    "order": 1,
    "size": "half",
    "inHeader": false,
    "inFlyout": true,
    "inFooter": true,
    "items": [
      {
        "name": "Servers",
        "slug": "servers",
        "url": site.products.servers,
        "target": "_blank",
        "order": 0,
        "class": ""
      },
      {
        "name": "Gear",
        "slug": "gear",
        "url": site.products.gear,
        "target": "_blank",
        "order": 1,
        "class": ""
      }
    ]
  },
  {
    "name": "Media",
    "slug": "media",
    "order": 3,
    "size": "half",
    "inHeader": false,
    "inFlyout": true,
    "inFooter": true,
    "items": [
      {
        "name": "Podcasts",
        "slug": "news",
        "url": "/news",
        "target": "",
        "order": 1,
        "class": ""
      },
      {
        "name": "Videos",
        "slug": "videos",
        "url": site.media.youtube,
        "target": "_blank",
        "order": 2,
        "class": ""
      },
      {
        "name": "Blog",
        "slug": "blog",
        "url": site.media.ghost,
        "target": "_blank",
        "order": 3,
        "class": ""
      }
    ]
  },
  {
    "name": "Start",
    "slug": "startos",
    "order": 3,
    "size": "half",
    "inHeader": false,
    "inFlyout": true,
    "inFooter": true,
    "items": [
      {
        "name": "Support",
        "slug": "support",
        "url": site.support.url,
        "target": "_blank",
        "order": 0,
        "class": ""
      },
      {
        "name": "FAQ",
        "slug": "faq",
        "url": "/faq",
        "target": "",
        "order": 1,
        "class": ""
      },
      {
        "name": "Docs",
        "slug": "docs",
        "url": site.docs.url,
        "target": "_blank",
        "order": 2,
        "class": ""
      },
      {
        "name": "Marketplace",
        "slug": "marketplace",
        "url": site.dev.marketplace,
        "target": "_blank",
        "order": 3,
        "class": ""
      }
    ]
  },
  {
    "name": "Developers",
    "slug": "developers",
    "order": 3,
    "size": "half",
    "inHeader": false,
    "inFlyout": true,
    "inFooter": true,
    "items": [
      {
        "name": "Dev Docs",
        "slug": "dev-docs",
        "url": site.dev.docs,
        "target": "_blank",
        "order": 1,
        "class": ""
      },
      {
        "name": "Github",
        "slug": "github",
        "url": site.dev.github,
        "target": "_blank",
        "order": 1,
        "class": "",
        "icon": "open-source"
      }
    ]
  },
  {
    "name": "Contact",
    "slug": "contact",
    "order": 4,
    "size": "half",
    "inHeader": false,
    "inFlyout": false,
    "inFooter": false,
    "items": [
      {
        "name": "Matrix",
        "slug": "matrix",
        "url": site.media.matrix,
        "target": "_blank",
        "order": 0,
        "class": ""
      },
      {
        "name": "YouTube",
        "slug": "youtube",
        "url": site.media.youtube,
        "target": "_blank",
        "order": 1,
        "class": ""
      },
      {
        "name": "Telegram",
        "slug": "telegram",
        "url": site.media.telegram,
        "target": "_blank",
        "order": 1,
        "class": ""
      },
      {
        "name": "Twitter",
        "slug": "twitter",
        "url": site.media.twitter,
        "target": "_blank",
        "order": 1,
        "class": ""
      }
    ]
  }
]