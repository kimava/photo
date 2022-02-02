const path = require('path');
const fs = require('fs');

// get command line argument, which is directory name
const args = process.argv.slice(2);
const folderPath = `${args[0]}`;

// make directories
const folderNames = ['video', 'captured', 'duplicated'];

function makeDirectories(names) {
  names.map((name) => {
    const folderName = `${path.resolve(folderPath)}${path.sep}${name}`;

    try {
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
      }
    } catch (err) {
      console.error(err);
    }
  });
}

makeDirectories(folderNames);

// get a list of file names from the folder
const fileList = fs.readdirSync(folderPath);

// categorize the files
fileList.map((file) => {
  const ext = path.extname(file);
  switch (ext) {
    case '.mp4':
    case '.mov':
      moveFiles(file, 'video');
      break;
    case '.aae':
    case '.png':
      moveFiles(file, 'captured');
      break;
    case '.jpg':
      if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
        return;
      }
      const edited = `IMG_E${file.split('_')[1]}`;
      const duplicated = fileList.find((i) => i.includes(edited));
      if (duplicated) {
        const fileName = `IMG_${duplicated.split('E')[1]}`;
        moveFiles(fileName, 'duplicated');
      }
  }
});

// move files
function moveFiles(fileName, dirName) {
  const currentPath = path.join(path.resolve(folderPath), fileName);
  const newPath = path.join(path.resolve(folderPath), dirName, fileName);

  fs.rename(currentPath, newPath, function (err) {
    if (err) {
      throw err;
    }
  });
}
