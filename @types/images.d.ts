declare module "*.svg" { // make svg images work well
  const component: React.FC<React.SVGProps<SVGAElement>>;
  
  export default component;
}