# Dreamforce 2014 Account Mapper

![Dreamforce 2014 Logo](http://www.pardot.com/wp-content/uploads/2014/07/dreamforce_banner_1200x300.jpg)

The code behind our Dreamforce 2014 Presentation on:
_Best of Both Worlds: Build Native OEM Apps with Salesforce1’s Heroku and force.com_

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### Preview

![Dreamforce 2014 Account Mapper App Preview](https://www.dropbox.com/s/29bsxfwhxucy7ti/dreamforce14-app-preview.png?dl=1)

#### Setup

1. Create a Mapbox account and a project at [https://www.mapbox.com/projects/].
2. While on Mabpox's Projects page, grab your **Default Access Token** and **Project Id** and set the related environment variables locally:<br />`export MAPBOX_MAP_ID='xxxxxxxxxx`<br />`export MAPBOX_ACCESS_TOKEN=xxxxxxxxxx`
4. Create a new **[OAuth Connected App](https://help.salesforce.com/apex/HTViewHelpDoc?id=connected_app_create.htm)** in your Salesforce Organization (_Setup > Managed Apps > Connected Apps_).
5. Configure environment variables for your new Salesforce Connected App:<br />`export SALESFORCE_OAUTH_CLIENT_ID=xxxxxxxxxx`<br />`export SALESFORCE_OAUTH_CLIENT_SECRET=xxxxxxxxxx`
6. Clone the git repository: `git clone git@github.com:lanetix/dreamforce2014.git`
7. Run `npm install` to install the application's dependencies.
8. Run the app with `npm start` and check it out at http://localhost:3000.
