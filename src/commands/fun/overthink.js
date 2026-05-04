import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'overthink',
  category: 'fun',
  description: 'overthink command',
  usage: 'overthink',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('overthink', ctx);
  }
};
