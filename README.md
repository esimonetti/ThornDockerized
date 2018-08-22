# ThornDockerized [![Build Status](https://travis-ci.org/esimonetti/ThornDockerized.svg?branch=master)](https://travis-ci.org/esimonetti/ThornDockerized)
Docker image to run Thorn (https://github.com/sugarcrm/thorn) to test Sugar's REST API

## Option 1 - Basic - Running tests
Assuming the the test file `sugarsample.js` is located inside the local `samples` directory.<br />
Execute: `docker run -v ${PWD}/samples:/tests -t esimonetti/thorndockerized ./runtest.sh https://myurl.com/sugar user password /tests/sugarsample.js`<br />
It is also possible to run all tests within a directory, by passing as last parameter a directory path containing the tests, instead of a specific file name.<br /><br />
Note that for every execution of the Sugar sample test file provided, a new Contact and an Account will be created and immediately soft deleted.<br />

## Option 2 - Advanced - Building image manually and running tests
If there is the need to modify the image locally, follow the process below:
* Clone the repository
* Enter the cloned directory
* Build the image: `docker build -t thorn .`
* Run the test on the local image: `docker run -v ${PWD}/samples:/tests -t -i thorn ./runtest.sh https://myurl.com/sugar user password /tests/sugarsample.js`

Thorn's version is defined on `./thorn/package.json`. It is currently set to version 0.6.
