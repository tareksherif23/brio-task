import { Injectable } from '@nestjs/common';
import { Company, mockCompanyData, mockUserData, User} from './mock-data.repository'

@Injectable()
export class MockDataService {

  getCompany(companyId: string): Company {
    return mockCompanyData[companyId];
  }

  getUser(userId: string): User {
    return mockUserData[userId];
  }
}
