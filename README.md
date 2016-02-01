Digi-Bornes
========

Digi-Bornes TV Application

Presentation
-----------

Digi-Bornes is a Single Page Web Application.

Technologies
------------
The Client WebApp use several technologies:

* Angular.js - https://angularjs.org/
* AngularUI - http://angular-ui.github.io/
* Boostrap - http://getbootstrap.com/
* Underscore - http://underscorejs.org/
* Toastr - http://codeseven.github.io/toastr/
* jQuery - http://jquery.com/
* Html 5 and Javascript - http://www.webplatform.org/
* Sass : http://sass-lang.com/

The back-office web app use the following technologies
* CouchDb 1.6.1 - http://couchdb.apache.org/

Prerequisite
-------------
Before you install and launch the app, you need some prerequisite:

* Bower (A package manager for the web)
* Brunch (An HTML5 build tool)
* Tsd (TypeScript Definition manager for DefinitelyTyped)
* Vagrant (Configure reproducible and portable work environments)
* VirtualBox (Virtualization)

Once you have node installed, launch the following command:

```sh
$ npm install -g bower
```

```sh
$ npm install -g brunch
```

```sh
$ npm install -g tsd
```

You can now install Vagrant and VirtualBox, the installers can be downloaded on their websites:

* Vagrant: https://www.vagrantup.com/
* VirtualBox: https://www.virtualbox.org/

Once vagrant and VirtualBox are intalled on your development machine, you need to install the vagrant-proxyconf and vagrant-hosts plugins with the following command-line:

```sh
$ vagrant plugin install vagrant-proxyconf
$ vagrant plugin install vagrant-hosts
```

Installation
------------

Once you have all the prerequisite, get the source code with Git cloning:

```sh
$ git clone http://alm.sncf.fr/sources/pmm/digi-bornes.git
```

Get into source code `./front-end` directory 
```sh
$ cd front-end
```

and start by installing all local dependencies:

```sh
$ npm install
```

Next, this will install all front-end dependencies:

```sh
$ bower install
```

Next, this will install all the typings definition file for dependencies

```sh
$ tsd reinstall -s
```

The next step is about transpiling, concatenating and source-mapping resources intended for use in the browser by the UIs:

```sh
$ brunch w -e development --server
```

The resulting html application tree will be in the `../www` directory

Starting your development environment
------------------------------------

The last step is to start the CouchDb working environment with Vagrant, 
simply type the following command in the `root` directory of the source in order to start the virtual machine:

```sh
$ vagrant up
```

The creation of the vagrant development can take few minutes.
Once it's done you should have two servers installed locally :
* A CouchDb database

Starting the application
-----------------

Before launching the front-end application, you should starts the back-end with the following commands:
```sh
$ vagrant up
$ cd front-end
$ brunch w -e development --server
```

Now you should be able to access the application at `http://localhost:3333/index.html`

To-Do
-----

* Unit tests of parts of the engine with Mocha
* Integration tests of the whole stack with Mocha + Karma
* CI integration

Author
------

[Jerry Chanut](mailto:jerry.chanut@soprasteria.com)