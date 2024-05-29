import {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import "./LazyLoad.css";
function LazyLoadC({
  children,
  from,
  to,
  root = null,
  rootMargin = 0,
  threshold = 1,
}) {
  const ref = useRef([]);

  const observeFn = useCallback(
    function observeHandler(entrys, observer) {
      entrys.forEach((entry) => {
        const target = entry.target;
        const tagName = target.tagName.toLowerCase();
        // this part only for images

        if (["img"].includes(tagName)) {
          if (entry.isIntersecting) {
            if (target.complete) {
              target[from] = target.dataset[to];
              target.classList.remove("tryToLoad");
              target.classList.add("loaded");
              observer.unobserve(target);
            }
            if (!target.complete) {
              const handleInLoad = () => {
                target[from] = target.dataset[to];
                target.classList.remove("tryToLoad");
                target.classList.add("loaded");
                observer.unobserve(target);

                target.removeEventListener("load", handleInLoad);
              };
              target.addEventListener("load", handleInLoad);
            }
          }
        }

        // this part for tags like p

        if (!["img"].includes(tagName)) {
          if (entry.isIntersecting) {
            target[from] = target.dataset[to];
            target.classList.remove("tryToLoad");
            target.classList.add("loaded");
            observer.unobserve(target);
          }
        }
      });
    },
    [from, to]
  );
  const observer = useMemo(
    () =>
      new IntersectionObserver(observeFn, {
        root,
        threshold,
        rootMargin: `${rootMargin}px`,
      }),
    [root, threshold, rootMargin, observeFn]
  );

  if (ref.current.length > 0)
    ref.current.forEach((img) => {
      if (img) observer.observe(img);
    });

  useEffect(() => {
    return () => observer.disconnect();
  }, [observer]);

  return (
    <>
      {Array.isArray(children)
        ? Children.map(children, (child, index) =>
            cloneElement(child, {
              ref: (el) => (ref.current[index] = el),
              key: index,
            })
          )
        : cloneElement(children, {
            ref: (el) => (ref.current[0] = el),
          })}
    </>
  );
}

export default LazyLoadC;
