import React from "react";
import styles from "./DaySection.module.css";
import DaySectionTiming from "./DaySectionTiming";

const DaySection = (props) => {
  const crDate = new Date();
  console.log(crDate.setDate(crDate.getDate()));
  return (
    <div className={styles.day__section_div}>
      <div className={styles.day__section_date_div}>
        <h5>{props.dates.day}</h5>
        <p>{props.dates.date}</p>
      </div>
      <div>
        {props.dates.dateStr >= crDate.setDate(crDate.getDate() - 1) ? (
          <DaySectionTiming className={styles.day__section_timing_div} />
        ) : (
          <h4>Previous</h4>
        )}
      </div>
    </div>
  );
};

export default DaySection;
