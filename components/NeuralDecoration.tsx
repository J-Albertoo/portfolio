const nodes = [
  { cx: 80,  cy: 120, r: 3, delay: "0s"   },
  { cx: 140, cy: 60,  r: 2, delay: "0.4s" },
  { cx: 200, cy: 140, r: 4, delay: "0.8s" },
  { cx: 260, cy: 80,  r: 2, delay: "1.2s" },
  { cx: 320, cy: 160, r: 3, delay: "0.6s" },
  { cx: 380, cy: 100, r: 2, delay: "1.0s" },
  { cx: 120, cy: 200, r: 2, delay: "0.2s" },
  { cx: 240, cy: 220, r: 3, delay: "1.4s" },
  { cx: 340, cy: 240, r: 2, delay: "0.9s" },
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [0, 6], [6, 7], [7, 8], [2, 7], [3, 8],
];

const mobileNodes = [
  { cx: 18, cy: 18, r: 2.5, delay: "0s"   },
  { cx: 38, cy: 10, r: 1.5, delay: "0.5s" },
  { cx: 54, cy: 28, r: 2,   delay: "1.0s" },
  { cx: 30, cy: 38, r: 1.5, delay: "1.5s" },
];

const svgStyles = `
  @keyframes edgePulse {
    0%, 100% { opacity: 0.15; }
    50%       { opacity: 0.55; }
  }
  @keyframes mobileDot {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 1; }
  }
  .nn-edge { animation: edgePulse 3s ease-in-out infinite; }
  .nn-node { animation: edgePulse 2.5s ease-in-out infinite; }
  .m-dot   { animation: mobileDot 2.5s ease-in-out infinite; }
`;

export function NeuralDecoration() {
  return (
    <svg
      aria-hidden="true"
      className="absolute right-0 top-0 w-96 h-72 opacity-[0.08] pointer-events-none hidden lg:block"
      viewBox="0 0 420 280"
      fill="none"
    >
      <defs><style>{svgStyles}</style></defs>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          className="nn-edge"
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="#10B981"
          strokeWidth="1"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          className="nn-node"
          cx={n.cx} cy={n.cy} r={n.r}
          fill="#10B981"
          style={{ animationDelay: n.delay }}
        />
      ))}
    </svg>
  );
}

export function MobileNeuralDots() {
  return (
    <svg
      aria-hidden="true"
      className="absolute top-20 right-4 w-16 h-16 opacity-[0.12] pointer-events-none lg:hidden"
      viewBox="0 0 64 56"
      fill="none"
    >
      <defs><style>{svgStyles}</style></defs>
      {mobileNodes.map((n, i) => (
        <circle
          key={i}
          className="m-dot"
          cx={n.cx} cy={n.cy} r={n.r}
          fill="#10B981"
          style={{ animationDelay: n.delay }}
        />
      ))}
    </svg>
  );
}
