import {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

function LazyLoadC({
  children,
  from,
  to,
  videoLoading,
  videoPlaceHolderWidth,
  videoPlaceHolderHeight,
  transitionCssClassName,
  beforeLoadCssClassName,
  afterLoadCssClassName,
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
        target.classList.add(`${transitionCssClassName}`);
        target.classList.add(`${beforeLoadCssClassName}`);

        function css() {
          target.classList.remove(`${beforeLoadCssClassName}`);
          target.classList.add(`${afterLoadCssClassName}`);
        }
        // this part only for images

        if (tagName === "img") {
          if (entry.isIntersecting) {
            if (target.complete) {
              target[from] = target.dataset[to];
              css();
              observer.unobserve(target);
            }
            if (!target.complete) {
              const handleInLoad = () => {
                target[from] = target.dataset[to];
                css();
                observer.unobserve(target);

                target.removeEventListener("load", handleInLoad);
              };
              target.addEventListener("load", handleInLoad);
            }
          }
        }
        //this part only for videos
        if (
          target.tagName.toLowerCase() === "div" &&
          target.firstElementChild.tagName.toLowerCase() === "video"
        ) {
          const videoElement = target.firstElementChild;

          videoElement.style.display = "none";
          target.style.backgroundImage = `url(${videoLoading})`;
          target.style.width = `${videoPlaceHolderWidth}px`;
          target.style.height = `${videoPlaceHolderHeight}px`;
          target.style.backgroundColor = "black";

          if (entry.isIntersecting) {
            const handleInLoad = () => {
              videoElement.style.display = "block";

              target.parentElement.replaceChild(videoElement, target);
              videoElement.load(); // Ensure the video element loads the new source
              css();
              observer.unobserve(videoElement);
              videoElement.removeEventListener("canplay", handleInLoad);
            };
            if (videoElement.readyState >= 4) {
              handleInLoad();
            } else {
              videoElement.addEventListener("canplay", handleInLoad);
            }
          }
        }
        // this part just for simple tags like p

        if (
          !["img", "video"].includes(tagName) ||
          target?.firstElementChild?.tagName.toLowerCase() !== "video"
        ) {
          if (entry.isIntersecting) {
            target[from] = target.dataset[to];
            css();
            observer.unobserve(target);
          }
        }
      });
    },
    [
      from,
      to,
      beforeLoadCssClassName,
      afterLoadCssClassName,
      transitionCssClassName,
      videoLoading,
      videoPlaceHolderHeight,
      videoPlaceHolderWidth,
    ]
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
