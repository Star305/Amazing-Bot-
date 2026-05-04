import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'aesthetic',
  category: 'fun',
  description: 'aesthetic command',
  usage: 'aesthetic',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('aesthetic', ctx);
  }
};
