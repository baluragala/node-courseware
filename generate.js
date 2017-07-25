#!/usr/bin/env node
let fs=require('fs');
let moduleName = process.argv[2];
fs.mkdir(moduleName,()=>{
	process.chdir(moduleName);
	console.log(process.cwd());
	fs.mkdir('code snippets',()=>{
	});
	fs.mkdir('exercises',()=>{
		process.chdir('exercises');
		fs.mkdir('problems',()=>{
		})
		fs.mkdir('solutions',()=>{
		})
	})
})