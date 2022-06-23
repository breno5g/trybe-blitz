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