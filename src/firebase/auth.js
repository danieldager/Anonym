import { auth } from "./firebase";

// Sign up
export const doCreateUser = (email, password) => 
	auth.createUserWithEmailAndPassword(email, password);

// Sign in
export const doSignIn = (email, password) =>
	auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
	auth.signOut();

// Password reset
export const doPasswordReset = (email) =>
	auth.sendPasswordResetEmail;

// Password change
export const doPasswordChange = (password) =>
	auth.currentUser.updatePassword(password);

