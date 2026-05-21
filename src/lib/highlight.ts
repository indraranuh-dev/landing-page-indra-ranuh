import hljs from 'highlight.js/lib/core';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('php', php);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('python', python);

export function highlightSnippet(code: string, language: string): string {
  if (!code) return '';

  try {
    return hljs.highlight(code, { language }).value;
  } catch {
    return hljs.highlight(code, { language: 'plaintext' }).value;
  }
}
