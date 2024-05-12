#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answers = await inquirer_1.default.prompt([
    {
        name: "Sentence",
        message: "ENTER YOUR SENTENCE TO COUNT WORDS:",
        type: "input"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`YOUR SENTENCE HAVE ${words.length} WORDS`);
