import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'drazzmab',
  category: 'fun',
  description: 'drazzmab command',
  usage: 'drazzmab',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('drazzmab', ctx);
  }
};
