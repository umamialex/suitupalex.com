# SuitUpAlex.com

[![Build Status](https://api.travis-ci.org/suitupalex/suitupalex.com.svg)](https://travis-ci.org/suitupalex/suitupalex.com)

The personal website for Alexander Martin.

## Install
```bash
$ npm install
```

## Build
```bash
$ SA_URL='http://suitupalex.com:80' npm run build
```

## Production Build
```bash
$ npm run prod
```

## Run
```bash
$ DEBUG='sa*' \
  SA_CONTENTFUL_PREVIEW_ACCESS_TOKEN=preview_token \
  SA_CONTENTFUL_PRODUCTION_ACCESS_TOKEN=production_token \
  SA_CONTENTFUL_SPACE=space_id \
  SA_PORT=8080 \
  SA_URL=http://localhost:8080 \
  SA_FETCH_INTERVAL=30 \
  npm run watch
```

## Watch
```bash
$ DEBUG='sa*' \
  SA_CONTENTFUL_PREVIEW_ACCESS_TOKEN=preview_token \
  SA_CONTENTFUL_PRODUCTION_ACCESS_TOKEN=production_token \
  SA_CONTENTFUL_SPACE=space_id \
  SA_PORT=8080 \
  SA_URL=http://localhost:8080 \
  SA_FETCH_INTERVAL=30 \
  npm start
```

## License
Copyright 2016 Alexander Martin Licensed under the Educational Community License
, Version 2.0 (the "License"); you may not use this file except in compliance
with the License. You may obtain a copy of the License at

http://www.osedu.org/licenses/ECL-2.0

Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
