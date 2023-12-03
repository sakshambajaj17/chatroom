import React from 'react';
import { auth } from '../firebase.js';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function SignInn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    // Check if there is a signed-in user
    const isUserSignedIn = !!auth.currentUser;

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            height: '100vh', 
            alignItems: 'center' 
        }}>
            {/* Conditionally render the button based on whether there is a signed-in user */}
            {!isUserSignedIn && (
                <button 
                    style={{ 
                        padding: '12px 20px', 
                        fontSize: '16px', 
                        borderRadius: '8px', 
                        fontWeight: '600',
                        cursor: 'pointer',
                        backgroundColor: '#4CAF50', // Green background color
                        color: 'white', // White text color
                        border: 'none', // No border
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle box shadow
                        transition: 'background-color 0.3s ease', // Smooth background color transition
                    }} 
                    onClick={signInWithGoogle}
                >
                    Sign In With Google
                </button>
            )}
        </div>
    );
}

export default SignInn;
