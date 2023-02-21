import * as functions from 'firebase-functions'

export const helloWorld = functions.https.onRequest((request, response) => {
  // @ts-ignore
  response.send('Hello from Firebase!')
})
