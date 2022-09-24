// Declaring mock data within the service, should come from a repository atop the DB layer !
export enum Channel {
  EMAIL = 'EMAIL',
  UI = 'UI',
}

export class User {
  id: string;
  companyId: string;
  channels: Channel[];
}

export class Company {
  id: string;
  employees: User[];
  channels: Channel[];
}

export const mockUserData: Record<string, any> = {
  empA1: { id: 'empA1', firstName:'Tarek', companyId: 'companyA', channels: [Channel.EMAIL] },
  empA2: { id: 'empA2', firstName:'Ronald', companyId: 'companyA', channels: [Channel.UI] },
  empA3: { id: 'empA3', firstName:'Draco', companyId: 'companyA', channels: [Channel.EMAIL, Channel.UI] },

  empB1: { id: 'empB1', firstName:'John', companyId: 'companyB', channels: [Channel.EMAIL] },
  empB2: { id: 'empB2', firstName:'Henry', companyId: 'companyB', channels: [] },
  empB3: { id: 'empB3', firstName:'Albus', companyId: 'companyB', channels: [Channel.EMAIL] },

  empC1: { id: 'empC1', firstName:'Darla', companyId: 'companyC', channels: [Channel.UI] },
  empC2: { id: 'empC2', firstName:'Tom', companyId: 'companyC', channels: [Channel.UI] },
  empC3: { id: 'empC3', firstName:'Jerry', companyId: 'companyC', channels: [] },
  empC4: { id: 'empC4', firstName:'Harry', companyId: 'companyC', channels: [] },
};

export const mockCompanyData: Record<string, any>= {
  companyA: {
    name: 'BrioHR',
    employees: [
      mockUserData['empA1'],
      mockUserData['empA2'],
      mockUserData['empA3'],
    ],
    channels: [Channel.EMAIL, Channel.UI],
  },

  companyB: {
    name: 'IBM',
    employees: [
      mockUserData['empB1'],
      mockUserData['empB2'],
      mockUserData['empB3'],
    ],
    channels: [Channel.EMAIL],
  },

  companyC: {
    name: 'Microsoft',
    employees: [
      mockUserData['empC1'],
      mockUserData['empC2'],
      mockUserData['empC3'],
      mockUserData['empC4'],
    ],
    channels: [Channel.UI],
  },
};
