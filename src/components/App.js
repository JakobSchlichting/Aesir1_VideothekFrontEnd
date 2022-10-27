import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset";
import FilmsList from "./FilmsList";
import FilmView from "./FilmView";
import UserZone from "./UserZone";
import {BrowserRouter,  Routes, Route} from "react-router-dom";



 

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>} />
                <Route path="signUp" element={<SignUp/>}  />
                <Route path="passwortBackup" element={<PasswordReset/>}  />
                <Route path="films" element={<FilmsList />} />
                <Route path="filmView:id" element={<FilmView />} />
                <Route path="user" element={<UserZone/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;