export class AnswerModel {
  id: string = null;
  clientId: string = null;
  questionOptionId: string = null;
  createdAt: string = null;
  updatedAt: string = null;
  
  constructor(obj?) {
    for (let field in obj) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj[field];
      }
    }
  }
}