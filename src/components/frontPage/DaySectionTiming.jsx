import React from "react";

const times = [
  {
    id: 1,
    time: "8:00 AM",
  },
  {
    id: 2,
    time: "8:30 AM",
  },
  {
    id: 3,
    time: "9:00 AM",
  },
  {
    id: 4,
    time: "9:30 AM",
  },
  {
    id: 5,
    time: "10:00 AM",
  },
  {
    id: 6,
    time: "10:30 AM",
  },
  {
    id: 7,
    time: "11:00 AM",
  },
  {
    id: 8,
    time: "11:30 AM",
  },
  {
    id: 9,
    time: "12:00 PM",
  },
  {
    id: 10,
    time: "12:30 PM",
  },
  {
    id: 11,
    time: "1:00 PM",
  },
  {
    id: 12,
    time: "1:30 PM",
  },
  {
    id: 13,
    time: "2:00 PM",
  },
  {
    id: 14,
    time: "2:30 PM",
  },
  {
    id: 15,
    time: "3:00 PM",
  },
  {
    id: 16,
    time: "3:30 PM",
  },
  {
    id: 17,
    time: "4:00 PM",
  },
  {
    id: 18,
    time: "4:30 PM",
  },
  {
    id: 19,
    time: "5:00 PM",
  },
  {
    id: 20,
    time: "5:30 PM",
  },
  {
    id: 21,
    time: "6:00 PM",
  },
  {
    id: 22,
    time: "6:30 PM",
  },
  {
    id: 23,
    time: "7:00 PM",
  },
  {
    id: 24,
    time: "7:30 PM",
  },
  {
    id: 25,
    time: "8:00 PM",
  },
  {
    id: 26,
    time: "8:30 PM",
  },
  {
    id: 27,
    time: "9:00 PM",
  },
  {
    id: 28,
    time: "9:30 PM",
  },
  {
    id: 29,
    time: "10:00 PM",
  },
  {
    id: 30,
    time: "10:30 PM",
  },
  {
    id: 31,
    time: "11:00 PM",
  },
];

const DaySectionTiming = (props) => {
  return (
    <div className={props.className}>
      {times.map((time) => {
        return (
          <div key={time.id}>
            <input
              type="checkbox"
              id="time_checkbox"
              name="time checkbox"
              value="checkbox"
            />
            <p>{time.time}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DaySectionTiming;
