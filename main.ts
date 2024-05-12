#!/usr/bin/env node
import inquirer from "inquirer";


const answers:{  
    Sentence: string
}= await inquirer.prompt(
    [
        {
            name:"Sentence",
            message:"ENTER YOUR SENTENCE TO COUNT WORDS:",
            type:"input"
        }
    ]
);
const words=answers.Sentence.trim().split(" ")
console.log(words)
console.log(`YOUR SENTENCE HAVE ${words.length} WORDS`);
