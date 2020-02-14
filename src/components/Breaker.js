import React, { useEffect, useState } from "react";
import { captureException, configureScope } from "@sentry/browser";

const names = [
  "mike",
  "jkeff",
  "woot",
  "shibe",
  "fake",
  "jess",
  "lyds",
  "liam",
  "emma",
  "noah",
  "olivia",
  "william",
  "ava",
  "james",
  "isabella",
  "oliver",
  "sophia",
  "benjamin",
  "charlotte",
  "elijah",
  "mia",
  "lucas",
  "amelia",
  "mason",
  "harper",
  "logan",
  "evelyn"
];
const handles = ["yahoo", "gmail", "aol", "fb", "fake", "example"];

/* eslint-disable-next-line */
Array.prototype.randomElement = function() {
  return this[Math.floor(Math.random() * this.length)];
};

const getId = num => {
  return Math.floor(Math.random() * num);
};

const getUsername = () => names.randomElement() + getId(1000);

const getEmail = () =>
  names.randomElement() + getId(100) + "@" + handles.randomElement() + ".com";

const Breaker = () => {
  const [times, updateTimes] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const user = {
        id: getId(1231234),
        username: getUsername(),
        email: getEmail()
      };
      configureScope(scope => {
        scope.setUser(user);
        scope.setTag("best_friend", names.randomElement());
        scope.setTag("is_cool", Math.random() > 0.5);
      });

      captureException(new SyntaxError("Looks like we goofed something up."));
      updateTimes(times + 1);
    }, 250);
    return () => clearInterval(interval);
  });

  return <div>I've broken my code {times} times</div>;
};

export default Breaker;
