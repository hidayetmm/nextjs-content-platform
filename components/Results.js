import { useEffect, useRef } from "react";
import Thumbnail from "./Thumbnail";
import { spring } from "react-flip-toolkit";
import ReactDOM from "react-dom";

const Results = ({ results }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const movies = [...containerRef.current.querySelectorAll(".movie")];

    movies.forEach((el, i) => {
      spring({
        config: "gentle",
        values: {
          translateY: [-15, 0],
          opacity: [0, 1],
        },
        onUpdate: ({ translateY, opacity }) => {
          el.style.opacity = opacity;
          el.style.transform = `translateY(${translateY}px)`;
        },
        // delay: i * 25,
        delay: i * 100,
        onComplete: () => {
          // add callback logic here if necessary
        },
      });
    });
  }, [results]);

  return (
    <div
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"
      ref={containerRef}
    >
      {results.map((result) => (
        <div key={result.id} className="movie opacity-0">
          <Thumbnail result={result} />
        </div>
      ))}
    </div>
  );
};

export default Results;
