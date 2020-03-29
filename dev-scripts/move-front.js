const fs = require('fs-extra')

let be_folder_src = '../arch-back/src/public';
let be_folder_dist = '../arch-back/dist/public';
let fe_source_folder = './dist/architecture-front'

// Remove the old compiled FE
fs.emptyDirSync(be_folder_src);
fs.emptyDirSync(be_folder_dist);

// Move in the new compiled FE
fs.copySync(fe_source_folder, be_folder_src);
fs.copySync(fe_source_folder, be_folder_dist);

