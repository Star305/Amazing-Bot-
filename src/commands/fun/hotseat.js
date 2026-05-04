import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'hotseat',
  category: 'fun',
  description: 'hotseat command',
  usage: 'hotseat',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('hotseat', ctx);
  }
};
