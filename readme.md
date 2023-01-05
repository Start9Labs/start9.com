# Start9 website

## Architecture

- [11ty](https://www.11ty.dev) for Static Site Generator

## Serve for dev

```
npm run start
```

Open http://localhost:8080 to see the site.
_(8080+n will be used if 8080 is already in use, ad nauseum)_

### NOTE
Eleventy projects served in this way will re-build on save of any file in the project.
Usually, any browser viewing the page will also hot-reload on build. However, this project stopped hot-reloading a couple of weeks ago. Have not been able to diagnose why. According to some threads I found, it's a bit of a black-box with many possible causes.


## Deploy to production

You can see the results locally in production mode with:

```
npm run build
```

Now, your blog is ready to be deployed. All generated files are located at `_site` folder, which you can deploy with any hosting service.
(I use https://coolify.io/ which allows me to auto-deploy by pushing to GitLab.)


## Project structure

```
.
├── .eleventy.js       # Eleventy config
│
└── src
    ├── _data          # Eleventy data folder (supports .json and exported .js)
    ├── _includes
    │   └── components # landing sections and reusable components
    │   └── layouts    # page layouts
    │   └── svgs       # for including in njk templates
    └── assets         
        ├── fonts
        ├── images     
        ├── js         
        └── styles     # SCSS
```

