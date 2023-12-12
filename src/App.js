import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./Components/Authentication/SignUp/SignUp";   // User - Sign Up
import SignIn from "./Components/Authentication/SignIn/SignIn";   // USer - Sign In
import SignOut from "./Components/Authentication/SignUp/SignUp";  // User - Sign Out

import Navigation from "./Components/Navigation/Navigation";  // App - Navigation

import AddRecipe from "./Components/Recipe/Actions/Add/AddRecipe";  // Recipe - Actions - Add
import DeleteRecipe from "./Components/Recipe/Actions/Delete/DeleteRecipe";   // Recipe - Actions - Delete
import EditRecipe from "./Components/Recipe/Actions/Edit/EditRecipe";   // Recipe - Actions - Edit
import SearchRecipe from "./Components/Recipe/Actions/Search/SearchRecipe"; // Recipe - Actions - Search
//import RecipeCard from "./Components/Recipe/Display/RecipeCard";

//import Nutrition from "./Components/Nutrition/Nutrition";   // Reserved for Nutiritions

// Main function of the App
function App() {
  return (
    <>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignOut" element={<SignOut />} />
          <Route path="/Recipe/Add" element={<AddRecipe />} />
          <Route path="/Recipe/Delete" element={<DeleteRecipe />} />
          <Route path="/Recipe/Edit" element={<EditRecipe />} />
          <Route path="/Search" element={<SearchRecipe />} />
        </Routes>
      </BrowserRouter>    
    </>
  );
}

export default App;