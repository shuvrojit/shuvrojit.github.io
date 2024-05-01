import { getMDXFileBySlug } from "@/lib/data";
import styles from "./blog-content.module.css";
import { join } from "path";
import { getMDXFiles } from "@/lib/data";

const blogDirectory = join(process.cwd(), "src/content");

export async function generateStaticParams() {
  const files = getMDXFiles(blogDirectory);
  const posts = files.map((file) => ({
    slug: file.replace(/\.mdx?$/, ""),
  }));

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const file = await getMDXFileBySlug(params.slug);

  return (
    <div className={styles.singlepost__container}>
      <h1>{file.metadata ? file.metadata.title : params.slug}</h1>
      <p>{params.slug}</p>
      <file.default />
    </div>
  );
};

export default SinglePostPage;
