# Frosmo with Contentful and React

## Setup

Install npm dependencies:
```
npm Install
```

Initialize FProxy (follow the instructions to set it up correctly):
```
fproxy init
```

Copy `.contentful.json.sample` and add Contentful spaceId & token to `.contentful.json`
```
cp .contentful.json.sample .contentful.json
```



## Important files (directory structure)
All examples of Frosmo modifications & templates can be found within frosmo_content. For you modification IDs & file names will be different.
```
frosmo_content
    modifications
        prod
            60217 # this is the first tutorial modification
            60218 # this is the second tutorial modification
            60223 # this is the React modification
                home page - hero banner - react_rev1_60223.0.source.js # this is the index file (React source file)
                home page - hero banner - react_rev1_60223.0.js # this is the compiled js file
                home page - hero banner - react_rev1_60223.0.css # this is the compiled css file
                home page - hero banner - react_rev1_60223.json # these are the variables for the modification
                home page - hero banner - react_rev1_60223.html
components # React components
    hero.js
    hero.module.js
webpack.config.js
```

## Developing
To start developing run:
```
npm run start
```
This will run webpack in watch mode and also start FProxy server which serves
Frosmo modifications & templates from you local environment.
It will watch changes for all modifications & templates.

## Uploading content to Frosmo Control Panel

First compile modifications in production mode:
```
npm run build:prod
```

Then upload modification to Frosmo Control Panel using FProxy:
```
fproxy upload frosmo_content 60223
```

You can also upload all modifications if you will:
```
fproxy upload frosmo_content all
```




