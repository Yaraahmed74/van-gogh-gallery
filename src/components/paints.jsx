const wiki = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=800`;

export const paints = [
  {
    id: 1,
    name: "The Starry Night",
    description:
      "A swirling night sky over a quiet village, painted from memory during his stay at the Saint-Rémy asylum.",
    image: wiki("Van Gogh - Starry Night - Google Art Project.jpg"),
    date: "1889",
  },
  {
    id: 2,
    name: "Sunflowers",
    description:
      "One of his famous sunflower series, painted to decorate Gauguin's room in the Yellow House.",
    image: wiki("Vincent Willem van Gogh 127.jpg"),
    date: "1888",
  },
  {
    id: 3,
    name: "The Bedroom",
    description:
      "His bedroom in Arles, painted in flat, bright colors as a symbol of rest and peace.",
    image: wiki("Vincent van Gogh - De slaapkamer - Google Art Project.jpg"),
    date: "1888",
  },
  {
    id: 4,
    name: "Café Terrace at Night",
    description:
      "A glowing café terrace under a starry sky, the first painting where he used a starry night background.",
    image: wiki("Vincent Willem van Gogh - Cafe Terrace at Night (Yorck).jpg"),
    date: "1888",
  },
  {
    id: 6,
    name: "Wheatfield with Crows",
    description:
      "A stormy sky over a wheat field, often linked to the final weeks of his life.",
    image: wiki(
      "Vincent van Gogh - Wheatfield with crows - Google Art Project.jpg",
    ),
    date: "1890",
  },
  {
    id: 8,
    name: "Irises",
    description:
      "Painted in the asylum garden, a study of color and form influenced by Japanese prints.",
    image: wiki("Irises-Vincent van Gogh.jpg"),
    date: "1889",
  },
  {
    id: 9,
    name: "Starry Night Over the Rhône",
    description:
      "Gas lights reflecting on the river in Arles beneath the Great Bear constellation.",
    image: wiki("Starry Night Over the Rhone.jpg"),
    date: "1888",
  },
  {
    id: 11,
    name: "Portrait of Dr. Gachet",
    description:
      "The doctor who cared for him in Auvers-sur-Oise, shown in a pose of quiet melancholy.",
    image: wiki("Portrait of Dr. Gachet.jpg"),
    date: "1890",
  },
  {
    id: 12,
    name: "The Church at Auvers",
    description:
      "A twisting, almost alive church painted weeks before his death.",
    image: wiki(
      "Vincent van Gogh - The Church in Auvers-sur-Oise, View from the Chevet - Google Art Project.jpg",
    ),
    date: "1890",
  },
  {
    id: 13,
    name: "Self-Portrait",
    description:
      "One of his last self-portraits, with a background of swirling blue waves.",
    image: wiki("Vincent van Gogh - Self-Portrait - Google Art Project.jpg"),
    date: "1889",
  },
  {
    id: 14,
    name: "Wheat Field with Cypresses",
    description: "Golden wheat and dark cypresses moving under a restless sky.",
    image: wiki("Wheat-Field-with-Cypresses-(1889)-Vincent-van-Gogh-Met.jpg"),
    date: "1889",
  },
  {
    id: 18,
    name: "The Red Vineyard",
    description:
      "Vineyards glowing red and gold at sunset, often cited as the only painting he sold in his lifetime.",
    image: wiki("Red vineyards.jpg"),
    date: "1888",
  },
  {
    id: 23,
    name: "Olive Trees",
    description:
      "Twisting olive trees under a restless sky, part of a series painted around Saint-Rémy.",
    image: wiki("Vincent van Gogh - Olive Trees - Google Art Project.jpg"),
    date: "1889",
  },
];
