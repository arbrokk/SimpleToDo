import { createContext, useContext, useEffect, useState,  } from 'react'
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,

    signOut, signInWithPopup, GoogleAuthProvider
} from 'firebase/auth'
import { auth } from '../firebase/firebase'

const AuthContext = createContext<any>({})


const provider = new GoogleAuthProvider();

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
                                        children,
                                    }: {
    children: React.ReactNode
}) => {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    imageUrl: user.photoURL,
                })
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = () => {

        signInWithPopup(auth, provider)
            .then(() => {

                // The signed-in user info.
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    imageUrl: user.photoURL,
                })


            }).catch((error) => {

            console.log(GoogleAuthProvider.credentialFromError(error));

        });

    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}