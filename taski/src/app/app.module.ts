import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HomePage } from '../pages/home/home';
import {PDetailPage} from '../pages/p-detail/p-detail';
import {LoginPage} from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JesonConectionProvider } from '../providers/jeson-conection/jeson-conection';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



var config = {
  apiKey: "AIzaSyBn4QwvvEANESuQi1mRYBwF7lsStlwTs_o",
  authDomain: "taski-2d1a9.firebaseapp.com",
  databaseURL: "https://taski-2d1a9.firebaseio.com",
  projectId: "taski-2d1a9",
  storageBucket: "taski-2d1a9.appspot.com",
  messagingSenderId: "322674117007"
};
//firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,PDetailPage,
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,AngularFireModule,AngularFireDatabaseModule,AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,PDetailPage,
  ],
  providers: [
    StatusBar,JesonConectionProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
