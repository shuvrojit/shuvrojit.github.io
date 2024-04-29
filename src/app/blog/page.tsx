import { getMDXFileBySlug, getMDXFiles } from "@/lib/data";
import styles from "./blog.module.css";
import Link from "next/link";
import { join } from "path";

const blogDirectory = join(process.cwd(), "src/content");

const Blog = async () => {
  const files = getMDXFiles(blogDirectory);

  return (
    <div className={styles.blog__container}>
      <h1>Latest Posts</h1>

      {files.length > 0
        ? files.map(async (file) => {
            const data = await getMDXFileBySlug(file);
            return (
              <div>
                <Link href={`/blog/${file.replace(".mdx", "")}`}>
                  <li>{data.metadata ? data.metadata.title : file}</li>
                </Link>
              </div>
            );
          })
        : `No posts found`}
    </div>
  );
};

export default Blog;
