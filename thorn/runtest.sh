#!/bin/sh
THORN_SERVER_URL="$1" THORN_ADMIN_USERNAME="$2" THORN_ADMIN_PASSWORD="$3" THORN_VERBOSE=1 mocha -r co-mocha $4
