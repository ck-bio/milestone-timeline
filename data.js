const CONFIG = {
  theme:     "light",
  sortDesc:  false,
  font:      "Nunito",
  spine:     { color: "#464646", width: 0.5 },
  connector: { color: "#464646", width: 0.5 },
  card:      { background: "#faf9f1", borderColor: "#464646", borderWidth: 0.5 },
  textStyles: {
    year: { font: "Crimson Pro", size: 22, color: "#8f8f8f" },
    title: { font: "", size: 16, color: "#555555" },
    institution: { font: "", size: 11, color: "#555555" },
    link: { font: "", size: 10, color: "#555555" },
    description: { font: "", size: 12, color: "#555555" }
  },
  tagColors: {
    "Molecular Biology": "#cccccc",
    "Epigenetics": "#cccccc",
    "CRISPR": "#cccccc",
    "Microbiology": "#cccccc",
    "Neural Networks": "#cccccc",
    "Drug Discovery": "#cccccc",
    "scRNA-seq": "#cccccc",
    "Transcriptomics": "#cccccc",
    "Gut Biology": "#cccccc",
    "Multi-omics": "#cccccc",
    "Tumour Biology": "#cccccc",
    "Bioinformatics": "#cccccc",
    "Genomics": "#cccccc",
    "Python": "#cccccc",
    "Data Science": "#cccccc",
    "Machine Learning": "#cccccc",
    "Structural Biology": "#cccccc"
  },
  types: {
    degree: { label: "Degree", color: "#458981" },
    project: { label: "Project", color: "#53a8e1" },
    publication: { label: "Publication", color: "#b10707" }
  }
};

const DATA = [
  {
    year:  2016,
    month: "Jul",
    type:  "degree",
    title: "BSc",
    sub:   "University of Manchester",
    link:      "https://www.lipsum.com/feed/html",
    desc:  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante id erat porttitor suscipit. Nunc aliquet, justo nec eleifend facilisis, dui lacus aliquam eros, quis efficitur velit orci vitae ante. Curabitur feugiat diam tortor, ut auctor dui laoreet sed. Nam malesuada venenatis metus eget sagittis. Sed condimentum euismod nisl, ut porta augue cursus et. Cras dictum vehicula velit id pharetra. Praesent venenatis ante at diam pharetra tempus. Vestibulum non nisl sed nunc rutrum feugiat. Maecenas sed risus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et dui lacinia, dapibus sapien id, dictum massa. ",
    tags:  ["Molecular Biology", "Epigenetics"]
  }, 
  {
    year:  2017,
    month: "Jun",
    type:  "project",
    title: "Project #1",
    sub:   "Sanger Institute Summer Programme",
    desc:  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante id erat porttitor suscipit. Nunc aliquet, justo nec eleifend facilisis, dui lacus aliquam eros, quis efficitur velit orci vitae ante. Curabitur feugiat diam tortor, ut auctor dui laoreet sed. Nam malesuada venenatis metus eget sagittis. Sed condimentum euismod nisl, ut porta augue cursus et. Cras dictum vehicula velit id pharetra. Praesent venenatis ante at diam pharetra tempus. Vestibulum non nisl sed nunc rutrum feugiat. Maecenas sed risus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et dui lacinia, dapibus sapien id, dictum massa. ",
    tags:  ["CRISPR", "Microbiology"]
  }, 
  {
    year:  2019,
    month: "Sep",
    type:  "degree",
    title: "MSc",
    sub:   "University College London",
    desc:  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante id erat porttitor suscipit. Nunc aliquet, justo nec eleifend facilisis, dui lacus aliquam eros, quis efficitur velit orci vitae ante. Curabitur feugiat diam tortor, ut auctor dui laoreet sed. Nam malesuada venenatis metus eget sagittis. Sed condimentum euismod nisl, ut porta augue cursus et. Cras dictum vehicula velit id pharetra. Praesent venenatis ante at diam pharetra tempus. Vestibulum non nisl sed nunc rutrum feugiat. Maecenas sed risus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et dui lacinia, dapibus sapien id, dictum massa. ",
    tags:  ["Neural Networks", "Drug Discovery"]
  }, 
  {
    year:  2020,
    month: "Nov",
    type:  "publication",
    title: "Review",
    sub:   "Cell Systems",
    desc:  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante id erat porttitor suscipit. Nunc aliquet, justo nec eleifend facilisis, dui lacus aliquam eros, quis efficitur velit orci vitae ante. Curabitur feugiat diam tortor, ut auctor dui laoreet sed. Nam malesuada venenatis metus eget sagittis. Sed condimentum euismod nisl, ut porta augue cursus et. Cras dictum vehicula velit id pharetra. Praesent venenatis ante at diam pharetra tempus. Vestibulum non nisl sed nunc rutrum feugiat. Maecenas sed risus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et dui lacinia, dapibus sapien id, dictum massa. ",
    tags:  ["scRNA-seq", "Transcriptomics", "Gut Biology"]
  }, 
  {
    year:  2022,
    month: "Jun",
    type:  "degree",
    title: "PhD",
    sub:   "University of Cambridge",
    desc:  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante id erat porttitor suscipit. Nunc aliquet, justo nec eleifend facilisis, dui lacus aliquam eros, quis efficitur velit orci vitae ante. Curabitur feugiat diam tortor, ut auctor dui laoreet sed. Nam malesuada venenatis metus eget sagittis. Sed condimentum euismod nisl, ut porta augue cursus et. Cras dictum vehicula velit id pharetra. Praesent venenatis ante at diam pharetra tempus. Vestibulum non nisl sed nunc rutrum feugiat. Maecenas sed risus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et dui lacinia, dapibus sapien id, dictum massa. ",
    tags:  ["Multi-omics", "Tumour Biology", "Bioinformatics"]
  }, 
  {
    year:  2023,
    month: "Mar",
    type:  "project",
    title: "Project #2",
    sub:   "Wellcome Sanger Institute",
    desc:  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante id erat porttitor suscipit. Nunc aliquet, justo nec eleifend facilisis, dui lacus aliquam eros, quis efficitur velit orci vitae ante. Curabitur feugiat diam tortor, ut auctor dui laoreet sed. Nam malesuada venenatis metus eget sagittis. Sed condimentum euismod nisl, ut porta augue cursus et. Cras dictum vehicula velit id pharetra. Praesent venenatis ante at diam pharetra tempus. Vestibulum non nisl sed nunc rutrum feugiat. Maecenas sed risus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et dui lacinia, dapibus sapien id, dictum massa. ",
    tags:  ["Genomics", "Python", "Data Science"]
  }, 
  {
    year:  2024,
    month: "Sep",
    type:  "publication",
    title: "Article",
    sub:   "Nature Methods",
    desc:  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante id erat porttitor suscipit. Nunc aliquet, justo nec eleifend facilisis, dui lacus aliquam eros, quis efficitur velit orci vitae ante. Curabitur feugiat diam tortor, ut auctor dui laoreet sed. Nam malesuada venenatis metus eget sagittis. Sed condimentum euismod nisl, ut porta augue cursus et. Cras dictum vehicula velit id pharetra. Praesent venenatis ante at diam pharetra tempus. Vestibulum non nisl sed nunc rutrum feugiat. Maecenas sed risus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et dui lacinia, dapibus sapien id, dictum massa. ",
    tags:  ["Machine Learning", "Structural Biology"]
  } 
];