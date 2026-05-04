import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'ifoundout',
  category: 'fun',
  description: 'ifoundout command',
  usage: 'ifoundout',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('ifoundout', ctx);
  }
};
