declare module "*.mp3" {
  const content: string;
  export default content;
}

declare module "*.wav" {
  const src: string;
  export default src;
}
