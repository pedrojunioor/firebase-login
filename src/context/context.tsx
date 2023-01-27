
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../services/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail
} from "firebase/auth";

import { encrypt } from '../utils/index'

const AuthContext = createContext({} as any)
function AuthProvider({ children }: any) {

  const navigate = useNavigate()
  const [user, setUser] = useState<any>(null)

  const [isLogged, setIsLogged] = useState(() => {
    const isLogged = localStorage.getItem('token');
    return !!isLogged
  })

  async function forgotPassword(e: any, email: string) {
    e.preventDefault()
    let result = false
    await sendPasswordResetEmail(auth, email).then(() => {
      toast.success('Email-enviado')
      result = true
    }).catch((error) => {
      toast.error(`${error.code}`)
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    return result
  }

  async function handleCreateAccount(data: any) {
    if (data['password'] !== data['confirmPassword']) {
      toast.error('As senhas não conferem')
    } else {
      await createUserWithEmailAndPassword(auth, data['email'], data['password'])
        .then((userCredential) => {
          const user = userCredential.user;
          const userUpdate = auth.currentUser
          if (userUpdate) {

            updateProfile(userUpdate, {
              displayName: data['name']
            }).then(() => {
              // Profile updated!
              localStorage.setItem("token", user.refreshToken);
              localStorage.setItem("user", encrypt(user.providerData[0], true));
              setIsLogged(true)
              setUser(user)
              navigate('/')
              toast.success(`Usuario Cadastrado com Sucesso`)
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
          }

        })
        .catch((error) => {
          toast.error(`${error.code}`)
        });
    }
  }

  async function handleLogin(data: any) {
    await signInWithEmailAndPassword(auth, data['email'], data['password'])
      .then((userCredential) => {
        toast("LOGIN",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        const user = userCredential.user;
        localStorage.setItem("token", user.refreshToken);
        localStorage.setItem("user", encrypt(user.providerData[0], true));
        setUser(user)
        setIsLogged(true)
        // ...
      })
      .catch((error) => {
        toast.error(`${error.message}`)
        // toast.error(`${error.code}`)
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


  async function handleLogout(e: any) {
    e.preventDefault()
    signOut(auth).then(() => {
      localStorage.removeItem("token");
      setIsLogged(false)
      setUser(null)
      navigate("/");
      toast("LOGOUT");
    }).catch((error) => {
      // An error happened.
    });
  }

  // useEffect(() => {
  //   console.log('isAuth',isLogged)
  //   if (!isLogged) {
  //     const token = localStorage.getItem('token')
  //     if (token) {
  //       console.log(' TEM TOKEN', token)
  //       setIsLogged(true)
  //       setUser(null)
  //     }
  //     else {
  //       setIsLogged(false)
  //       navigate("/");
  //     }
  //   }
  // }, [isLogged, localStorage])

  return (
    <AuthContext.Provider value={{
      user,
      isLogged,
      handleLogin,
      handleCreateAccount,
      handleLogout,
      forgotPassword
    }}>
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
}


export { AuthContext, AuthProvider };