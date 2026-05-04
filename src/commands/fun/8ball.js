import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: '8ball',
  category: 'fun',
  description: '8ball command',
  usage: '8ball',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('8ball', ctx);
  }
};
