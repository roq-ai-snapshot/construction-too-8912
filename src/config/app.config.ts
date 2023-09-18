interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef', 'Waiter'],
  tenantName: 'Organization',
  applicationName: 'Construction tool rental v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View tools', 'Request tool rental', 'View rental request status', 'View personal information'],
  ownerAbilities: ['Manage users', 'Manage organizations', 'Manage tools', 'Manage rental requests'],
  getQuoteUrl: 'https://app.roq.ai/proposal/49c12f4c-2d4c-427f-b488-9180a4d0ef0e',
};
