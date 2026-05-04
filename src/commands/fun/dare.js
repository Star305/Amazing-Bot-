import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'dare',
  category: 'fun',
  description: 'dare command',
  usage: 'dare',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('dare', ctx);
  }
};
