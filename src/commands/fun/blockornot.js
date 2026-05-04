import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'blockornot',
  category: 'fun',
  description: 'blockornot command',
  usage: 'blockornot',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('blockornot', ctx);
  }
};
