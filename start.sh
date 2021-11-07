#!/bin/bash

if [ -z "$1" ]
then
    echo "no frontend framework selected"
else
    cd DependencyInjection;
    npm i;
    npm link;
    cd ..;
    cd Models;
    npm i;
    npm link;
    cd ..;
    cd Views;
    npm i;
    npm link;
    npm link dependencyinjection
    npm link models
    cd ..;
    cd FrontendFrameworks/"$1"
    npm i;
    npm link dependencyinjection
    npm link models
    npm link views

    echo "successfully linked all dependencies"
fi

