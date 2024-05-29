import { useEffect, useMemo, useRef, useState } from "react";
import loadedImage from "./assets/lazyimage.png";
import LazyLoad from "./LazyLoad";
import "./LazyLoad.css";
function App() {
  const url = "http://www.omdbapi.com/?apikey=5bc11b&s='loop'";

  const [images, setImages] = useState([]);
  const imgRef = useRef([]);

  useEffect(() => {
    async function moviefetch() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setImages(data.Search);
      } catch (error) {
        console.log(error.message);
      }
    }
    moviefetch();
  }, []);
  //---------------------------------------------------------------lazyload
  function observeHandler(entrys, observer) {
    entrys.forEach((entry) => {
      const target = entry.target;

      if (entry.isIntersecting) {
        if (target.complete) {
          target.src = target.dataset.replacesrc;
          target.classList.remove("tryToLoad");
          target.classList.add("loaded");
          observer.unobserve(target);
        }
        if (!target.complete) {
          const handleInLoad = () => {
            target.src = target.dataset.replacesrc;
            target.classList.remove("tryToLoad");
            target.classList.add("loaded");
            observer.unobserve(target);
          };
          target.addEventListener("load", handleInLoad);
          target.removeEventListener("load", handleInLoad);
        }
      }
    });
  }
  const observer = useMemo(
    () =>
      new IntersectionObserver(observeHandler, {
        root: null,
        threshold: 1,
      }),
    []
  );

  if (imgRef.current.length > 0)
    imgRef.current.forEach((img) => {
      if (img) observer.observe(img);
    });

  useEffect(() => {
    return () => observer.disconnect();
  }, [observer]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {images.map((image, index) => (
        <img
          className=" main tryToLoad"
          ref={(el) => (imgRef.current[index] = el)}
          style={{ width: "500px" }}
          key={image?.imdbID}
          alt={image?.Title}
          data-replacesrc={image.Poster}
          src={loadedImage}
        />
      ))}
    </div>
  );
}

export default App;
