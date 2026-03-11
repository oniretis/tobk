export interface Post {
  title: string;
  slug: { current: string };
  name: string;
  publishedAt: string;
  excerpt: string;
  mainImage: any;
  author: Author;
  categories: Category[];
  body: any;
  date: string;
  link: string;
  galleryImage: any;
  productImage: any;
  partnersLogo: any;
  price: number;
  tags: Array<Tag>;
  _id: string;
  blog: any;
  store: any;
}

export interface Tag {
  name: string;
  date: string;
  link: string;
  slug: { current: string };
  _id: string;
  postCount?: number;
}

export interface Gallery {
  galleryImage: any;
  name: string;
  _id: string;
  slug: { current: string };
}

export interface Partners {
  partnersLogo: any;
  name: string;
  _id: string;
  slug: { current: string };
}

export interface Store {
  productImage: any;
  name: string;
  _id: string;
  slug: { current: string };
  price: number;
}

export interface Author {
  name: string;
  image: any;
}

export interface Category {
  title: string;
  slug: { current: string };
  _id: string;
}

export interface Blog {
  title: string;
  slug: { current: string };
  _id: string;
}
