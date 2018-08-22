#!/bin/bash
TOTAL_TESTS=2

OUTPUT=`docker run -v ${PWD}/tests:/tests -t -i thorn ./runtest.sh https://httpbin.org nouser nopass /tests/test.js`

# detect if the tests are passing
RESULT=`echo $OUTPUT | grep "$TOTAL_TESTS passing" | sed -e 's/^[[:space:]]*//' | wc -l | sed -e 's/^[[:space:]]*//'`

if [ $RESULT != '1' ]
then
    echo Error: Not all tests passed
    docker run -v ${PWD}/tests:/tests -t -i thorn ./runtest.sh https://httpbin.org nouser nopass /tests/test.js
    exit 1
else
    echo $TOTAL_TESTS tests passed successfully
fi
