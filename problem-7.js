const stringTransformer = str => {
  const allUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return str.split('').map(c => allUpperCase.indexOf(c) === -1 ? c.toUpperCase() : c.toLowerCase()).join('').split(' ').reverse().join(' ')
}
