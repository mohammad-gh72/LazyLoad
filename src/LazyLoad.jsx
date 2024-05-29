import {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

function LazyLoad({
  children,
  from,
  to,
  root = null,
  rootMargin = 0,
  threshold = 1,
}) {
  const ref = useRef([]);

  const obsFn = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const loadHandler = () => {
            target[from] = target.dataset[to];
            target.removeEventListener("load", loadHandler);
            observer.unobserve(target);
          };
          if (target.tagName.toLowerCase() === "img" && !target.complete) {
            target.addEventListener("load", loadHandler);
          } else {
            loadHandler();
          }
        }
      });
    },

    [from, to]
  );
  const observer = useMemo(
    () =>
      new IntersectionObserver(obsFn, {
        root,
        rootMargin: `${rootMargin}px`,
        threshold,
      }),
    [obsFn, root, threshold, rootMargin]
  );
  if (ref.current.length > 0) {
    ref.current.forEach((item) => {
      if (item) observer.observe(item);
    });
  }
  useEffect(() => {
    return () => observer.disconnect();
  }, [observer]);

  return (
    <>
      {
        Array.isArray(children)
          ? Children.map(children, (child, index) =>
              cloneElement(child, {
                ref: (el) => (ref.current[index] = el),
                key: index,
              })
            )
          : cloneElement(children, {
              ref: (el) => (ref.current[0] = el),
            })
        // <div ref={(el) => (ref.current[0] = el)}>{children}</div>
      }
    </>
  );
}

export default LazyLoad;
