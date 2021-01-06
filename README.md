# Simple React Boiler

The idea of this project is to keep things as simple and clean as possible but with all the essential packages for a modern React project.

Heres a breakdown:

- Ready for production and development
- Minimial React boiler

## Babel

## Webpack

Includes individual build scripts for produciton and development

- Automatically wipe and rebuild the public directory
- Analyze addon

### Development

- Source maps
- Dev server with hot reloading

## React Router Dom

## Version Control

- Includes minimal .gitignore

## JestJS

- Run `npm run test` to run tests
- Run `npm run test:watch` to run test continuously

## SASS

## Fonts

- Includes support for Roboto with charsets [latin] and styles [300,700,regular] includes the formats [woff,woff2] (Modern browsers).

  > More fonts can be downloaded from here: https://google-webfonts-helper.herokuapp.com/fonts

## Images

## Usage

- Clone or Fork this repo
- run `npm install` to install
- In the project root folder create two files like so:

.env.development
`NODE_ENV=development`

.env.production
`NODE_ENV=production`

- Run `npm run develop` to run the webpack development server
- Run `npm run build` to have webpack build your production bundle in the public folder
