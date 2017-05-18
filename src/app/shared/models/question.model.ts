export class QuestionModel {
  isPublic: boolean = null;
  isPublicResult: boolean = null;
  name: string = null;
  text: string = null;
  ttl: number = null;
  id: string = null;
  clientId: string = null;
  createdAt: string = null;
  updatedAt: string = null;
  questionTypeId: string = null;
  groupId: string = null;
  
  constructor(obj?) {
    for (let field in obj) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj[field];
      }
    }
  }
}