import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'textorleave',
  category: 'fun',
  description: 'textorleave command',
  usage: 'textorleave',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('textorleave', ctx);
  }
};
