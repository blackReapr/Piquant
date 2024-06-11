import { useState } from "react";
// Icons
import { SlUserFollow } from "react-icons/sl";
import { FaRegCalendarAlt, FaRegHandPointRight } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import toast from "react-hot-toast";

const Booking = () => {
  const [date, setDate] = useState("");
  return (
    <section className="booking">
      <div className="container">
        <div className="row">
          <div className="personCount selectWrapper">
            <select>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
              <option value="7">7 People</option>
              <option value="8">8 People</option>
              <option value="9">9 People</option>
              <option value="10">10 People</option>
            </select>
            <div className="icon">
              <SlUserFollow />
            </div>
          </div>
          <span>For</span>
          <div className="datePicker selectWrapper">
            <input
              type="date"
              id="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <FaRegCalendarAlt
              onClick={() => document.getElementById("date").showPicker()}
            />
          </div>
          <span>at</span>
          <div className="timePicker selectWrapper">
            <select>
              <option value="6:30">6:30</option>
              <option value="6:31">6:31</option>
              <option value="6:32">6:32</option>
              <option value="6:33">6:33</option>
              <option value="6:34">6:34</option>
              <option value="6:35">6:35</option>
              <option value="6:36">6:36</option>
              <option value="6:37">6:37</option>
              <option value="6:38">6:38</option>
              <option value="6:39">6:39</option>
              <option value="6:40">6:40</option>
              <option value="6:41">6:41</option>
              <option value="6:42">6:42</option>
              <option value="6:43">6:43</option>
              <option value="6:44">6:44</option>
              <option value="6:45">6:45</option>
            </select>
            <div className="icon">
              <CiClock2 />
            </div>
          </div>
          <button
            className="bookSubmitBtn"
            onClick={() =>
              date
                ? toast.success("Successfully Booked!")
                : toast.error("Please choose a date!")
            }
          >
            <FaRegHandPointRight /> Book A table
          </button>
        </div>
      </div>
    </section>
  );
};

export default Booking;
