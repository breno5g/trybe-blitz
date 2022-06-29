const service = require('../../services/user.service');
const controller = require('../../controllers/user.controller');
const MyError = require('../../utils/error.class');
const {
  mockRequest,
  mockResponse,
  mockNext,
} = require('../mocks/express.mock');

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
        message: 'User created successfully',
      });
    });
  });
});

describe('Login controller tests', () => {
  describe('Fail case', () => {
    let req = mockRequest();
    let res = mockResponse();
    let next = mockNext();
    beforeAll(() => {
      service.login = jest.fn().mockImplementation(() => {
        throw new MyError(400, 'Incorrect email or password');
      });
    });

    afterAll(() => {
      service.login.mockReset();
    });

    test('Incorrect email or password', async () => {
      try {
        await controller.login(req, res, next);
      } catch (err) {
        expect(next).toHaveBeenCalledWith({
          status: 400,
          message: 'Incorrect email or password',
        });
      }
    });
  });
  describe('Success case', () => {
    let req = mockRequest();
    let res = mockResponse();
    let next = mockNext();
    beforeAll(() => {
      service.login = jest.fn().mockReturnValue({
        username: 'teste',
        email: 'teste@teste.com',
        token: 'fakeToken',
      });
    });

    afterAll(() => {
      service.login.mockReset();
    });

    test('Make login successfuly', async () => {
      await controller.login(req, res, next);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        username: 'teste',
        email: 'teste@teste.com',
        token: 'fakeToken',
      });
    });
  });
});
