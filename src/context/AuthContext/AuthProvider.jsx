/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile 
} from "firebase/auth";
import auth from '../../firebase/firebase.init';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User with Email & Password and set photoURL
    const createUser = (email, password, displayName, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                return updateProfile(userCredential.user, {
                    displayName: displayName || "New User",
                    photoURL: photoURL || "https://i.ibb.co/2PNgfwZ/default-avatar.png"
                }).then(() => userCredential.user);
            });
    };

    // Sign in with Email & Password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign in with Google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Sign out User
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Listen for authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser({
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: currentUser.displayName || "User",
              photoURL: currentUser.photoURL || "",
            });
      
            // Send email to backend to receive JWT
            const userInfo = { email: currentUser.email };
            axios
              .post("http://localhost:5000/jwt", userInfo, { withCredentials: true })
              .then((res) => {
                console.log("login token", res.data);
                setLoading(false);
              });
          } else {
            setUser(null);
            axios
              .post(
                "http://localhost:5000/logout",
                {},
                {
                  withCredentials: true,
                }
              )
              .then((res) => {
                console.log("logout", res.data);
                setLoading(false);
              });
          }
        });
      
        return () => unsubscribe();
      }, []);
      

    // Provide authentication context
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
