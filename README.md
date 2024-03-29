# Dreamforce 2014 Account Mapper

**Best of Both Worlds: Build Native OEM Apps with Salesforce1’s Heroku and Force.com**

![Dreamforce 2014 Logo](http://lanetix-dreamforce2014.herokuapp.com/images/dreamforce2014-logo.jpeg)

## Preview

![Dreamforce 2014 Account Mapper App Preview](http://lanetix-dreamforce2014.herokuapp.com/images/preview.png)

## Quick Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Manual Setup & Deployment

### Preparation

1. Create a Mapbox account and grab your **Default Access Token** and **Project Id** from https://www.mapbox.com/projects/.
2. Create a new **[OAuth Connected App](https://help.salesforce.com/apex/HTViewHelpDoc?id=connected_app_create.htm)** in your Salesforce Organization (_Setup > Managed Apps > Connected Apps_).

### Run the Application Locally

1. Make sure you have **node.js** installed: http://nodejs.org/
2. Clone the git repository: `git clone git@github.com:lanetix/dreamforce2014.git`
3. Set local environment variables needed by the application:<br />`export MAPBOX_ACCESS_TOKEN=xxxxxxxx`<br />`export MAPBOX_MAP_ID=xxxxxxxx`<br />`export SALESFORCE_OAUTH_CLIENT_ID=xxxxxxxx`<br />`export SALESFORCE_OAUTH_CLIENT_SECRET=xxxxxxxx`
4. Run `npm install` to install the application's dependencies.
5. Run the app with `npm start` and check it out at http://localhost:3000.

_If you are developing on a Microsoft Windows machine you'll want to run `SET KEY=xxxxxxxx` in place of `export KEY=xxxxxxxx` (which works on OS X and other operating systems with a bash shell)._


### Fork the Application on GitHub

1. Create a fork of our git repository: https://github.com/lanetix/dreamforce2014/fork
2. Update your local git repository to point at your new fork:<br />`git remote set-url origin git@github.com:xxxxxxxx/dreamforce2014.git`

### Deploy to Heroku

1. Make sure you have the Heroku Toolbelt installed: https://toolbelt.heroku.com/
2. Run `heroku create` (you may need to run `heroku login` first).
3. Setup your environment variables in Heroku:<br />`heroku config:set MAPBOX_ACCESS_TOKEN=xxxxxxxx`<br />`heroku config:set MAPBOX_MAP_ID=xxxxxxxx`<br />`heroku config:set SALESFORCE_OAUTH_CLIENT_ID=xxxxxxxx`<br />`heroku config:set SALESFORCE_OAUTH_CLIENT_SECRET=xxxxxxxx`
4. Push to Heroku: `git push heroku master`
