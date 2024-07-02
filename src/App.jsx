import { useEffect, useState } from "react";
import loadedImage from "./assets/lazyimage.png";
import loadedImage2 from "./assets/2.png";

import "./LazyLoad.css";
import LazyLoadC from "./LazyLoadC";
import "./mycss.css";
function App() {
  const url = "http://www.omdbapi.com/?apikey=5bc11b&s='loop'";

  const [images, setImages] = useState([]);

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

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <LazyLoadC
        from="innerText"
        to="text"
        transitionCssClassName="main"
        beforeLoadCssClassName="tryToLoad"
        afterLoadCssClassName="loaded"
        threshold={0.8}
        rootMargin={-25}
      >
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
        <p
          data-text="         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores
            dolorem, molestias dicta libero hic corrupti ipsam animi nisi earum
            alias dolor nulla aut natus necessitatibus aperiam eius.
            Necessitatibus quis praesentium vero sequi, dolorem, voluptatum nisi
            laboriosam, ab esse quae consequatur delectus incidunt? Perspiciatis
            aliquam nisi ratione sapiente dolorem consequuntur?"
        >
          is loading ...
        </p>
      </LazyLoadC>

      <LazyLoadC
        from="src"
        to="replacesrc"
        transitionCssClassName="lolmain"
        beforeLoadCssClassName="beforelol"
        afterLoadCssClassName="afterlol"
      >
        {images.map((image) => (
          <img
            style={{ width: "500px" }}
            key={image?.imdbID}
            alt={image?.Title}
            data-replacesrc={image.Poster}
            src={loadedImage}
          />
        ))}
      </LazyLoadC>
      <LazyLoadC
        videoLoading={loadedImage2}
        videoPlaceHolderWidth={520}
        videoPlaceHolderHeight={340}
        transitionCssClassName="lolmain"
        beforeLoadCssClassName="beforelol"
        afterLoadCssClassName="afterlol"
      >
        <div>
          <video width="520" height="340" controls>
            <source
              src="https://dlbi.top/2024/05/Hawaee.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </LazyLoadC>
    </div>
  );
}

export default App;
