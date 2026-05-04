import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'unread',
  category: 'fun',
  description: 'unread command',
  usage: 'unread',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('unread', ctx);
  }
};
