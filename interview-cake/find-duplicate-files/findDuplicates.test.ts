import * as fs from 'fs';
import * as crypto from 'crypto';

import {
  findFiles,
  stats,
  hash,
  hashFilesContent,
  findDuplicates
} from './findDuplicates';

test('findFiles', () => {
  const fsMock = {
    readdirSync: jest.fn(() => ['bar.txt', 'foo.txt']),
    statSync: jest.fn(() => { // more test cases
      return {
        isDirectory: () => {
          return false;
        }
      }
    })
  }
  const given = findFiles(fsMock, '/tmp/files');
  const expected = ['/tmp/files/bar.txt', '/tmp/files/foo.txt'];
  expect(given).toEqual(expected);
});

test('stats', () => {
  const given = ['/tmp/files/foo.txt'];
  const expected = [
    { path: '/tmp/files/foo.txt', mtimeMs: 1538813048563.126 }
  ];
  const fsMock = {
    statSync: () => {
      return {
        mtimeMs: 1538813048563.126
      }
    }
  }
  expect(stats(fsMock, given)).toEqual(expected);
});

test('hash', () => {
  const crypto = {
    createHash: () => ({
      update: () => ({
        digest: () => 'hellohash'
      })
    })
  };
  expect(hash(crypto)('hello')).toBe('hellohash');
});

test('hashFilesContent', () => {
  const given = [
    { path: '/tmp/files/foo.txt', mtimeMs: 1538813048563.126 }
  ];
  const hash = () => () => '6f0378f21a495f5c13247317d158e9d51da45a5bf68fc2f366e450deafdc8302';
  const expected = [
    {
      path: '/tmp/files/foo.txt', mtimeMs: 1538813048563.126,
      hashed: '6f0378f21a495f5c13247317d158e9d51da45a5bf68fc2f366e450deafdc8302'
    }
  ]
  expect(hashFilesContent(fs, hash(crypto), given)).toEqual(expected);
});

// TODO: test findDuplicates
test('findDuplicates', () => {
  findDuplicates(fs)(crypto)('/tmp/files');
});
