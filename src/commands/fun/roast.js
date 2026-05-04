import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'roast',
  category: 'fun',
  description: 'roast command',
  usage: 'roast',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('roast', ctx);
  }
};
