import Firebase from 'firebase';
import { EventEmitter } from 'events';

import config from './config/index';

const mediator = Object.assign(new EventEmitter(), {
  // TOOD: check how to remove this attr
  loggedInHero: false,
  storage: {},
});

let dbRef;
export function db() {
  if (!dbRef) dbRef = new Firebase(config.firebasePath);
  return dbRef;
}

// TOOD: check how to move it another place
//       maybe move it to reducers
export function fechStorage() {
  return Promise.all([

    new Promise((resolve) => {
      db().child('tableExperience').once('value', (data) => {
        mediator.storage.tableExperience = data.val();
        resolve();
      });
    }),

    new Promise((resolve) => {
      db().child('skills').once('value', (data) => {
        mediator.storage.skills = data.val();
        resolve();
      });
    }),

  ]);
}

export default mediator;
