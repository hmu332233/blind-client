import React, { useEffect, useRef } from 'react';

type Props = {
  className: string,
  children: JSX.Element,
  onBottom: () => void,
};


function LoadingBox({ className, children, onBottom }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!bottomRef.current) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onBottom();
      }
    }, { threshold: 1 });

    observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, [bottomRef.current]);

  return (
    <div className={className}>
      {children}
      <div className="animate-spin w-12 h-12 border-t-4 border-gray-400 rounded-full" ref={bottomRef} />
    </div>
  );
}

export default LoadingBox;