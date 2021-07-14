import {getToken,Payload,Options } from '../src';

const clientId="4db6dc9e8247492ba846eaa6c9ffdc44"
const secretOrPrivateKey="ZLmZFVq9S2CW2rkdcQLpRlitg4MyH04f"
const audience=""
const user="admin"
const lifetime=600
const nowInSeconds = Math.floor(Date.now() / 1000) - 30;
const expInSeconds = nowInSeconds + (lifetime || 300);
const signAlgorithm = "HS256";

const payload:Payload  = {
  iss: clientId,
  sub: user,
  aud: audience || '',
  iat: nowInSeconds,
  exp: expInSeconds,
};

const options:Options = { algorithm: signAlgorithm}
describe('Get token works ?', () => {
  it('works', () => {
    
    expect(getToken(payload,secretOrPrivateKey,options)).toBeDefined;
  });
});
