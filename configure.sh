#!/bin/sh

DEFAULT_APP_NAME="app-ae627c"
SRC_PATH="seed-project/src"
TOPLEVEL_MODULE_PATH="$SRC_PATH/$DEFAULT_APP_NAME"

function show_help {
  cat << EOF
Usage: configure.sh PROJECT_NAME

Updates the seed project with the project name of your choosing. PROJECT_NAME
must start with a letter and may contain letters, numbers, _ or - characters.
This script will NOT check the PROJECT_NAME for validity.
EOF
  exit 1
}

function main {
  git clean -xdf
  mv "$TOPLEVEL_MODULE_PATH" "$SRC_PATH/$1"
  find seed-project -name '*.html' -o -name '*.json' -o -name '*.js' -o -name '*.scss' | xargs perl -pi -e 's/'"$DEFAULT_APP_NAME"'/'"$1"'/'
}

if [ -z "$1" ]; then
  show_help
fi

main "$@"
