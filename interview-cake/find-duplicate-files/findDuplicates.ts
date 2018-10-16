interface IFile {
  path: string,
  mtimeMs: number
}

const isDirectory = (fs, path) => {
  return fs.statSync(path).isDirectory();
}
const path = (dir, file) => dir + '/' + file;

const findFiles = (fs, dir) => (
  fs.readdirSync(dir).reduce((files, file) => {
    return isDirectory(fs, path(dir, file))
      ? [...files, ...findFiles(fs, path(dir, file))]
      : [...files, path(dir, file)];
  }, [])
)

const stats = (fs, files) => (
  files.map(file => ({
    path: file,
    mtimeMs: fs.statSync(file).mtimeMs
  }))
)

const hash = (crypto) => (content) => (
  crypto.createHash('sha256').update(content).digest('hex')
)

const hashFilesContent = (fs, hash, files) => {
  return files.map(file => {
    let content = fs.readFileSync(file.path, 'utf-8');
    return {
      ...file,
      hashed: hash(content)
    }
  });
}

const getDuplicateFirst = (file1, file2) => (
  file1.mtimeMs > file2.mtimeMs
    ? [file1.path, file2.path] // file1 is newer
    : [file2.path, file1.path] // file2 is newer
)

const duplicateReducer = (map) => (acc, current) => (
  (map.has(current.hashed) // duplicate found
    ? acc.push(getDuplicateFirst(map.get(current.hashed), current)) // save duplicate
    : map.set(current.hashed, current)) && acc // save new file
)

const findDuplicates = fs => crypto => dir => {
  // TODO: here we can use a compose function
  const files = hashFilesContent(fs, hash(crypto), stats(fs, findFiles(fs, dir)));
  return files.reduce(duplicateReducer(new Map()), []);
}

export {
  findFiles,
  stats,
  hash,
  hashFilesContent,
  findDuplicates
}
