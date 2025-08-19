import React from "react";

function UseRefExamples() {
  const inputRef = useRef(null); // {current: null}
  const submit = () => {
    // get the natural input value
    // do someth8iing w ith it
    // then make react do something with it?
    // no onChaonge
    // inputRef.current
    // inputRef.current.value
    // inputRef.current.style.backgroundColor = 'red'
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Use Ref</h2>
      <input
        type="text"
        placeholder="Type something"
        className="w-full p-2 border rounded-lg"
        ref={inputRef}
      />
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
}

export default UseRefExamples;
