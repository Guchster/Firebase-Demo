# FirebaseDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve -o` for a dev server. The app will automatically reload if you change any of the source files.

## What do I have here?

A sample project to use firebase in an Angular project WITHOUT AngularFire, the following basic operations are provided:

* Get
* Get (full node, iteration over list items)
* Set
* Push
* Transaction

## What you need to do

1. Create a firebase project [here](https://console.firebase.google.com) 

2. add/import the following JSON example to your realtime database:
```
{
"test" : {
    "counters" : {
      "button1" : 13
    },
    "tasks" : {
      "id123" : "Ir de compras",
      "id1234" : "Pasear al perro",
      "idtest" : "Limpiar la cocina"
    },
    "users" : {
      "userid1" : "Rodrigo",
      "userid2" : "Carlos",
      "userid3" : "Santiago",
      "userid76" : "Pedro"
    }
  }
}
```

3. Add a environments folder at `/src` level, create two files with the following content:

    1. environment.prod.ts  
    `export const environment = { production: true };`
    
    2. environment.ts  
    ```export const environment = {
        production: false,
        firebaseCredentials: {
          apiKey: 'your-api-key-here',
          authDomain: 'your-auth-domain-here',
          databaseURL: 'your-database-url-here',
          projectId: 'your-project-id-here',
          storageBucket: 'yout-storage-bucket-here',
          messagingSenderId: 'your-messaging-sender-id-here'
        }
      };```



