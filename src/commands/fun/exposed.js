import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'exposed',
  category: 'fun',
  description: 'exposed command',
  usage: 'exposed',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('exposed', ctx);
  }
};
