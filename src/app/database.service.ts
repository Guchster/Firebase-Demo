import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as cts from './constants';

@Injectable()
export class DatabaseService {

  getTask(id: string): Promise<string> {
    return new Promise<string>(resolve => {
      const path = this.getFirebasePath([cts.db_test, cts.db_tasks, id]);
      firebase.database().ref(path).once('value').then(snapshot => {
        resolve(snapshot.val());
      }).catch(err => {
        console.error('(getTask) firebase download: ', err);
        resolve('');
      });
    });
  }

  addTask(task: string): Promise<string> {
    return new Promise<string>(resolve => {
      const path = this.getFirebasePath([cts.db_test, cts.db_tasks]);
      const newTaskRef = firebase.database().ref(path).push();
      const key = newTaskRef.key;
      newTaskRef.set(task).then(() => {
        resolve(key);
      }).catch(err => {
        console.error('(addTask) firebase push: ', err);
        resolve('');
      });
    });
  }

  addTaskWithId(task: string, id: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      const path = this.getFirebasePath([cts.db_test, cts.db_tasks, id]);
      firebase.database().ref(path).set(task).then(() =>
        resolve(true)
      ).catch(err => {
        console.error('(addTaskWithId) firebase set: ', err);
        resolve(false);
      });
    });
  }

  incrementButtonCounter() {
    const path = this.getFirebasePath([cts.db_test, cts.db_counters, cts.db_button1]);
    firebase.database().ref(path).transaction(counter => {
      if (counter !== null) {
        counter++;
      }
      return counter;
    });
  }

  getAllUsers(): Promise<Map<string, string>> {
    return new Promise<Map<string, string>>(resolve => {
      const users = new Map<string, string>();
      const path = this.getFirebasePath([cts.db_test, cts.db_users]);
      firebase.database().ref(path).once('value').then(snapshot => {
        const userList = snapshot.val();
        if (userList !== null) {
          Object.keys(userList).forEach(userKey => users.set(userKey, userList[userKey]));
          resolve(users);
        } else {
          resolve(new Map());
        }
      });
    });
  }

  private getFirebasePath(nodes: string[]): string {
    return nodes.join('/');
  }

}
