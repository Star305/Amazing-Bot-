import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'crushmeter',
  category: 'fun',
  description: 'crushmeter command',
  usage: 'crushmeter',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('crushmeter', ctx);
  }
};
