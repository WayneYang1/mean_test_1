export class Question {
	constructor(
		public content: string = '',
		public description: string = '',
		public answer_count: number = 0,
		public answers: Array<any> = [],
		public _user: string = ''
		) {}
}
