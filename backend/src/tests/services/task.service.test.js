const { user } = require('../../database/models');
const service = require('../../services/user.service');
const dataMock = require('../mocks/data.mock');
// const jest = require("jest")
const mockData = require('../mocks/data.mock');

describe('Get All tasks service tests', () => {
  beforeAll(() => {
    user.findAll = jest.fn().mockReturnValue(dataMock);
  });

  afterAll(() => {
    user.findAll.mockReset();
  });

  test('List with all tasks', async () => {
    const tasks = await service.getAll(1);
    expect(tasks).toEqual(dataMock);
  });
});
