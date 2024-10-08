import React from "react";
import classes from "./special-button.module.css";

export default function SpecialButton() {
  return (
    <a
      className={classes.button_container}
      href="https://www.imperialcollegeunion.org/activities/a-to-z/investment"
    >
      <div className={classes.button}>Join for Free</div>
      <div className={classes.button_bg_grad} />
    </a>
  );
}
