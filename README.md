# ThornDockerized [![Build Status](https://travis-ci.org/esimonetti/ThornDockerized.svg?branch=master)](https://travis-ci.org/esimonetti/ThornDockerized)
Docker image to run Thorn (https://github.com/sugarcrm/thorn) to test Sugar's REST API

## Running tests
Assuming the tests are located inside the samples folder, it is possible to run the tests of `./samples/sugartest.js` by executing `docker run -v ${PWD}/samples:/tests -t esimonetti/thorndockerized ./runtest.sh https://myurl.com/sugar user pass /tests/sugartest.js`<br />
Note that for every execution of the sample sugar test file, a new Contact and an Account will be created and immediately soft deleted.

## Building image manually
If you need to modify the image, follow the process below:
* Clone the repository
* To build the image execute: `docker build -t thorn .`
* To run the test on a local image build execute: `docker run -v ${PWD}/samples:/tests -t -i thorn ./runtest.sh https://myurl.com/sugar user pass /tests/test.js`
Thorn's version is defined on ./thorn/package.json to the latest currently available (0.6)
