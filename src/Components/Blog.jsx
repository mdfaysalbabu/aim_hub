import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-gray-100 w-full  pb-20 mb-10 pt-10 ">
        <h1 className="text-center font-bold text-2xl">Blog</h1>
      </div>
      <div className="mb-10 mt-10">
        <h1 class="text-center font-bold text-orange-500 text-4xl">Question</h1>
        <div class="w-[75%] mx-auto grid md:grid-cols-2 lg:grid-cols-2 px-8 gap-5 pt-5">
          <div class="ques border p-2">
            <h2 class="text-xl mt-3 font-bold">
              A.when should you use context api?
            </h2>
            <p class="text-xl">
              <span class="text-xl font-bold">Context Api:</span> React context
              api is a popular choice for global state. React Context can be
              used lets take a look at this example below that uses prop
              drilling to get some data so that we can establish a bit of wait
              for it context.
            </p>
          </div>
          <div class="ques border p-2">
            <h2 class="text-xl mt-3 font-bold">B.what is a custom hook?</h2>
            <p class="text-xl">
              <span class="text-xl font-bold">Custom Hook:</span>
              custom hook is a javaScript function whose name starts with ”use”
              and that may call other hooks.custom React hooks are an essential
              tool that let you add special, unique functionality to your React
              applications.
            </p>
          </div>
          <div class="ques border p-2">
            <h2 class="text-xl mt-3 font-bold">C.what is UseRef?</h2>
            <p class="mt-2 text-xl">
              <span class="text-xl font-bold">UseRef:</span>
              useRef is a hook that allows to directly create a reference to the
              DOM element in the functional component.useRef is a hook
              introduced with other hooks in React version 16.8 and is mainly
              used for creating a reference of the dom.
            </p>
          </div>
          <div class="ques border p-2">
            <h2 class="text-xl mt-3 font-bold">D.what is UseMemo?</h2>
            <p class="mt-2 text-xl">
              <span class="text-xl font-bold">UseMemo:</span>
              UseMemo is a React Hook that lets you cache the result of a
              calculation between re-renders. UseMemo in React is essential
              react hook for improving the performance and speed of your
              application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
