import { RefObject, useEffect, useMemo, useState } from 'react';

function useIsInViewport(
  ref: RefObject<HTMLDivElement>,
  rootMargin: string
): boolean {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin }
      ),
    [rootMargin]
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default useIsInViewport;
