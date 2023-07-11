#!/bin/bash

# in .dev.env, we have:
# export PORT_OUTPUT=<your_value>
export TARGET_STAGE=test-e2e
source .test.env
docker-compose -f docker-compose.yaml up --build