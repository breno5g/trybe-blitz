const { user, task } = require('../../database/models');
const service = require('../../services/task.service');
const dataMock = require('../mocks/data.mock');

describe('Get All tasks - service test', () => {
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

describe('Create task - service test', () => {
  describe('Success case', () => {
    beforeAll(() => {
      task.create = jest.fn();
    });

    afterAll(() => {
      task.create.mockReset();
    });
    test('task created successfully', async () => {
      const mock = {
        title: 'Fiquei sem ideia',
        description: 'aqui também',
        userId: 3,
        status: 'done',
        createdAt: new Date(),
      };
      await service.create(mock);
      expect(task.create).toHaveBeenCalledWith(mock);
    });
  });
});

describe.only('Delete a task - service test', () => {
  describe('Success case', () => {
    beforeAll(() => {
      task.delete = jest.fn();
    });

    afterAll(() => {
      task.delete = jest.fn();
    });

    test('Can delete a task', async () => {
      await service.remove(1);
      expect(task.delete).toHaveBeenCalledWith(1);
    });
  });
});
