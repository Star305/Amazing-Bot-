import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'karma',
  category: 'fun',
  description: 'karma command',
  usage: 'karma',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('karma', ctx);
  }
};
