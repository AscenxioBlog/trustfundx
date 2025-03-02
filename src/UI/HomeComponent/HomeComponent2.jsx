import React, { useEffect, useRef } from "react";

function HomeComponent2() {
  const scrollerRef = useRef(null); // Create a ref for the scroller container

  useEffect(() => {
    if (!scrollerRef.current) return; // Ensure the ref is attached

    const scroller = scrollerRef.current;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scroller);
    }

    function addAnimation(scroller) {
      scroller.setAttribute("data-animated", "true");

      const scrollInner = scroller.querySelector(".scroller__inner");
      if (!scrollInner) return; // Prevent errors if .scroller__inner is missing

      const scrollerContent = Array.from(scrollInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollInner.appendChild(duplicatedItem);
      });
    }
  }, []); // Runs once when component mounts

  return (
    <div className="text-[black] min-h-[140px] w-full bg-amber-200">
      {/* <div ref={scrollerRef} className="scroller bg-amber-950 min-h-[100px]">
        <div className="scroller__inner bg-red-500 w-full">
          <div className="bd">1</div>
          <div className="bd">2</div>
          <div className="bd">3</div>
          <div className="bd">4</div>
          <div className="bd">5</div>
        </div>
      </div> */}
    </div>
  );
}

export default HomeComponent2;
