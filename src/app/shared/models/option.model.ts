export class OptionModel {
  id: string = null;
  text: string = null;
  questionId: string = null;
  
  constructor(obj?) {
    for (let field in obj) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj[field];
      }
    }
  }
}