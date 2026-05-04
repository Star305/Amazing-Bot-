import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'advice',
  category: 'fun',
  description: 'advice command',
  usage: 'advice',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('advice', ctx);
  }
};
