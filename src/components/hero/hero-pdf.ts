/**
 * PDF preview pane for the hero app replica: toolbar (boot + compiled
 * states), the compile startup-progress panel, and the rendered EdgeSense
 * IEEE two-column page recreated in HTML/SVG at 456px design width.
 * Citations render as "[?]" until the reference fix lands, then swap to
 * numbers via the scene's data-fixed attribute.
 */
import { ic } from "./hero-icons";

/* [?] → [n] citation marks */
const cit = (n: number) => `<span class="hv-cn" data-n="${n}"></span>`;

/* ---------------------------------------------------------- fig 1 diagram */
const fig1 = `
<svg class="hv-fig1" viewBox="0 0 196 62" aria-hidden="true">
  <g class="f1-box">
    <rect x="4" y="8" width="44" height="14" rx="2"/>
    <rect x="62" y="8" width="52" height="14" rx="2"/>
    <rect x="128" y="8" width="44" height="14" rx="2"/>
    <rect x="62" y="42" width="44" height="14" rx="2"/>
    <rect x="128" y="42" width="44" height="14" rx="2"/>
  </g>
  <g class="f1-arrow">
    <path d="M48 15h12"/><path d="m58 12.5 3 2.5-3 2.5"/>
    <path d="M114 15h12"/><path d="m124 12.5 3 2.5-3 2.5"/>
    <path d="M150 22v18"/><path d="m147.5 37 2.5 3 2.5-3"/>
    <path d="M128 49h-20"/><path d="m110.5 46.5-3 2.5 3 2.5"/>
  </g>
  <g class="f1-label">
    <text x="26" y="17.5" text-anchor="middle">Sensors</text>
    <text x="88" y="17.5" text-anchor="middle">Feature buffer</text>
    <text x="150" y="17.5" text-anchor="middle">Tiny model</text>
    <text x="84" y="51.5" text-anchor="middle">Gateway</text>
    <text x="150" y="51.5" text-anchor="middle">Peer vote</text>
    <text x="152" y="33" class="f1-note">high confidence</text>
  </g>
</svg>`;

/* ------------------------------------------------------------ fig 2 chart */
const fig2 = `
<svg class="hv-fig2" viewBox="0 0 196 74" aria-hidden="true">
  <g class="f2-axis">
    <path d="M22 6v56h160"/>
    <path d="m19.5 9 2.5-3 2.5 3"/><path d="m179 59.5 3 2.5-3 2.5"/>
  </g>
  <text x="10" y="10" class="f2-lab">recall</text>
  <text x="186" y="70" class="f2-lab" text-anchor="end">week</text>
  <path class="f2-line" d="M24 56 C 50 44, 70 34, 96 27 S 150 16, 176 13"/>
  <path class="f2-dash" d="M24 58 C 52 50, 80 42, 108 37 S 156 30, 176 28"/>
  <text x="150" y="12" class="f2-blue">EdgeSense</text>
  <text x="146" y="38" class="f2-orange">threshold</text>
</svg>`;

/* -------------------------------------------------------------- table I */
const tableI = `
<div class="hv-tcap">TABLE I<br/><span>Field evaluation results.</span></div>
<table class="hv-table">
  <tr class="hv-tr-head"><td>Method</td><td>Recall</td><td>FA/wk</td><td>Latency</td><td>Energy</td></tr>
  <tr><td>Periodic stream</td><td>.957</td><td>1.8</td><td>72 s</td><td>100%</td></tr>
  <tr><td>Fixed threshold</td><td>.876</td><td>3.4</td><td>61 s</td><td>41%</td></tr>
  <tr><td>Ungated TCN</td><td>.946</td><td>1.1</td><td>58 s</td><td>52%</td></tr>
  <tr><td>EdgeSense</td><td>.941</td><td>0.7</td><td>54 s</td><td>37%</td></tr>
</table>`;

/* ------------------------------------------------------------ page one */
const pageOne = `
<div class="hv-page hv-page1">
  <div class="hv-p-title">EdgeSense: Energy-Aware Wildfire Detection with<br/>Collaborative Sensor Networks</div>
  <div class="hv-p-authors">Nadia Flores, Min-jun Lee, and Caleb Morgan<br/>Center for Resilient Computing, Cascadia Institute of Technology<br/>Seattle, WA, USA&nbsp;&nbsp;&nbsp;&nbsp;{nflores,mjlee,cmorgan}@example.edu</div>
  <div class="hv-cols">
    <div class="hv-col">
      ${fig1}
      <div class="hv-fcap">Fig. 1.&nbsp;&nbsp;EdgeSense performs local triage and requests peer confirmation only for ambiguous windows.</div>
      <p class="hv-p hv-abs"><b>Abstract</b>—We present EdgeSense, a low-power wildfire early-warning system that fuses thermal, particulate, humidity, and wind observations across a mesh of battery-powered nodes. A gated temporal model runs locally and transmits only uncertain windows. In a 16-week controlled field deployment, EdgeSense detected 94.1% of burn events at 0.7 false alarms per node-week while reducing radio energy by 63% relative to periodic streaming. Results use a synthetic but realistic demo dataset.</p>
      <p class="hv-p hv-abs"><i>Index Terms</i>—edge computing, environmental sensing, wildfire, TinyML, sensor networks</p>
      <div class="hv-sec">I.&nbsp;&nbsp;I<span>NTRODUCTION</span></div>
      <p class="hv-p ind">Wildfire ignition can develop faster than sparse satellite revisit cycles and manual reports ${cit(1)}${cit(2)}. Dense ground networks provide local measurements but create a difficult systems trade-off: radios consume most of a node's energy, yet delaying communication can hide the earliest evidence ${cit(3)}${cit(4)}${cit(5)}. EdgeSense moves triage to the node and treats transmission as a decision under uncertainty.</p>
      <div class="hv-sec">II.&nbsp;&nbsp;S<span>YSTEM DESIGN</span></div>
      <p class="hv-p ind">Each node samples temperature, relative humidity, particulate matter, and wind once per minute ${cit(3)}. A 12 kB quantized temporal convolutional network scores five-minute windows ${cit(6)}${cit(7)}${cit(8)}. Scores below 0.25 are stored locally; scores between 0.25 and 0.70 trigger peer confirmation; scores above 0.70 trigger an immediate gateway packet ${cit(9)}.</p>
      <div class="hv-sec">III.&nbsp;&nbsp;D<span>EPLOYMENT AND EVALUATION</span></div>
      <p class="hv-p ind">We deployed 48 nodes across three ecological zones ${cit(3)}. Controlled burns and heated aerosol challenges generated 186 positive windows; 11,420 background windows captured fog, dust, vehicle exhaust, and sensor maintenance ${cit(3)}. Splits were grouped by day to prevent temporal leakage.</p>
      <div class="hv-eq"><i>&#x2112;</i> = &minus;<i>w</i><sub>+</sub><i>y</i>&thinsp;log&thinsp;<i>p</i> &minus; <i>w</i><sub>&minus;</sub>(1&minus;<i>y</i>)&thinsp;log(1&minus;<i>p</i>) + <i>&lambda;</i>&#x2225;<i>&theta;</i>&#x2225;<span class="hv-eqss"><sup>2</sup><sub>2</sub></span>.<span class="hv-eqn">(1)</span></div>
    </div>
    <div class="hv-col">
      ${tableI}
      ${fig2}
      <div class="hv-fcap">Fig. 2.&nbsp;&nbsp;Cumulative detection performance remained stable across the deployment.</div>
      <p class="hv-p ind">We compare periodic streaming, fixed thresholds, an ungated neural baseline, and EdgeSense. The primary metrics are event recall, false alarms per node-week, median alert latency, and measured radio energy.</p>
      <div class="hv-sec">IV.&nbsp;&nbsp;R<span>ESULTS</span></div>
      <p class="hv-p ind">EdgeSense retains 98.3% of the streaming baseline's recall while using 37% of its radio energy ${cit(4)}. Peer voting removes 31% of fog-related false alarms ${cit(9)}. At the median observed solar input, the modeled service interval rises from 11 to 29 months. Performance degrades gracefully when one sensing channel is unavailable.</p>
      <div class="hv-sec">V.&nbsp;&nbsp;A<span>BLATIONS, SAFETY, AND LIMITATIONS</span></div>
      <p class="hv-p ind">Removing peer voting increases false alarms by 44%; removing wind direction reduces recall by 3.8 points ${cit(3)}. EdgeSense is advisory: alerts require confirmation by the incident-management system, and nodes never autonomously dispatch a public warning ${cit(3)}. The deployment did not cover crown fires or winter conditions.</p>
      <div class="hv-sec">VI.&nbsp;&nbsp;C<span>ONCLUSION</span></div>
      <p class="hv-p ind">Selective communication can extend unattended sensing without hiding early signals ${cit(5)}. The next deployment will test transfer across biomes and signed over-the-air model updates.</p>
    </div>
  </div>
</div>`;

/* ------------------------------------------------ page two (references) */
const pageTwo = `
<div class="hv-page hv-page2">
  <div class="hv-cols">
    <div class="hv-col">
      <div class="hv-sec">R<span>EFERENCES</span></div>
      <p class="hv-p hv-refline"><span class="hv-refn">[1]</span>L. Giglio, J. Descloitres, C. O. Justice, and Y. J. Kaufman, “An enhanced contextual fire detection algorithm for MODIS,” <i>Remote Sensing of Environment</i>, vol. 87, no. 2–3, pp. 273–282, 2003.</p>
      <p class="hv-p hv-refline"><span class="hv-refn">[2]</span>W. Schroeder, P. Oliva, L. Giglio, and I. A. Csiszar, “The new VIIRS 375 m active fire detection data product,” <i>Remote Sensing of Environment</i>, vol. 143, pp. 85–96, 2014.</p>
      <p class="hv-p hv-refline"><span class="hv-refn">[3]</span>U. Dampage, L. Bandaranayake, R. Wanasinghe, K. Kottahachchi, and B. Jayasanka, “Forest fire detection system using wireless sensor networks and machine learning,” <i>Scientific Reports</i>, vol. 12, no. 1, p. 46, 2022.</p>
      <p class="hv-p hv-refline"><span class="hv-refn">[4]</span>K. S. Adu-Manu, N. Adam, C. Tapparello, H. Ayatollahi, and W. Heinzelman, “Energy-harvesting wireless sensor networks: A review,” <i>ACM Transactions on Sensor Networks</i>, vol. 14, no. 2, pp. 1–50, 2018.</p>
      <p class="hv-p hv-refline"><span class="hv-refn">[5]</span>F. Adelantado, X. Vilajosana, P. Tuset-Peiro, B. Martinez, J. Melia-Segui, and T. Watteyne, “Understanding the limits of LoRaWAN,” <i>IEEE Communications Magazine</i>, vol. 55, no. 9, pp. 34–40, 2017.</p>
      <p class="hv-p hv-refline"><span class="hv-refn">[6]</span>S. Bai, J. Z. Kolter, and V. Koltun, “An empirical evaluation of generic convolutional and recurrent networks for sequence modeling,” arXiv:1803.01271, 2018.</p>
      <p class="hv-p hv-refline"><span class="hv-refn">[7]</span>B. Jacob, S. Kligys, B. Chen, M. Zhu, M. Tang, A. Howard, H. Adam, and D. Kalenichenko, “Quantization and training of neural networks for efficient integer-arithmetic-only inference,” in <i>Proc. IEEE/CVF CVPR</i>, 2018, pp. 2704–2713.</p>
      <p class="hv-p hv-refline"><span class="hv-refn">[8]</span>P. P. Ray, “A review on TinyML: State-of-the-art and prospects,” <i>Journal of King Saud University - Computer and Information Sciences</i>, vol. 34, no. 4, pp. 1595–1623, 2022.</p>
      <p class="hv-p hv-refline"><span class="hv-refn">[9]</span>Y. Geifman and R. El-Yaniv, “Selective classification for deep neural networks,” arXiv:1705.08500, 2017.</p>
    </div>
    <div class="hv-col"></div>
  </div>
</div>`;

/** Both rendered pages, for static reuse outside the project scene. */
export const pdfPages = pageOne + pageTwo;

/* -------------------------------------------- startup / compile progress */
export const compileProgress = `
<div class="hv-startup" id="hvStartup">
  <div class="hv-su-head">
    <span class="hv-su-fic">${ic.fileText}</span>
    <span class="hv-su-title" id="hvSuTitle">Compiling</span>
    <span class="hv-su-pulse"></span>
    <span class="hv-su-count" id="hvSuCount">1/3 done</span>
  </div>
  <div class="hv-su-bars">
    <span class="hv-su-bar" id="hvBar1"></span>
    <span class="hv-su-bar" id="hvBar2"></span>
    <span class="hv-su-bar" id="hvBar3"></span>
  </div>
  <div class="hv-su-meta" id="hvSuMeta">1 running&nbsp;&nbsp;&middot;&nbsp;&nbsp;1 queued</div>
  <ol class="hv-su-list">
    <li class="hv-su-item" id="hvSt1">
      <span class="hv-su-ic"><span class="hv-su-check">${ic.checkCircle}</span><span class="hv-su-spin"></span><span class="hv-su-dot"></span></span>
      <span class="hv-su-txt"><span class="hv-su-label">Language analysis</span><span class="hv-su-detail">Current project revision analyzed</span></span>
      <span class="hv-su-status"></span>
    </li>
    <li class="hv-su-item" id="hvSt2">
      <span class="hv-su-ic"><span class="hv-su-check">${ic.checkCircle}</span><span class="hv-su-spin"></span><span class="hv-su-dot"></span></span>
      <span class="hv-su-txt"><span class="hv-su-label">Compiling</span><span class="hv-su-detail">Producing and verifying PDF output</span></span>
      <span class="hv-su-status"></span>
    </li>
    <li class="hv-su-item" id="hvSt3">
      <span class="hv-su-ic"><span class="hv-su-check">${ic.checkCircle}</span><span class="hv-su-spin"></span><span class="hv-su-dot"></span></span>
      <span class="hv-su-txt"><span class="hv-su-label">Rendering PDF</span><span class="hv-su-detail">Waiting for verified compile output</span></span>
      <span class="hv-su-status"></span>
    </li>
  </ol>
</div>`;

/* ------------------------------------------------------------- the pane */
export const previewPane = `
<div class="hv-preview">
  <div class="hv-pv-bar">
    <span class="hv-logs">${ic.scrollText}<span>Logs</span></span>
    <span class="hv-status only-done"><span class="hv-status-ok">${ic.checkCircle}</span><span class="hv-status-spin"></span><span class="hv-status-t" id="hvStatusT">1.9s</span></span>
    <span class="hv-pv-right">
      <span class="hv-ib-s only-done">${ic.listTree}</span>
      <span class="hv-ib-s only-done">${ic.search}</span>
      <span class="hv-ib-s">${ic.maximize}</span>
      <span class="hv-ib-s">${ic.zoomOut}</span>
      <span class="hv-zoom" id="hvZoomBtn"><span id="hvZoom">100%</span>${ic.chevD}</span>
      <span class="hv-ib-s">${ic.zoomIn}</span>
      <span class="hv-pgnav only-done">
        <span class="hv-ib-s">${ic.chevU}</span>
        <span class="hv-pgbox">1</span>
        <span class="hv-pgof">of 2</span>
        <span class="hv-ib-s">${ic.chevD}</span>
      </span>
      <span class="hv-pgmode only-done"><span class="hv-ib-s is-on">${ic.file}</span><span class="hv-ib-s">${ic.columns2}</span></span>
      <span class="hv-ib-s">${ic.contrast}</span>
      <span class="hv-ib-s">${ic.refresh}</span>
      <span class="hv-ib-s only-boot" id="hvDlBoot">${ic.download}</span>
      <span class="hv-ib-s only-boot">${ic.save}</span>
      <span class="hv-ib-s only-boot">${ic.externalLink}</span>
      <span class="hv-ib-s only-done">${ic.ellipsis}</span>
    </span>
  </div>
  <div class="hv-pv-body">
    ${compileProgress}
    <div class="hv-pv-pages" id="hvPages">${pageOne}${pageTwo}</div>
  </div>
  <div class="hv-zoommenu" id="hvZoomMenu">
    <div class="hv-zrow">Zoom in</div>
    <div class="hv-zrow">Zoom out</div>
    <div class="hv-zrow" id="hvFitWidth">Fit to width</div>
    <div class="hv-zrow">Fit to height</div>
    <div class="hv-zrow">Reset to 100%</div>
    <div class="hv-msep"></div>
    <div class="hv-zrow">25%</div>
    <div class="hv-zrow">50%</div>
    <div class="hv-zrow">75%</div>
    <div class="hv-zrow">100%</div>
    <div class="hv-zrow">150%</div>
    <div class="hv-zrow">200%</div>
    <div class="hv-zrow">400%</div>
  </div>
</div>`;
