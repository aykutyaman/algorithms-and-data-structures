import * as fs from 'fs';

test('findDuplicates', () => {

  const directory = '/home/aykut';
  fs.stat(directory, (e, r) => {
    console.log(r);
  });

});
