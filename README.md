![Dreamforce 2014 Logo](http://www.pardot.com/wp-content/uploads/2014/07/dreamforce_banner_1200x300.jpg)

Dreamforce 2014 Account Mapper
==============================

#### Setup

1. Create Mapbox Account and Project at https://www.mapbox.com/projects/<br><br>
2. While on the Mabpox Projects' page, grab your **Default Access Token** and **Project Id** and set the related environment variables locally:<br><br> `export MAPBOX_MAP_ID='xxxxxxxxxx'` <br> `export MAPBOX_ACCESS_TOKEN=xxxxxxxxxx` <br><br>
3. Create a new **Connected App** in your Salesforce Organization in *Setup >> Managed Apps >> Connected Apps* administration page<br><br>
4. Configure environment variables for your new Salesforce Connected App: <br><br> `export SALESFORCE_OAUTH_CLIENT_ID=xxxxxxxxxx`<br>
`export SALESFORCE_OAUTH_CLIENT_SECRET=xxxxxxxxxx`<br><br>
5. Clone the repo: `git clone git@github.com:lanetix/dreamforce2014.git`<br><br>
6. `npm install` dependencies<br><br>
7. Run the app w/ an `npm start` and check it out at http://localhost:3000

