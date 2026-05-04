import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'caption',
  category: 'fun',
  description: 'caption command',
  usage: 'caption',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('caption', ctx);
  }
};
