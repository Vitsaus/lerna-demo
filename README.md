# UI

## initialize repository
```
npm run bootstrap
npm run tsc
```

# Running
You need two terminals. One where react applications are running and one where packages are watched for changes

## console 1: start ui applications
This will start all CRA applications.
```
npm run start
```

## console 2: start watchers
This will watch changes for packages and components. If any changes happen, Typescript will recompile packages and CRA apps will pick up new changes.
```
npm run watch
```
