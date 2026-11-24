// Alien Field Notes: The Two Day Earth Review — one line.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Judge criteria, most important first (competition.yaml): (1) reads as a
// one-line review of planet Earth written by an alien tourist, outside view
// clear; (2) funny, the laugh comes from the alien's angle on ordinary Earth
// life, not a joke bolted onto the premise; (3) original — NOT the first
// obvious thought about traffic, gravity, money or weather; (4) sounds like
// a review a tourist would actually leave, with a verdict, a rating or a
// closing remark, in a single line; (5) tight, every word earns its place,
// punch lands at the end. One clean joke beats several stacked ones.
//
// Candidates drafted (14), rejected for modal/weak reasons:
//   1. "Earth: great food, terrible traffic, 3/5 stars, would not visit
//      again." — REJECTED: the modal entry; traffic is explicitly named in
//      C3 as a first obvious thought.
//   2. "The beaches are lovely, but every local stares at a glowing
//      rectangle while ignoring the sunset they flew 400 miles to see. Two
//      stars." — REJECTED: glowing-rectangle screen joke is the field's
//      second most common framing; punch is the rating, not the joke.
//   3. "Visited Earth for the weekend. The natives queue politely for
//      coffee, then scream at each other in metal boxes about the queue.
//      Four stars, would orbit again." — REJECTED: metal boxes = cars =
//      traffic by another name; fails C3.
//   4. "Earth review: the food is excellent, the locals pay to sit in dark
//      rooms watching other people pretend to be in danger. Five stars." —
//      REJECTED: cinema angle is decent, but "pay to sit in dark rooms"
//      needs a beat of decoding; the punch explains itself.
//   5. "Lovely planet, but the dominant species invented a machine that
//      washes dishes and still argues about whose turn it is to load it.
//      Three stars." — CLOSE VARIANT of the winner: same joke, but the
//      rating trails after the punch instead of framing it, so the line
//      ends on "Three stars" and the punch lands mid-line; fails C5.
//   6. "The locals built machines to fly, then invented a ritual called
//      the middle seat. I have seen war zones with more legroom. One
//      star." — RUNNER-UP: concrete (middle seat), alien angle, verdict at
//      the end; but "war zones" reaches for shock value the brief says
//      does not count, and it stacks two jokes (middle seat + legroom).
//   7. "Earth: the inhabitants carry a small glass slab that knows
//      everything, and use it mainly to argue with strangers. Would not
//      recommend the slab. Four stars." — REJECTED: glass-slab phone joke,
//      modal; also the closing remark repeats the joke instead of landing it.
//   8. "Came to study the dominant species. They queue for an hour to buy
//      a drink named after its size, then complain it is too big. Three
//      stars." — REJECTED: coffee-size joke is clever but needs the reader
//      to know Starbucks sizing; the laugh depends on outside knowledge,
//      not the alien angle.
//   9. "The planet is beautiful, but the locals pay $9 for water in a
//      bottle while standing next to a tap. Two stars, would not rehydrate
//      here." — REJECTED: money is explicitly named in C3 as a first
//      obvious thought.
//  10. "Earth review: the locals invented the snooze button, a machine that
//      lets them be late on purpose, then invented the alarm to punish
//      themselves for it. Five stars." — RUNNER-UP: specific object, real
//      alien angle, tight; loses to the winner only because "snooze button"
//      is a slightly more familiar comedy object than the dishwasher, and
//      its punch is an observation rather than a human absurdity.
//  11. "Visited the blue planet. The natives spend eight hours a day
//      staring at a rectangle, then pay a stranger to tell them to go
//      outside. Three stars." — REJECTED: rectangle screen joke again,
//      modal.
//  12. "Lovely oceans, but the locals invented a doorbell that films you,
//      then ring it themselves to check it works. Four stars." — REJECTED:
//      funny, but the behaviour (testing your own doorbell) is a stretch;
//      fails C5's believability and the punch is thin.
//  13. "The locals built a box that washes their clothes, then stand in
//      front of it watching it spin for fun. I understand nothing. Five
//      stars." — REJECTED: watching the washing machine spin is charming
//      but the line ends on a shrug ("I understand nothing") instead of a
//      punch; fails C5.
//  14. "Earth: the dominant species queues for coffee, then drinks it
//      while walking, as if sitting down were illegal. Three stars, would
//      visit again." — REJECTED: queue + coffee, two of the field's most
//      common images; fails C3.
//
//   WINNER (123 chars, limit 200): "Three stars: the dominant species
//   invented a machine that washes dishes and still argues about whose turn
//   it is to load it."
//   Why it wins: the rating opens the line (C4 — it reads as a real review
//   from the first words), the alien's outside view is clear throughout
//   ("the dominant species", C1), and the laugh comes purely from the
//   alien angle on ordinary life — a species clever enough to automate
//   dishwashing, still arguing about loading the machine (C2). The
//   dishwasher is a concrete household object nobody else in the field is
//   likely to pick — not traffic, gravity, money or weather (C3) — and the
//   punch ("argues about whose turn it is to load it") lands on the last
//   words (C5). At 123 chars it is tight and wins the bytes tie-break.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Three stars: the dominant species invented a machine that washes dishes and still argues about whose turn it is to load it.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if (ENTRY.includes("\n")) {
  console.error("entry must be a single line");
  process.exit(1);
}
if (!ENTRY.endsWith(".")) {
  console.error("entry must end with a full stop");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
