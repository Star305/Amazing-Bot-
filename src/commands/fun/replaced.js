import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'replaced',
  category: 'fun',
  description: 'replaced command',
  usage: 'replaced',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('replaced', ctx);
  }
};
