interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  group: string;
  category: string;
  imageUrl: string;
  group: string;
  link: {
    page: string;
    github?: string;
    npm?: string;
    web?: string;
  };
}
