import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'loverate',
  category: 'fun',
  description: 'loverate command',
  usage: 'loverate',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('loverate', ctx);
  }
};
