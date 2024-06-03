import { useEffect, useMemo, useRef, useState } from "react";
import loadedImage from "./assets/lazyimage.png";
import videoLoading from "./assets/videoLoading.mp4";
import LazyLoad from "./LazyLoad";
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
        from="src"
        to="replacesrc"
        transitionCssClassName="lolmain"
        beforeLoadCssClassName="beforelol"
        afterLoadCssClassName="afterlol"
      >
        <video width="520" height="340" controls>
          <source
            src={videoLoading}
            data-replacesrc="https://caspian13.asset.aparat.com/aparat-video/99c7842e964c8dcb6b8064b8c17f319059156974-1080p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Ijk2YWQ1MjY2ZDQ1ZTQ5MTU1NzA3YjE2YjJkODFhZDUwIiwiZXhwIjoxNzE3NDc0NjU1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.9x8tTF_jie-9AQKIO_kO2cfUnP0PLhP4cizrQ2vkZew"
            type="video/mp4"
          />
        </video>
      </LazyLoadC>
    </div>
  );
}

export default App;
