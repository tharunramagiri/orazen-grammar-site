/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // harper.js loads a WASM binary at runtime via a Web Worker; no special
  // webpack config needed since we use dynamic import() client-side only.
}

module.exports = nextConfig
