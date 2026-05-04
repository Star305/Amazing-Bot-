import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'simpcheck',
  category: 'fun',
  description: 'simpcheck command',
  usage: 'simpcheck',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('simpcheck', ctx);
  }
};
