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
