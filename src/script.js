// new TypeIt("#simpleUsage", {
//   strings: "This is a simple string.",
//   speed: 50,
//   waitUntilVisible: true
// }).go();

new TypeIt("#tagline", {
  speed: 80,
  waitUntilVisible: true
})
  .type("India's fastest growing <strong><em>knowledge network</em><strong>", {delay: 300})
  .go();