"use client";

export default function EcosystemMap({ companyName }: { companyName: string }) {
  return (
    <div className="flex flex-col bg-[var(--bg)] h-full">
      {/* Header */}
      <div className="flex items-center py-2.5 px-[18px] border-b border-[var(--border)]">
        <div className="text-[10px] text-[var(--text4)] tracking-[0.12em] font-mono">
          ECOSYSTEM MAP
        </div>
      </div>

      {/* Map Canvas */}
      <div className="flex-1 relative overflow-hidden">
        <svg
          viewBox="0 0 640 480"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8/12"
        >
          <defs>
            {/* Gradients for regions */}
            <radialGradient id="targetGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
              <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="competitorGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E05252" stopOpacity="0.08" />
              <stop offset="70%" stopColor="#E05252" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#E05252" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="ecosystemGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.08" />
              <stop offset="70%" stopColor="#4A90E2" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#4A90E2" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="sagardGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
              <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>

            {/* Subtle grid pattern */}
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#1A1D24"
                strokeWidth="0.5"
              />
            </pattern>

            {/* Connection line gradient */}
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2A2E38" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#2A2E38" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2A2E38" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Background grid */}
          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />

          {/* COMPETITORS REGION - Top */}
          <ellipse
            cx="300"
            cy="95"
            rx="200"
            ry="85"
            fill="url(#competitorGlow)"
          />
          <ellipse
            cx="300"
            cy="95"
            rx="200"
            ry="85"
            fill="none"
            stroke="#E05252"
            strokeWidth="0.5"
            strokeDasharray="3,6"
            opacity="0.4"
          />
          <text
            x="135"
            y="45"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="9"
            fill="#E05252"
            opacity="0.7"
            letterSpacing="0.1em"
          >
            COMPETITORS
          </text>

          {/* ECOSYSTEM REGION - Right */}
          <ellipse
            cx="520"
            cy="285"
            rx="100"
            ry="140"
            fill="url(#ecosystemGlow)"
          />
          <ellipse
            cx="520"
            cy="285"
            rx="100"
            ry="140"
            fill="none"
            stroke="#4A90E2"
            strokeWidth="0.5"
            strokeDasharray="3,6"
            opacity="0.4"
          />
          <text
            x="555"
            y="420"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="9"
            fill="#4A90E2"
            opacity="0.7"
            letterSpacing="0.1em"
            transform="rotate(-90 555 420)"
          >
            ECOSYSTEM
          </text>

          {/* SAGARD PORTFOLIO REGION - Bottom Left */}
          <ellipse cx="140" cy="380" rx="95" ry="75" fill="url(#sagardGlow)" />
          <ellipse
            cx="140"
            cy="380"
            rx="95"
            ry="75"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="0.5"
            strokeDasharray="3,6"
            opacity="0.5"
          />
          <text
            x="75"
            y="445"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="9"
            fill="#F59E0B"
            opacity="0.7"
            letterSpacing="0.1em"
          >
            SAGARD PORTFOLIO
          </text>

          {/* TARGET REGION - Center */}
          <circle cx="320" cy="250" r="85" fill="url(#targetGlow)" />
          <circle
            cx="320"
            cy="250"
            r="85"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="0.5"
            opacity="0.3"
          />

          {/* Connection lines - curved paths for elegance */}
          <path
            d="M 320 210 Q 280 150 205 115"
            stroke="#2A2E38"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 320 210 Q 350 150 395 115"
            stroke="#2A2E38"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 320 210 Q 320 140 300 95"
            stroke="#2A2E38"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 360 260 Q 430 260 490 245"
            stroke="#2A2E38"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 350 290 Q 420 330 480 355"
            stroke="#2A2E38"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 280 280 Q 220 330 170 360"
            stroke="#F59E0B"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />

          {/* Subtle animated pulse rings around target */}
          <circle
            cx="320"
            cy="250"
            r="55"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="0.5"
            opacity="0.15"
          >
            <animate
              attributeName="r"
              values="55;70;55"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.15;0.05;0.15"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          {/* TARGET NODE - Center */}
          <circle cx="320" cy="250" r="42" fill="#0F0D08" />
          <circle
            cx="320"
            cy="250"
            r="42"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
          />
          <circle
            cx="320"
            cy="250"
            r="48"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <text
            x="320"
            y="246"
            textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="11"
            fontWeight="600"
            fill="#F59E0B"
          >
            {companyName.split(" ")[0] || companyName}
          </text>
          {companyName.split(" ").length > 1 && (
            <text
              x="320"
              y="261"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
              fontWeight="600"
              fill="#F59E0B"
            >
              {companyName.split(" ")[1] || ""}
            </text>
          )}
          <text
            x="320"
            y="278"
            textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="7"
            fill="#F59E0B"
            opacity="0.6"
          >
            TARGET
          </text>

          {/* COMPETITOR NODES */}
          <g className="competitor-node">
            <circle cx="205" cy="100" r="28" fill="#13151A" />
            <circle
              cx="205"
              cy="100"
              r="28"
              fill="none"
              stroke="#E05252"
              strokeWidth="1.5"
            />
            <text
              x="205"
              y="97"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              fontWeight="500"
              fill="#E05252"
            >
              Questrade
            </text>
            <text
              x="205"
              y="109"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="7"
              fill="#E05252"
              opacity="0.5"
            >
              Direct
            </text>
          </g>

          <g className="competitor-node">
            <circle cx="395" cy="100" r="28" fill="#13151A" />
            <circle
              cx="395"
              cy="100"
              r="28"
              fill="none"
              stroke="#E05252"
              strokeWidth="1.5"
            />
            <text
              x="395"
              y="97"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              fontWeight="500"
              fill="#E05252"
            >
              Moka
            </text>
            <text
              x="395"
              y="109"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="7"
              fill="#E05252"
              opacity="0.5"
            >
              Micro-invest
            </text>
          </g>

          <g className="competitor-node">
            <circle cx="300" cy="65" r="26" fill="#13151A" />
            <circle
              cx="300"
              cy="65"
              r="26"
              fill="none"
              stroke="#E05252"
              strokeWidth="1.5"
            />
            <text
              x="300"
              y="62"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              fontWeight="500"
              fill="#E05252"
            >
              Robinhood
            </text>
            <text
              x="300"
              y="74"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="7"
              fill="#E05252"
              opacity="0.5"
            >
              US Market
            </text>
          </g>

          {/* ECOSYSTEM NODES */}
          <g className="ecosystem-node">
            <circle cx="505" cy="225" r="28" fill="#13151A" />
            <circle
              cx="505"
              cy="225"
              r="28"
              fill="none"
              stroke="#4A90E2"
              strokeWidth="1.5"
            />
            <text
              x="505"
              y="222"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              fontWeight="500"
              fill="#4A90E2"
            >
              Nest
            </text>
            <text
              x="505"
              y="234"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              fontWeight="500"
              fill="#4A90E2"
            >
              Wealth
            </text>
          </g>

          <g className="ecosystem-node">
            <circle cx="495" cy="335" r="28" fill="#13151A" />
            <circle
              cx="495"
              cy="335"
              r="28"
              fill="none"
              stroke="#4A90E2"
              strokeWidth="1.5"
            />
            <text
              x="495"
              y="332"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              fontWeight="500"
              fill="#4A90E2"
            >
              Share
            </text>
            <text
              x="495"
              y="344"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              fontWeight="500"
              fill="#4A90E2"
            >
              works
            </text>
          </g>

          <g className="ecosystem-node">
            <circle cx="545" cy="280" r="24" fill="#13151A" />
            <circle
              cx="545"
              cy="280"
              r="24"
              fill="none"
              stroke="#4A90E2"
              strokeWidth="1.5"
            />
            <text
              x="545"
              y="277"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="8"
              fontWeight="500"
              fill="#4A90E2"
            >
              Stripe
            </text>
            <text
              x="545"
              y="288"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="8"
              fontWeight="500"
              fill="#4A90E2"
            >
              Infra
            </text>
          </g>

          {/* SAGARD PORTFOLIO NODE */}
          <g className="sagard-node">
            <circle cx="155" cy="365" r="32" fill="#0F0D08" />
            <circle
              cx="155"
              cy="365"
              r="32"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeDasharray="5,3"
            />
            <circle
              cx="155"
              cy="365"
              r="40"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="0.5"
              strokeDasharray="2,4"
              opacity="0.4"
            />
            <text
              x="155"
              y="360"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              fontWeight="500"
              fill="#F59E0B"
            >
              Sagard
            </text>
            <text
              x="155"
              y="373"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              fontWeight="500"
              fill="#F59E0B"
            >
              Wealth
            </text>
            <text
              x="155"
              y="388"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="6"
              fill="#F59E0B"
              opacity="0.6"
            >
              SYNERGY
            </text>
          </g>

          {/* Connection dots along paths */}
          <circle cx="260" cy="165" r="2" fill="#2A2E38" />
          <circle cx="360" cy="165" r="2" fill="#2A2E38" />
          <circle cx="420" cy="255" r="2" fill="#2A2E38" />
          <circle cx="420" cy="320" r="2" fill="#2A2E38" />
          <circle cx="225" cy="310" r="2" fill="#F59E0B" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
