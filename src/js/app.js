/* eslint-disable no-console */
// TODO: write your code here
import ErrorRepository from './ErrorRepository';

const errorRepository = new ErrorRepository();

errorRepository.errors.set(0, 'Текст ошибки 0');
errorRepository.errors.set(1, 'Текст ошибки 1');

console.log(errorRepository.translate(0));
console.log(errorRepository.translate(1));
console.log(errorRepository.translate(2));
