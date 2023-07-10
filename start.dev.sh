#!/bin/bash

# in .dev.env, we have:
# export TARGET_STAGE=development
# export PORT_OUTPUT=<your_value>
source .dev.env
docker-compose -f docker-compose.yaml up --build