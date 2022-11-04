export async function fetchBlog(id: { id: string }) {
  return blogs.find((blog) => blog.id === id.id);
}

export async function fetchAvatar() {
  await delay();
  return "/bluepnwage.jpg";
}

async function delay() {
  await new Promise((resolve) => setTimeout(resolve, 1000 * 3));
}

const blogs = [
  {
    id: "1",
    title: "Eiusmod commodo officia ullamco elit cupidatat est irure.",
    text: "Do sit mollit consequat sint. Culpa quis elit amet commodo ullamco aute ut do. Et velit eiusmod consequat consequat ut. Laboris ex nulla occaecat et ipsum aliqua sit consectetur commodo incididunt amet. Cillum eu consectetur exercitation sunt qui ipsum deserunt fugiat sint minim reprehenderit. Nulla in aute proident sint incididunt quis laboris. Fugiat consectetur mollit dolor Lorem esse."
  },
  {
    id: "2",
    title: "Occaecat consequat cupidatat ullamco dolore.",
    text: "Nisi eiusmod irure incididunt nisi duis nisi ut nisi do ex. Elit reprehenderit quis ex occaecat enim. Aliquip dolor in laboris ea aliquip enim occaecat culpa deserunt aliquip ut sunt culpa nulla. Eu ipsum esse velit dolor irure ex proident aute Lorem nostrud magna. Adipisicing quis dolore nisi est velit.Aliquip enim mollit occaecat duis."
  },
  {
    id: "3",
    title: "Commodo in consequat velit est Lorem.",
    text: "Ullamco laboris laborum irure proident labore nulla id. Sint anim ad quis id nisi. Adipisicing dolor adipisicing excepteur nulla duis voluptate. Nostrud dolor cupidatat nisi dolor nostrud excepteur tempor cillum. Sint non sint ad incididunt ea ad irure quis dolor ipsum elit proident qui. Magna duis ut consectetur consequat dolore sit ex tempor ut laborum eu culpa consectetur cupidatat."
  }
];
