import { Component } from '@angular/core';
import { DatabaseService } from './database.service';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Firebase Demo';
  recoveredTask = '';
  addedTaskId = '';
  addedTaskSuccess = false;
  users = new Map<string, string>();
  constructor(
    private databaseService: DatabaseService
  ) {
    this.initFirebase();
    this.testFirebase();
  }

  initFirebase() {
    firebase.initializeApp(environment.firebaseCredentials);
  }

  testFirebase() {
    this.databaseService.getTask('id123').then(task => this.recoveredTask = task);
    this.databaseService.addTask('Comprar leche').then(taskId => this.addedTaskId = taskId);
    this.databaseService.addTaskWithId('Estudiar calculo', 'calculusId').then(success => this.addedTaskSuccess = success);
    this.databaseService.incrementButtonCounter();
    this.databaseService.getAllUsers().then(users => this.users = users);
  }

  getMapKeys(map: Map<any, any>): string[] {
    return Array.from(map.keys());
  }

  getMapValues(map: Map<any, any>): string[] {
    return Array.from(map.values());
  }

}
