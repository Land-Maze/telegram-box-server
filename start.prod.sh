#!/bin/bash

# in .prod.env, we have:
# export TARGET_STAGE=production
# export PORT_OUTPUT=<your_value>
source .prod.env
docker-compose -f docker-compose.yaml up --build