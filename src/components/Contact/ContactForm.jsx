import { useState } from "react";
import Chef from "../../assets/images/home-4-the-chef-b.jpg";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    seats: "",
    email: "",
    notes: "",
  });

  const [error, setError] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    seats: "",
    email: "",
  });

  const handleChange = e => {
    setError({
      name: "",
      phone: "",
      date: "",
      time: "",
      seats: "",
      email: "",
    });
    const { name, value } = e.target;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, phone, date, time, seats, email } = data;
    let newError = { ...error };
    let isError = false;
    if (name.length === 0) {
      newError = { ...newError, name: "Name is required" };
      isError = true;
    } else if (name.length < 4) {
      newError = {
        ...newError,
        name: "Name must be at least 4 characters long",
      };
      isError = true;
    }
    if (!phone.match(/^(\d{3}-\d{3}-\d{2}-\d{2})$/)) {
      newError = { ...newError, phone: "Phone is incorrect" };
      isError = true;
    }
    if (!date) {
      newError = { ...newError, date: "Date is required" };
      isError = true;
    }
    if (!time.match(/^(2[0-3]|[01]?[0-9]):([0-5][0-9])$/)) {
      newError = { ...newError, time: "Time is incorrect" };
      isError = true;
    }
    if (seats.length === 0) {
      newError = { ...newError, seats: "Seats is incorrec" };
      isError = true;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      newError = { ...newError, email: "Email is incorrect" };
      isError = true;
    }
    setError({ ...newError });

    if (!isError) {
      setData({
        name: "",
        phone: "",
        date: "",
        time: "",
        seats: "",
        email: "",
        notes: "",
      });
      toast.success("Submitted successfully!");
    }
  };

  return (
    <section className="reservationForm">
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <h3 className="title">Reservation Form</h3>
            <p className="info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <form onSubmit={e => handleSubmit(e)}>
              <div className="formController">
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  value={data.name}
                  onChange={e => handleChange(e)}
                />
                <p className="error">{error.name}</p>
              </div>
              <div className="formController">
                <input
                  type="text"
                  placeholder="Phone* (099 999-99-99)"
                  name="phone"
                  value={data.phone}
                  onChange={e => handleChange(e)}
                />
                <p className="error">{error.phone}</p>
              </div>
              <div className="formController">
                <input
                  type="date"
                  name="date"
                  value={data.date}
                  onChange={e => handleChange(e)}
                />
                <p className="error">{error.date}</p>
              </div>
              <div className="formController">
                <input
                  type="text"
                  placeholder="Time* (12:00)"
                  name="time"
                  value={data.time}
                  onChange={e => handleChange(e)}
                />
                <p className="error">{error.time}</p>
              </div>
              <div className="formController">
                <input
                  type="number"
                  placeholder="Seats*"
                  name="seats"
                  value={data.seats}
                  onChange={e => handleChange(e)}
                />
                <p className="error">{error.seats}</p>
              </div>
              <div className="formController">
                <input
                  type="text"
                  placeholder="Email*"
                  name="email"
                  value={data.email}
                  onChange={e => handleChange(e)}
                />
                <p className="error">{error.email}</p>
              </div>
              <textarea
                rows={10}
                placeholder="Notes"
                name="notes"
                value={data.notes}
                onChange={e => handleChange(e)}></textarea>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
          <div className="rightSide">
            <img src={Chef} alt="chef" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
