import React from "react";
import ReactDOM from "react-dom";
import {
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

import "./app.scss";

const list = ["Item 1", "Item 2", "Item 3"];

const ChecklistItem = () => {
  return (
    <SwipeableListItem
      swipeLeft={{
        content: <div className="l-content">Right Content</div>,
        action: () => console.info("swipe action triggered"),
      }}
      swipeRight={{
        content: <div className="checklist__link r-content">Left Content</div>,
        action: () => console.info("swipe action triggered"),
      }}
      onSwipeProgress={(progress) =>
        console.info(`Swipe progress: ${progress}%`)
      }
    >
      <li className="checklist__item">
        <span className="checklist__link">Hobbs Tach Time record</span>
      </li>
    </SwipeableListItem>
  );
};

const App = () => {
  return (
    <>
      <ul className="checklist">
        <SwipeableList>
          <ChecklistItem />;
        </SwipeableList>
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
