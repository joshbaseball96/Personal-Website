// ---------------------------------------------------------------------------
// DATA — this is the whole map. Add/edit stations and descriptions here.
//
// Every line branches off the hub on a 45° diagonal for one stop, then runs
// perfectly straight (horizontal) for every stop after that — 3 lines run
// out to the left, 3 to the right, stacked in upper/middle/lower tiers:
//   side: -1 = left, 1 = right
//   vert: -1 = upper tier, 0 = middle tier (straight out, no bend), 1 = lower tier
//   labelDir: only needed when vert is 0 (which side of the straight line
//             the label sits on, since there's no vert sign to reuse)
// ---------------------------------------------------------------------------
const CENTER = { x: 3450, y: 700 }; // dead center of the viewBox below
const DIAG_DIST = 650; // hub -> first station (or hub -> bend point)
const STEP = 600; // spacing between subsequent stations
const HUB_RADIUS = 240;

const LINES = [
  {
    id: "career",
    number: 1,
    name: "Career Line",
    blurb: "Every job and internship I've worked, in order.",
    color: "#0039A6",
    layout: { side: -1, vert: -1 }, // upper-left, then straight left
    stations: [
      {
        name: "Sanofi",
        dates: "May 2025 – April 2026",
        desc: "Worked as a Data Engineering Co-Op on the Global MSAT Data Science & Digital Transformation team. Used Python, SQL, and other scripting languages to clean and transform raw manufacturing data, often converting large CSV files into structured formats for analysis. Supported engineers by writing and improving JSL scripts to enhance visualizations and workflows in JMP, and helped maintain documentation for ETL pipelines. Also contributed to an internal AI project that converts natural language queries into SQL, making it easier for teams to access data without writing code.",
        media: [
          { type: "image", src: "assets/sanofi/office.jpg", caption: "At the Sanofi AI CoE." },
          { type: "image", src: "assets/sanofi/bowling.jpg", caption: "Team bowling night." },
          { type: "image", src: "assets/sanofi/hangout.jpg", caption: "Team hangout." },
          { type: "image", src: "assets/sanofi/lunch-hockey.jpg", caption: "Ice hockey on my lunch break." },
          { type: "image", src: "assets/sanofi/hockey-team.jpg", caption: "Hockey with the whole team after work." },
        ],
      },
      {
        name: "Loora",
        dates: "May 2024 – July 2024",
        desc: "Worked as a Software Engineering Intern at Loora, developing four tabs on the development platform using React, JavaScript, HTML, and CSS, optimizing the support portal for more efficient ticketing management. Also collaborated with the team to build interactive, user-friendly support pages, including a dedicated page for viewing, editing, and adding characters, improving overall platform functionality.",
        media: [
          { type: "image", src: "assets/loora/loora.jpg", caption: "My team at Loora." },
        ],
      },
      {
        name: "Teaching Assistant",
        dates: "January 2024 – April 2024",
        desc: "Worked as a Teaching Assistant for APSC 142 (Intro to Computer Science), helping over 200 students understand core programming concepts in C. Facilitated weekly labs, creating a collaborative learning environment and strengthening students' technical and communication skills.",
      },
      {
        name: "NutriAg",
        dates: "May 2023 – August 2023",
        desc: "Analyzed company reports using Microsoft Dynamics NAV, identifying trends in expense management for over 50 employees and assisted in data entry/report generation to ensure accurate output for decision-making. Optimized payroll, operational, and administrative costs by modeling government support for research and development activities, enhancing cost efficiency across departments.",
      },
      {
        name: "Lifeguard & Swim Instructor",
        desc: "Worked from 2021 until 2023 as both a lifeguard and swim instructor, across both indoor and outdoor pools. Guarded 3 different pools and worked in guarding teams that ranged anywhere from 2 to 12 lifeguards depending on the day. As a swim instructor, taught over 100 students across all 6 levels of swimming, from beginners to the most advanced classes.",
        media: [
          { type: "image", src: "assets/lifeguard/aquatics.png", caption: "Me at work." },
        ],
      },
    ],
  },
  {
    id: "toolbox",
    number: 2,
    name: "Toolbox Line",
    blurb: "The languages, tools, and skills I work with.",
    color: "#00933C",
    layout: { side: -1, vert: 0, labelDir: -1 }, // straight left (middle tier)
    stations: [
      { name: "Coding", desc: "Python, C, C++, Java, JavaScript, and HTML - core languages across systems, web, and general-purpose programming." },
      { name: "AI & Web Dev", desc: "Applied AI/ML work, including an internal tool that converts natural language queries into SQL, plus building interactive front-ends with React." },
      { name: "Data", desc: "SQL and R for querying, managing, and analyzing data." },
      { name: "Hardware & Numerical", desc: "VHDL and Assembly for digital circuit design, plus MATLAB for numerical computing and signal processing." },
      { name: "Business & Office", desc: "Microsoft Dynamics NAV and Office (Excel, Word, PowerPoint), plus communication, collaboration, organization, and time management." },
    ],
  },
  {
    id: "personal",
    number: 3,
    name: "Personal Line",
    blurb: "Hobbies and passion projects outside of work.",
    secret: true,
    color: "#FCCC0A",
    layout: { side: -1, vert: 1 }, // lower-left, then straight left
    stations: [
      {
        name: "Waterbiking Co.",
        desc: "Founded my own waterbiking company back in grade 11, after trying one out and realizing how fun it was to ride - and how much demand there was. I found a manufacturer and started selling them, tinkering with my own upgrades and adjustments along the way. Spent two summers heading to the beach every single day to advertise and hand out business cards.",
        media: [
          { type: "image", src: "assets/waterbiking/dock.jpg", caption: "One of the bikes, ready to launch off the dock." },
          { type: "image", src: "assets/waterbiking/closeup.jpg", caption: "A closer look at the setup." },
          { type: "image", src: "assets/waterbiking/toronto-ride.jpg", caption: "Out on Lake Ontario, Toronto skyline in the background." },
          { type: "video", src: "assets/waterbiking/demo.mp4", caption: "Taking one out for a spin." },
        ],
      },
      {
        name: "Baseball League",
        desc: "Started as a Thursday night callout - my friend Josh and I challenged each other's friend groups to a game: my friends vs. his friends. It went well enough that I made a group chat and turned it into a running league, gathering everyone for scrimmages twice a week. Played all through 2025 and 2026, wrapping up the second season in August 2026.",
        media: [
          { type: "image", src: "assets/baseball/team-photo.jpg", caption: "The crew after a game." },
          { type: "video", src: "assets/baseball/highlight.mov", caption: "Highlights from a game night." },
          { type: "image", src: "assets/baseball/2026-season-wrap.jpeg", caption: "The full crew wrapping up the 2026 season." },
          { type: "image", src: "assets/baseball/2026-at-the-plate.jpeg", caption: "Catching behind the plate, 2026 season." },
          { type: "image", src: "assets/baseball/2026-catcher-portrait.jpeg", caption: "Suited up behind the plate, 2026 season." },
          { type: "image", src: "assets/baseball/2026-mvp-poster.png", caption: "2026 Finals MVP: Rohan, with an 8th-inning home run." },
        ],
      },
      {
        name: "Karate",
        desc: "Started karate at the youngest age the school would let me, and stuck with it for nearly a dozen years - through every belt - before finally earning my black belt.",
        media: [
          { type: "image", src: "assets/karate/started.jpg", caption: "Just starting out, as young as they'd let me." },
          { type: "image", src: "assets/karate/training.jpg", caption: "Years of training in." },
          { type: "image", src: "assets/karate/blackbelt.jpg", caption: "Earning my black belt after nearly a dozen years." },
        ],
      },
    ],
  },
  {
    id: "education",
    number: 4,
    name: "Education & Awards Line",
    blurb: "My schooling and the awards I've earned along the way.",
    color: "#B933AD",
    layout: { side: 1, vert: -1 }, // upper-right, then straight right
    stations: [
      {
        name: "Queen's University",
        desc: "Studying Applied Mathematics and Computer Engineering at Queen's University in Kingston, Ontario - expected graduation 2027. Recipient of the Stanley and Jean Pitt Distinguished Alumni Entrance Scholarship (2022). Relevant courses: Data Structures, Digital and Mathematical Logic, Real Analysis, Object-Oriented Programming, Computer Architecture, Complex Analysis, Digital Systems, and Linear Algebra.",
        media: [
          { type: "video", src: "assets/queens/apsc101-robotic-arm.mp4", caption: "My robotic arm design from a first-year engineering group project, APSC 101." },
          { type: "image", src: "assets/queens/apsc103-soundproof-door.jpg", caption: "A soundproof door built for Juniper Cafe, a new cafe in Kingston - APSC 103 group project." },
          { type: "image", src: "assets/queens/alumni-networking-summit-1.jpg", caption: "At the Alumni Networking Summit." },
          { type: "image", src: "assets/queens/alumni-networking-summit-2.jpg", caption: "At the Alumni Networking Summit." },
          { type: "image", src: "assets/queens/homecoming.jpg", caption: "With my housemates at homecoming." },
          { type: "image", src: "assets/queens/st-patricks-day.jpg", caption: "St. Patrick's Day." },
        ],
      },
      {
        name: "Dean's Scholar",
        desc: "Awarded to engineering students who achieve a GPA of over 3.5 in both the Fall and Winter semesters. Received this award in 2023 and 2024.",
      },
      {
        name: "QEC 3rd Place",
        desc: "Placed 3rd at the Queen's Engineering Competition.",
        linkStation: { lineId: "leadership", stationName: "QEC", label: "More about my QEC experience →" },
      },
    ],
  },
  {
    id: "leadership",
    number: 5,
    name: "Leadership & Communities Line",
    blurb: "Groups and communities I've led or been part of.",
    color: "#FF6319",
    layout: { side: 1, vert: 0, labelDir: 1 }, // straight right (middle tier)
    stations: [
      {
        name: "QEC",
        dates: "2024 – Present",
        desc: "Progressed through multiple roles within the Queen's Engineering Competition, beginning as a participant in 2024, serving as a judge in 2025, and being selected as Financial Director in 2026. In my current role, I oversee the competition's budget, managing financial planning and resource allocation to support the successful execution of the event.",
        media: [
          { type: "video", src: "assets/qec/video.mov", caption: "Highlights from the competition." },
          { type: "image", src: "assets/qec/participating-1.jpg", caption: "Participating in 2024." },
          { type: "image", src: "assets/qec/participating-2.jpg", caption: "Participating in 2024." },
          { type: "image", src: "assets/qec/participating-3.jpg", caption: "Participating in 2024." },
          { type: "image", src: "assets/qec/judging-1.jpg", caption: "Judging in 2025." },
          { type: "image", src: "assets/qec/judging-2.jpg", caption: "Judging in 2025." },
          { type: "image", src: "assets/qec/judging-3.jpg", caption: "Judging in 2025." },
        ],
      },
      {
        name: "QDAA",
        dates: "May 2024 – April 2025",
        desc: "Software Engineering Coordinator for the Queen's Data Analytics Association, starting May 2024. Lead SQL and R lectures, helping members improve their coding skills and apply them to real-world projects. Manage the development of multiple projects, including an object-oriented Rubik's Cube solver in Java, which demonstrates advanced problem-solving and algorithmic implementation.",
        media: [
          { type: "image", src: "assets/qdaa/qdaa.jpg", caption: "With the Queen's Data Analytics Association." },
        ],
      },
      {
        name: "Tailor Made",
        dates: "June 2026",
        desc: "Worked as staff on a Tailor Made trip to Israel, supporting a group of 40 participants ranging in age from 18 to 22 throughout the program.",
        media: [
          { type: "image", src: "assets/tailormade/tailormade1.jpg", caption: "With the group on the trip." },
          { type: "image", src: "assets/tailormade/tailormade2.jpg", caption: "With the group on the trip." },
        ],
      },
      {
        name: "QUBE",
        dates: "2024 – Present",
        desc: "Started as a Capital Analyst for Queen's University Business and Engineering, conducting equity and industry research, developing stock pitches, and presenting investment strategies to support portfolio management. Later promoted to Portfolio Manager, where I now guide investment strategy and oversee portfolio decisions with greater ownership over research direction and execution.",
      },
      {
        name: "TAMID",
        desc: "Education General Member of TAMID Group, a nonprofit that connects student business leaders with entrepreneurs and innovators abroad.",
      },
    ],
  },
  {
    id: "growth",
    number: 6,
    name: "Expansion Line",
    blurb: "What's coming next - always under construction.",
    color: "#EE352E",
    layout: { side: 1, vert: 1 }, // lower-right, then straight right
    stations: [
      { name: "Coming Soon", desc: "Always growing - new stops added in every direction as new chapters come along. Check back soon." },
    ],
    extension: true, // draws a dashed "more coming" stub past the last real station
  },
];

const HUB_NAME = "JOSHUA AZBEL";

// Scrolling ticker at the bottom of the page — reference a line by its id.
const ADVISORIES = [
  { lineId: "career", text: "Service running with delays as I head back to complete my final year of engineering." },
  { lineId: "growth", text: "New line, always expanding - service growing in every direction as new stops come online." },
];

// ---------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------
const SVG_NS = "http://www.w3.org/2000/svg";
const DIAG = Math.SQRT1_2; // cos/sin of 45°

function el(tag, attrs) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const k in attrs) node.setAttribute(k, attrs[k]);
  return node;
}

// Returns the {x,y} of the Nth stop (0-indexed) along a line: each line
// leaves the hub on a 45° diagonal for one stop (or, for the middle tier
// where vert is 0, straight out with no bend), then runs perfectly straight
// for every stop after that.
function stationPoint(line, index) {
  const { layout } = line;
  const elbow = layout.vert === 0
    ? { x: CENTER.x + layout.side * DIAG_DIST, y: CENTER.y }
    : {
        x: CENTER.x + layout.side * DIAG_DIST * DIAG,
        y: CENTER.y + layout.vert * DIAG_DIST * DIAG,
      };
  if (index === 0) return elbow;
  return { x: elbow.x + layout.side * index * STEP, y: elbow.y };
}

function lastIndex(line) {
  return line.stations.length - 1;
}

// Picks readable text color (dark or light) for a given line color background.
function textColorFor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? "#1c1e21" : "#fdfcf9";
}

// Splits long station names onto two lines, breaking at the space nearest
// the midpoint, so labels stay narrow enough not to run into neighboring
// lines/stations.
function wrapLabel(name) {
  if (name.length <= 16) return [name];
  const mid = name.length / 2;
  let bestIdx = -1;
  let bestDist = Infinity;
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      const dist = Math.abs(i - mid);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    }
  }
  if (bestIdx === -1) return [name];
  return [name.slice(0, bestIdx).trim(), name.slice(bestIdx + 1).trim()];
}

// ---------------------------------------------------------------------------
// Build the map
// ---------------------------------------------------------------------------
function buildMap() {
  const svg = document.getElementById("subwayMap");

  // Trunk lines (drawn first, so station circles sit on top)
  LINES.forEach((line) => {
    const points = [CENTER];
    for (let i = 0; i <= lastIndex(line); i++) points.push(stationPoint(line, i));

    const trunk = el("polyline", {
      points: points.map((p) => `${p.x},${p.y}`).join(" "),
      fill: "none",
      stroke: line.color, "stroke-width": 32,
      "stroke-linecap": "round", "stroke-linejoin": "round",
      class: "line-track" + (line.secret ? " secret-track" : ""),
      "data-line": line.id,
    });
    svg.appendChild(trunk);

    if (line.extension) {
      const extStart = stationPoint(line, lastIndex(line));
      const extEnd = stationPoint(line, lastIndex(line) + 1);
      const ext = el("line", {
        x1: extStart.x, y1: extStart.y, x2: extEnd.x, y2: extEnd.y,
        stroke: line.color, "stroke-width": 22, "stroke-linecap": "round",
        "stroke-dasharray": "2 32", opacity: 0.5, "data-line": line.id,
      });
      svg.appendChild(ext);

      const extDot = el("circle", {
        cx: extEnd.x, cy: extEnd.y, r: 35, fill: "none",
        stroke: line.color, "stroke-width": 10, "stroke-dasharray": "8 11",
        class: "station-dot ext-dot",
      });
      svg.appendChild(extDot);

      const extLabel = el("text", {
        x: extEnd.x, y: extEnd.y, class: "station-label ext-label",
        "text-anchor": "middle", dy: 90,
      });
      extLabel.textContent = "+ more soon";
      svg.appendChild(extLabel);
    }
  });

  // Stations
  LINES.forEach((line) => {
    const { layout } = line;
    line.stations.forEach((station, i) => {
      const p = stationPoint(line, i);

      const group = el("g", {
        id: `station-${line.id}-${i}`,
        class: "station",
        tabindex: "0",
        role: "button",
        "aria-label": station.name,
        "data-line": line.id,
      });

      const dot = el("circle", {
        cx: p.x, cy: p.y, r: 48, fill: "#fdfcf9",
        stroke: line.color, "stroke-width": 16, class: "station-dot",
      });
      group.appendChild(dot);

      // Labels sit above or below the (now always horizontal) track — a
      // single consistent direction per line, so labels never fight the track.
      const labelGap = 112;
      const lineDy = 58;
      const dir = layout.vert !== 0 ? layout.vert : layout.labelDir;
      const lx = p.x;
      const ly = p.y + dir * labelGap;
      const anchor = "middle";

      const lines = wrapLabel(station.name);
      const label = el("text", {
        x: lx, y: ly, class: "station-label",
        "text-anchor": anchor, "dominant-baseline": "middle",
      });
      const startDy = lines.length > 1 ? -lineDy / 2 : 0;
      lines.forEach((lineText, idx) => {
        const tspan = el("tspan", { x: lx, dy: idx === 0 ? startDy : lineDy });
        tspan.textContent = lineText;
        label.appendChild(tspan);
      });
      group.appendChild(label);

      group.addEventListener("click", () => selectStation(group, line, station));
      group.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectStation(group, line, station);
        }
      });

      svg.appendChild(group);
    });
  });

  buildTrains(svg);

  // Interchange hub (drawn last, on top of everything, name sits inside it
  // so it never crosses a line)
  const hub = el("circle", {
    cx: CENTER.x, cy: CENTER.y, r: HUB_RADIUS, fill: "#fdfcf9",
    stroke: "#1c1e21", "stroke-width": 22, class: "hub-dot",
  });
  svg.appendChild(hub);

  const hubWords = HUB_NAME.split(" ");
  const hubLabel = el("text", {
    x: CENTER.x, y: CENTER.y, class: "hub-label",
    "text-anchor": "middle", "dominant-baseline": "middle",
  });
  hubWords.forEach((word, idx) => {
    const dy = (idx - (hubWords.length - 1) / 2) * 64;
    const tspan = el("tspan", { x: CENTER.x, dy: idx === 0 ? dy : 64 });
    tspan.textContent = word;
    hubLabel.appendChild(tspan);
  });
  svg.appendChild(hubLabel);

  // Line number bullets — sit on each trunk just outside the hub, like a
  // route roundel on a real transit map.
  LINES.forEach((line) => {
    const elbow = stationPoint(line, 0);
    const dx = elbow.x - CENTER.x;
    const dy = elbow.y - CENTER.y;
    const mag = Math.hypot(dx, dy);
    const bx = CENTER.x + (dx / mag) * (HUB_RADIUS + 95);
    const by = CENTER.y + (dy / mag) * (HUB_RADIUS + 95);

    const bullet = el("circle", {
      cx: bx, cy: by, r: 38, fill: line.color,
      stroke: "#fdfcf9", "stroke-width": 5, class: "line-bullet",
    });
    svg.appendChild(bullet);

    const bulletLabel = el("text", {
      x: bx, y: by, class: "bullet-label",
      "text-anchor": "middle", "dominant-baseline": "middle",
      fill: textColorFor(line.color),
    });
    bulletLabel.textContent = line.number;
    svg.appendChild(bulletLabel);
  });
}

// ---------------------------------------------------------------------------
// Live trains — one per line. Each train parks at the last stop on its
// track (end of the line) until you're looking at one of its stations, at
// which point it drives over and waits there; closing the panel sends it
// back to the end of the line.
// ---------------------------------------------------------------------------
const TRAIN_REDUCED_MOTION = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const trainRegistry = {}; // lineId -> { el, parked: {x,y,angle} }

// The angle a train sitting at station index i should face, matching the
// track segment it arrives on.
function stationAngle(line, i) {
  const prev = i === 0 ? CENTER : stationPoint(line, i - 1);
  const cur = stationPoint(line, i);
  return Math.atan2(cur.y - prev.y, cur.x - prev.x) * (180 / Math.PI);
}

function placeTrain(entry, point, angle) {
  entry.el.style.transform = `translate(${point.x}px, ${point.y}px) rotate(${angle}deg)`;
  entry.current = { x: point.x, y: point.y, angle };
}

// Adjusts `angle` to within 180° of `target` so interpolating between them
// always takes the shorter rotational path (no 350°-of-spin surprises).
function angleNear(angle, target) {
  let a = angle;
  while (a - target > 180) a -= 360;
  while (a - target < -180) a += 360;
  return a;
}

// Drops a small dot of the line's color at a train's current position,
// which then fades and shrinks itself away — the light trail left behind
// a moving train.
function spawnTrailDot(svg, x, y, color) {
  const dot = el("circle", { cx: x, cy: y, r: 16, fill: color, class: "train-trail-dot" });
  dot.addEventListener("animationend", () => dot.remove());
  svg.appendChild(dot);
}

const TRAIN_TRAVEL_MS = 900;
const TRAIL_INTERVAL_MS = 40;

// Tweens a train from wherever it currently sits to a new point/angle over
// TRAIN_TRAVEL_MS, laying down a fading trail as it goes. Cancels any travel
// already in progress for that train so re-clicking mid-drive redirects it
// smoothly instead of fighting the old animation.
function animateTrain(entry, toPoint, toAngle) {
  if (entry.animFrame) cancelAnimationFrame(entry.animFrame);

  const from = entry.current;
  const alreadyThere = Math.hypot(toPoint.x - from.x, toPoint.y - from.y) < 0.5
    && Math.abs(angleNear(toAngle, from.angle) - from.angle) < 0.5;
  if (alreadyThere || TRAIN_REDUCED_MOTION()) {
    placeTrain(entry, toPoint, toAngle);
    return;
  }

  const svg = document.getElementById("subwayMap");
  const fromAngle = angleNear(from.angle, toAngle);
  const start = performance.now();
  let lastTrail = 0;

  function frame(now) {
    const t = Math.min(1, (now - start) / TRAIN_TRAVEL_MS);
    const eased = 1 - Math.pow(1 - t, 3);
    const x = from.x + (toPoint.x - from.x) * eased;
    const y = from.y + (toPoint.y - from.y) * eased;
    const angle = fromAngle + (toAngle - fromAngle) * eased;

    entry.el.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
    entry.current = { x, y, angle };

    if (t < 1 && now - lastTrail > TRAIL_INTERVAL_MS) {
      spawnTrailDot(svg, x, y, entry.color);
      lastTrail = now;
    }

    entry.animFrame = t < 1 ? requestAnimationFrame(frame) : null;
  }
  entry.animFrame = requestAnimationFrame(frame);
}

// Drives the given line's train to one of its stations, and sends every
// other line's train back to park at its terminus. Pass activeLineId as
// null to park everything (nothing selected / panel closed).
function updateTrains(activeLineId, activeIndex) {
  LINES.forEach((line) => {
    const entry = trainRegistry[line.id];
    if (!entry) return;
    if (line.id === activeLineId && activeIndex != null) {
      animateTrain(entry, stationPoint(line, activeIndex), stationAngle(line, activeIndex));
    } else {
      animateTrain(entry, entry.parked, entry.parked.angle);
    }
  });
}

function buildTrains(svg) {
  const reduced = TRAIN_REDUCED_MOTION();

  LINES.forEach((line) => {
    const terminusIndex = lastIndex(line);
    const parked = { ...stationPoint(line, terminusIndex), angle: stationAngle(line, terminusIndex) };

    const train = el("g", { class: "train" + (reduced ? " train-static" : "") });
    const body = el("rect", {
      x: -46, y: -26, width: 92, height: 52, rx: 16,
      fill: line.color, stroke: "#fdfcf9", "stroke-width": 4,
      class: "train-body",
    });
    const window1 = el("rect", { x: -28, y: -12, width: 22, height: 20, rx: 5, class: "train-window" });
    const window2 = el("rect", { x: 6, y: -12, width: 22, height: 20, rx: 5, class: "train-window" });
    train.appendChild(body);
    train.appendChild(window1);
    train.appendChild(window2);
    svg.appendChild(train);

    trainRegistry[line.id] = { el: train, parked, color: line.color };
    placeTrain(trainRegistry[line.id], parked, parked.angle);
  });
}

// ---------------------------------------------------------------------------
// Legend
// ---------------------------------------------------------------------------
function buildLegend() {
  const legend = document.getElementById("legend");
  LINES.forEach((line) => {
    const item = document.createElement("button");
    item.className = "legend-item";
    item.dataset.line = line.id;
    item.style.setProperty("--line-color", line.color);
    item.innerHTML = `<span class="line-badge" style="background:${line.color}; color:${textColorFor(line.color)}">${line.number}</span><span class="legend-label">${line.name}</span>`;
    item.addEventListener("click", () => toggleHighlight(line.id, item));
    legend.appendChild(item);
  });
}

// Plain-language key spelling out what each line represents, one sentence
// apiece, since the color-only legend up top isn't always enough on its own.
// A simple check (drawn, not emoji) for good service, or an exclamation
// for a line currently carrying a service advisory below.
function statusIconHtml(hasIssue) {
  const cls = hasIssue ? "status-warn" : "status-ok";
  const label = hasIssue ? "Service advisory" : "Good service";
  const glyph = hasIssue
    ? `<line x1="10" y1="5.5" x2="10" y2="11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
       <circle cx="10" cy="14" r="1" fill="currentColor" />`
    : `<path d="M6 10.2l2.5 2.5L14 7.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />`;
  return `
    <span class="legend-key-status ${cls}" title="${label}" aria-label="${label}">
      <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
        <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" stroke-width="1.6" />
        ${glyph}
      </svg>
    </span>
  `;
}

function buildLegendKey() {
  const list = document.getElementById("legendKeyList");
  list.innerHTML = LINES.map((line) => {
    const hasIssue = ADVISORIES.some((a) => a.lineId === line.id);
    return `
    <li class="legend-key-item">
      <span class="legend-key-badge" style="background:${line.color}; color:${textColorFor(line.color)}">${line.number}</span>
      <span class="legend-key-text"><span class="legend-key-name">${line.name}:</span> <span class="legend-key-desc">${line.blurb}</span></span>
      ${statusIconHtml(hasIssue)}
    </li>
  `;
  }).join("");
}

let activeHighlight = null;
function toggleHighlight(lineId, itemEl) {
  const svg = document.getElementById("subwayMap");
  const allLegendItems = document.querySelectorAll(".legend-item");

  if (activeHighlight === lineId) {
    activeHighlight = null;
    svg.classList.remove("has-highlight");
    allLegendItems.forEach((it) => it.classList.remove("legend-active"));
    return;
  }

  activeHighlight = lineId;
  svg.classList.add("has-highlight");
  allLegendItems.forEach((it) => it.classList.toggle("legend-active", it.dataset.line === lineId));

  svg.querySelectorAll("[data-line]").forEach((node) => {
    node.classList.toggle("dimmed", node.dataset.line !== lineId);
  });
  svg.querySelectorAll(".station").forEach((node) => {
    node.classList.toggle("dimmed", node.dataset.line !== lineId);
  });
}

// ---------------------------------------------------------------------------
// Detail panel
// ---------------------------------------------------------------------------
let selectedStationEl = null;

function selectStation(groupEl, line, station) {
  if (selectedStationEl) selectedStationEl.classList.remove("selected");
  groupEl.classList.add("selected");
  selectedStationEl = groupEl;
  showDetail(line, station);
  updateTrains(line.id, line.stations.indexOf(station));
}

function clearSelection() {
  if (selectedStationEl) {
    selectedStationEl.classList.remove("selected");
    selectedStationEl = null;
  }
}

// Jumps the detail panel to another station, e.g. a station on one line
// referencing the fuller story told on another (station.linkStation).
function jumpToStation(lineId, stationName) {
  const line = LINES.find((l) => l.id === lineId);
  if (!line) return;
  const index = line.stations.findIndex((s) => s.name === stationName);
  if (index === -1) return;
  const groupEl = document.getElementById(`station-${lineId}-${index}`);
  if (!groupEl) return;
  selectStation(groupEl, line, line.stations[index]);
}

function mediaItemHtml(item) {
  const media = item.type === "video"
    ? `<video src="${item.src}" controls playsinline></video>`
    : `<img src="${item.src}" alt="${item.caption || ""}" loading="lazy" />`;
  return `
    <figure class="detail-media-item">
      ${media}
      ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ""}
    </figure>
  `;
}

// ---------------------------------------------------------------------------
// Door sound — a synthesized three-note "ding-dang-dong" bell chime, played
// whenever the doors open. Generated with the Web Audio API so there's no
// audio file to load.
// ---------------------------------------------------------------------------
let audioCtx = null;
function getAudioCtx() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  if (!audioCtx) audioCtx = new Ctx();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

// A cheap feedback-delay "reverb": anything connected to the returned bus
// gets a short, damped repeat trail, so the chime has some air around it
// instead of stopping dead. Self-disconnects once the tail has died out.
function createReverbBus(ctx) {
  const input = ctx.createGain();
  const delay = ctx.createDelay(1);
  delay.delayTime.value = 0.16;
  const feedback = ctx.createGain();
  feedback.gain.value = 0.34;
  const damp = ctx.createBiquadFilter();
  damp.type = "lowpass";
  damp.frequency.value = 2400;
  const wet = ctx.createGain();
  wet.gain.value = 0.55;

  input.connect(delay);
  delay.connect(damp);
  damp.connect(feedback);
  feedback.connect(delay);
  delay.connect(wet);
  wet.connect(ctx.destination);

  setTimeout(() => {
    [input, delay, feedback, damp, wet].forEach((n) => n.disconnect());
  }, 2600);

  return input;
}

// A single bell-like note: a sine fundamental, a quiet octave overtone, and
// an even quieter inharmonic fifth (real bells ring slightly "off" — that's
// what makes them sound like bells instead of beeps). Panned across the
// stereo field and sent into the reverb bus for some depth.
function playChimeTone(ctx, freq, startTime, duration, peak, pan, reverbBus) {
  const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
  if (panner) panner.pan.value = pan;

  [
    { mult: 1, level: peak },
    { mult: 2, level: peak * 0.16 },
    { mult: 1.5, level: peak * 0.07 },
  ].forEach(({ mult, level }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq * mult;
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(level, startTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.connect(gain);
    gain.connect(panner || ctx.destination);
    if (!panner) gain.connect(reverbBus);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  });

  if (panner) {
    panner.connect(ctx.destination);
    panner.connect(reverbBus);
  }
}

function playDoorSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const reverbBus = createReverbBus(ctx);
  playChimeTone(ctx, 783.99, now, 0.55, 0.25, -0.35, reverbBus); // ding — G5, left
  playChimeTone(ctx, 659.25, now + 0.24, 0.6, 0.22, 0, reverbBus); // dang — E5, center
  playChimeTone(ctx, 523.25, now + 0.48, 0.95, 0.25, 0.35, reverbBus); // dong — C5, right
}

// Sound on/off toggle — preference remembered per visitor via localStorage.
const SOUND_KEY = "doorSoundEnabled";
function isSoundEnabled() {
  try {
    const stored = localStorage.getItem(SOUND_KEY);
    return stored === null ? true : stored === "true";
  } catch {
    return true;
  }
}

function setSoundEnabled(enabled) {
  try {
    localStorage.setItem(SOUND_KEY, String(enabled));
  } catch {
    // ignore - storage unavailable, preference just won't persist
  }
  updateSoundToggleUI(enabled);
}

function updateSoundToggleUI(enabled) {
  const btn = document.getElementById("soundToggle");
  if (!btn) return;
  btn.classList.toggle("is-on", enabled);
  btn.setAttribute("aria-checked", String(enabled));
  document.getElementById("soundSwitchRow")?.classList.toggle("is-on", enabled);
  const label = enabled ? "Door chime is on, tap to mute" : "Door chime is off, tap to unmute";
  btn.title = label;
  btn.setAttribute("aria-label", label);
}

document.getElementById("soundToggle").addEventListener("click", () => {
  setSoundEnabled(!isSoundEnabled());
});
updateSoundToggleUI(isSoundEnabled());

function showDetail(line, station) {
  const panel = document.getElementById("detailPanel");
  const content = document.getElementById("detailContent");

  panel.style.setProperty("--door-color", line.color);
  playDoorSound();

  content.innerHTML = `
    <p class="detail-line" style="color:${line.color}">${line.name}</p>
    <h3 class="detail-title">${station.name}</h3>
    ${station.dates ? `<p class="detail-dates">${station.dates}</p>` : ""}
    <p class="detail-desc">${station.desc}</p>
    ${station.link ? `<a class="detail-link" href="${station.link}" target="_blank" rel="noopener">View project →</a>` : ""}
    ${station.linkStation ? `<button type="button" class="detail-link" onclick="jumpToStation('${station.linkStation.lineId}', '${station.linkStation.stationName.replace(/'/g, "\\'")}')">${station.linkStation.label}</button>` : ""}
    ${station.media ? `<div class="detail-media">${station.media.map(mediaItemHtml).join("")}</div>` : ""}
  `;
  panel.classList.add("open");
  document.getElementById("detailBackdrop").classList.add("open");
  document.body.classList.add("panel-open");
}

function closeDetail() {
  document.getElementById("detailPanel").classList.remove("open");
  document.getElementById("detailBackdrop").classList.remove("open");
  document.body.classList.remove("panel-open");
  clearSelection();
  updateTrains(null, null);
}

document.getElementById("closePanel").addEventListener("click", closeDetail);
document.getElementById("detailBackdrop").addEventListener("click", closeDetail);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDetail();
});

// ---------------------------------------------------------------------------
// Service advisory ticker
// ---------------------------------------------------------------------------
function buildAdvisories() {
  const track = document.getElementById("advisoryMessages");
  const itemsHtml = ADVISORIES.map((advisory) => {
    const line = LINES.find((l) => l.id === advisory.lineId);
    return `<span class="advisory-item">
      <span class="advisory-badge" style="background:${line.color}; color:${textColorFor(line.color)}">${line.number}</span>
      ${line.name}: ${advisory.text}
    </span>`;
  }).join("");
  // Duplicated back-to-back so the CSS marquee (translateX -50%) loops seamlessly.
  track.innerHTML = itemsHtml + itemsHtml;
}

document.getElementById("closeAdvisory").addEventListener("click", () => {
  document.getElementById("advisoryBar").classList.add("dismissed");
});

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------
buildMap();
buildLegend();
buildLegendKey();
buildAdvisories();
document.getElementById("year").textContent = new Date().getFullYear();

// On small screens the map is bigger than the viewport and starts scrolled
// to its top-left corner - re-center it on the hub so visitors land
// somewhere oriented instead of in a random corner of the diagram.
if (window.matchMedia("(max-width: 800px)").matches) {
  document.querySelector(".hub-dot")?.scrollIntoView({ block: "center", inline: "center" });
}
