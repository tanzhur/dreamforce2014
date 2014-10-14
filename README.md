# Dreamforce 2014 Account Mapper

![Dreamforce 2014 Logo](http://www.pardot.com/wp-content/uploads/2014/07/dreamforce_banner_1200x300.jpg)

The code behind our Dreamforce 2014 Presentation on:

**Best of Both Worlds: Build Native OEM Apps with Salesforce1’s Heroku and Force.com**

## Preview

![Dreamforce 2014 Account Mapper App Preview](https://www.dropbox.com/s/29bsxfwhxucy7ti/dreamforce14-app-preview.png?dl=1)

## Quick Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Manual Setup & Deployment

### Preparation

1. Create a Mapbox account and a project at https://www.mapbox.com/projects/.
2. While on Mabpox's Projects page, grab your **Default Access Token** and **Project Id**.
3. Create a new **[OAuth Connected App](https://help.salesforce.com/apex/HTViewHelpDoc?id=connected_app_create.htm)** in your Salesforce Organization (_Setup > Managed Apps > Connected Apps_).

### Run the Application Locally

4. Make sure you have **node.js** installed: http://nodejs.org/
5. Clone the git repository: `git clone git@github.com:lanetix/dreamforce2014.git`
6. Set local environment variables needed by the application:`export MAPBOX_ACCESS_TOKEN=xxxxxxxx`<br />`export MAPBOX_MAP_ID=xxxxxxxx`<br />`export SALESFORCE_OAUTH_CLIENT_ID=xxxxxxxx`<br />`export SALESFORCE_OAUTH_CLIENT_SECRET=xxxxxxxx`
7. Run `npm install` to install the application's dependencies.
8. Run the app with `npm start` and check it out at http://localhost:3000.

### Fork the Application on GitHub

9. Create a fork of the git repository: https://github.com/lanetix/dreamforce2014/fork
10. Update your local git repository to point at your new fork: `git remote set-url origin git@github.com:xxxxxxxx/dreamforce2014.git`

### Deploy to Heroku

11. Make sure you have the Heroku Toolbelt installed: https://toolbelt.heroku.com/
12. Run `heroku create` (you may need to run `heroku login` first).
13. Setup your environment variables in Heroku: `heroku config:set MAPBOX_ACCESS_TOKEN=xxxxxxxx`<br />`heroku config:set MAPBOX_MAP_ID=xxxxxxxx`<br />`heroku config:set SALESFORCE_OAUTH_CLIENT_ID=xxxxxxxx`<br />`heroku config:set SALESFORCE_OAUTH_CLIENT_SECRET`
14. Push to Heroku: `git push heroku master`
