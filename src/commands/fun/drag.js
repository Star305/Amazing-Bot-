import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'drag',
  category: 'fun',
  description: 'drag command',
  usage: 'drag',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('drag', ctx);
  }
};
