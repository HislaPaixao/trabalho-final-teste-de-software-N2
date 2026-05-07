const { tituloValido } = require('../validators/tarefaValidator');

describe('Validacao de titulo da tarefa', () => {
  test('deve retornar true para titulo valido', () => {
    expect(tituloValido('Estudar Jest')).toBe(true);
  });

  test('deve retornar false para string vazia', () => {
    expect(tituloValido('')).toBe(false);
  });

  test('deve retornar false para titulo com apenas espacos', () => {
    expect(tituloValido('   ')).toBe(false);
  });

  test('deve retornar false para undefined', () => {
    expect(tituloValido(undefined)).toBe(false);
  });

  test('deve retornar false para null', () => {
    expect(tituloValido(null)).toBe(false);
  });

  test('deve retornar false para numero', () => {
    expect(tituloValido(123)).toBe(false);
  });
});
