import { useParams, useNavigate } from "react-router-dom";
import { paints } from "./paints";
import "./PaintDetails.css";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

const ROWS = 8;
const COLS = 10;
const W = 100;
const H = 100;
const TAB = 20;

function edgePath(x1, y1, x2, y2, sign, nx, ny) {
  const dx = x2 - x1;
  const dy = y2 - y1;

  const point = (t, offset = 0) => [
    x1 + dx * t + nx * offset,
    y1 + dy * t + ny * offset,
  ];

  const p = (t, offset = 0) => {
    const [x, y] = point(t, offset);
    return `${x},${y}`;
  };

  if (sign === 0) return `L ${x2},${y2}`;

  const direction = sign;
  const a = p(0.34);
  const b = p(0.38, direction * TAB * 0.65);
  const c = p(0.42, direction * TAB);
  const d = p(0.5, direction * TAB);
  const e = p(0.58, direction * TAB);
  const f = p(0.62, direction * TAB * 0.65);
  const g = p(0.66);

  return `
    L ${a}
    C ${b} ${c} ${d}
    C ${e} ${f} ${g}
    L ${x2},${y2}
  `;
}

function makePiecePath(row, col, edges) {
  const x = col * W;
  const y = row * H;

  return [
    `M ${x},${y}`,
    edgePath(x, y, x + W, y, edges.top, 0, -1),
    edgePath(x + W, y, x + W, y + H, edges.right, 1, 0),
    edgePath(x + W, y + H, x, y + H, edges.bottom, 0, 1),
    edgePath(x, y + H, x, y, edges.left, -1, 0),
    "Z",
  ].join(" ");
}

function PaintDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const paint = paints.find((p) => p.id === Number(id));
  const [imageLoaded, setImageLoaded] = useState(false);

  const { pieces, paths } = useMemo(() => {
    const horizontal = Array.from({ length: ROWS - 1 }, () =>
      Array.from({ length: COLS }, () => (Math.random() < 0.5 ? 1 : -1)),
    );

    const vertical = Array.from({ length: ROWS }, () =>
      Array.from({ length: COLS - 1 }, () => (Math.random() < 0.5 ? 1 : -1)),
    );

    const result = [];

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const edges = {
          top: row === 0 ? 0 : -horizontal[row - 1][col],
          bottom: row === ROWS - 1 ? 0 : horizontal[row][col],
          left: col === 0 ? 0 : -vertical[row][col - 1],
          right: col === COLS - 1 ? 0 : vertical[row][col],
        };

        result.push({
          id: `piece-${row}-${col}`,
          row,
          col,
          path: makePiecePath(row, col, edges),
        });
      }
    }

    return {
      pieces: result,
      paths: result.map((piece) => ({
        id: `clip-${piece.id}`,
        d: piece.path,
      })),
    };
  }, []);

  useLayoutEffect(() => {
    if (!imageLoaded || !imageRef.current) return;

    const targets = imageRef.current.querySelectorAll(".slice");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          x: () => gsap.utils.random(-500, 500),
          y: () => gsap.utils.random(-400, 400),
          rotation: () => gsap.utils.random(-30, 30),
          scale: 0.7,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1.8,
          stagger: {
            each: 0.025,
            from: "random",
          },
          ease: "power3.out",
        },
      );
    }, imageRef);

    return () => ctx.revert();
  }, [imageLoaded, id]);

  if (!paint) {
    return (
      <div className="paints">
        <p>Painting not found.</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }

  return (
    <div className="paints">
      <div className="image puzzle-board" ref={imageRef}>
        <svg
          className="puzzle-svg"
          viewBox={`0 0 ${COLS * W} ${ROWS * H}`}
          role="img"
          aria-label={paint.name}
        >
          <defs>
            {paths.map((path) => (
              <clipPath
                key={path.id}
                id={path.id}
                clipPathUnits="userSpaceOnUse"
              >
                <path d={path.d} />
              </clipPath>
            ))}
          </defs>

          {pieces.map((piece) => (
            <g
              key={piece.id}
              className="slice"
              style={{ transformBox: "view-box" }}
            >
              <image
                href={paint.image}
                x="0"
                y="0"
                width={COLS * W}
                height={ROWS * H}
                preserveAspectRatio="none"
                clipPath={`url(#clip-${piece.id})`}
              />

              <path
                d={piece.path}
                fill="none"
                stroke="rgba(20, 20, 20, 0.75)"
                strokeWidth="1.5"
                strokeLinejoin="round"
                pointerEvents="none"
              />
            </g>
          ))}
        </svg>

        <img
          className="puzzle-source"
          src={paint.image}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
        />
      </div>

      <div className="paints-text">
        <h2 className="paints-name">{paint.name}</h2>
        <p className="paints-date">{paint.date}</p>
        <p className="paints-description">{paint.description}</p>
      </div>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default PaintDetails;
