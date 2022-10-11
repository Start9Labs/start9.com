# Start9 website

## Architecture

- [11ty](https://www.11ty.dev) for Static Site Generator

## *TO UPDATE* Getting started

```
npm run start
```

Open http://localhost:8080 to see the site.
_(8080+n will be used if 8080 is already in use, ad nauseum)_


## *TO UPDATE* Deploy to production

You can see the results locally in production mode with:

```
npm run build
```

Now, your blog is ready to be deployed. All generated files are located at `_site` folder, which you can deploy with any hosting service.


## Project structure

```
.
├── .eleventy.js       # Eleventy config
│
└── src
    ├── _data          # Eleventy data folder
    ├── _includes
    │   └── components # HTML layout files
    │   └── layouts    # HTML layout files
    └── assets         
        ├── images
        └── styles     # Your blog CSS files
```

