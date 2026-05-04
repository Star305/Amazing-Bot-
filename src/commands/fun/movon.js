import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'movon',
  category: 'fun',
  description: 'movon command',
  usage: 'movon',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('movon', ctx);
  }
};
