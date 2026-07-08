const HeroIllustration = () => {
  return (
            <svg className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" viewBox="0 0 580 480" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <clipPath id="screen-left-clip">
                      <rect x="110" y="94" width="168" height="122" rx="4" />
                  </clipPath>
                  <clipPath id="screen-right-clip">
                      <rect x="302" y="80" width="178" height="133" rx="4" />
                  </clipPath>
              </defs>
              {/* WALL SHELF */}
              <rect x="26" y="90" width="128" height="10" rx="3" fill="#1e3a5f" stroke="#2a4a6f" strokeWidth="1" />
              <line x1="38" y1="90" x2="38" y2="108" stroke="#1a2e50" strokeWidth="5" strokeLinecap="round" />
              <line x1="142" y1="90" x2="142" y2="108" stroke="#1a2e50" strokeWidth="5" strokeLinecap="round" />
              <rect x="34" y="63" width="15" height="29" rx="2" fill="#e55555" />
              <rect x="51" y="67" width="13" height="25" rx="2" fill="#ffa54d" />
              <rect x="66" y="60" width="17" height="32" rx="2" fill="#4facfe" />
              <rect x="85" y="65" width="11" height="27" rx="2" fill="#a855f7" />
              <rect x="98" y="62" width="15" height="30" rx="2" fill="#22a844" />
              <rect x="116" y="79" width="20" height="13" rx="3" fill="#5c3f1e" />
              <ellipse cx="126" cy="73" rx="8" ry="10" fill="#1a5c2a" />
              <ellipse cx="120" cy="76" rx="5" ry="8" fill="#22a844" transform="rotate(-22 120 76)" />
              <ellipse cx="132" cy="76" rx="5" ry="8" fill="#22a844" transform="rotate(22 132 76)" />
              
              {/* BULLETIN BOARD */}
              <rect x="190" y="30" width="172" height="112" rx="8" fill="#8b6428" stroke="#5a4018" strokeWidth="2" />
              <line x1="198" y1="52" x2="354" y2="52" stroke="#7a5520" strokeWidth="0.6" />
              <line x1="198" y1="74" x2="354" y2="74" stroke="#7a5520" strokeWidth="0.6" />
              <line x1="198" y1="96" x2="354" y2="96" stroke="#7a5520" strokeWidth="0.6" />
              <line x1="198" y1="118" x2="354" y2="118" stroke="#7a5520" strokeWidth="0.6" />
              <g transform="rotate(-6 238 80)">
                  <rect x="200" y="48" width="64" height="56" rx="3" fill="#d0e8ff" />
                  <line x1="207" y1="62" x2="257" y2="62" stroke="#90b8d8" strokeWidth="1.5" />
                  <line x1="207" y1="71" x2="257" y2="71" stroke="#90b8d8" strokeWidth="1.5" />
                  <line x1="207" y1="80" x2="250" y2="80" stroke="#90b8d8" strokeWidth="1.5" />
                  <line x1="207" y1="89" x2="246" y2="89" stroke="#90b8d8" strokeWidth="1.5" />
                  <circle cx="232" cy="50" r="5.5" fill="#ff3333" />
                  <circle cx="232" cy="50" r="3" fill="#ff8888" />
              </g>
              <g transform="rotate(5 308 83)">
                  <rect x="280" y="52" width="56" height="64" rx="3" fill="#fffde0" />
                  <line x1="287" y1="65" x2="329" y2="65" stroke="#c8c090" strokeWidth="1.5" />
                  <line x1="287" y1="74" x2="329" y2="74" stroke="#c8c090" strokeWidth="1.5" />
                  <line x1="287" y1="83" x2="323" y2="83" stroke="#c8c090" strokeWidth="1.5" />
                  <line x1="287" y1="92" x2="320" y2="92" stroke="#c8c090" strokeWidth="1.5" />
                  <line x1="287" y1="101" x2="325" y2="101" stroke="#c8c090" strokeWidth="1.5" />
                  <circle cx="308" cy="54" r="5.5" fill="#ff3333" />
                  <circle cx="308" cy="54" r="3" fill="#ff8888" />
              </g>

              {/* PICTURE FRAME */}
              <rect x="432" y="48" width="106" height="82" rx="8" fill="#4a90c4" stroke="#3a7ab4" strokeWidth="3" />
              <rect x="442" y="58" width="86" height="62" rx="4" fill="#87ceeb" />
              <rect x="442" y="58" width="86" height="38" rx="4" fill="#aadcf0" />
              <circle cx="505" cy="71" r="9" fill="#fff9c4" />
              <polygon points="442,120 468,78 494,120" fill="#7ab5b5" />
              <polygon points="462,120 492,70 522,120" fill="#5a9898" />
              <polygon points="498,120 524,83 550,120" fill="#6aabab" />
              <rect x="442" y="104" width="86" height="16" rx="0" fill="#80cc88" />
              <rect x="442" y="58" width="86" height="62" rx="4" fill="none" stroke="#5a9fd4" strokeWidth="2" />

              {/* LEFT MONITOR */}
              <rect x="96" y="80" width="196" height="154" rx="12" fill="#0c1424" stroke="#1a2e50" strokeWidth="2" />
              <rect x="108" y="92" width="172" height="130" rx="6" fill="#010810" />
              <rect x="108" y="92" width="172" height="130" rx="6" fill="#4facfe" opacity="0.02" className="animate-[screenPulse_4s_infinite]" />
              <g clipPath="url(#screen-left-clip)">
                  <text x="114" y="107" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#ff6b6b">import tensorflow as tf</text>
                  <text x="114" y="119" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#ffa94d">def build_model(X, y):</text>
                  <text x="114" y="131" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#ffd43b">  model = Sequential()</text>
                  <text x="114" y="143" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#69db7c">  model.add(LSTM(128))</text>
                  <text x="114" y="155" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#4dabf7">  model.add(Dense(64))</text>
                  <text x="114" y="167" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#748ffc">  model.compile()</text>
                  <text x="114" y="179" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#da77f2">  return model.fit(X)</text>
                  <text x="114" y="191" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#f783ac"># Accuracy: 94.7%</text>
                  <text x="114" y="203" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#4facfe">&gt;_ </text>
                  <rect x="128" y="196" width="6" height="9" fill="#4facfe" className="animate-[blink_1s_infinite]" />
              </g>
              <rect x="182" y="232" width="22" height="30" rx="2" fill="#0c1424" />
              <rect x="158" y="260" width="70" height="13" rx="5" fill="#0c1424" stroke="#1a2e50" strokeWidth="1" />

              {/* RIGHT MONITOR */}
              <rect x="296" y="64" width="212" height="164" rx="12" fill="#0c1424" stroke="#1a2e50" strokeWidth="2" />
              <rect x="308" y="76" width="188" height="140" rx="6" fill="#010810" />
              <rect x="308" y="76" width="188" height="140" rx="6" fill="#4facfe" opacity="0.02" className="animate-[screenPulse_4s_infinite_1s]" />
              <g clipPath="url(#screen-right-clip)">
                  <text x="312" y="93" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#ff6b6b">from sklearn.ensemble import RF</text>
                  <text x="312" y="105" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#ffa94d">from pandas import DataFrame</text>
                  <text x="312" y="117" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#ffd43b">import numpy as np</text>
                  <text x="312" y="129" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#69db7c">import matplotlib.pyplot as plt</text>
                  <text x="312" y="141" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#4dabf7">X_train, X_test = split(data)</text>
                  <text x="312" y="153" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#748ffc">clf = RF(n_estimators=100)</text>
                  <text x="312" y="165" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#da77f2">clf.fit(X_train, y_train)</text>
                  <text x="312" y="177" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#f783ac">score = clf.score(X_test)</text>
                  <text x="312" y="189" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#ff8787">plt.plot(feature_importance)</text>
                  <text x="312" y="201" fontFamily="'Courier New',monospace" fontSize="6.5" fill="#ffa94d">plt.show()</text>
                  <rect x="312" y="205" width="6" height="9" fill="#4facfe" className="animate-[blink_1s_infinite_0.5s]" />
              </g>
              <rect x="390" y="226" width="24" height="32" rx="2" fill="#0c1424" />
              <rect x="362" y="256" width="80" height="14" rx="5" fill="#0c1424" stroke="#1a2e50" strokeWidth="1" />

              <ellipse cx="194" cy="172" rx="115" ry="85" fill="rgba(79,172,254,0.04)" />
              <ellipse cx="402" cy="160" rx="125" ry="92" fill="rgba(79,172,254,0.04)" />

              {/* DESK */}
              <polygon points="22,272 558,272 580,298 0,298" fill="#0c1829" />
              <polygon points="22,272 558,272 580,298 0,298" fill="none" stroke="#1a2e50" strokeWidth="1" />
              <line x1="22" y1="275" x2="558" y2="275" stroke="#162440" strokeWidth="1.5" opacity="0.6" />
              <rect x="0" y="298" width="580" height="14" rx="0" fill="#08111f" />
              <rect x="40" y="312" width="16" height="82" rx="4" fill="#08111f" />
              <rect x="524" y="312" width="16" height="82" rx="4" fill="#08111f" />

              <g className="grayscale">
                {/* DESK ACCESSORIES */}
              <ellipse cx="80" cy="267" rx="14" ry="18" fill="#0f1318" />
              <ellipse cx="80" cy="270" rx="9" ry="13" fill="#e8e8e8" />
              <circle cx="80" cy="248" r="12" fill="#0f1318" />
              <circle cx="76" cy="246" r="3" fill="white" />
              <circle cx="84" cy="246" r="3" fill="white" />
              <circle cx="76.5" cy="246.5" r="1.8" fill="#111" />
              <circle cx="84.5" cy="246.5" r="1.8" fill="#111" />
              <polygon points="80,251 77,255 83,255" fill="#ffa500" />
              <ellipse cx="75" cy="282" rx="7" ry="3.5" fill="#ffa500" />
              <ellipse cx="85" cy="282" rx="7" ry="3.5" fill="#ffa500" />

              <rect x="108" y="256" width="24" height="28" rx="5" fill="#1e293b" stroke="#1a2e50" strokeWidth="1" />
              <line x1="113" y1="256" x2="111" y2="234" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="119" y1="256" x2="119" y2="231" stroke="#ff6b6b" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="125" y1="256" x2="127" y2="235" stroke="#4dabf7" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="130" y1="256" x2="131" y2="233" stroke="#69db7c" strokeWidth="3.5" strokeLinecap="round" />
              <polygon points="109,236 111,234 113,237" fill="#e69800" />
              <polygon points="117,233 119,231 121,234" fill="#cc3333" />
              <polygon points="125,236 127,235 128,237" fill="#1a7acc" />
              <polygon points="129,234 131,233 132,235" fill="#1a8830" />

              <rect x="196" y="270" width="188" height="17" rx="5" fill="#0c1829" stroke="#1a2e50" strokeWidth="1" />
              <rect x="200" y="273" width="180" height="5" rx="2" fill="#14253e" />
              <rect x="203" y="280" width="174" height="5" rx="2" fill="#14253e" />
              <rect x="200" y="273" width="180" height="1.5" rx="1" fill="#4facfe" opacity="0.4" />

              {/* COFFEE MUG */}
              <g className="animate-[breathe_4s_infinite_ease-in-out_1s]">
                  <path d="M 155 284 L 155 256 C 155 252 159 248 163 248 L 177 248 C 181 252 185 252 185 256 L 185 284 C 185 288 181 292 177 292 L 163 292 C 159 292 155 288 155 284 Z" fill="#e8e8e8" />
                  <path d="M 185 260 C 193 260 193 276 185 276" fill="none" stroke="#e8e8e8" strokeWidth="4" />
                  <g className="animate-[floatParticle_3s_infinite_ease-in-out]">
                      <path d="M 165 240 Q 170 230 165 220 T 165 200" fill="none" stroke="#e8e8e8" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
                      <path d="M 175 242 Q 180 232 175 222 T 175 202" fill="none" stroke="#e8e8e8" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
                  </g>
              </g>

              <rect x="444" y="255" width="30" height="38" rx="6" fill="#c8820a" stroke="#a56808" strokeWidth="1" />
              <rect x="448" y="259" width="22" height="13" rx="3" fill="#e09010" />
              <circle cx="459" cy="282" r="7" fill="#a56808" />
              <circle cx="459" cy="282" r="5" fill="#c8820a" />
              <circle cx="459" cy="282" r="2.5" fill="#8a4e08" />

              <polygon points="476,295 468,268 500,268 492,295" fill="#5c3f1e" />
              <rect x="465" y="267" width="38" height="7" rx="2" fill="#7a5030" />
              <ellipse cx="484" cy="251" rx="10" ry="15" fill="#1a7a3a" />
              <ellipse cx="473" cy="257" rx="7" ry="12" fill="#22a844" transform="rotate(-26 473 257)" />
              <ellipse cx="495" cy="257" rx="7" ry="12" fill="#22a844" transform="rotate(26 495 257)" />
              <ellipse cx="477" cy="242" rx="5" ry="9" fill="#2cc854" transform="rotate(-12 477 242)" />
              <ellipse cx="491" cy="242" rx="5" ry="9" fill="#2cc854" transform="rotate(12 491 242)" />

              {/* CHAIR */}
              <rect x="214" y="308" width="152" height="94" rx="16" fill="#0a1223" stroke="#1a2e50" strokeWidth="1.5" />
              <line x1="240" y1="324" x2="240" y2="388" stroke="#14253e" strokeWidth="9" strokeLinecap="round" />
              <line x1="290" y1="324" x2="290" y2="388" stroke="#14253e" strokeWidth="9" strokeLinecap="round" />
              <line x1="340" y1="324" x2="340" y2="388" stroke="#14253e" strokeWidth="9" strokeLinecap="round" />
              <rect x="214" y="305" width="152" height="18" rx="9" fill="#0c1829" stroke="#1a2e50" strokeWidth="1" />
              <rect x="200" y="396" width="180" height="22" rx="10" fill="#0c1829" stroke="#1a2e50" strokeWidth="1" />
              <rect x="188" y="364" width="32" height="42" rx="8" fill="#0a1223" stroke="#1a2e50" strokeWidth="1" />
              <rect x="188" y="356" width="32" height="14" rx="6" fill="#0c1829" />
              <rect x="360" y="364" width="32" height="42" rx="8" fill="#0a1223" stroke="#1a2e50" strokeWidth="1" />
              <rect x="360" y="356" width="32" height="14" rx="6" fill="#0c1829" />
              <path d="M220 418 L206 456" stroke="#08111f" strokeWidth="10" strokeLinecap="round" />
              <path d="M220 418 L234 456" stroke="#08111f" strokeWidth="10" strokeLinecap="round" />
              <path d="M360 418 L374 456" stroke="#08111f" strokeWidth="10" strokeLinecap="round" />
              <path d="M360 418 L346 456" stroke="#08111f" strokeWidth="10" strokeLinecap="round" />
              <rect x="202" y="452" width="176" height="8" rx="4" fill="#08111f" />
              </g>

              {/* CHARACTER */}
              <g className="animate-[typingLeft_2s_infinite]">
                  <path d="M234 362 C220 342 210 318 210 281" fill="none" className="stroke-[#ffe0bd] dark:stroke-[#fcd07a]" strokeWidth="26" strokeLinecap="round" />
                  <ellipse cx="210" cy="279" rx="15" ry="10" className="fill-[#ffe0bd] dark:fill-[#fcd07a]" />
              </g>
              <g className="animate-[mouseMove_3s_infinite_ease-in-out]">
                  {/* Mouse */}
                  <rect x="400" y="270" width="30" height="36" rx="14" fill="#0c1829" stroke="#1a2e50" strokeWidth="1" />
                  <line x1="415" y1="270" x2="415" y2="290" stroke="#1a2e50" strokeWidth="1.5" />
                  <rect x="410" y="274" width="10" height="7" rx="3" fill="#1a2e50" />
                  {/* Right Hand on Mouse */}
                  <path d="M346 362 C370 342 400 318 415 288" fill="none" className="stroke-[#ffe0bd] dark:stroke-[#fcd07a]" strokeWidth="26" strokeLinecap="round" />
                  <ellipse cx="415" cy="288" rx="15" ry="10" className="fill-[#ffe0bd] dark:fill-[#fcd07a]" />
              </g>
              <path d="M212 415 L210 346 Q212 314 244 308 L336 308 Q368 314 370 346 L368 415 Z" fill="#1f2937" className="animate-[breathe_4s_infinite_ease-in-out]" />
              <path d="M258 309 Q290 300 322 309" fill="#111827" stroke="#111827" strokeWidth="2" className="animate-[breathe_4s_infinite_ease-in-out]" />
              
              <rect x="274" y="290" width="32" height="22" rx="9" className="fill-[#ffe0bd] dark:fill-[#fcd07a] animate-[breathe_4s_infinite_ease-in-out]" />
              <g className="origin-[290px_258px] animate-[headBob_6s_infinite_ease-in-out]">
                  <circle cx="290" cy="256" r="58" className="fill-[#ffe0bd] dark:fill-[#fcd07a]" />
                  <ellipse cx="290" cy="218" rx="52" ry="28" fill="#6b3e1a" />
                  <path d="M234 260 Q232 206 290 200 Q348 206 346 260 Q340 208 290 206 Q240 208 234 260 Z" fill="#6b3e1a" />
                  <path d="M234 256 Q228 272 232 286" fill="none" stroke="#6b3e1a" strokeWidth="14" strokeLinecap="round" />
                  <path d="M346 256 Q352 272 348 286" fill="none" stroke="#6b3e1a" strokeWidth="14" strokeLinecap="round" />
                  <path d="M237 238 Q233 248 234 260" fill="none" stroke="#6b3e1a" strokeWidth="16" strokeLinecap="round" />
                  <path d="M343 238 Q347 248 346 260" fill="none" stroke="#6b3e1a" strokeWidth="16" strokeLinecap="round" />
                  <path d="M262 208 Q290 203 318 211" fill="none" stroke="#8a5028" strokeWidth="4" strokeLinecap="round" />
                  <path d="M276 202 Q290 195 304 203" fill="none" stroke="#7a4520" strokeWidth="5" strokeLinecap="round" />
                  <ellipse cx="232" cy="262" rx="10" ry="13" className="fill-[#ffcca8] dark:fill-[#f0b040]" />
                  <ellipse cx="348" cy="262" rx="10" ry="13" className="fill-[#ffcca8] dark:fill-[#f0b040]" />
                  <ellipse cx="232" cy="262" rx="6" ry="9" className="fill-[#f5b380] dark:fill-[#d99020]" />
                  <ellipse cx="348" cy="262" rx="6" ry="9" className="fill-[#f5b380] dark:fill-[#d99020]" />
              </g>


            </svg>
  );
};

export default HeroIllustration;
