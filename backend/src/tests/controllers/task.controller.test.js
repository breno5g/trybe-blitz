const service = require('../../services/task.service');
const controller = require('../../controllers/task.controller');
// const MyError = require('../../utils/error.class');
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
      expect(res.json).toHaveBeenCalledWith({ data: dataMock });
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
