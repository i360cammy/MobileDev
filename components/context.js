import React, { createContext } from 'react';

//Creates and exports a context which we can use anywhere in the app by
//importing it. This context handles the login and logout state
//so that we don't need to log in every time the app is launched.
export const AuthContext = createContext();