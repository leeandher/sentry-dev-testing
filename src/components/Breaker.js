import React from "react";
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

const bork = () => {
  for (let i = 0; i < 250; i++) {
    const user = {
      id: getId(1231234),
      username: getUsername(),
      email: getEmail()
    };
    configureScope(scope => {
      scope.setUser(user);
      scope.setTag("best_friend", names.randomElement());
      scope.setTag("random_num", getId(123123));
    });
    captureException(new TypeError("i broke things again!@@!@!@!@!@!@!"));
    console.log(
      `User ${user.username} | ${user.email} | ${user.id} has logged an error.`
    );
  }
};

const Breaker = () => {
  return <button onClick={bork}>BREAKER</button>;
};

export default Breaker;
