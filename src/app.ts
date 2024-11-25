import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { MainStack } from './components/MainStack';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC4HH2_aOADZZr9hKA4y0l4QiiUp6fxx10",
    authDomain: "fantasystocks-3a3a9.firebaseapp.com",
    projectId: "fantasystocks-3a3a9",
    storageBucket: "fantasystocks-3a3a9.firebasestorage.app",
    messagingSenderId: "531427714220",
    appId: "1:531427714220:web:11c0b4ddfc053032bf2b09",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

ReactNativeScript.start(React.createElement(MainStack, {}, null));
