// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080/',
  stripePublicKey: 'pk_test_51LUtccIrdIE4F8uYFh4oP8SWBTlw7Pkz6k0Zg3nZhsq49159J6QGRY5W0fRIbj29Otll9kWkzdVkByB0h3HImkte00nTPLoEs3',
  clientUrl: '?redirect_uri=http://localhost:4200/login'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
