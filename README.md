# Notes-App(NodeJS)
<p align="center">
  <img src="images/nodejs-1-logo.png" height=150px width=150px>
</p>
<p> Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Notes-app allows users to add, remove, list and read notes from a JSON file using node through the command line interface.
</p>

<h2> Concepts Covered </h2>
<ol>
  <li> Node Core Module- File System(fs) </li>
  <li> Npm package- yargs and chalk </li>
  <li> Handling data from JSON file </li>
</ol>

## Installation and Setup
Install NodeJS and initilaise npm
```Bash
node -v
npm init
```
Install Node modules for dependencies
```Bash
node install
```
Download npm package yargs
```Bash
npm install yargs
```
Run the app
```Bash
node app.js <command> --title="" --body=""
<command>=add, remove, list, read
```
