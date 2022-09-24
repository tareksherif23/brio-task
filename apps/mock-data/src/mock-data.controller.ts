import { Controller } from '@nestjs/common';
import { MockDataService } from './mock-data.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Company, User } from './mock-data.repository';

@Controller()
export class MockDataController {
  constructor(private readonly mockDataService: MockDataService) {}

  @MessagePattern({cmd: 'get-company'})
  getCompany(@Payload() {companyId}): Company {
    const ret = this.mockDataService.getCompany(companyId);
    return ret;
  }

  @MessagePattern({cmd: 'get-user'})
  getUser(@Payload() {userId}): User {
    return this.mockDataService.getUser(userId);
  }

}
