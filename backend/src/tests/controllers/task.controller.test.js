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
      req.headers.authorization =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxMCwidXNlcm5hbWUiOiJ0ZXN0ZSIsImVtYWlsIjoidGVzdGVAdGVzdGUuY29tIn0sImlhdCI6MTY1NjMyODYyOSwiZXhwIjoxNjU2OTMzNDI5fQ.a0QMCCbl3aJYZykj4PLqjaihNT5dY4QZHVTZD6ELj1I';
    });

    afterAll(() => {
      service.getAll.mockReset();
      req.mockReset();
    });

    test('User already exists', async () => {
      await controller.getAll(req, res, next);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(dataMock);
    });
  });
});
