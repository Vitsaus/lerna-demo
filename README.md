# UI

## install lerna globally
```
npm install lerna -g
```

## initialize repository
```
npm run bootstrap
```

# Running
You need two terminals. One where react applications are running and one where components and features are watched for changes

## console 1: start feature & component watchers
This will watch changes for packages and components. If any changes happen, Typescript will recompile packages and CRA apps will pick up new changes.
```
npm run watch
```

## console 2: start ui applications
This will start all CRA applications.
```
npm run start
```

# feature usage

## install

```
- add feature as dependency to package.json
- npm run bootstrap
- add sagas to rootSaga
- add reducer to rootReducer
- use feature's components where you need them
```

# component usage

## install
```
- add feature as dependency to package.json
- npm run bootstrap
- use component's components(doh) where you want
```
