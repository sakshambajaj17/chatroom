import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // You can use the user variable to check if the user is signed in
      // If user is not signed in, you might redirect to the sign-in page or handle it accordingly
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  if (!auth.currentUser) {
    // If the user is not signed in, do not render the SendMessage component
    return null;
  }

  const handleInputChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await db.collection('messages').add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMsg('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.container}>
        <input
          style={styles.input}
          placeholder="Type your message..."
          type="text"
          value={msg}
          onChange={handleInputChange}
        />
        <button style={styles.button} type="submit">
          Send
        </button>
      </div>
    </form>
  );
}

const styles = {
  form: {
    width: '100%',
    marginBottom: '20px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: '1',
    fontSize: '15px',
    fontWeight: '550',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px',
  },
  button: {
    fontSize: '15px',
    fontWeight: '550',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
};

export default SendMessage;
