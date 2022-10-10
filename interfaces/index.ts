export type BlogFrontMatter = {
  title: string;
  description: string;
  date: string;
  exerpt: string;
  tags: string[];
};

export type BlogLayoutProps = {
  children: React.ReactNode;
  frontMatter: BlogFrontMatter;
  wordCount: number;
  readingTime: string;
};

export type BlogPostProps = {
  slug: string;
  siteTitle: string;
  frontMatter: BlogFrontMatter;
  markdownBody: any;
  wordCount: number;
  readingTime: string;
  params: any;
};

export type BlogPostsProps = {
  posts?: BlogPostProps[];
};

export interface BlogProps extends BlogPostsProps {
  title: string;
  description: string;
}


export type Theme = boolean;
export type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};
