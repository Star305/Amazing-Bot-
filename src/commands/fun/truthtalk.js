import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'truthtalk',
  category: 'fun',
  description: 'truthtalk command',
  usage: 'truthtalk',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('truthtalk', ctx);
  }
};
