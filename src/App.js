import { Fragment } from "react";
import "./App.css";
import Home from "./pages/home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/layout";
import Contact from "./pages/contact";
import About from "./pages/aboutUs";
import OurTeam from "./pages/ourTeam";
import FAQ from "./pages/faq";
import Booking from "./pages/booking";
import Error from "./pages/error";
import Login from "./pages/login";
import ErrorPage from "./components/ErrorPage";
import Service from "./services/service";
import ServiceDetails from "./services/serviceDetails";
import Blog from "./components/blogs/blog";
import BlogDetails from "./components/blogs/blogDetails";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<ErrorPage />} /> 
      <Route index element={<Home />} />
      <Route path="/aboutUs" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ourTeam" element={<OurTeam />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/error" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="/service" element={<Service/>}/>
      <Route path="/serviceDetails" element= {<ServiceDetails/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blogDetails" element={<BlogDetails/>}/>

      {/* <Redirect to="/" /> */}
    </Route>
  )
);

function App() {
  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>
  );
}

export default App;
