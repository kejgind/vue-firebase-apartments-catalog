import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { fbConfig } from "../fb/fbConfig";

firebase.initializeApp(fbConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
