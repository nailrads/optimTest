const defaultTemplateFolder = 'pages';

const getPageComponent = (resolve: any, componentName:string) => {
  return resolve(__dirname, `${defaultTemplateFolder}/${componentName}/${componentName}.vue`)
};

const general = (resolve: any) => [
  {
    name: 'terms',
    path: '/terms',
    component: getPageComponent(resolve, 'Terms')
  },
  {
    name: 'privacy',
    path: '/privacy',
    component: getPageComponent(resolve, 'Privacy')
  }
];

export default general;
