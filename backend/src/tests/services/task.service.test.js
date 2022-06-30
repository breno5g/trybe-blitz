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
        userId: 1,
        status: 'done',
        createdAt: new Date(),
      };
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6InRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20ifSwiaWF0IjoxNjU2NTA4ODM2LCJleHAiOjg2NTY1NjUwODgzNn0.gzgkC3DQUQFqgpsnPH_s12BNrvoBhcYlZ7MAnWd8Qio';

      await service.create(mock, token);
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

describe('Edit a task - service test', () => {
  describe('Fail case', () => {
    beforeAll(() => {
      task.update = jest.fn();
      task.findOne = jest.fn().mockReturnValue({ userId: 2 });
    });

    afterAll(() => {
      task.update = jest.fn();
    });

    test('Can update a task', async () => {
      const id = 10;
      const title = 'teste';
      const description = 'teste';
      const status = 'pending';
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6InRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20ifSwiaWF0IjoxNjU2NTA4ODM2LCJleHAiOjg2NTY1NjUwODgzNn0.gzgkC3DQUQFqgpsnPH_s12BNrvoBhcYlZ7MAnWd8Qio';

      try {
        await service.update({ title, description, status, id }, token);
      } catch (error) {
        expect(error.message).toBe(
          'You are not allowed to update tasks on other users'
        );
      }
    });
  });

  describe('Success case', () => {
    beforeAll(() => {
      task.update = jest.fn();
      task.findOne = jest.fn().mockReturnValue({ userId: 1 });
    });

    afterAll(() => {
      task.update.mockReset();
      task.findOne.mockReset();
    });

    test('Can update a task', async () => {
      const id = 1;
      const title = 'teste';
      const description = 'teste';
      const status = 'pending';
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6InRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20ifSwiaWF0IjoxNjU2NTA4ODM2LCJleHAiOjg2NTY1NjUwODgzNn0.gzgkC3DQUQFqgpsnPH_s12BNrvoBhcYlZ7MAnWd8Qio';

      await service.update({ title, description, status, id }, token);
      expect(task.update).toHaveBeenCalledWith(
        { title, description, status },
        {
          where: { id },
        }
      );
    });
  });
});
