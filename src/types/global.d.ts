declare module "*.scss" {
  const styles: any;
  export = styles;
}

declare module "*.json" {
  const json: any;
  export = json;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "i18next-resource-store-loader*" {
  const contents: any;
  export = contents;
}
