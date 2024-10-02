// import React, { createContext, useState, useEffect, useContext } from 'react';
// import jwt from 'jsonwebtoken'; 
// import { PrismaClient } from '@prisma/client';


// const prisma = new PrismaClient(); // Initialize Prisma Client
// export const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       let storedUser = localStorage.getItem('user');
//       if (storedUser) {
//         storedUser = JSON.parse(storedUser);
//         try {
//           // Verify token and extract user information
//           const decoded = jwt.verify(storedUser.token, 'asdasdasd53543543asdgjhasd%^*&(*(%&$^))'); // Use your JWT secret
//           const userFromDb = await prisma.client.findUnique({
//             where: { id: decoded.id }, // Find user by ID from the token
//           });
//           setUser(userFromDb);
//         } catch (err) {
//           console.error('Token verification failed:', err);
//           setUser(null);
//           localStorage.removeItem('user');
//         }
//       }
//       setLoading(false);
//     };

//     checkLoggedIn();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const userData = await prisma.client.findUnique({
//         where: { email },
//       });

//       // Check if the user exists and validate password (implement password hashing logic)
//       if (userData && password === userData.password) {
//         const token = jwt.sign({ id: userData.id }, 'your_secret_key'); // Generate a token
//         const userWithToken = { ...userData, token };

//         setUser(userWithToken);
//         localStorage.setItem('user', JSON.stringify(userWithToken));
//         return { success: true };
//       } else {
//         return { success: false, message: 'Invalid credentials' };
//       }
//     } catch (err) {
//       console.error('Login failed:', err);
//       return { success: false, message: 'Login failed' };
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   const value = {
//     user,
//     loading,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;
