import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./layouts/layout"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoute from "./auth/ProtectedRoute"

const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
      <Route path="/" element={<Layout><HomePage/></Layout>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path="/user-profile" element={<Layout displayHero={false} ><UserProfilePage/></Layout>}/>
      </Route>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default AppRoutes