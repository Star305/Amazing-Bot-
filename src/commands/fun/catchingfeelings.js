import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'catchingfeelings',
  category: 'fun',
  description: 'catchingfeelings command',
  usage: 'catchingfeelings',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('catchingfeelings', ctx);
  }
};
