export interface Post {
  identifier: string;
  title: string;
  body?: string;
  slug: string;
  subName: string;
  createdAt: string;
  updatedAd: string;

  //virtual fields
  url: string;
  username: string;
}
