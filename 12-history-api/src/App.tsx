/*
 * Example of History API and React
 * https://developer.mozilla.org/en-US/docs/Web/API/History_API
 */


import React, { useEffect, useState } from 'react';

function App() {
  const [currentPageUrl, setCurrentPageUrl] = useState(window.location.href);
  const pathname = new URL(currentPageUrl).pathname;

  const handleNavigationByLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = (e.target as HTMLAnchorElement).href;
    setCurrentPageUrl(href);
    window.history.pushState({timestamp: Date.now()}, '', href);
  };

  useEffect(() => {
    window.addEventListener('popstate', (e: PopStateEvent) => {
      setCurrentPageUrl(window.location.href);
    });
  }, []);

  return (
    <div className="App">
      <nav>
        <a href="/" onClick={handleNavigationByLink}>Root</a> |
        <a href="/example-1" onClick={handleNavigationByLink}>Example 1</a>
      </nav>

      <hr />

      <div className="content">

        {pathname === '/' && (
          <div>
            Root
          </div>
        )}

        {pathname === '/example-1' && (
          <div>
            Example 1
          </div>
        )}

      </div>

    </div>
  );
}

export default App;
