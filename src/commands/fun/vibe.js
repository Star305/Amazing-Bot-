import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'vibe',
  category: 'fun',
  description: 'vibe command',
  usage: 'vibe',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('vibe', ctx);
  }
};
