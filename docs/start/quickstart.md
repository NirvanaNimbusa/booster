# Quick Start

You need to have node and [yarn](https://yarnpkg.com/en/) install first, because we are use monorepo in our app.

> Because firebase cloud function currently only support node 10
> We have to use node 10 for all workspace pages
> Recommend using [fnm](https://github.com/Schniz/fnm) for better performance
> if you're using node version higher than 10, you need to do `yarn config set ignore-engines true` to prevent cloud function from complaining

```bash
git clone --origin booster --single-branch --branch release git@github.com:tappollo/booster.git goboost
cd goboost
git branch -m master
yarn install
```

!> `goboost` here is used as an example for project name, always replace `goboost` with your project name

## Initialize

To customize our project with our own project name,

```bash
yarn rename goboost
```

> It would be a good time to commit since there were a lot of changes.

## Next

Go to [Create new firebase project](start/firebase-configure.md).
