export class GroupModel {
  name: string = null;
  id: string = null;
  clientId: string = null;
  memberIds: string[] = [];
  
  constructor(obj?) {
    for (let field in obj) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj[field];
      }
    }
  }
}