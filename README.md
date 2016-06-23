# react-redux-base

Base scaffolding for a ES2015 based React/Redux based web application. Includes an opinionated Grunt structure for building, serving w/ live reload, and watching for rebuilds.

- browserify ^13.0.1
- react ^15.1.0
    - react-dom ^15.1.0
    - react-router ^2.4.1
- redux ^3.5.2
- bootstrap ^3.3.2
    - react-bootstrap ^0.29.4
- Font Awesome ^4.6.3

## Getting Started

1. git clone this repo
2. rm -rf repo/.git && git init
3. Modify:
    - The ``package.json`` file to represent the new project.
    - README.md
    - LICENSE
4. Install development dependencies with ``npm install``
5. Start writing code

## Top-Level Grunt Tasks

- ``build``
- ``serve``
- ``watch``
