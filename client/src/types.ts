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
  voteScore?: number;
  commentCount?: number;
  userVote?: number;
}

export interface User {
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Sub {
  createdAt: string;
  updated: string;
  name: string;
  title: string;
  descripttion: string;
  imageUrn: string;
  bannerUrn: string;
  username: string;
  posts: Post[];
  imageUrl: string;
  bannerUrl: string;
}
