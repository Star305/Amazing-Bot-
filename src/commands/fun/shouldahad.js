import { runRelationshipCommand } from './relationshipCore.js';

export default {
  name: 'shouldahad',
  category: 'fun',
  description: 'shouldahad command',
  usage: 'shouldahad',
  cooldown: 2,
  async execute(ctx) {
    return runRelationshipCommand('shouldahad', ctx);
  }
};
