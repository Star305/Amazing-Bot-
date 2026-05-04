import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'ship',
  category: 'fun',
  description: 'ship command',
  usage: 'ship',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('ship', ctx);
  }
};
