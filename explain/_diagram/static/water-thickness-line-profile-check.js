explainer.fig('water-thickness-line-profile-check', /* html */ `
<svg viewBox="0 0 840 230" aria-label="第二步的檢查點：沿著湖的一條直線，暫時接到 Base Color 的值 (0 黑到 1 白) 怎麼變化">
<text class="t-b" x="127.0" y="16" text-anchor="middle">預期</text>
<path class="ln" d="M32,40 V150 H200" />
<text class="t-m" x="27" y="44" text-anchor="end">1</text>
<text class="t-m" x="27" y="154" text-anchor="end">0</text>
<path class="ln c4" style="fill:none;stroke-width:2" d="M36,150 L38,149.6 L40,148.8 L42,147.7 L44,146.5 L46,145.1 L48,143.6 L50,141.9 L52,140.2 L54,139.2 L56,143.1 L58,148.7 L60,144 L62,134.7 L64,127.2 L66,124.7 L68,122.2 L70,119.5 L72,116.8 L74,114 L76,111.1 L78,108.2 L80,105.1 L82,102 L84,106.8 L86,115.8 L88,117.5 L90,103 L92,85.6 L94,82.1 L96,78.6 L98,75 L100,71.3 L102,67.6 L104,63.8 L106,60 L108,56.1 L110,52.1 L112,48.1 L114,44.1 L116,40 L118,44.1 L120,48.1 L122,52.1 L124,56.1 L126,60 L128,63.8 L130,67.6 L132,71.3 L134,75 L136,78.6 L138,82.1 L140,85.6 L142,89 L144,92.4 L146,95.6 L148,98.9 L150,102 L152,105.1 L154,108.2 L156,111.1 L158,114 L160,116.8 L162,119.5 L164,122.2 L166,124.7 L168,127.2 L170,129.6 L172,131.9 L174,134.1 L176,136.2 L178,138.3 L180,140.2 L182,141.9 L184,143.6 L186,145.1 L188,146.5 L190,147.7 L192,148.8 L194,149.6 L196,150" />
<text class="t-s" x="36" y="166">岸</text>
<text class="t-s" x="116.0" y="166" text-anchor="middle">湖心</text>
<text class="t-s" x="196" y="166" text-anchor="end">岸</text>
<text class="t-s" x="58.400000000000006" y="54" text-anchor="middle">石頭</text>
<text class="t-s" x="87.2" y="54" text-anchor="middle">魚</text>
<text class="t-s" x="116.0" y="186" text-anchor="middle">岸邊 0 (黑)，湖心 1 (白)</text>
<text class="t-s" x="116.0" y="201" text-anchor="middle">石頭與魚的地方往下凹</text>
<text class="t-cost" x="335.0" y="16" text-anchor="middle">錯誤：整片黑</text>
<path class="ln" d="M240,40 V150 H408" />
<text class="t-m" x="235" y="44" text-anchor="end">1</text>
<text class="t-m" x="235" y="154" text-anchor="end">0</text>
<path class="ln cost-ln" style="fill:none;stroke-width:2" d="M244,150 L246,150 L248,150 L250,150 L252,150 L254,150 L256,150 L258,150 L260,150 L262,150 L264,150 L266,150 L268,150 L270,150 L272,150 L274,150 L276,150 L278,150 L280,150 L282,150 L284,150 L286,150 L288,150 L290,150 L292,150 L294,150 L296,150 L298,150 L300,150 L302,150 L304,150 L306,150 L308,150 L310,150 L312,150 L314,150 L316,150 L318,150 L320,150 L322,150 L324,150 L326,150 L328,150 L330,150 L332,150 L334,150 L336,150 L338,150 L340,150 L342,150 L344,150 L346,150 L348,150 L350,150 L352,150 L354,150 L356,150 L358,150 L360,150 L362,150 L364,150 L366,150 L368,150 L370,150 L372,150 L374,150 L376,150 L378,150 L380,150 L382,150 L384,150 L386,150 L388,150 L390,150 L392,150 L394,150 L396,150 L398,150 L400,150 L402,150 L404,150" />
<text class="t-s" x="244" y="166">岸</text>
<text class="t-s" x="324.0" y="166" text-anchor="middle">湖心</text>
<text class="t-s" x="404" y="166" text-anchor="end">岸</text>
<text class="t-s" x="324.0" y="186" text-anchor="middle">Sampling Mode 還是 Linear 01，</text>
<text class="t-s" x="324.0" y="201" text-anchor="middle">或 Subtract 的 A、B 接反</text>
<text class="t-cost" x="543.0" y="16" text-anchor="middle">錯誤：整片白</text>
<path class="ln" d="M448,40 V150 H616" />
<text class="t-m" x="443" y="44" text-anchor="end">1</text>
<text class="t-m" x="443" y="154" text-anchor="end">0</text>
<path class="ln cost-ln" style="fill:none;stroke-width:2" d="M452,40 L454,40 L456,40 L458,40 L460,40 L462,40 L464,40 L466,40 L468,40 L470,40 L472,40 L474,40 L476,40 L478,40 L480,40 L482,40 L484,40 L486,40 L488,40 L490,40 L492,40 L494,40 L496,40 L498,40 L500,40 L502,40 L504,40 L506,40 L508,40 L510,40 L512,40 L514,40 L516,40 L518,40 L520,40 L522,40 L524,40 L526,40 L528,40 L530,40 L532,40 L534,40 L536,40 L538,40 L540,40 L542,40 L544,40 L546,40 L548,40 L550,40 L552,40 L554,40 L556,40 L558,40 L560,40 L562,40 L564,40 L566,40 L568,40 L570,40 L572,40 L574,40 L576,40 L578,40 L580,40 L582,40 L584,40 L586,40 L588,40 L590,40 L592,40 L594,40 L596,40 L598,40 L600,40 L602,40 L604,40 L606,40 L608,40 L610,40 L612,40" />
<text class="t-s" x="452" y="166">岸</text>
<text class="t-s" x="532.0" y="166" text-anchor="middle">湖心</text>
<text class="t-s" x="612" y="166" text-anchor="end">岸</text>
<text class="t-s" x="532.0" y="186" text-anchor="middle">Screen Position 的 Mode</text>
<text class="t-s" x="532.0" y="201" text-anchor="middle">不是 Raw</text>
<text class="t-cost" x="751.0" y="16" text-anchor="middle">錯誤：整片同一種灰</text>
<path class="ln" d="M656,40 V150 H824" />
<text class="t-m" x="651" y="44" text-anchor="end">1</text>
<text class="t-m" x="651" y="154" text-anchor="end">0</text>
<path class="ln cost-ln" style="fill:none;stroke-width:2" d="M660,95 L662,95 L664,95 L666,95 L668,95 L670,95 L672,95 L674,95 L676,95 L678,95 L680,95 L682,95 L684,95 L686,95 L688,95 L690,95 L692,95 L694,95 L696,95 L698,95 L700,95 L702,95 L704,95 L706,95 L708,95 L710,95 L712,95 L714,95 L716,95 L718,95 L720,95 L722,95 L724,95 L726,95 L728,95 L730,95 L732,95 L734,95 L736,95 L738,95 L740,95 L742,95 L744,95 L746,95 L748,95 L750,95 L752,95 L754,95 L756,95 L758,95 L760,95 L762,95 L764,95 L766,95 L768,95 L770,95 L772,95 L774,95 L776,95 L778,95 L780,95 L782,95 L784,95 L786,95 L788,95 L790,95 L792,95 L794,95 L796,95 L798,95 L800,95 L802,95 L804,95 L806,95 L808,95 L810,95 L812,95 L814,95 L816,95 L818,95 L820,95" />
<text class="t-s" x="660" y="166">岸</text>
<text class="t-s" x="740.0" y="166" text-anchor="middle">湖心</text>
<text class="t-s" x="820" y="166" text-anchor="end">岸</text>
<text class="t-s" x="740.0" y="186" text-anchor="middle">Depth Texture 沒開</text>
</svg>`)
