import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'redflag',
  category: 'fun',
  description: 'redflag command',
  usage: 'redflag',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('redflag', ctx);
  }
};
