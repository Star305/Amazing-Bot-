import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'letters',
  category: 'fun',
  description: 'letters command',
  usage: 'letters',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('letters', ctx);
  }
};
