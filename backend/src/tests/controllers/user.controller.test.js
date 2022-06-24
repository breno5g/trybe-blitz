const service = require('../../services/user.service');
const controller = require('../../controllers/user.controller.');
const MyError = require('../../utils/error.class');
const { mockRequest, mockResponse, mockNext } = require('../mocks/reqRes.mock');

describe('Register controller tests', () => {
  describe('Fail case', () => {
    let req = mockRequest();
    let res = mockResponse();
    let next = mockNext();
    beforeAll(() => {
      service.create = jest.fn().mockImplementation(() => {
        throw new MyError(409, 'User already exists');
      });
    });

    afterAll(() => {
      service.create.mockReset();
    });

    test('User already exists', async () => {
      try {
        await controller.create(req, res, next);
      } catch (err) {
        expect(next).toHaveBeenCalledWith({
          status: 409,
          message: 'User already exists',
        });
      }
    });
  });
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

    test('user created successfully', async () => {
      await controller.create(req, res, next);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: 'user created successfully',
      });
    });
  });
});
