// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseCredentials: {
    apiKey: 'AIzaSyCHIVfnXuWw9Cu7lA54rUKwvRNKA53mqx8',
    authDomain: 'angularstudygroup.firebaseapp.com',
    databaseURL: 'https://angularstudygroup.firebaseio.com',
    projectId: 'angularstudygroup',
    storageBucket: 'angularstudygroup.appspot.com',
    messagingSenderId: '685318907045'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
