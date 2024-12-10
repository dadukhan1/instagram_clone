import { Routes, Route } from "react-router-dom";

import "./globals.css";

import SigninForm from "./_auth/form/SigninForm";
import SignupForm from "./_auth/form/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "./components/ui/toaster";
import {
  Explore,
  AllUsers,
  CreatePost,
  EditPost,
  Home,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
} from "./_root/pages/index";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/sign-in" element={<SigninForm />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/profile/:id*" element={<Profile />} />
          <Route path="/update-profile/:id*" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
