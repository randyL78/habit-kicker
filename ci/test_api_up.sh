#!/bin/bash

# testing for response 500 because db will not have been created
until [ $(curl -s -o /dev/null -w "%{http_code}" http://localhost:5000) -eq 500 ]
do
    echo Waiting for server to start
    sleep 5
done

echo server is running