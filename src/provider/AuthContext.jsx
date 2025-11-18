import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();