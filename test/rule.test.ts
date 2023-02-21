import 'jest'
import * as firebase from '@firebase/testing'
import * as fs from 'fs'

const projectID = 'ctec-a97f0'
describe('test', () => {
  let firestore: firebase.firestore.Firestore
  beforeEach(async () => {
    await firebase.loadFirestoreRules({
      projectId: projectID,
      rules: fs.readFileSync('firestore.rules', 'utf8')
    })

    describe('try to get user data', () => {
      firestore = firebase
        .initializeTestApp({
          auth: { uid: 'xxx', email: 'collinlindendrak@gmail.com' },
          projectId: projectID
        })
        .firestore()
    })
  })

  test('should fail', () => {
    firebase.assertFails(
      firestore
        .collection('users')
        .doc('xxx')
        .get()
    )
  })

  afterEach(async () => {
    await Promise.all(firebase.apps().map(app => app.delete()))
  })
})
