import { useState, useEffect } from 'react';

export function SparrowCodeStream() {
  const codeLines = [
    "import { Sparrowwave } from '@core';",
    "const project = new ScalingEngine();",
    "",
    "async function deploySuccess() {",
    "  const status = await project.optimize({",
    "    mode: 'performance',",
    "    security: 'high',",
    "    autoScale: true",
    "  });",
    "",
    "  if (status.ready) {",
    "    return 'System Online';",
    "  }",
    "}",
    "// Executing build..."
  ];

  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      if (charIndex < codeLines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + codeLines[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const lineTimeout = setTimeout(() => {
          setText((prev) => prev + '\n');
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 400);
        return () => clearTimeout(lineTimeout);
      }
    } else {
      const loopTimeout = setTimeout(() => {
        setText('');
        setLineIndex(0);
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(loopTimeout);
    }
  }, [lineIndex, charIndex, codeLines]);

  return (
    <div className="w-full h-full flex flex-col font-mono text-[14px] md:text-base select-none">
      {/* Code Area - No frame, just raw integrated look */}
      <div className="overflow-auto scrollbar-hide flex-grow py-4">
        <pre className="leading-relaxed">
          <code className="block">
            {text.split('\n').map((line, i) => {
              const highlightedLine = line
                .replace(/\b(import|from|const|new|async|function|await|if|return)\b/g, '<span class="text-brand-blue font-bold">$1</span>')
                .replace(/('.*?')/g, '<span class="text-brand-teal font-medium">$1</span>')
                .replace(/\b(true|false)\b/g, '<span class="text-brand-blue/70">$1</span>')
                .replace(/(\/\/.*)/g, '<span class="text-gray-400 italic">$1</span>');

              return (
                <div key={i} className="flex gap-6 py-0.5">
                  <span className="w-6 text-gray-300 text-right shrink-0 select-none text-xs mt-1">{i + 1}</span>
                  <span className="text-gray-900" dangerouslySetInnerHTML={{ __html: highlightedLine }} />
                </div>
              );
            })}
            <span className="inline-block w-2.5 h-5 bg-brand-blue animate-pulse ml-1 align-middle" />
          </code>
        </pre>
      </div>
    </div>
  );
}
