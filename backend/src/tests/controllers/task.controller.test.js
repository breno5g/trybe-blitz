const service = require('../../services/task.service');
const controller = require('../../controllers/task.controller');
const MyError = require('../../utils/error.class');

const {
  mockRequest,
  mockResponse,
  mockNext,
} = require('../mocks/express.mock');
const dataMock = require('../mocks/data.mock');

describe('Get all tasks - controller tests', () => {
  describe('Success', () => {
    let req = mockRequest();
    let res = mockResponse();
    let next = mockNext();
    beforeAll(() => {
      service.getAll = jest.fn().mockReturnValue(dataMock);
    });

    afterAll(() => {
      service.getAll.mockReset();
    });

    test('Success', async () => {
      await controller.getAll(req, res, next);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Create new task - controller test', () => {
  describe('Success case', () => {
    let req = mockRequest();
    let res = mockResponse();
    let next = mockNext();
    beforeAll(() => {
      service.create = jest.fn();
    });

    afterAll(() => {
      service.create.mockReset();
    });

    test('task created successfully', async () => {
      await controller.create(req, res, next);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: 'task created successfully',
      });
    });
  });
});

describe('Delete a task - controller test', () => {
  let req = mockRequest();
  let res = mockResponse();
  let next = mockNext();
  describe('Success case', () => {
    beforeAll(() => {
      service.remove = jest.fn();
      req.params.id = 1;
    });

    afterAll(() => {
      service.remove = jest.fn();
    });

    test('Can delete a task', async () => {
      await controller.remove(req, res, next);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Task have been deleted',
      });
    });
  });
});

describe('Edit a task - controller test', () => {
  describe('Fail case', () => {
    let req = mockRequest();
    let res = mockResponse();
    let next = mockNext();
    beforeAll(() => {
      service.update = jest.fn().mockImplementation(() => {
        throw new MyError(
          401,
          'You are not allowed to update tasks on other users'
        );
      });
      req.body = {
        userId: 10,
        title: 'teste',
        description: 'teste',
        status: 'pending',
      };
      req.headers.authorization =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6InRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20ifSwiaWF0IjoxNjU2NTA4ODM2LCJleHAiOjg2NTY1NjUwODgzNn0.gzgkC3DQUQFqgpsnPH_s12BNrvoBhcYlZ7MAnWd8Qio';
    });

    afterAll(() => {
      service.update = jest.fn();
    });

    test('Can update a task', async () => {
      try {
        await controller.update(req, res, next);
      } catch (error) {
        expect(next).toHaveBeenCalled();
      }
    });
  });

  describe('Success case', () => {
    let req = mockRequest();
    let res = mockResponse();
    let next = mockNext();
    const obj = {
      title: 'teste',
      description: 'teste',
      status: 'pending',
    };
    const id = 1;
    beforeAll(() => {
      service.update = jest.fn();
      req.body = {
        id,
        ...obj,
      };
    });

    afterAll(() => {
      service.update = jest.fn();
    });

    test('Can update a task', async () => {
      await controller.update(req, res, next);
      expect(res.status).toHaveBeenCalledWith(204);
    });
  });
});
