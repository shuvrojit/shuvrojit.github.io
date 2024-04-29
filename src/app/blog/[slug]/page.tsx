import { getMDXFileBySlug } from "@/lib/data";
import styles from "./blog-content.module.css";

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
