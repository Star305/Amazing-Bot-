import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'toxic',
  category: 'fun',
  description: 'toxic command',
  usage: 'toxic',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('toxic', ctx);
  }
};
