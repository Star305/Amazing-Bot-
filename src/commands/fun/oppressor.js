import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'oppressor',
  category: 'fun',
  description: 'oppressor command',
  usage: 'oppressor',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('oppressor', ctx);
  }
};
