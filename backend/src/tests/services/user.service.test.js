const { user } = require('../../database/models');
const service = require('../../services/user.service');
// const jest = require("jest")

describe('Register service tests', () => {
  describe('Fail case', () => {
    beforeAll(() => {
      user.findOne = jest.fn().mockReturnValue({});
    });

    afterAll(() => {
      user.findOne.mockReset();
    });

    test('User already exists', async () => {
      try {
        await service.create({});
      } catch (error) {
        console.log(error.message);
        expect(error.message).toBe('User already exists');
      }
    });
  });

  describe('Success case', () => {
    beforeAll(() => {
      user.findOne = jest.fn().mockReturnValue();
      user.create = jest.fn();
    });

    afterAll(() => {
      user.findOne.mockReset();
      user.create.mockReset();
    });
    test('user created successfully', async () => {
      await service.create({
        password: 'senha',
      });
      expect(user.create).toHaveBeenCalled();
    });
  });
});

describe.only('Login service test', () => {
  describe('Incorrect email', () => {
    beforeAll(() => {
      user.findOne = jest.fn().mockReturnValue();
    });

    afterAll(() => {
      user.findOne.mockReset();
    });

    test('User email not exists', async () => {
      try {
        await service.login({
          email: 'teste@teste.com',
          password: 'nemtem',
        });
      } catch (err) {
        expect(err.message).toBe('Incorrect email or password');
      }
    });
  });
  describe('Incorrect password', () => {
    beforeAll(() => {
      user.findOne = jest.fn().mockReturnValue({
        email: 'teste@teste.com',
        password: 'teskajdlksaj',
      });
    });

    afterAll(() => {
      user.findOne.mockReset();
    });

    test('Incorrect password', async () => {
      try {
        await service.login();
      } catch (error) {
        expect(error.message).toBe(`Incorrect email or password`);
      }
    });
  });
  // describe('Success case', () => {});
});
