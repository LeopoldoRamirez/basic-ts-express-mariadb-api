## Basic API using  Node, Expres, TypeScript and MariaDB

## to check used ports
# $ netstat -antplF



## 1) create project
# $ npm init -y

## 2) add project dependencies
## express :
## mariadb :
## mysql
## morgan :
## typeorm :
## reflect-metadata
# $ npm i express mariadb mysql morgan typeorm reflect-metadata

## 3) add development dependencies
## typescript
## @types/node
## @types/express
## @types/morgan
## tsc-watch
## nodemon: *
# $ npm i typescript @types/node @types/express @types/morgan tsc-watch nodemon  -D


## 4) create tsconfig.json file
# $ npx tsc --init

## 5) Configure tsconfig.json file (Depends on project)
## "target": "es5"   
## "lib": [ "ES5", "ES6" ]
## "outDir": "./dist"
## "rootDir": "./src"
## "strictPropertyInitialization": false
## "moduleResolution": "node"
## "experimentalDecorators": true
## "emitDecoratorMetadata": true

## 6) configure required tasks in scripts section of package.json
## build : transpile code with tsc
## buildrun : invoke build and then execute index.js in dist folder
## devts : invoke tsc-watch, if transpilation was successful execute index.js in dist folder
## devjs : invoke nodemon , if transpilation was successful execute index.js in dist folder

## 6.1) To run each command
# $ npm run build
# $ npm run buildrun
# $ npm run devts
# $ npm run devjs

## 7) Database configuration ,in this project we create a Database with docker
## If you have a MariaDB instance or DB with docker you can omit step 7

## 7.1) Create a volume with docker or verify you can use an existing one
## $ docker volume ls

## 7.2) In this sample ,create volume maria-volume
# $ docker volume create maria-volume

## 7.3) Create the maria db with docker 
##  detache creation
##  listen in port 3307
##  the container name is dbmaria
##  the data will be mounted in maria-volume
##  set the root_password equals to password
##  create the database ts-api-sqldb
##  create in version 10.4
# $ docker run -d -p 3307:3306 --name dbmaria --mount src=maria-volume,dst=/var/lib/mysql -e MARIADB_ROOT_HOST=localhost -e MARIADB_ROOT_PASSWORD=password -e MARIADB_DATABASE=ts_api_sqldb mariadb/server:10.4

## 7.4) To check the database in console
## exec bash in iterative mode
# $ docker exec -it dbmaria bash

## 7.5) Execute mysql command
# root@[ID_MARIADB_CONTAINER]:/#  mysql
# MariaDB[(none)] > show databases; 

# 7.6) Execute mariadb command
# root@[ID_MARIADB_CONTAINER]:/#  mariadb
# MariaDB[(none)] > show databases;

## 7.7) execute out of the container with mysql
# $ mysql --host 127.0.0.1 -P 3307 -u root -p

## 7.8) execute out of the container with  mariadb
# $ mariadb --host 127.0.0.1 -P 3307 -u root -p

## 8) Configure typeorm

## 8.1) typeorm, needs you already have a database,if not exists, create one
##  for this sample db is ts_api_sqldb
# > CREATE DATABASE IF NOT EXISTS ts_api_sqldb;

## 8.2) Check the documentation of typeorm
# https://typeorm.io/#/

## 8.3) Create ormconfig.json
# $ touch ormconfig.json










