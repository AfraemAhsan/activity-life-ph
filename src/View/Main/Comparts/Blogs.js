import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="flex flex-col space-y-3 font-semibold text-center capitalize space-between">
        <h4>What is React</h4>
        <span className="w-[820px] text-center justify-center mx-auto">
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces. 'V' denotes the view in MVC. ReactJS is an
          open-source, component-based front end library responsible only for
          the view layer of the application. It is maintained by Facebook.
        </span>
        <h4>difference between props and state</h4>
        <span className="w-[820px] text-center justify-center mx-auto">
          Simply put, State is the local state of the component which cannot be
          accessed and modified outside of the component. It's equivalent to
          local variables in a function. Props, on the other hand, make
          components reusable by giving components the ability to receive data
          from their parent component in the form of props.
        </span>
        <h4>what does useeffect do in react</h4>
        <span className="w-[820px] text-center justify-center mx-auto">
          The useEffect Hook allows you to perform side effects in your
          components. Some examples of side effects are: fetching data, directly
          updating the DOM, and timers. useEffect accepts two arguments. The
          second argument is optional.useEffect() is for side-effects. A
          functional React component uses props and/or state to calculate the
          output. If the functional component makes calculations that don't
          target the output value, then these calculations are named
          side-effects.Using useEffect is probably the best part of React Hooks.
          It helps reduce the clutter of the component lifecycle methods and,
          most importantly, it helps separate different logic that can appear in
          the lifecycle methods.
        </span>
      </div>
    </div>
  );
};

export default Blogs;
