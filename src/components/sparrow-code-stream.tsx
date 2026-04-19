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
        }, 30); // Slightly faster typing speed
        return () => clearTimeout(timeout);
      } else {
        const lineTimeout = setTimeout(() => {
          setText((prev) => prev + '\n');
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 400); // Pause between lines
        return () => clearTimeout(lineTimeout);
      }
    } else {
      // Loop back after 3 seconds
      const loopTimeout = setTimeout(() => {
        setText('');
        setLineIndex(0);
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(loopTimeout);
    }
  }, [lineIndex, charIndex, codeLines]);

  return (
    <div className="w-full h-full bg-[#0d1117] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col font-mono text-[13px] md:text-sm">
      {/* Window Header */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#161b22] border-b border-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <span className="ml-4 text-gray-500 text-xs font-secondary font-medium tracking-wide">deploy-service.ts</span>
      </div>
      
      {/* Code Area */}
      <div className="p-6 overflow-auto scrollbar-hide flex-grow select-none">
        <pre className="leading-relaxed text-gray-300">
          <code>
            {text.split('\n').map((line, i) => {
              // Simple "coloring" for common keywords
              const highlightedLine = line
                .replace(/\b(import|from|const|new|async|function|await|if|return)\b/g, '<span class="text-sky-400">$1</span>')
                .replace(/('.*?')/g, '<span class="text-emerald-400">$1</span>')
                .replace(/\b(true|false)\b/g, '<span class="text-amber-400">$1</span>')
                .replace(/(\/\/.*)/g, '<span class="text-gray-500 italic">$1</span>');

              return (
                <div key={i} className="flex gap-4">
                  <span className="w-4 text-gray-600 text-right shrink-0">{i + 1}</span>
                  <span dangerouslySetInnerHTML={{ __html: highlightedLine }} />
                </div>
              );
            })}
            <span className="inline-block w-2 h-4 bg-sky-500 animate-pulse ml-1 align-middle" />
          </code>
        </pre>
      </div>
    </div>
  );
}
