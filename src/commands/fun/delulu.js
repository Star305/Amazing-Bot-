import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'delulu',
  category: 'fun',
  description: 'delulu command',
  usage: 'delulu',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('delulu', ctx);
  }
};
