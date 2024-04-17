import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Await } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans, { loader as vansLoader } from "./pages/Vans.jsx"
import Vandetails, { loader as vanDetailsLoader } from "./pages/Vandetails.jsx"
import Dashboard, {loader as dashboardLoader} from "./pages/Dashboard.jsx"
import Income, {loader as incomeLoader} from "./pages/Income.jsx"
import Review, {loader as reviewLoader} from "./pages/Review.jsx"
import HostLayout from "./pages/HostLayout.jsx"
import Layout from "./Components/Layout.jsx"
import HostVans, { loader as hostVansLoader } from "./pages/HostVans.jsx"
import HostVanDetails, { loader as hostVansDetailsLoader } from "./pages/HostVanDetails.jsx"
import HostVanDetailsdetails from "./pages/HostVanDetailsdetails.jsx"
import HostVanDetailsPricing from "./pages/HostVanDetailsPricing.jsx"
import HostVanDetailsPhotos from "./pages/HostVanDetailsPhotos.jsx"
import NotFound from "./pages/NotFound.jsx"
import "./server.js"
import Error from "./Components/Error.jsx"
import Login, { action as loginAction } from "./pages/Login.jsx"
import AuthRequired from "./Components/AuthRequired.jsx"
import "./App.css"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} action={loginAction} />
    <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    <Route path="vans/:id" element={<Vandetails />} loader={vanDetailsLoader} errorElement={<Error />} />
    <Route element={<AuthRequired />}>
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route path="income" element={<Income />} loader={incomeLoader} />
        <Route path="reviews" element={<Review />} loader={reviewLoader} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<Error />} />
        <Route path="vans/:id" element={<HostVanDetails />} loader={hostVansDetailsLoader} errorElement={<Error />}>
          <Route index element={<HostVanDetailsdetails />} />
          <Route path="pricing" element={<HostVanDetailsPricing />} />
          <Route path="photos" element={<HostVanDetailsPhotos />} />
        </Route>
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}