import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'greenflag',
  category: 'fun',
  description: 'greenflag command',
  usage: 'greenflag',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('greenflag', ctx);
  }
};
