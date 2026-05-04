import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'mood',
  category: 'fun',
  description: 'mood command',
  usage: 'mood',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('mood', ctx);
  }
};
