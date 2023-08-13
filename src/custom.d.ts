// when import file which end with .css
declare module "*.css" {
    const css: { [key: string]: string };
    export default css;
}