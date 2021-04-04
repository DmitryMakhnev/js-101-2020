import { ArticleContent } from './ArticleContent';
import { useEffect, useRef, useState } from 'react';

type HeaderNavItem = {
  id: string,
  text: string
};

export const Article = () => {
  const [headers, setHeaders] = useState<HeaderNavItem[]>([]);

  const articleRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = articleRootRef.current;
    if (root) {
      const allHeaders = root.querySelectorAll('h1,h2,h3,h4,h5,h6');
      const headers: HeaderNavItem[] = [];
      allHeaders.forEach(header => {
        const headerTextContainer = header.querySelector('span[id]');
        if (headerTextContainer) {
          headers.push({
            id: headerTextContainer.id,
            text: headerTextContainer.textContent ?? '',
          });
        }
      });
      setHeaders(headers);
    }
  }, []);

  return (
    <div ref={articleRootRef}>

      {headers.length && (
        <nav>
          {headers.map(({ id, text }) => (
            <div key={id}>
              <a href={`#${id}`}>{text}</a>
            </div>
          ))}
        </nav>
      )}

      <ArticleContent />
    </div>
  );
}
