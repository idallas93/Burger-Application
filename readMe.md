# Eat Da Burger App

### Overview

This app is a burger logger that uses MySQL, Node, Express, Handlebars and a homemade ORM. This app  follows a MVC design pattern using Node and MySQL to query and route data/ Handlebars to generate HTML.

### Deployed Link
[Deployed link](https://calm-temple-91222.herokuapp.com/)

### Functionality

* Eat Da Burger is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger that is not yet eaten, the app displays the burger on the bottom left of the page -- waiting to be devoured.

* Each burger in the waiting area also has an `Eat it` button. When the user clicks it, the burger will move to the bottom right of the page under "burgers that are eaten".

* The app stores every burger in a database, whether devoured or not.



#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgersController.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

