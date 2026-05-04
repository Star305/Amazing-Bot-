import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'weekend',
  category: 'fun',
  description: 'weekend command',
  usage: 'weekend',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('weekend', ctx);
  }
};
