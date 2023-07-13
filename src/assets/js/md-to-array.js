import md from 'markdown-it';
import question_data from '../data/question_data.md';
import mbti_data from '../data/mbti_data.md';

function mdToArray(mdFile){
    md().render(mdFile);
    return mdFile.trim().split('\n');
}

// Import a Question data and Create Questions Array to make Input object with questions's length
export const questions = mdToArray(question_data);

export const mbtis = mdToArray(mbti_data);