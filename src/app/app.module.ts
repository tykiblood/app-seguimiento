import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormsPage } from '../pages/forms/forms';
import { RoutesPage } from '../pages/routes/routes';
import { IndividualFormPage } from '../pages/individual-form/individual-form';
import { TabsPage } from '../pages/tabs/tabs';
import { PreFormPage } from '../pages/pre-form/pre-form';
import { GlobalProvider } from '../providers/global/global';
import { HttpProvider } from '../providers/http/http';
import { Geolocation } from '@ionic-native/geolocation';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Device } from '@ionic-native/device';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { Camera } from '@ionic-native/camera';
import { Network } from '@ionic-native/network';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormsPage,
    IndividualFormPage,
    TabsPage,
    RoutesPage,
    PreFormPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SelectSearchableModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormsPage,
    IndividualFormPage,
    TabsPage,
    RoutesPage,
    PreFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    Geolocation,
    BatteryStatus,
    Device,
    HttpProvider,
    HTTP,
    NativeStorage,
    Camera,
    LaunchNavigator,
    Network,
  ]
})
export class AppModule {}
