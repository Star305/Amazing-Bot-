import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'goodbye',
  category: 'fun',
  description: 'goodbye command',
  usage: 'goodbye',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('goodbye', ctx);
  }
};
