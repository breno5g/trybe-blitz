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

describe('Delete a task - service test', () => {
  describe('Success case', () => {
    beforeAll(() => {
      task.destroy = jest.fn();
    });

    afterAll(() => {
      task.destroy = jest.fn();
    });

    test('Can delete a task', async () => {
      const mockId = 1;
      await service.remove(mockId);
      expect(task.destroy).toHaveBeenCalledWith({ where: { id: mockId } });
    });
  });
});

describe.only('Edit a task - service test', () => {
  describe('Success case', () => {
    beforeAll(() => {
      task.update = jest.fn();
    });

    afterAll(() => {
      task.update = jest.fn();
    });

    test('Can update a task', async () => {
      const userId = 1;
      const title = 'teste';
      const description = 'teste';
      const status = 'pending';
      await service.update();
      expect(task.update).toHaveBeenCalledWith(
        { title, description, status },
        {
          where: { userId },
        }
      );
    });
  });
});
