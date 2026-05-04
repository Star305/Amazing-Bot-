import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'almost',
  category: 'fun',
  description: 'almost command',
  usage: 'almost',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('almost', ctx);
  }
};
