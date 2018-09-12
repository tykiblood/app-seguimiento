import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormsPage } from '../pages/forms/forms';
import { IndividualFormPage } from '../pages/individual-form/individual-form';
import { TabsPage } from '../pages/tabs/tabs';
import { GlobalProvider } from '../providers/global/global';
import { Geolocation } from '@ionic-native/geolocation';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Device } from '@ionic-native/device';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormsPage,
    IndividualFormPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormsPage,
    IndividualFormPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    Geolocation,
    BatteryStatus,
    Device
  ]
})
export class AppModule {}