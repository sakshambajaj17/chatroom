import React from 'react';
import { auth } from '../firebase.js';

function SignOut() {
  const buttonStyle = {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    outline: 'none',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.0)', // White with 80% opacity
    top: 0,
    borderBottom: 'solid 0px lightgray',
    zIndex: '10',
  };
  

  const handleSignOut = async () => {
    try {
      if (auth.currentUser) {
        await auth.signOut();
        console.log('User signed out successfully');
      } else {
        console.log('No user is currently signed in');
      }
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default SignOut;


// export default SignOut;




// import React from 'react';
// import { auth } from '../firebase.js';

// function SignOut() {
//   const handleSignOut = async () => {
//     try {
//       // Check if a user is signed in before attempting to sign out
//       if (auth.currentUser) {
//         await auth.signOut();
//         console.log('User signed out successfully');
//       } else {
//         console.log('No user is currently signed in');
//       }
//     } catch (error) {
//       console.error('Error signing out:', error.message);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         position: 'fixed',
//         width: '100%',
//         backgroundColor: '#FAFAFA',
//         top: 0,
//         borderBottom: 'solid 1px lightgray',
//         zIndex: '10',
//       }}
//     >
//       <button
//         style={{
//           padding: '10px',
//           fontSize: '12px',
//           borderRadius: '4px',
//           fontWeight: '600',
//           cursor: 'pointer', // Add cursor style to indicate it's clickable
//         }}
//         onClick={handleSignOut}
//       >
//         Sign Out
//       </button>
//     </div>
//   );
// }

// export default SignOut;
