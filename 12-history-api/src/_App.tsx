/*
 * Example of History_API and React
 * https://developer.mozilla.org/en-US/docs/Web/API/History_API
 */
import React, { useEffect, useMemo, useState } from 'react';

function App() {
  const [currentHref, setCurrentHref] = useState(window.location.href);
  const path = useMemo(
    () => new URL(currentHref).pathname,
    [currentHref]
  );

  useEffect(() => {
    const handleEvent = (e: PopStateEvent) => {
      console.log(e.state);
      setCurrentHref(window.location.href);
    };

    window.addEventListener('popstate', handleEvent);

    return () => {
      window.removeEventListener('popstate', handleEvent);
    }
  }, []);

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const link = (e.target as Element).closest('a');
    const href = link?.href;
    window.history.pushState({ href }, '', link?.href);
    setCurrentHref(href!);
  }

  return (
    <div className="App">
      <a href="/" onClick={navigateTo}>
        Root
      </a>
      |
      <a href="/example" onClick={navigateTo}>
        Example
      </a>

      <div>
        {path}
      </div>
    </div>
  );
}

export default App;
