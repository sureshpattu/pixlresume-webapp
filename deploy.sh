#!/bin/sh
if [ -z "$1" ]; then
  echo "Arguments missing error"
else
  echo "Changing config file"
  cp ./config/config.$1.js ./config/config.js
  echo "Changing constants config file"
  cp ./redux/utils/constants.$1.js ./redux/utils/constants.js
fi
