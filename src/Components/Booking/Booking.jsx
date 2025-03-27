import React from "react";
import bookingCSS from "./../Booking/Booking.module.css";

function Booking() {
  return (
    <div className={bookingCSS.bookingContainer}>
      <div className={bookingCSS.header}>
        
        <h2>Book Your Stay</h2>
        <p>
          <span className={bookingCSS.highlight}>Select</span> your preferred
          dates and location to find available rooms.
        </p>
      </div>

      <div className={bookingCSS.formContainer}>
        <h3>Reservation Details</h3>
        <p>Complete the form below to check room availability.</p>

        <form className={bookingCSS.bookingForm}>
          <label>
            Hotel Location
            <select>
              <option value="mumbai">Mumbai</option>
              <option value="kolkata">Kolkata</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="goa">Goa</option>
              <option value="ratnadipa">Ratnadipa</option>
              <option value="chail">Chail</option>
              <option value="jabalpur">Jabalpur</option>
              <option value="khimsar">Khimsar</option>
            </select>
          </label>

          <div className={bookingCSS.inputRow}>
            <label>
              Adults
              <input type="number" min="1" max="10" defaultValue="1" />
            </label>
            <label>
              Children
              <input type="number" min="0" max="10" defaultValue="0" />
            </label>
          </div>

          <div className={bookingCSS.inputRow}>
            <label>
              Check-in Date
              <input type="date" />
            </label>
            <label>
              Check-out Date
              <input type="date" />
            </label>
          </div>

          <button type="submit" className={bookingCSS.submitBtn}>
            Search Available Rooms
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
