const { user } = require('../../database/models');
const service = require('../../services/task.service');
const dataMock = require('../mocks/data.mock');

describe('Get All tasks service tests', () => {
  beforeAll(() => {
    user.findAll = jest.fn().mockReturnValue(dataMock);
  });

  afterAll(() => {
    user.findAll.mockReset();
  });

  test('List with all tasks', async () => {
    const tasks = await service.getAll(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxMCwidXNlcm5hbWUiOiJ0ZXN0ZSIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tIn0sImlhdCI6MTY1NjMyODYyOSwiZXhwIjoxNjU2OTMzNDI5fQ.a0QMCCbl3aJYZykj4PLqjaihNT5dY4QZHVTZD6ELj1I'
    );
    expect(tasks).toEqual(dataMock);
  });
});
