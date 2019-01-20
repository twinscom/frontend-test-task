import React, {useState, useEffect, useRef} from "react";
import { useInView } from 'react-intersection-observer'

export default function LazyLoad(props){

  const ref = useRef(),
    inView = useInView(ref),
    [ready, setReady] = useState(inView);

  useEffect(() => {
    if(!ready && inView) setReady(true);
  });

  return(
    <div ref={ref} className={"lazy-wrap " + (ready ? "load" : "") + (inView ? " inView" : "")}>
      {props.children}
    </div>
  );
}