import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav"; 
import BookingNav from "./Components/BookingNav/BookingNav"; 
import Slideshow from "./Components/Slideshow/Slideshow";
import About from "./Components/About/About";
import Dest from "./Components/Dest/Dest";
import Dining from "./Components/Dining/Dining";
import Amenities from "./Components/Amenities/Amenities";
import Footer from "./Components/Footer/Footer";
import Booking from "./Components/Booking/Booking"; 
import Rooms from "./Components/Rooms/Rooms";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <Router>
      <Routes>
        {/* Show Main Nav for Home Page */}
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Slideshow />
              <div id="about"><About /></div>
              <div id="dest"><Dest /></div>
              <div id="Rooms"><Rooms /></div>
              <div id="Amenities"><Amenities /></div>
              <div id="dining"><Dining /></div>
              <Analytics/>
              <SpeedInsights/>
              <Footer />
            </>
          }
        />

        {/* Show BookingNav for Booking Page */}
        <Route
          path="/booking"
          element={
            <>
              <BookingNav />
              <Booking />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
