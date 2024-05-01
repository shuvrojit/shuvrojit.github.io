/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  basePath: "",
  output: "export",
  images: {
  unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
