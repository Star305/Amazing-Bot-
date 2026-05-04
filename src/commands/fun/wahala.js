import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'wahala',
  category: 'fun',
  description: 'wahala command',
  usage: 'wahala',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('wahala', ctx);
  }
};
