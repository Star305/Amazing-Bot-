import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'heartbreak',
  category: 'fun',
  description: 'heartbreak command',
  usage: 'heartbreak',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('heartbreak', ctx);
  }
};
