import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'whofirst',
  category: 'fun',
  description: 'whofirst command',
  usage: 'whofirst',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('whofirst', ctx);
  }
};
