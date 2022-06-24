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

describe('Login service test', () => {
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
  describe.only('Incorrect password', () => {
    beforeAll(() => {
      user.findOne = jest.fn().mockReturnValue({
        username: 'teste',
        email: 'teste@teste.com',
        password:
          '$2b$10$UvTADVQL4kYuI8Aikl6M6.ZEX3MZLaeCJWdWyYU49V2Ns0u0udtye',
      });
    });

    afterAll(() => {
      user.findOne.mockReset();
    });

    test('Incorrect password', async () => {
      try {
        await service.login({
          username: 'teste',
          email: 'teste@teste.com',
          password: 'senhaFeia',
        });
      } catch (error) {
        console.log(error);
        expect(error.message).toBe(`Incorrect email or password`);
      }
    });
  });
  // describe('Success case', () => {});
});
