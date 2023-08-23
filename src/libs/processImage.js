export async function processImage(image) {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  return buffer;
}
