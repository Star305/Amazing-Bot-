import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'healing',
  category: 'fun',
  description: 'healing command',
  usage: 'healing',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('healing', ctx);
  }
};
