import getNotes from './notes.js';
import chalk from 'chalk';

const msg = getNotes();
console.log(chalk.green(msg));