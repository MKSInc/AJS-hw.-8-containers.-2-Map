import ErrorRepository from '../ErrorRepository';

const errorRepository = new ErrorRepository();

errorRepository.errors.set(0, 'Текст ошибки 0');

test('The errorRepository.translate() method should return the error text', () => {
  expect(errorRepository.translate(0)).toBe('Текст ошибки 0');
});

test('the errorRepository.translate () method should return the string \'Unknown error\' if there is no error with this code', () => {
  expect(errorRepository.translate(1000)).toBe('Unknown error');
});
