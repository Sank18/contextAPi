/* eslint-disable react/prop-types */
import React from 'react';
import UserContext from './UserContext';
const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null);
    return (
        <UserContext.Provider value={{user,setUser}}>
            {/* context provider sai ham keh rahe  ki kis cheez ka acess dena hai  */}
            {children}
            {/* yahan children ek div hai yaa koi component hai  */}
        </UserContext.Provider>
    )

}

export default UserContextProvider;