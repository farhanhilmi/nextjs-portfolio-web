import { initializeApp, getApps } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
    getDatabase,
    ref,
    child,
    get,
    set,
    push,
    query,
} from 'firebase/database';

// console.log('serviceAccount', serviceAccount);

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0]; // Use the already initialized app
}

const auth = getAuth(app);
const storage = getStorage(app);
const db = getDatabase(app);
// const bucket = admin.storage().bucket();

signInWithEmailAndPassword(
    auth,
    process.env.NEXT_PUBLIC_FIREBASE_EMAIL,
    process.env.NEXT_PUBLIC_FIREBASE_PASSWORD,
)
    .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // console.log('User signed in:');
    })
    .catch((error) => {
        console.error('Error signing in:', error);
    });

const writeData = (path, data) => {
    // const db = getDatabase();
    // set(ref(db, `${path}/`), data);
    const postListRef = ref(db, path);
    const newPostRef = push(postListRef);
    set(newPostRef, data);
};

const readData = async (path, id) => {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `${path}/${id}`));
    if (!snapshot.exists()) {
        console.log('No data available');
    }

    return snapshot.val();
};

const readAllData = async (path) => {
    try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, path));

        if (snapshot.exists()) {
            const data = snapshot.val();
            const dataList = Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
            }));

            return dataList;
        }

        return [];
    } catch (error) {
        console.error('Error reading data: ', error);
    }
};
// readAllData();
// (async () => {
//     console.log('DATA', await readAllData('experiences'));
// })();
export { auth, storage, writeData, readData, readAllData };
