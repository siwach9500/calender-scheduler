import React, { useState } from "react";
import "./FrontPage.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import DaySection from "./DaySection";
// import { useState } from "react";

const FrontPage = () => {
  const [curDate, setCurDate] = useState(new Date());

  const locale = "en";
  // const curDate = new Date();
  var today = curDate
    .toLocaleDateString(locale, {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .split(" ")
    .join("-");
  // console.log(curDate.getDate());

  const dates = [
    { day: curDate.toLocaleDateString("en", { weekday: "short" }) },
  ];
  console.log(dates[0].day);

  let i = [];

  for (let a = 1; a < curDate.getDay(); a++) {
    if (a === 1) {
      i.push({
        id: 1,
        day: "Mon",
        dateStr: curDate.setDate(curDate.getDate() - curDate.getDay() + 1),
        date: new Date(
          curDate.setDate(curDate.getDate() - curDate.getDay() + 1)
        ).toLocaleDateString(),
      });
    } else if (a === 2) {
      i.push({
        id: 2,
        day: "Tues",
        dateStr: curDate.setDate(curDate.getDate() - curDate.getDay() + 2),
        date: new Date(
          curDate.setDate(curDate.getDate() - curDate.getDay() + 2)
        ).toLocaleDateString(),
      });
    }
    if (a === 3) {
      i.push({
        id: 3,
        day: "Wed",
        dateStr: curDate.setDate(curDate.getDate() - curDate.getDay() + 3),
        date: new Date(
          curDate.setDate(curDate.getDate() - curDate.getDay() + 3)
        ).toLocaleDateString(),
      });
    }
    if (a === 4) {
      i.push({
        id: 4,
        day: "Thru",
        dateStr: curDate.setDate(curDate.getDate() - curDate.getDay() + 4),
        date: new Date(
          curDate.setDate(curDate.getDate() - curDate.getDay() + 4)
        ).toLocaleDateString(),
      });
    }
    if (a === 5) {
      i.push({
        id: 5,
        day: "Fri",
        dateStr: curDate.setDate(curDate.getDate() - curDate.getDay() + 5),
        date: new Date(
          curDate.setDate(curDate.getDate() - curDate.getDay() + 5)
        ).toLocaleDateString(),
      });
    }
  }

  for (let a = curDate.getDay() + 1; a <= 5; a++) {
    if (a === 1) {
      i.push({
        id: 1,
        day: "Mon",
        dateStr: curDate.setDate(curDate.getDate() - curDate.getDay() + 1),
        date: new Date(
          curDate.setDate(curDate.getDate() - curDate.getDay() + 1)
        ).toLocaleDateString(),
      });
    } else if (a === 2) {
      i.push({
        id: 2,
        day: "Tues",
        dateStr: curDate.setDate(curDate.getDate() - curDate.getDay() + 2),
        date: new Date(
          curDate.setDate(curDate.getDate() - curDate.getDay() + 2)
        ).toLocaleDateString(),
      });
    }

    if (a === 3) {
      i.push({
        id: 3,
        day: "Wed",
        dateStr: curDate.setDate(curDate.getDate() - curDate.getDay() + 3),
        date: new Date(
          curDate.setDate(curDate.getDate() - curDate.getDay() + 3)
        ).toLocaleDateString(),
      });
    }
    if (a === 4) {
      i.push({
        id: 4,
        day: "Thru",
        dateStr: curDate.setDate(curDate.getDate() - curDate.getDay() + 4),
        date: new Date(
          curDate.setDate(curDate.getDate() - curDate.getDay() + 4)
        ).toLocaleDateString(),
      });
    } else if (a === 5) {
      i.push({
        id: 5,
        day: "Fri",
        dateStr: curDate.setDate(curDate.getDate() - curDate.getDay() + 5),
        date: new Date(
          curDate.setDate(curDate.getDate() - curDate.getDay() + 5)
        ).toLocaleDateString(),
      });
    }
  }
  console.log(i);
  console.log(curDate.setDate(curDate.getDate()));

  const prevLinkClickHandler = (e) => {
    e.preventDefault();
    setCurDate(
      new Date(curDate.setDate(curDate.getDate() - curDate.getDay() - 5))
    );
  };

  const nextLinkClickHandler = (e) => {
    e.preventDefault();
    setCurDate(new Date(curDate.setDate(curDate.getDate() + 5)));
  };

  return (
    <div>
      <header className="header_div">
        <a href="/" onClick={prevLinkClickHandler}>
          <FaArrowLeft /> Previous Week
        </a>
        <h4>{today}</h4>
        <a href="/" onClick={nextLinkClickHandler}>
          Next Week <FaArrowRight />
        </a>
      </header>
      <div className="time_zone_div">
        <label htmlFor="time_zone">Time Zone :</label>
        <select name="time_zone" id="time_zone">
          <option value="volvo">Time Zone 1</option>
          <option value="saab">Time Zone 2</option>
        </select>
      </div>
      <div>
        {i.map((date) => {
          return <DaySection dates={date} key={date.id} />;
        })}
      </div>
    </div>
  );
};

export default FrontPage;
