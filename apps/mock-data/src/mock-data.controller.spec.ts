import { Test, TestingModule } from '@nestjs/testing';
import { MockDataController } from './mock-data.controller';
import { MockDataService } from './mock-data.service';

describe('MockDataController', () => {
  let mockDataController: MockDataController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MockDataController],
      providers: [MockDataService],
    }).compile();

    mockDataController = app.get<MockDataController>(MockDataController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(mockDataController.getHello()).toBe('Hello World!');
    });
  });
});
