# How to easily recover a token (JSON WEB Token)

## Install
```bash
$ npm install omantel-jwt
```

## Creation package npm

```bash
$ npm init -y
```
## Usage

### Creation file ./config.json


```json
{
    "clientId":"...",
    "secretOrPrivateKey":"...",
    "audience":"",
    "user":"..."
}
```

__"audience"__ is not mandatory. You can less empty

### Creation file ./index.js
  
```js
jwt=require('omantel-jwt')

const config = require('./config.json')

const clientId=config.clientId
const secretOrPrivateKey=config.secretOrPrivateKey
const audience=config.audience
const user=config.user

const lifetime=600
const nowInSeconds = Math.floor(Date.now() / 1000) - 30;
const expInSeconds = nowInSeconds + (lifetime || 300);
const signAlgorithm = "HS256";

const payload = {
  iss: clientId,
  sub: user,
  aud: audience || '',
  iat: nowInSeconds,
  exp: expInSeconds,
};

const options = { algorithm: signAlgorithm}


console.log(jwt.getToken(payload,secretOrPrivateKey,options))
```
  
### Result in the console

```bash
$ node index.js
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIuLi4iLCJzdWIiOiIuLi4iLCJhdWQiOiI
iLCJpYXQiOjE2MjYy
```