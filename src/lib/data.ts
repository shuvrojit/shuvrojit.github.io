import fs from "fs";

export function getMDXFiles(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  const files = fs.readdirSync(dirPath);
  files.forEach((file, index) => {
    files[index] = file.replace(/\.mdx$/, "");
  });
  return files;
}

export async function getMDXFileBySlug(slug: string) {
  try {
    const mdxContent = await import(`@/content/${slug}.mdx`);
    return mdxContent;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching data:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
}
