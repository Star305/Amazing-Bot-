import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'motivate',
  category: 'fun',
  description: 'motivate command',
  usage: 'motivate',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('motivate', ctx);
  }
};
