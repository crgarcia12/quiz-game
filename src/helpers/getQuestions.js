import promts from './promts';
const cohere = require('cohere-ai');
cohere.init(process.env.NEXT_PUBLIC_COHERE_API_KEY);

export default async function getQuestions(topicsArray, questionsNumber) {
	// let questions = [];
	// let topics = [];

	// for (let i = 0; i < questionsNumber; i++) {
	// 	topics.push(topicsArray[i % topicsArray.length]);
	// }

	// await Promise.all(topics.map(async (topic) => {
	// 	let response = await cohere.generate({
	// 		model: 'xlarge',
	// 		prompt: promts[topic],
	// 		max_tokens: 65,
	// 		temperature: 0.3,
	// 		k: 0,
	// 		p: 0.75,
	// 		stop_sequences: ["--"],
	// 		frequency_penalty: 0.9,
	// 		presence_penalty: 0.36,
	// 		stop_sequences: [],
	// 		return_likelihoods: 'NONE'
	// 	});
	// 	return response;

	// })).then((responses) => {
	// 	responses.forEach((response, i) => {
	// 		let res = response.body.generations[0].text;
	// 		questions.push({
	// 			topic: topics[i],
	// 			question: res.split('\n')[1].split('Question: ')[1],
	// 			answers: res.split('\n').slice(2, 6).map((answer) => answer.split('- ')[1]),
	// 			correctAnswer: res.split('\n')[6].split('Correct: ')[1],
	// 			userAnswer: 0
	// 		});
	// 	})
	// })

	const random = (arr) => {
		let newArr = arr;
		for (let i = newArr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[newArr[i], newArr[j]] = [newArr[j], newArr[i]];
		}
		return newArr;
	}

	// return questions.map((question) => {
	// 	return {
	// 		...question,
	// 		answers: random(question.answers)
	// 	}
	// });

	let res = [
		{
			topic: 'History',
			question: 'In what year did the battle of the ships of Tolosa take place?',
			answers: random(['1212', '1492', '1094', '1571']),
			correctAnswer: '1212',
			userAnswer: 0
		},
		{
			topic: 'Art',
			question: 'What is the verb in the following sentence: \"It was very cold yesterday\"?',
			answers: random(['Was', 'Very', 'Yesterday', 'Cold']),
			correctAnswer: 'Was',
			userAnswer: 0
		},
		{
			topic: 'Space',
			question: 'Which planet is the second closest to the sun?',
			answers: random(['Venus', 'Mercury', 'Mars', 'Jupiter']),
			correctAnswer: 'Venus',
			userAnswer: 0
		},
		{
			topic: 'Geography',
			question: 'What is the name of the French city where the treaty of Versailles was signed?',
			answers: random(['Paris', 'Versailles', 'Rome', 'London']),
			correctAnswer: 'Paris',
			userAnswer: 0
		},
		{
			topic: 'General culture',
			question: 'What is the name of the first computer?',
			answers: random(['Paris', 'Versailles', 'Rome', 'London']),
			correctAnswer: 'Paris',
			userAnswer: 0
		},
		{
			topic: 'General culture',
			question: 'What is the name of the first computer?',
			answers: random(['Paris', 'Versailles', 'Rome', 'London']),
			correctAnswer: 'Paris',
			userAnswer: 0
		},
		{
			topic: 'General culture',
			question: 'What is the name of the first computer?',
			answers: random(['Paris', 'Versailles', 'Rome', 'London']),
			correctAnswer: 'Paris',
			userAnswer: 0
		},
		{
			topic: 'General culture',
			question: 'What is the name of the first computer?',
			answers: random(['Paris', 'Versailles', 'Rome', 'London']),
			correctAnswer: 'Paris',
			userAnswer: 0
		},
		{
			topic: 'General culture',
			question: 'What is the name of the first computer?',
			answers: random(['Paris', 'Versailles', 'Rome', 'London']),
			correctAnswer: 'Paris',
			userAnswer: 0
		},
	]

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(res);
		}, 3000);
	});
}